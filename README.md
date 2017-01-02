# PersonalWebsite

[![Build Status](https://travis-ci.org/JordanHeinrichs/personalWebsiteFrontEnd.svg?branch=master)](https://travis-ci.org/JordanHeinrichs/personalWebsiteFrontEnd)

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.20-4.

## Development server
Run `npm start` for a dev server. Navigate to `http://localhost:4200/`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. 
To build production run `npm run build-prod`. 

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Linting

Run `ng lint` to lint. Lint is currently not within the CI as there was an Angular bug at the time of writing. 

## Running end-to-end tests

End to end tests not yet done.

## Docker setup

To build docker image run `npm run build-docker`. To run image use: `docker run --name frontend -p 80:80 --restart on-failure -d frontend`
