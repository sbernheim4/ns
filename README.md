# Getting Started

In one terminal tab:

`docker-compose up`

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
[Adminer Portal](http://localhost:8080/?pgsql=db&username=root&db=mydatabase&ns=public)

## Direct DB Access
`./bin/connect-to-db.sh`
