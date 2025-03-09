package main

import (
	"go-server/dao/query"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func InitDB() (*gorm.DB, error) {
	dsn := "host=db user=root password=root dbname=foo port=5432 sslmode=disable"
	return gorm.Open(postgres.Open(dsn), &gorm.Config{})
}

func InitQuery(db *gorm.DB) *query.Query {
	return query.Use(db)
}
