### Running the Frontend

You can build and run your containers using Docker or Docker Compose.
You have two options to run the frontend:

#### Option 1: Using Docker
Build the Docker image for the frontend:

```bash
cd frontend
docker build -t supercar-frontend ./frontend
```

Run the frontend container:

```bash
docker run -p 3000:80 supercar-frontend
```


#### Option 2: Using Docker Compose

If you're using Docker Compose to orchestrate both frontend and backend, run the following:

Start both frontend and backend services:

```bash
docker-compose up --build
```

This will build both the frontend and backend images (if they’re not already built) and start the services.

Access the app: Once everything is up and running, this frontend will be accessible at http://localhost:3000.
