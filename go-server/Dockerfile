FROM golang:1.24-alpine

RUN apk add --no-cache git

EXPOSE 4444

WORKDIR /code

RUN go install github.com/air-verse/air@latest

COPY go.sum .air.toml go.mod /code

RUN go mod download

RUN go mod tidy

ENTRYPOINT ["./entrypoint.sh"]
