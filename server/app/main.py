from starlette.responses import HTMLResponse
from app.db import (
    get_users,
    get_events,
    get_user_groups,
    failure_no_cursor,
)
from contextlib import asynccontextmanager
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from returns.result import Result, Success, Failure
from typing import Any

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Load the ML model
    yield
    # Clean up the ML models and release the resources

app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

available_routes = ["/users", "/user-groups", "/events",]
# Names make it easy to understand what each route handler is managing
user_route = available_routes[0]
user_group_route = available_routes[1]
events_route = available_routes[2]

@app.get("/")
def read_root():
    links = "".join([f"<li><a href='{value}'>{value}</a></li>" for value in available_routes])

    return HTMLResponse(
        content=
            f"""
            <html>
                <body>
                    <h3>Available API routes are:</h3>
                    <ul>
                        {links}
                    </ul>
                </body>
            </html>
            """,
        status_code=200,
    )


@app.get(user_route)
def show_users():
    result = get_users()

    return handle_result(result)


@app.get(user_group_route)
def show_groups() -> list[tuple[Any, ...]]:
    result = get_user_groups()
    return handle_result(result)


@app.get(events_route)
def show_events():
    result = get_events()

    return handle_result(result)

def handleError(error: Failure[str]):

    match error:
        case Failure(err):
            if err == failure_no_cursor:
                raise HTTPException(status_code=503, detail="Could not create a cursor on the database")
            else:
                raise HTTPException(status_code=500, detail=err)


def handle_result(result: Result[Any, str]):
    match result:
        case Success(_):
            return result.unwrap()
        case Failure(_):
            return handleError(result)
        case _:
            raise HTTPException(status_code=500, detail="Unkown error")
