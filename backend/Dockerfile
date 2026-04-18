# Backend Dockerfile
FROM python:3.11-slim

WORKDIR /app

# Copy requirements first (for layer caching)
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy all backend code
COPY . .

# Expose port
EXPOSE 8001

# Start command (Railway/Render provides PORT env variable)
CMD uvicorn server:app --host 0.0.0.0 --port ${PORT:-8001}
