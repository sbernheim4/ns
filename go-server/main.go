package main

import (
	"context"
	"errors"
	"fmt"
	"go-server/dao/model"
	"go-server/dao/query"
	"io"
	"log"
	"net"
	"net/http"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/", getRoot)
	mux.HandleFunc("/hello", getHello)
	ctx, cancelCtx := context.WithCancel(context.Background())

	serverOne := &http.Server{
		Addr:    ":4444",
		Handler: mux,
		BaseContext: func(l net.Listener) context.Context {
			ctx = context.WithValue(ctx, keyServerAddr, l.Addr().String())
			return ctx
		},
	}

	err := serverOne.ListenAndServe()
	if errors.Is(err, http.ErrServerClosed) {
		fmt.Printf("server one closed\n")
	} else if err != nil {
		fmt.Printf("error listening for server one: %s\n", err)
	}

	cancelCtx()
	<-ctx.Done()

}

const keyServerAddr = "serverAddr"

func getRoot(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()

	body, err := io.ReadAll(r.Body)
	if err != nil {
		fmt.Printf("could not read body: %s\n", err)
	}

	hasFirst := r.URL.Query().Has("first")
	first := r.URL.Query().Get("first")
	hasSecond := r.URL.Query().Has("second")
	second := r.URL.Query().Get("second")

	fmt.Printf("%s:-- got / request. first(%t)=%s, second(%t)=%s\nbody:\n%s\n",
		ctx.Value(keyServerAddr),
		hasFirst, first,
		hasSecond, second, body)

	io.WriteString(w, "This is my website!\n")
}
func getHello(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()

	fmt.Printf("%s: got /hello request\n", ctx.Value(keyServerAddr))

	x, _ := getFoo()
	println(x)

	io.WriteString(w, "Hello, HTTP!\n")
}

func getFoo() (*model.User, error) {
	dsn := "host=db user=root password=root dbname=foo port=5432 sslmode=disable"

	println("---------dsn---")
	println(dsn)

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("failed to connect to the database: %v", err)
	}

	q := query.Use(db)
	user, err := q.User.WithContext(context.Background()).First()

	if err := db.Find(&user).Error; err != nil {
		log.Fatalf("failed to fetch users: %v", err)
	}

	fmt.Printf("Email: %s, Name: %s, CreatedAt: %s\n", user.Email, user.Name, user.CreatedAt)

	return user, nil

}
