# Services of Projet 2CS
this Repo should contain services, each in its own folder.

## Requirements
you should have [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/) installed in your machine to be able to run all services together.

## Usage
to create a new service, do the following:
  - copy template folder and paste with a new name for your service.
  - add this to the global docker-compose.yml file:
  ```
  <name-of-service>:
        build:
            context: ./<name-of-service>
            target: development
        volumes:
            - ./<name-of-service>:/src
            - /src/node_modules
        command: npm run start:dev
        ports:
            - "8000:<a-valid-port>"
        environment: 
            NODE_ENV: development
            DEBUG: src:*
  ```
  - in the outer folder:
    * run `sudo docker-compose build` to build all services together using docker compose.
    * run `sudo docker-compose up` to run all services at the same time in development mode.

### Happy Coding !
