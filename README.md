# RP-Cloud Labs – Tool-Session Service

## 1. Project Overview

RP-Cloud Labs is a proposed platform that allows Rwanda Polytechnic students and lecturers to access hosted learning tools through a web browser without installing software on their personal computers.

The Tool-Session Service receives student requests and is designed to check whether the college has available software license capacity before allocating tool sessions.

## 2. Project Objectives

- Allow students to request hosted learning tools.
- Check available software license capacity.
- Track active tool sessions.
- Use Redis for caching session information.
- Use Kafka for asynchronous event communication.
- Use PostgreSQL for data storage.
- Package services using Docker.
- Support automated testing and deployment.

## 3. System Architecture

The project uses a microservices-oriented architecture.

The main components are:

1. **Students and lecturers:** Request access to learning tools.
2. **Tool-Session API:** Receives HTTP requests.
3. **PostgreSQL:** Provides persistent data storage.
4. **Redis:** Provides caching services.
5. **Apache Kafka:** Supports asynchronous messaging.

See [Architecture Documentation](docs/architecture.md).

## 4. Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js 5.1 | API development |
| PostgreSQL 17 | Database |
| Redis 7 | Caching |
| Apache Kafka 7.7.1 | Message broker |
| Docker | Containerization |
| Docker Compose | Service management |
| Git and GitHub | Version control |

Flyway, GitHub Actions and Kubernetes are planned technologies.

## 5. Project Structure

```text
rp-cloud-labs/
├── api/
│   ├── src/
│   │   └── index.js
│   ├── Dockerfile
│   └── package.json
├── docs/
│   └── architecture.md
├── docker-compose.yml
├── README.md
└── .gitignore
```

## 6. System Requirements

- Docker Desktop
- Docker Compose
- Git
- Windows, Linux or macOS

Ensure Docker Desktop is running before starting the services.

## 7. Installation and Setup

### Step 1: Clone the repository

```bash
git clone https://github.com/sarah20501/rp-cloud-labs.git
```

### Step 2: Enter the project folder

```bash
cd rp-cloud-labs
```

### Step 3: Build and start all services

```bash
docker compose up --build -d
```

### Step 4: Check running containers

```bash
docker compose ps
```

### Step 5: View API logs

```bash
docker compose logs api
```

## 8. Service Configuration

| Service | Container | Port |
|---|---|---|
| API | tool-session-api | 3000 |
| PostgreSQL | tool-session-db | 5432 |
| Redis | tool-session-redis | 6379 |
| Kafka | tool-session-kafka | 9092 |

### PostgreSQL Development Configuration

- Database: `rp_cloud_labs`
- Username: `rp_user`
- Password: `rp_password`
- Port: `5432`

These are development credentials and should be secured before production deployment.

### Docker Network

All services use the bridge network `rp-cloud-network`.

### Persistent Volumes

- `postgres_data`: PostgreSQL data.
- `kafka_data`: Kafka data.

## 9. API Documentation

### Home Endpoint

- Method: GET
- URL: `http://localhost:3000/`

Example response:

```json
{
  "message": "Welcome to RP-Cloud Labs Tool-Session Service"
}
```

### Health Check Endpoint

- Method: GET
- URL: `http://localhost:3000/health`

Example response:

```json
{
  "status": "UP",
  "service": "Tool-Session Service"
}
```

## 10. Testing

### Test the home endpoint

```bash
curl http://localhost:3000/
```

### Test the health endpoint

```bash
curl http://localhost:3000/health
```

### Test PostgreSQL

```bash
docker compose exec db pg_isready -U rp_user -d rp_cloud_labs
```

### Test Redis

```bash
docker compose exec redis redis-cli ping
```

Expected response: `PONG`

### Test Kafka broker responsiveness

```bash
docker compose exec kafka kafka-topics --bootstrap-server kafka:9092 --list
```

An empty result means no topics are currently listed.

## 11. Stopping the Services

Stop the containers:

```bash
docker compose down
```

Stop containers and remove persistent volumes:

```bash
docker compose down -v
```

**Warning:** The second command deletes stored PostgreSQL and Kafka data.

## 12. Current Implementation Status

Currently available:

- Express API with home and health endpoints.
- PostgreSQL Docker service.
- Redis Docker service.
- Kafka Docker service.
- Docker Compose configuration.
- Shared Docker network.
- Persistent database and Kafka volumes.

Further implementation is required for:

- User authentication.
- Software license checking.
- Tool-session allocation and tracking.
- API integration with PostgreSQL.
- Redis caching operations.
- Kafka event production and consumption.
- Automated testing and Kubernetes deployment.

## 13. Future Improvements

- Implement complete tool-session management.
- Create database tables for users, tools, licenses and sessions.
- Integrate Redis caching.
- Implement Kafka producers and consumers.
- Add authentication and authorization.
- Configure GitHub Actions.
- Deploy using Kubernetes.

## 14. Conclusion

RP-Cloud Labs provides an initial foundation for a cloud-based learning tool access management platform at Rwanda Polytechnic.

The current implementation establishes the API and supporting Docker services. Further development will add the business logic and integrations required to manage software licenses and student tool sessions.

**Institution:** Rwanda Polytechnic

**Project:** RP-Cloud Labs – Tool-Session Service