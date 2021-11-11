# Define image to build from Docker. Optimized for Node.
# use the latest LTS (long term support) version 12 of node available from the Docker Hub
FROM node:16 

# Set working directory to /app so we can execute commands in it
RUN mkdir -p /usr/src/app/receiver
WORKDIR /usr/src/app/receiver

# A wildcard* is used to ensure both package.json AND 
#package-lock.json are copied where available (npm@5+)
COPY package*.json /usr/src/app/receiver/

# Install dependencies 
RUN npm install 

# Bundle app source 
COPY . /usr/src/app/receiver/


# Expose port mapped by the docker daemon
EXPOSE 5002

# Run file
CMD [ "npm","start" ]  