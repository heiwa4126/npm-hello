#!/bin/sh -eu
MY_PACKAGE_NAME="@heiwa4126/hello"
NPM_CONFIG_PREFIX="$PWD/.npm-local"

npm link
npm link "$MY_PACKAGE_NAME"
rm -rf "$NPM_CONFIG_PREFIX"
