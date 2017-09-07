#!/bin/sh

#
# Clarity Start script
#

cd /project

sed -i "s/localhost:4200/0.0.0.0:4200/g" protractor.config.js && \
# npm install
yarn

ng serve --host 0.0.0.0
