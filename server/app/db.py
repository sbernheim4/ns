import os
import psycopg2
from returns.result import Result, Success, Failure
from psycopg2.extensions import connection, cursor

failure_no_cursor = "Could not create cursor"

def get_user_groups():

    def _get_user_groups(cur: cursor):
        cur.execute("SELECT * FROM user_groups;")
        rows = cur.fetchall()
        cur.close()
        return rows

    results = get_cursor().map(_get_user_groups)
    return results

def get_events():

    def _get_events(cur: cursor):
        cur.execute("SELECT * FROM event_types;")
        rows = cur.fetchall()
        cur.close()
        return rows

    cur = get_cursor()
    results = cur.map(_get_events)
    return results


def get_users():

    def _get_users(cur: cursor):
        cur.execute("SELECT * from users;")
        rows = cur.fetchall()
        cur.close()
        return rows

    cur = get_cursor()
    results = cur.map(_get_users)
    return results


def get_cursor():

    def create_cursor(conn: connection):
        return conn.cursor()

    conn = get_db_connection()

    match conn:
        case Success(_):
            cur = conn.map(create_cursor)
            return Success(cur.unwrap())
        case Failure(_):
            return Failure(failure_no_cursor)

    return Failure(failure_no_cursor)


def get_db_connection() -> Result[connection, str]:
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
        return Success(connection)
    except Exception as e:
        print(f"Error connecting to the database: {e}")
        return Failure(str(e))
