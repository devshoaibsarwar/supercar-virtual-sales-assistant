FROM node:16 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json first (to leverage caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

# Serve the React app
FROM nginx:alpine

# Copy the build folder from the build stage to Nginx's default html folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Run Nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]
