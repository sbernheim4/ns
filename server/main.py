from typing import Union
from app.db import get_db_connection, get_users, get_events, get_user_groups
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()
db_connection = None

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React development server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def startup():
    """
    Establish a database connection when the application starts.
    """
    global db_connection
    try:
        db_connection = get_db_connection()
        print("Database connection established during startup.")
    except Exception as e:
        print(f"Failed to connect to the database during startup: {e}")
        raise


@app.on_event("shutdown")
async def shutdown():
    """
    Close the database connection when the application shuts down.
    """
    global db_connection
    if db_connection:
        db_connection.close()
        print("Database connection closed during shutdown.")


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/users")
def show_users():
    users = get_users()
    return users;

@app.get("/user-groups")
def show_groups():
    groups = get_user_groups()
    return groups;

@app.get("/events")
def show_events():
    events = get_events()
    return events

