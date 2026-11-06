\# RP-Cloud Labs – Activity 4 Architecture Documentation



\*\*Contributor:\*\* Jean Wilson  

\*\*Student ID:\*\* 26RP00329



\## 1. Architecture Pattern Selection Process



\### Step 1: Understand Requirements and Goals

The system must allow students to request learning tools, validate their information, check available resources, and record session requests.



\### Step 2: Analyse the Problem Domain

The project involves students, learning tools, college accounts, license capacity, and session requests. These components must communicate reliably.



\### Step 3: Evaluate Suitable Architecture Patterns

We considered Monolithic and Microservices architecture patterns to determine which best supports the system requirements.



\### Step 4: Weigh the Trade-offs

A Monolithic architecture is simpler to develop and deploy, while Microservices offer better separation of services but require more infrastructure and management.



\### Step 5: Select and Validate the Architecture

We selected a Microservices-oriented architecture because it allows services such as Tool-Session Service to operate independently. We validate this choice through API testing and Docker-based deployment.



\## 2. Architecture Trade-off



The selected Microservices architecture improves modularity and makes it easier to maintain and extend individual services. However, it introduces additional complexity in service communication, deployment, and monitoring.



\## 3. Architecture Constraint



The project has limited development time, hardware resources, and budget. Therefore, the architecture must use affordable open-source technologies and a manageable development environment.



\## 4. Suitability for RP-Cloud Labs



The Microservices-oriented approach supports the future expansion of RP-Cloud Labs. Different services can handle student accounts, tool-session requests, license management, and session tracking independently.







