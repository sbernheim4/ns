import os
import psycopg2
from returns.maybe import Maybe

def get_user_groups():

    def _get_user_groups(cursor):
        cursor.execute("SELECT * FROM user_groups;")
        rows = cursor.fetchall()
        cursor.close()
        return rows

    results = get_cursor().map(_get_user_groups)
    return results.value_or("ERROR")

def get_events():

    def _get_events(cursor):
        cursor.execute("SELECT * FROM event_types;")
        rows = cursor.fetchall()
        cursor.close()
        return rows

    cursor = get_cursor()
    results = cursor.map(_get_events)
    return results.value_or("ERROR")


def get_users():

    def _get_users(cursor):
        cursor.execute("SELECT * from users;")
        rows = cursor.fetchall()
        cursor.close()
        return rows

    cursor = get_cursor()
    results = cursor.map(_get_users)
    return results.value_or("ERROR")


def get_cursor():

    def _get_cursor(connection):
        return connection.cursor()

    connection = get_db_connection()
    cursor = connection.map(_get_cursor)

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
        return Maybe.from_value(connection)
    except Exception as e:
        print(f"Error connecting to the database: {e}")
        return Maybe.from_value(None)
