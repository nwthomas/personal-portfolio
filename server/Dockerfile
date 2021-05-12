FROM golang:1.13-alpine as builder

RUN addgroup app && adduser -S -G app app
USER app

WORKDIR /build

COPY go.mod go.sum ./

RUN go mod download

ARG project
RUN GOOS=linux CGO_ENABLED=0 GOARCH=amd64 go build -a -v -o server $project

FROM busybox:latest

WORKDIR /dist

COPY --from=builder /build/server .

CMD ["./server"]