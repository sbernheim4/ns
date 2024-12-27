# Use the official Python image
FROM python:3.10

# Set environment variables
ENV POETRY_HOME="/opt/poetry" \
    POETRY_VERSION=1.7.0 \
    VIRTUAL_ENV="/code/venv" \
    PATH="$POETRY_HOME/bin:$VIRTUAL_ENV/bin:$PATH"

# Set the working directory
WORKDIR /code

# Install pipx and Poetry
RUN python -m pip install --no-cache-dir --upgrade pip setuptools \
    && python -m pip install --no-cache-dir pipx \
    && pipx ensurepath \
    && pipx install poetry==$POETRY_VERSION

# Copy Poetry configuration files
COPY ./pyproject.toml ./poetry.lock* /code/

# Install dependencies in the virtual environment
RUN python -m venv $VIRTUAL_ENV \
    && . $VIRTUAL_ENV/bin/activate \
    && pip install --no-cache-dir poetry==$POETRY_VERSION \
    && poetry install --no-root --only main

# Copy the rest of the application code
COPY . /code

# Start the server
CMD ["/code/venv/bin/uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
