package main

import (
	"encoding/json"
	"go-server/dao/model"
	"go-server/dao/query"
	"net/http"
	"strconv"
	"strings"
)

// AlertsHandlers bundles all alert-related HTTP handlers
type AlertsHandlers struct {
	q *query.Query
}

// NewAlertsHandler creates a new instance of AlertHandlers
func NewAlertsHandler(q *query.Query) *AlertsHandlers {
	return &AlertsHandlers{q: q}
}

// RegisterRoutes registers all alert routes to the given mux
func (h *AlertsHandlers) RegisterRoutes(mux *http.ServeMux) {
	// The standard library's ServeMux doesn't support method-specific routing,
	// so we'll need to handle method differentiation in our handlers
	mux.HandleFunc("/alerts", http.HandlerFunc(h.handleAlerts))
	mux.HandleFunc("/alert/", http.HandlerFunc(h.handleAlertWithID))
}

// handleAlerts handles the /alert endpoint
func (h *AlertsHandlers) handleAlerts(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodGet:
		h.getAlerts(w, r)
	case http.MethodPost:
		h.createAlerts(w, r)
	default:
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
	}
}

// handleAlertWithID handles the /alert/{id} endpoint
func (h *AlertsHandlers) handleAlertWithID(w http.ResponseWriter, r *http.Request) {
	// Extract ID from path
	path := r.URL.Path
	pathParts := strings.Split(path, "/")
	if len(pathParts) != 3 {
		http.Error(w, "Invalid path", http.StatusBadRequest)
		return
	}
	id := pathParts[2]

	idAsInt, err := strconv.ParseInt(id, 10, 32)
	if err != nil {
		return
	}

	x := int32(idAsInt)

	println("retrieving alert with id", id)

	switch r.Method {
	case http.MethodGet:
		h.getAlert(w, r, x)
	case http.MethodPut:
		h.updateAlert(w, r, x)
	case http.MethodDelete:
		h.deleteAlert(w, r, x)
	default:
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
	}
}

// getAlerts returns all alerts
func (h *AlertsHandlers) getAlerts(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	alerts, err := h.q.Alert.WithContext(ctx).Find()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(alerts)
}

// getAlert returns a single alert by ID
func (h *AlertsHandlers) getAlert(w http.ResponseWriter, r *http.Request, id int32) {
	ctx := r.Context()

	alertDo := h.q.Alert.WithContext(ctx)

	alert, err := alertDo.WithContext(ctx).Where(h.q.Alert.ID.Eq(id)).First()

	if err != nil {
		http.Error(w, "Alert not found", http.StatusNotFound)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(alert)
}

// createAlerts creates a new alert
func (h *AlertsHandlers) createAlerts(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	var alertsToCreate []model.Alert

	err := json.NewDecoder(r.Body).Decode(&alertsToCreate)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	var alertPtrs []*model.Alert
	for i := range alertsToCreate {
		alertPtrs = append(alertPtrs, &alertsToCreate[i])
	}
	err = h.q.Alert.WithContext(ctx).CreateInBatches(alertPtrs, len(alertsToCreate))

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(alertsToCreate)
}

// updateAlert updates an existing alert
func (h *AlertsHandlers) updateAlert(w http.ResponseWriter, r *http.Request, id int32) {
	ctx := r.Context()

	var alertData model.Alert
	err := json.NewDecoder(r.Body).Decode(&alertData)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	userDo := h.q.Alert.WithContext(ctx)
	_, err = userDo.Where(h.q.Alert.ID.Eq(id)).Updates(alertData)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Get updated user
	user, err := userDo.Where(h.q.Alert.ID.Eq(id)).First()
	if err != nil {
		http.Error(w, "Failed to retrieve updated user", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(user)
}

// deleteAlert deletes an alert
func (h *AlertsHandlers) deleteAlert(w http.ResponseWriter, r *http.Request, id int32) {
	ctx := r.Context()

	alertDo := h.q.Alert.WithContext(ctx)
	_, err := alertDo.Where(h.q.Alert.ID.Eq(id)).Delete()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusNoContent)
}
