source .env
docker exec -it notification-service-db-1 psql -U root -d ${POSTGRES_DB}

