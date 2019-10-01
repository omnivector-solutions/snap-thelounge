#!/bin/bash

set -eux

exec "$SNAP/node_modules/.bin/thelounge" start
