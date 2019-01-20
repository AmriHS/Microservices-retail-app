# Microservices Simple Retail Web App (on-going)

## Installation:
1. Install Docker Locally
[Link](https://www.docker.com/get-started)
2. Install Node.js
[Link](https://nodejs.org/en/download/)

## Build and run docker containers
In this example, we will have only one mongodb accessed by all Backend Rest APIs.
Each service created and maintained by their own database.
All APIs and mongodb are specified in docker-compose.yml in the project root. 
To build and run docker images for backend Rest APIs and mongodb, run the following:
```bash
docker-compose up
```
In case you want to build and run specific container:
```bash
docker-compose up --build <container_name>
```
To verify containers are running:
```bash
docker container ps -a
```
To stop specific container:
```bash
docker container stop <container_name>
```
