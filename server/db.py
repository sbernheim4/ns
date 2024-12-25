import os
import psycopg2
from psycopg2 import sql

def get_user_groups():
    cursor = get_cursor()

    if cursor is None:
        return None

    cursor.execute("SELECT * FROM user_groups;")
    rows = cursor.fetchall()
    cursor.close()

    return rows

def get_events():
    cursor = get_cursor()

    if cursor is None:
        return None

    cursor.execute("SELECT * FROM event_types;")
    rows = cursor.fetchall()
    cursor.close()

    return rows

def get_users():
    cursor = get_cursor()

    if cursor is None:
        return None

    cursor.execute("SELECT * from users;")
    rows = cursor.fetchall()
    cursor.close()

    return rows


def get_cursor():
    connection = get_db_connection()
    if connection is None:
        return None
    cursor = connection.cursor()
    return cursor


def get_db_connection():
    """
    Establish a connection to the PostgreSQL database using environment variables.

    Returns:
        connection: A psycopg2 connection object.
    """
    # Fetching database connection parameters from environment variables
    DB_HOST = os.getenv("DB_HOST")
    DB_NAME = os.getenv("DB_NAME")
    DB_USER = os.getenv("DB_USER")
    DB_PASSWORD = os.getenv("DB_PASSWORD")

    try:
        # Establish connection
        connection = psycopg2.connect(
            host=DB_HOST,
            database=DB_NAME,
            user=DB_USER,
            password=DB_PASSWORD,
        )
        print("Database connection successful!")
        return connection
    except Exception as e:
        print(f"Error connecting to the database: {e}")
        return None
        raise
