package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	// This autoloads in the environment variables from a local .env file
	_ "github.com/joho/godotenv/autoload"
)


type Response struct {
	Success 	bool `json:"success"`
	Message 	*Message `json:"message"`
}

type Message struct {
	StatusCode 	int `json:"status_code"`
	Content 	string `json:"content"`
	Error 		bool `json:"error"`
}

type ReceivedEmail struct {
	Name 		string `json:"name"`
	Email 		string `json:"email"`
	Subject 	string `json:"subject"`
	Message 	string `json:"message"`
	// Fax is the honeypot field; if present, do not send on to email
	Fax 		string `json:"fax,omitempty"`
}

type SentEmail struct {
	From 		string `json:"from"`
	To			string `json:"to"`
	Subject		string `json:"subject"`
	Text		string `json:"text"`
}

func sendEmail(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	var email ReceivedEmail
	_ = json.NewDecoder(r.Body).Decode(&email)

	if len(email.Fax) > 0 {
		r := &Response{ Success: false, Message: &Message{ StatusCode: 404, Content: "Please try again", Error: true }}
		json.NewEncoder(w).Encode(r)
	} else {
		r := &Response{ Success: true, Message: &Message{ StatusCode: 201, Content: "Email sent successfully", Error: false } }
		json.NewEncoder(w).Encode(r)
	}

}

func main() {
	r := mux.NewRouter()
	
	r.HandleFunc("/api/send-email", sendEmail).Methods("POST")
	
	port := os.Getenv("PORT")
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", port), r))
}