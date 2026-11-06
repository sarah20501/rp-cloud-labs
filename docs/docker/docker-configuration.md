\# RP-Cloud Labs – Activity 4 Docker Configuration



\*\*Contributor:\*\* Agasaro Keza Douce  

\*\*Student ID:\*\* 26RP00482



\## 1. Introduction



Docker is a platform used to package and run applications in containers. Docker Compose allows multiple containers to be configured and managed using one YAML file.



In RP-Cloud Labs, Docker Compose is used to run the Tool-Session Service and its supporting infrastructure.



\## 2. Docker Services



The project uses four main services.



\### 2.1 API Service



\- Builds the application using the Dockerfile in the api directory.

\- Uses port 3000.

\- Provides the Tool-Session API.

\- Depends on the database being healthy and Redis and Kafka being started.



\### 2.2 PostgreSQL Database



\- Uses PostgreSQL 17 Alpine.

\- Stores project data.

\- Uses port 5432.

\- Uses a persistent volume called postgres\_data.

\- Includes a health check to verify database readiness.



\### 2.3 Redis Service



\- Uses Redis 7 Alpine.

\- Uses port 6379.

\- Provides an in-memory data storage service for future application features.



\### 2.4 Kafka Service



\- Uses Confluent Kafka 7.7.1.

\- Uses port 9092.

\- Provides message-broker infrastructure for future communication between services.

\- Uses a persistent volume called kafka\_data.



\## 3. Container Communication



All four services are connected through a Docker bridge network named rp-cloud-network.



This network allows containers to communicate using their service names.



For example:

\- The API can reach PostgreSQL using the hostname db.

\- The API can reach Redis using the hostname redis.

\- The API can reach Kafka using the hostname kafka.



\## 4. Persistent Storage



Docker volumes are used to preserve important data.



\- postgres\_data stores PostgreSQL data.

\- kafka\_data stores Kafka data.



These volumes help retain data when containers are stopped or recreated.



\## 5. Docker Commands



The following commands are used to manage the project.



\### Build and start containers



```powershell

docker compose up -d --build



