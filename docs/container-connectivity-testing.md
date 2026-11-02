# Student 5: Container and Connectivity Testing Report

## 1. Introduction

The purpose of this activity was to test the RP-Cloud Labs Tool-Session Service Docker environment and verify that the API and supporting services were running correctly.

## 2. Testing Environment

The following technologies were tested:

- Docker Desktop
- Docker Compose
- Node.js and Express
- PostgreSQL 17
- Redis 7
- Apache Kafka 7.7.1

## 3. Container Status Testing

Command:

`docker compose ps`

Result: All four containers were running:

- tool-session-api
- tool-session-db
- tool-session-redis
- tool-session-kafka

PostgreSQL reported a healthy status.

**Status: PASSED**

## 4. API Testing

Home endpoint:

`curl.exe http://localhost:3000/`

Response:

`{"message":"Welcome to RP-Cloud Labs Tool-Session Service"}`

Health endpoint:

`curl.exe http://localhost:3000/health`

Response:

`{"status":"UP","service":"Tool-Session Service"}`

**Status: PASSED**

## 5. PostgreSQL Testing

Command:

`docker compose exec db pg_isready -U rp_user -d rp_cloud_labs`

Response:

`/var/run/postgresql:5432 - accepting connections`

**Status: PASSED**

## 6. Redis Testing

Command:

`docker compose exec redis redis-cli ping`

Response:

`PONG`

**Status: PASSED**

## 7. Kafka Testing

Command:

`docker compose exec kafka kafka-topics --bootstrap-server kafka:9092 --list`

Result: The command completed without an error. No topics were listed because no topics had been created.

**Status: Broker responsiveness check passed. Topic production and consumption were not tested.**

## 8. Docker Network Testing

Command:

`docker network inspect rp-cloud-labs_rp-cloud-network`

The inspection confirmed that all four containers were connected to the same bridge network.

Container IP addresses:

- PostgreSQL: 172.19.0.2
- Kafka: 172.19.0.3
- Redis: 172.19.0.4
- API: 172.19.0.5

**STATUS: PASSED**

## 9. Testing Summary

| Component | Test | Result |
|---|---|---|
| API | Home endpoint | Passed |
| API | Health endpoint | Passed |
| PostgreSQL | Connection readiness | Passed |
| Redis | PING command | Passed |
| Kafka | Broker responsiveness | Passed |
| Docker network | Container attachment | Passed |

## 10. Conclusion

The testing activities confirmed that the four Docker containers were running and connected to the shared Docker network. The API endpoints responded successfully, PostgreSQL accepted connections, Redis returned PONG, and Kafka responded to the topic-list request.

Further testing is required to verify actual application-level integration between the API, PostgreSQL, Redis and Kafka.