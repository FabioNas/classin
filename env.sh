#!/bin/bash

_pwd=`pwd`
export PATH="$PATH:$_pwd/node_modules/.bin"
echo $PATH

# How to run this file on linux from project root
# $ source ./env.sh
#
# Test the local environment
# $ gulp -v
