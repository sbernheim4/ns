import os
import psycopg2
from psycopg2 import sql
from returns.maybe import Maybe

def get_user_groups():

    def _fetch_and_close(cursor):
        cursor.execute("SELECT * FROM user_groups;")
        rows = cursor.fetchall()
        cursor.close()
        return rows

    results = get_cursor().map(_fetch_and_close)

    return results

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
        return Maybe.from_value(None)
    cursor = connection.cursor()
    return Maybe.from_value(cursor)


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
