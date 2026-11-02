# RP-Cloud Labs – Project Documentation Report

## 1. Introduction

RP-Cloud Labs is a proposed cloud-based platform designed to help Rwanda Polytechnic students and lecturers access learning software through hosted tools without installing the software on their personal computers.

The project focuses on developing a Tool-Session Service that receives requests from students and lecturers and checks available software license capacity before allocating tool sessions.

This documentation explains the project objectives, system architecture, technologies, implementation, testing, and future improvements.

## 2. Project Objectives

The main objectives are:

1. Allow students and lecturers to request access to hosted learning tools.
2. Check available software license capacity before allocating sessions.
3. Track active tool sessions.
4. Use Redis to cache frequently accessed information.
5. Use Apache Kafka for asynchronous event communication.
6. Use PostgreSQL to store system information.
7. Use Docker to package and run the application services.
8. Support automated development and deployment using CI/CD tools.

## 3. System Architecture

The project follows a microservices-oriented architecture. The main components are:

### 3.1 Students and Lecturers

These are the users who request access to learning tools through the platform.

### 3.2 Tool-Session API

The API receives HTTP requests from users. It is developed using Node.js and Express.js.

### 3.3 PostgreSQL Database

PostgreSQL is used as the planned persistent database for storing system information such as users, tools, licenses, and sessions.

### 3.4 Redis Cache

Redis is included in the system architecture to support caching and improve access to frequently requested information.

### 3.5 Apache Kafka

Kafka is included to support asynchronous communication between system components through events.

### 3.6 Architecture Diagram

The architecture diagram is available in:

`docs/architecture.md`

It shows how users, the API, PostgreSQL, Redis, and Kafka are connected.

## 4. Technologies and Tools

| Technology | Purpose |
|---|---|
| Node.js | Runs the JavaScript application |
| Express.js | Develops the REST API |
| PostgreSQL | Persistent database |
| Redis | Caching |
| Apache Kafka | Event messaging |
| Docker | Containerization |
| Docker Compose | Runs multiple services |
| Git | Version control |
| GitHub | Code hosting and collaboration |
| Flyway | Planned database migration management |
| GitHub Actions | Planned CI/CD automation |
| Kubernetes | Planned container orchestration |

## 5. Project Directory Structure

The main project directory is organized as follows:

```text
rp-cloud-labs/
│
├── api/
│   ├── src/
│   │   └── index.js
│   ├── Dockerfile
│   └── package.json
│
├── docs/
│   ├── architecture.md
│   ├── docker-configuration.md
│   ├── container-connectivity-testing.md
│   └── project-documentation.md
│
├── docker-compose.yml
├── README.md
└── .gitignore
```

The `api` directory contains the application source code and Docker configuration.

The `docs` directory contains project documentation and reports.

The `docker-compose.yml` file defines the services used by the project.

The `README.md` file provides an overview and instructions for running the project.

## 6. Application Implementation

The current API is developed using Node.js and Express.js.

The main application file is:

`api/src/index.js`

The API currently provides two endpoints.

### 6.1 Home Endpoint

- HTTP method: GET
- URL: `http://localhost:3000/`

This endpoint returns a welcome message.

Example response:

```json
{
  "message": "Welcome to RP-Cloud Labs Tool-Session Service"
}
```

### 6.2 Health Check Endpoint

- HTTP method: GET
- URL: `http://localhost:3000/health`

This endpoint checks whether the API is running.

Example response:

```json
{
  "status": "UP",
  "service": "Tool-Session Service"
}
```

## 7. Docker Configuration

Docker is used to package and run the project services in containers.

The project uses Docker Compose to manage four main services.

| Service | Container Name | Port |
|---|---|---|
| API | tool-session-api | 3000 |
| PostgreSQL | tool-session-db | 5432 |
| Redis | tool-session-redis | 6379 |
| Kafka | tool-session-kafka | 9092 |

### 7.1 PostgreSQL Configuration

The PostgreSQL service uses:

