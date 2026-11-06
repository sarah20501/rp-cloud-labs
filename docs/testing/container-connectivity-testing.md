# Container Connectivity Testing and Test Evidence

**Project:** RP-Cloud Labs  
**Contributor:** Usengimana Valens  
**Student ID:** 26RP00035  
**Branch:** `feature/valens-connectivity-testing`

## 1. Introduction

This document describes the testing activities used to verify the status and connectivity of the RP-Cloud Labs services running through Docker Compose.

## 2. Services to Be Tested

The project contains the following services:

- API: Node.js and Express application.
- PostgreSQL: Database service.
- Redis: Caching service.
- Kafka: Messaging service.

## 3. Testing Activities

### Test 1: Container Status

**Command:**
```powershell
docker compose ps
```

**Expected result:** The API, PostgreSQL, Redis, and Kafka containers should be running.

**Actual result:** To be completed after testing.

### Test 2: PostgreSQL Health Check

**Command:**
```powershell
docker compose exec db pg_isready -U rp_user -d rp_cloud_labs
```

**Expected result:** PostgreSQL should report that it is accepting connections.

**Actual result:** To be completed after testing.

### Test 3: Docker Network Connectivity

**Command:**
```powershell
docker network inspect rp-cloud-labs_rp-cloud-network
```

**Expected result:** The running project containers should be attached to the configured Docker network.

**Actual result:** To be completed after testing.

### Test 4: API Health Endpoint

Open the following URL in a browser:

`http://localhost:3000/health`

**Expected result:**
```json
{
  "status": "UP",
  "service": "Tool-Session Service"
}
```

**Actual result:** To be completed after testing.

### Test 5: Session Request Endpoint

Send a POST request to:

`http://localhost:3000/sessions`

Use this JSON body:

```json
{
  "studentId": "26RP00035",
  "college": "RP Karongi College",
  "tool": "Visual Studio Code"
}
```

**Expected result:** HTTP status `201 Created`, with a successful request message and status `PENDING`.

**Actual result:** To be completed after testing.

## 4. Test Evidence

Attach screenshots showing:

1. Docker container status.
2. PostgreSQL health check.
3. Docker network inspection.
4. Successful API health response.
5. Successful session request response.

## 5. Conclusion

The connectivity testing results will help determine whether the project services start correctly and whether the API endpoints respond as expected. The final conclusion will be completed after all tests have been performed.