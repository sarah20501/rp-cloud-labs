
-- V1: Create the initial Tool-Session Service database schema

CREATE TABLE colleges (
    id SERIAL PRIMARY KEY,
    college_name VARCHAR(150) NOT NULL UNIQUE
);

CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    student_id VARCHAR(50) NOT NULL UNIQUE,
    full_name VARCHAR(150) NOT NULL,
    college_id INTEGER NOT NULL,
    CONSTRAINT fk_student_college
        FOREIGN KEY (college_id)
        REFERENCES colleges(id)
);

CREATE TABLE tool_sessions (
    id SERIAL PRIMARY KEY,
    student_id INTEGER NOT NULL,
    tool_name VARCHAR(100) NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'PENDING',
    requested_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_session_student
        FOREIGN KEY (student_id)
        REFERENCES students(id),

    CONSTRAINT chk_session_status
        CHECK (status IN ('PENDING', 'APPROVED', 'REJECTED'))
);
