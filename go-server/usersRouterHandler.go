package main

import (
	"encoding/json"
	"go-server/dao/model"
	"go-server/dao/query"
	"net/http"
	"strings"
)

// UserHandlers bundles all user-related HTTP handlers
type UserHandlers struct {
	q *query.Query
}

// NewUserHandlers creates a new instance of UserHandlers
func NewUserHandlers(q *query.Query) *UserHandlers {
	return &UserHandlers{q: q}
}

// RegisterRoutes registers all user routes to the given mux
func (h *UserHandlers) RegisterRoutes(mux *http.ServeMux) {
	// The standard library's ServeMux doesn't support method-specific routing,
	// so we'll need to handle method differentiation in our handlers
	mux.HandleFunc("/users", http.HandlerFunc(h.handleUsers))
	mux.HandleFunc("/user/", http.HandlerFunc(h.handleUserWithID))
}

// handleUsers handles the /users endpoint
func (h *UserHandlers) handleUsers(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodGet:
		h.getUsers(w, r)
	case http.MethodPost:
		h.createUser(w, r)
	default:
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
	}
}

// handleUserWithID handles the /users/{id} endpoint
func (h *UserHandlers) handleUserWithID(w http.ResponseWriter, r *http.Request) {
	// Extract ID from path
	path := r.URL.Path
	pathParts := strings.Split(path, "/")
	if len(pathParts) != 3 {
		http.Error(w, "Invalid path", http.StatusBadRequest)
		return
	}
	id := pathParts[2]

	println("retrieving user with id", id)

	switch r.Method {
	case http.MethodGet:
		h.getUser(w, r, id)
	case http.MethodPut:
		h.updateUser(w, r, id)
	case http.MethodDelete:
		h.deleteUser(w, r, id)
	default:
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
	}
}

// getUsers returns all users
func (h *UserHandlers) getUsers(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	users, err := h.q.User.WithContext(ctx).Find()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(users)
}

// getUser returns a single user by ID
func (h *UserHandlers) getUser(w http.ResponseWriter, r *http.Request, id string) {
	ctx := r.Context()

	userDo := h.q.User.WithContext(ctx)

	user, err := userDo.WithContext(ctx).Where(h.q.User.Email.Eq(id)).First()

	if err != nil {
		http.Error(w, "User not found", http.StatusNotFound)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(user)
}

// createUser creates a new user
func (h *UserHandlers) createUser(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	var user model.User

	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	err = h.q.User.WithContext(ctx).Create(&user)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(user)
}

// updateUser updates an existing user
func (h *UserHandlers) updateUser(w http.ResponseWriter, r *http.Request, id string) {
	ctx := r.Context()

	var userData model.User
	err := json.NewDecoder(r.Body).Decode(&userData)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	userDo := h.q.User.WithContext(ctx)
	_, err = userDo.Where(h.q.User.Email.Eq(id)).Updates(userData)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Get updated user
	user, err := userDo.Where(h.q.User.Email.Eq(id)).First()
	if err != nil {
		http.Error(w, "Failed to retrieve updated user", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(user)
}

// deleteUser deletes a user
func (h *UserHandlers) deleteUser(w http.ResponseWriter, r *http.Request, id string) {
	ctx := r.Context()

	userDo := h.q.User.WithContext(ctx)
	_, err := userDo.Where(h.q.User.Email.Eq(id)).Delete()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusNoContent)
}
