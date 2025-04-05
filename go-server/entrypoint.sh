#!/bin/sh

dlv debug ./main.go --headless --listen=:2345 --api-version=2 --accept-multiclient &

# Start Air to watch for changes
air -c .air.toml
