# Microservices Simple Retail Web App

## Installation:
1. Install Docker Locally
[Link](https://www.docker.com/get-started)
2. Install Node.js
[Link](https://nodejs.org/en/download/)

## Container for NoSQL Database
In this example, we will have only one mongodb accessed by all services. 
Install mongodb image
```bash
docker pull mongo
```
Start mongodb in container with name mongo-container and port 27017 
```bash
docker run --name mongo-container -d -p 27017:27017 mongo
```
You can verify the running mongodb container
```bash
docker ps -a
```
