FROM golang:1.12-alpine as build-stage

RUN addgroup app && adduser -S -G app app

RUN apk add --no-cache git

WORKDIR /app

COPY go.* .

RUN go mod download

COPY . .

RUN go build -o ./out/personal-portfolio .

EXPOSE 5000

CMD ./out/personal-portfolio