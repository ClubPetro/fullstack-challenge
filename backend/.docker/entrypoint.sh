#!/bin/sh

cd /home/api

if [ ! -f ".env" ]; then
  cp .env.example .env
fi

yarn install
yarn typeorm migration:run
yarn start:dev
