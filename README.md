# Welcome

This repo provides the following tools:

- A PostgreSQL DB
- An automatic GraphQL API derived from the PostgreSQL DB
- Generated React Hooks derived from GQL Queries
- Python Backend
- Remix Front End
- Adminer DB Management Portal for DB
- Flyway for DB migrations

## Getting Started

In one terminal tab:

`docker-compose up`

If this is the first time running you may see a couple of errors

### Possible Errors

Below are common errors you may encounter when first getting started

#### Setting up the Database
When first getting started you will need to create the database

Find the container ID for the container running the PostgreSQL DB and run:

`docker exec -it <container_id> bash`

In the shell connect to the database:

`psql -U root -d postgres`

Create the database using the name you picked and specified in the .env file:

`CREATE DATABASE <database_name>`

Once the database has been created stop and restart the containers.

#### `cross-env` Package

If the `client` container complains about the package `cross-env`, stop and
restart the containers and it should work the second time.

Once that is up and running in another terminal tab run:

`cd client && npm i && npm run gen:dev`

## Client Application
[Client Application](http://localhost:3000)

## Python Server
[Python server](http://localhost:80)

## GraphiQL Playground
[GraphiQL Playgorund URL](http://localhost:5678)

## Adminer BD Portal
[Adminer Portal](http://localhost:8080/)

## Direct DB Access
`./bin/connect-to-db.sh`

