\# Docker Configuration – RP-Cloud Labs Tool-Session Service



\## 1. Introduction



This document explains the Docker configuration used to run the RP-Cloud Labs Tool-Session Service and its supporting infrastructure.



Docker Compose is used to run the API, PostgreSQL, Redis and Kafka services together in a shared Docker network.



\## 2. Services Configuration



The Docker environment contains the following services:



| Service | Technology | Port | Purpose |

|---|---|---|---|

| API | Node.js and Express | 3000 | Provides the application API |

| Database | PostgreSQL 17 | 5432 | Stores application data |

| Cache | Redis 7 | 6379 | Provides caching |

| Messaging | Kafka 7.7.1 | 9092 | Supports event messaging |



\## 3. Docker Network



All services are connected through a shared bridge network named `rp-cloud-network`.



This allows containers to communicate using their service names.



\## 4. Persistent Storage



Docker volumes are configured to preserve data:



\- `postgres\_data`: Stores PostgreSQL database data.

\- `kafka\_data`: Stores Kafka data.



These volumes help preserve data when containers are stopped or recreated.



\## 5. Running the Application



Ensure Docker Desktop is running before executing the following commands.



Build the images and start all services:



```bash

docker compose up --build -d

```



Check running containers:



```bash

docker compose ps

```



View service logs:



```bash

docker compose logs

```



\## 6. Testing the Services



\### API test



```bash

curl.exe http://localhost:3000/

```



Expected response:



```json

{"message":"Welcome to RP-Cloud Labs Tool-Session Service"}

```



\### API health check



```bash

curl.exe http://localhost:3000/health

```



Expected response:



```json

{"status":"UP","service":"Tool-Session Service"}

```



\### PostgreSQL test



```bash

docker compose exec db pg\_isready -U rp\_user -d rp\_cloud\_labs

```



Expected result: accepting connections.



\### Redis test



```bash

docker compose exec redis redis-cli ping

```



Expected response:



```text

PONG

```



\### Kafka test



```bash

docker compose exec kafka kafka-topics --bootstrap-server kafka:9092 --list

```



This command checks whether the Kafka broker can respond to a topic-list request. An empty result is normal when no topics have been created.



\## 7. Stopping the Services



Stop and remove the containers and network:



```bash

docker compose down

```



To also remove persistent volumes, use:



```bash

docker compose down -v

```



\*\*Warning:\*\* The second command deletes the stored PostgreSQL and Kafka volume data.



\## 8. Conclusion



The Docker environment provides a shared setup for running the Tool-Session Service and its supporting infrastructure. The API, PostgreSQL, Redis and Kafka containers were started and tested successfully.



The API application has not yet been connected to the database, cache or messaging broker at application level. These integrations require additional application development.

