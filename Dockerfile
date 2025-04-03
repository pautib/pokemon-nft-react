# Use the official Node.js image as the base image
FROM node:22.4.0

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci

# Installing serve to serve the application
#RUN npm i -g serve

# Copy the rest of the application code to the working directory
COPY . .

RUN npm run predeploy

# Expose the port your application runs on (replace 5173 with your app's port if different)
EXPOSE 5173

# Define the command to run your application
CMD [ "npm", "run", "preview" ]
#CMD [ "serve", "-s", "dist" ]

# docker build . -t "pokemon-nft:v0.12"
# docker run -dp 5173:5173 pokemon-nft:v0.12