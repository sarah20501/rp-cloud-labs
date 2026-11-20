-- V2: Add software licence capacity to colleges

ALTER TABLE colleges
ADD COLUMN license_capacity INTEGER NOT NULL DEFAULT 0
CHECK (license_capacity >= 0);