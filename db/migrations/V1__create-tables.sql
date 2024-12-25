-- Drop tables if they already exist
DROP TABLE IF EXISTS notifications CASCADE;
DROP TABLE IF EXISTS user_group_memberships CASCADE;
DROP TABLE IF EXISTS user_groups CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS event_types CASCADE;

-- Create the users table
CREATE TABLE users (
    email VARCHAR(100) PRIMARY KEY, -- Email as the primary key
    name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample users
INSERT INTO users (email, name)
VALUES
    ('alice@example.com', 'Alice Johnson'),
    ('bob@example.com', 'Bob Smith'),
    ('charlie@example.com', 'Charlie Brown'),
    ('diana@example.com', 'Diana Prince');

-- Create the user_groups table
CREATE TABLE user_groups (
    email VARCHAR(100) PRIMARY KEY, -- Email as the primary key
    name VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample user groups
INSERT INTO user_groups (email, name)
VALUES
    ('admins@example.com', 'Admins'),
    ('developers@example.com', 'Developers'),
    ('support@example.com', 'Support Team');

-- Create the user_group_memberships table
CREATE TABLE user_group_memberships (
    id SERIAL PRIMARY KEY,
    user_email VARCHAR(100) NOT NULL REFERENCES users(email) ON DELETE CASCADE,
    group_email VARCHAR(100) NOT NULL REFERENCES user_groups(email) ON DELETE CASCADE,
    UNIQUE(user_email, group_email)  -- Prevent duplicate memberships
);

-- Add sample memberships
INSERT INTO user_group_memberships (user_email, group_email)
VALUES
    ('alice@example.com', 'admins@example.com'),    -- Alice is an Admin
    ('bob@example.com', 'developers@example.com'),  -- Bob is a Developer
    ('charlie@example.com', 'support@example.com'), -- Charlie is in Support Team
    ('diana@example.com', 'admins@example.com'),    -- Diana is an Admin
    ('diana@example.com', 'developers@example.com');-- Diana is also a Developer

-- Create the event_types table
CREATE TABLE event_types (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT
);

-- Insert sample event types
INSERT INTO event_types (name, description)
VALUES
    ('UserLogin', 'Triggered when a user logs into the system.'),
    ('DataExport', 'Triggered when a user exports data.'),
    ('ErrorOccurred', 'Triggered when an error occurs in the system.'),
    ('SystemUpdate', 'Triggered when the system is updated.');

-- Create the notifications table
CREATE TABLE notifications (
    id SERIAL PRIMARY KEY,
    event_id INTEGER NOT NULL REFERENCES event_types(id) ON DELETE CASCADE,
    user_email VARCHAR(100) REFERENCES users(email) ON DELETE CASCADE,
    group_email VARCHAR(100) REFERENCES user_groups(email) ON DELETE CASCADE,
    notification_type VARCHAR(50) NOT NULL CHECK (notification_type IN ('email', 'email_digest', 'slack')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Add sample notifications
INSERT INTO notifications (event_id, user_email, notification_type)
VALUES
    (1, 'alice@example.com', 'email'),  -- Notify Alice by email for UserLogin
    (2, 'charlie@example.com', 'slack');-- Notify Charlie by Slack for DataExport

INSERT INTO notifications (event_id, group_email, notification_type)
VALUES
    (4, 'admins@example.com', 'email_digest');  -- Notify all Admins by email digest for SystemUpdate
