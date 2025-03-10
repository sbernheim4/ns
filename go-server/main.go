package main

import (
	"context"
	"errors"
	"fmt"
	"io"
	"log"
	"net"
	"net/http"
)

const keyServerAddr = "serverAddr"

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/", getHello)

	ctx, cancelCtx := context.WithCancel(context.Background())

	serverOne := &http.Server{
		Addr:    ":4444",
		Handler: mux,
		BaseContext: func(l net.Listener) context.Context {
			ctx = context.WithValue(ctx, keyServerAddr, l.Addr().String())
			return ctx
		},
	}

	db, err := InitDB()

	if err != nil {
		log.Fatalf("failed to connect to the database: %v", err)
	}

	q := InitQuery(db)

	alertsHandler := NewAlertsHandler(q)
	alertsHandler.RegisterRoutes(mux)

	serverOne.ListenAndServe()

	if errors.Is(err, http.ErrServerClosed) {
		fmt.Printf("server one closed\n")
	} else if err != nil {
		fmt.Printf("error listening for server one: %s\n", err)
	}

	cancelCtx()

}

func getHello(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	fmt.Printf("%s: got /hello request\n", ctx.Value(keyServerAddr))
	io.WriteString(w, "Hello, HTTP!\n")
}
