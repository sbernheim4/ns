CREATE TABLE alerts (
    id SERIAL PRIMARY KEY,
    key_name VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    priority INT CHECK (priority BETWEEN 1 AND 4)
);

CREATE TABLE alert_groups (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);

CREATE TABLE alert_group_alerts (
    id SERIAL PRIMARY KEY,
    alert_id INT,
    alert_group_id INT,
    FOREIGN KEY (alert_id) REFERENCES alerts(id),
    FOREIGN KEY (alert_group_id) REFERENCES alert_groups(id),
    CONSTRAINT unique_alert_in_group UNIQUE (alert_id)
);

CREATE TABLE incidents (
    id SERIAL PRIMARY KEY,
    key_name VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    priority INT CHECK (priority BETWEEN 1 AND 4),
    owners JSONB,
    responders JSONB
);

CREATE TABLE incident_alert_groups (
    incident_id INT,
    alert_group_id INT,
    PRIMARY KEY (incident_id, alert_group_id),
    FOREIGN KEY (incident_id) REFERENCES incidents(id),
    FOREIGN KEY (alert_group_id) REFERENCES alert_groups(id)
);

-- Insert data into alerts table
INSERT INTO alerts (key_name, name, description, priority) VALUES
('ALERT001', 'Disk Space Low', 'Disk space usage exceeded 90%', 3),
('ALERT002', 'CPU Overload', 'CPU usage exceeds 95%', 4),
('ALERT003', 'Memory Leak', 'Memory usage rising steadily without release', 2),
('ALERT004', 'Service Down', 'A critical service has crashed', 4),
('ALERT005', 'Network Latency', 'Network latency is above 200ms', 2);

-- Insert data into alert_groups table
INSERT INTO alert_groups (name, description) VALUES
('Critical Alerts', 'Group of critical alerts requiring immediate attention'),
('Performance Alerts', 'Group of alerts related to system performance'),
('Service Monitoring', 'Group of alerts related to service health and uptime');

-- Insert data into alert_group_alerts table
INSERT INTO alert_group_alerts (alert_id, alert_group_id) VALUES
(1, 2),
(2, 1),
(3, 2),
(4, 1),
(5, 3);

-- Insert data into incidents table
INSERT INTO incidents (key_name, name, description, priority, owners, responders) VALUES
('INC001', 'System Outage', 'Major system outage, all services are down', 4, '["owner1@example.com", "owner2@example.com"]', '["responder1@example.com", "responder2@example.com"]'),
('INC002', 'Performance Degradation', 'High latency across multiple services', 3, '["owner3@example.com"]', '["responder3@example.com"]'),
('INC003', 'Memory Leak Detection', 'Memory leak detected in critical application', 2, '["owner4@example.com", "owner5@example.com"]', '["responder4@example.com"]');

-- Insert data into incident_alert_groups table
INSERT INTO incident_alert_groups (incident_id, alert_group_id) VALUES
(1, 1),
(2, 2),
(3, 2);
