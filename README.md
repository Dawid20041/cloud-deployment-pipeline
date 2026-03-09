# Cloud Deployment Pipeline

Simple REST API built with Node.js and Express.
This project demonstrates how a small backend service can be prepared for **containerization, CI/CD pipelines, and cloud deployment**.

## Features

* Lightweight REST API
* Health check endpoint for monitoring
* Server time endpoint
* Simple service information endpoint
* Docker container support
* Designed to be deployed in cloud environments

## Technologies

* Node.js
* Express.js
* Docker

## Project Structure

```
cloud-deployment-pipeline
│
├── server.js
├── package.json
├── Dockerfile
└── README.md
```

## Installation

Clone the repository:

```
git clone https://github.com/yourusername/cloud-deployment-pipeline.git
cd cloud-deployment-pipeline
```

Install dependencies:

```
npm install
```

## Running the Application

Start the server locally:

```
node server.js
```

The API will run at:

```
http://localhost:3000
```

---

# Running with Docker

Build the Docker image:

```
docker build -t cloud-deployment-pipeline .
```

Run the container:

```
docker run -p 3000:3000 cloud-deployment-pipeline
```

The application will be available at:

```
http://localhost:3000
```

---

## API Endpoints

### GET /

Basic welcome endpoint.

Example response:

```
Hello from Cloud App
```

---

### GET /health

Used for health checks in cloud environments.

Example response:

```
{
  "status": "ok"
}
```

---

### GET /time

Returns the current server time.

Example response:

```
{
  "time": "2026-03-09T12:00:00.000Z"
}
```

---

### GET /info

Returns basic information about the service.

Example response:

```
{
  "service": "cloud-deployment-pipeline",
  "version": "1.0.0"
}
```

---

## Future Improvements

* CI/CD pipeline using GitHub Actions
* Docker image publishing to container registry
* Deployment to a cloud platform (Azure / AWS / GCP)
* Infrastructure provisioning using Terraform

---

## Purpose

This project demonstrates a basic backend service prepared for a **modern cloud deployment workflow**, including containerization, automated builds, and cloud deployment.