- Database: `rp_cloud_labs`
- Username: `rp_user`
- Password: `rp_password`
- Port: `5432`

These credentials are for development purposes only.

### 7.2 Docker Network

All four services are configured to use a shared bridge network named:

`rp-cloud-network`

This allows containers to communicate with each other using their service names.

### 7.3 Persistent Volumes

Docker volumes are configured to preserve data:

- `postgres_data`
- `kafka_data`

These volumes help retain data when containers are stopped or recreated.

## 8. Running the Project

Before starting the application, ensure Docker Desktop is installed and running.

Open a terminal in the project root directory.

### Step 1: Build and start services

```bash
docker compose up --build -d
```

### Step 2: Check running containers

```bash
docker compose ps
```

### Step 3: View API logs

```bash
docker compose logs api
```

### Step 4: Test the home endpoint

```bash
curl http://localhost:3000/
```

### Step 5: Test the health endpoint

```bash
curl http://localhost:3000/health
```

### Step 6: Stop the services

```bash
docker compose down
```

To stop the containers and delete their persistent volumes, use:

```bash
docker compose down -v
```

**Warning:** This second command deletes the stored PostgreSQL and Kafka volume data.

## 9. Testing and Verification

Testing was performed to check whether the application and supporting containers could run and communicate.

### 9.1 API Testing

The home endpoint and health endpoint were tested to confirm that the API responds to HTTP requests.

### 9.2 PostgreSQL Testing

The following command checks whether PostgreSQL accepts connections:

```bash
docker compose exec db pg_isready -U rp_user -d rp_cloud_labs
```

### 9.3 Redis Testing

The following command checks whether Redis responds:

```bash
docker compose exec redis redis-cli ping
```

Expected response:

```text
PONG
```

### 9.4 Kafka Testing

The following command checks whether Kafka responds to a topic-list request:

```bash
docker compose exec kafka kafka-topics --bootstrap-server kafka:9092 --list
```

An empty result means no topics are currently listed. This check does not prove that message production and consumption have been implemented.

### 9.5 Container Network Testing

Docker network inspection can be used to confirm that the containers are connected to the shared bridge network.

## 10. Git and GitHub Collaboration

Git and GitHub are used to support collaboration among group members.

The project uses separate branches for different development tasks.

Examples include:

- `feature/tool-session-service-integration`
- `feature/docker-configuration`
- `feature/container-connectivity-testing`
- `docs/project-documentation`

Each group member works on an assigned branch and pushes their changes to GitHub.

Pull requests are used to review proposed changes before merging them into the integration branch.

This approach helps the team work together while keeping changes organized.

## 11. Current Project Status

The project currently has an initial application scaffold and Docker service configuration.

### Implemented Components

- Express.js API with a home endpoint.
- Express.js health check endpoint.
- PostgreSQL Docker service.
- Redis Docker service.
- Kafka Docker service.
- Docker Compose configuration.
- Shared Docker bridge network.
- Persistent PostgreSQL and Kafka volumes.
- Architecture documentation.
- Docker configuration documentation.
- Container connectivity testing report.

### Components Requiring Further Development

- User authentication and authorization.
- Software license capacity checking.
- Tool-session allocation.
- Active session tracking.
- API integration with PostgreSQL.
- Redis caching operations.
- Kafka event production and consumption.
- Flyway database migrations.
- Automated testing and GitHub Actions.
- Kubernetes deployment.

## 12. Challenges and Future Improvements

The project requires additional development to become a complete working Tool-Session Service.

Future improvements include:

1. Implementing user authentication and role management.
2. Creating database tables for users, tools, licenses, and sessions.
3. Implementing license capacity checking.
4. Developing tool-session allocation and tracking.
5. Connecting the API to PostgreSQL.
6. Implementing Redis caching.
7. Developing Kafka producers and consumers.
8. Adding automated tests and GitHub Actions workflows.
9. Deploying the services using Kubernetes.


**Institution:** Rwanda Polytechnic

**Project:** RP-Cloud Labs – Tool-Session Service