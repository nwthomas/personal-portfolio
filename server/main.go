package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

type Email struct {
	Name string `json:"name"`
	Email string `json:"email"`
	Subject string `json:"subject"`
	Message string `json:"message"`
	// Fax is the honeypot field; if present, do not send on to email
	Fax string `json:"fax,omitempty"`
}

func sendEmail(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	var email Email
	_ = json.NewDecoder(r.Body).Decode(&email)

	json.NewEncoder(w).Encode("test")
}

func main() {
	err := godotenv.Load()
	if err != nil {
	  log.Fatal("Error loading .env file")
	}

	port := os.Getenv("PORT")

	r := mux.NewRouter()

	r.HandleFunc("/api/send-email", sendEmail).Methods("POST")

	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", port), r))
}