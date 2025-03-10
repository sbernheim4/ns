curl -X POST http://localhost:4444/alerts \
-H "Content-Type: application/json" \
-d '[
    {
        "key_names": "ALERT006",
        "name": "Disk Space Critical",
        "description": "Disk space usage exceeded 95%",
        "priority": 4
    },
    {
        "key_name": "ALERT007",
        "name": "CPU Overheating",
        "description": "CPU temperature exceeds safe threshold",
        "priority": 4
    },
    {
        "key_name": "ALERT008",
        "name": "High Memory Usage",
        "description": "Memory usage exceeds 90%",
        "priority": 3
    }
]'

