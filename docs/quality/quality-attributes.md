# Quality Attributes
## RP-Cloud Labs Tool-Session Service

### 1. Introduction

Quality attributes describe how well a software system performs its functions. They help ensure that the RP-Cloud Labs Tool-Session Service is secure, reliable, easy to use, and efficient.

The system allows students to request access to hosted learning tools such as Visual Studio Code. Therefore, the system must provide good performance, protect student information, and remain easy to maintain.

### 2. Objectives

The objectives of identifying quality attributes are to:

- Improve the quality of the system.
- Protect student and institutional information.
- Ensure reliable access to learning tools.
- Make the system easy to use and maintain.
- Support future growth of the platform.

### 3. Main Quality Attributes

#### 3.1 Security

Security ensures that only authorized users can access the system and its resources.

**Application in RP-Cloud Labs:**
- Students should access only their authorized accounts.
- Passwords should be stored securely using hashing.
- API inputs should be validated.
- Unauthorized users should not access administrative functions.

**Example:** A student should not be able to approve another student's tool-session request.

#### 3.2 Performance

Performance describes how quickly the system responds to user requests.

**Application in RP-Cloud Labs:**
- The system should respond quickly when students request a tool session.
- API endpoints should process requests efficiently.
- Database queries should avoid unnecessary delays.

**Example:** When a student submits a request for Visual Studio Code, the system should return a response without unnecessary waiting.

#### 3.3 Reliability

Reliability means that the system performs its expected functions correctly and consistently.

**Application in RP-Cloud Labs:**
- The system should process valid requests correctly.
- Database records should remain consistent.
- Errors should be handled without crashing the entire application.
- Failed operations should provide useful error messages.

**Example:** A valid tool-session request should not disappear because of an application error.

#### 3.4 Scalability

Scalability is the ability of the system to handle increasing numbers of users and requests.

**Application in RP-Cloud Labs:**
- The system should support more students as institutions grow.
- Additional application instances should be possible.
- Database and infrastructure capacity should be expandable.

**Example:** The platform should be capable of supporting students from several colleges instead of only one college.

#### 3.5 Usability

Usability describes how easy the system is for users to understand and operate.

**Application in RP-Cloud Labs:**
- The student interface should be simple.
- Forms should have clear labels.
- Error messages should explain how to correct mistakes.
- Navigation should be understandable.

**Example:** A student should be able to request a learning tool without needing technical assistance.

#### 3.6 Availability

Availability means that the system is accessible when authorized users need it.

**Application in RP-Cloud Labs:**
- Services should be monitored.
- Application failures should be detected.
- Recovery procedures should be prepared.
- Database backups should be maintained.

**Example:** Students should be able to access the platform during scheduled practical learning sessions.

#### 3.7 Maintainability

Maintainability describes how easily developers can update, fix, and improve the system.

**Application in RP-Cloud Labs:**
- Code should be organized into understandable files.
- Technical documentation should be maintained.
- Git branches and Pull Requests should support controlled changes.
- Automated validation should help detect errors.

**Example:** Developers should be able to add a new learning tool without rewriting the entire application.

### 4. Quality Attribute Summary

| Quality Attribute | Main Goal | Example |
|---|---|---|
| Security | Protect data and users | Restrict administrative access |
| Performance | Respond quickly | Process session requests efficiently |
| Reliability | Work correctly | Save valid requests consistently |
| Scalability | Support growth | Add more colleges and students |
| Usability | Be easy to use | Simple student request form |
| Availability | Remain accessible | Monitor application services |
| Maintainability | Be easy to update | Organized code and documentation |

### 5. Quality Attribute Priorities

For the RP-Cloud Labs Tool-Session Service, the following priorities are recommended:

| Priority | Quality Attribute | Reason |
|---|---|---|
| High | Security | Protect student accounts and information |
| High | Reliability | Ensure correct handling of session requests |
| High | Availability | Support scheduled practical learning |
| High | Performance | Avoid delays when submitting requests |
| Medium | Scalability | Support future institutional growth |
| Medium | Usability | Make the system understandable |
| Medium | Maintainability | Simplify future updates and corrections |

### 6. Recommendations

To achieve these quality attributes, the project team should:

1. Apply input validation and secure authentication.
2. Use efficient database queries.
3. Test API endpoints regularly.
4. Monitor application and container health.
5. Maintain clear technical documentation.
6. Use GitHub Pull Requests and automated CI checks.
7. Plan for future increases in users and learning tools.

### 7. Conclusion

Quality attributes are important because they describe the expected quality of the RP-Cloud Labs Tool-Session Service beyond its basic functions.

By considering security, performance, reliability, scalability, usability, availability, and maintainability, the development team can build a system that is dependable, easy to use, and ready for future improvement.

---
**Prepared by:** Iyaremye Levis Figo (26RP00076)  
**Project:** RP-Cloud Labs Tool-Session Service  
**Activity:** Quality Attributes
