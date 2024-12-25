FROM node:alpine
LABEL description="Instant high-performance GraphQL API for your PostgreSQL database https://github.com/graphile/postgraphile"

# Set working directory
WORKDIR /app

# Install PostGraphile and dependencies
COPY package.json package-lock.json ./
RUN npm install --production

# Copy presets and other configuration files
COPY ./graphile.config.js ./graphile.config.js
