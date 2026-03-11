![Node.js](https://img.shields.io/badge/node.js-18-green)
# Cloud Deployment Pipeline


REST API built with **Node.js and Express** as part of a backend and cloud deployment learning project.
The goal of this project is to build a simple API that can later be **containerized, deployed to the cloud, and integrated with CI/CD pipelines**.

The application currently implements a basic **authorization module and user model**, storing data in a local SQLite database.

---

# Features

* REST API built with **Node.js and Express**
* Authorization module with **controllers and routes**
* User model for handling user data
* SQLite database for local storage
* Environment configuration using `.env`
* Docker support for containerization
* API testing with **Postman**

---

# Project Structure

```
cloud-deployment-pipeline
│
├── authorization
│   ├── controller.js
│   └── routes.js
│
├── common_models
│   ├── database.js
│   └── User.js
│
├── storage
│   └── data.db
│
├── .env
├── .env.example
├── .gitignore
├── dockerfile
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

---

# Installation

Clone the repository:

```
git clone https://github.com/yourusername/cloud-deployment-pipeline.git
cd cloud-deployment-pipeline
```

Install dependencies:

```
npm install
```

---

# Environment Variables

Create a `.env` file based on `.env.example`. **This file is required for the application to run.**

Example content:
```text
PORT=3000
JWT_SECRET=your_super_secret_key

---

# Running the Application

Start the server:

```
node server.js
```

The API will run on:

```
http://localhost:3000
```

---

# API Testing

The API can be tested using **Postman**.

Example request body for creating a user:

```
POST /users
```

Example JSON payload:

```
{
  "username": "developer",
  "email": "dev@example.com",
  "password": "securepass123",
  "firstName": "Dev",
  "lastName": "User",
  "age": 28
}
```

---

# Database

The application uses **SQLite** for local storage.

Database file location:

```
storage/data.db
```

---

# Docker

The project includes a Dockerfile for containerization.

Build the image:

```
docker build -t cloud-deployment-pipeline .
```

Run the container:

```
docker run -p 3000:3000 --env-file .env cloud-deployment-pipeline
```

---

# Future Improvements

Planned improvements for this project include:

* JWT authentication
* request validation
* improved error handling
* logging middleware
* CI/CD pipeline using GitHub Actions
* deployment to cloud platforms (Azure / AWS / GCP)

---

# Purpose

This project is part of my learning path toward **backend development, cloud computing, and DevOps practices**.
It serves as a foundation for experimenting with containerization, API development, and cloud deployments.
