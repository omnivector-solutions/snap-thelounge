#!/bin/bash

set -eu

exec "$SNAP/node_modules/.bin/thelounge" "$@"
