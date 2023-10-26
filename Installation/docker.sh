#!/bin/bash

# AWS EC2 
# Launch an instance  
# Amazon Linux
# Create an key pair


# Network settings 
# Anywhere 0.0.0.0/0
# Allow SSH traffic from
# Allow HTTP traffic from the internet
# Allow HTTPS traffic from the internet


# This section continues with Docker-related tasks, 
# including updating packages, installing Docker, 
# pulling Docker images, running containers, and 
# managing containers. 
# Again, replace the placeholders ("<image-name>", "<container-name>", "<container-id>") with actual values.

sudo yum update -y  # Update the system packages with the -y flag to automatically answer yes to prompts

sudo yum install docker -y # Install Docker with the -y flag to automatically confirm the installation
   
sudo service docker start # Start the Docker service

sudo service docker status # Check the status of the Docker service

sudo su # Switch to the superuser (root) to execute Docker commands

docker images # List Docker images available on the system

docker pull <image-name> # Pull a Docker image from a container registry (replace "<image-name>" with the actual image name)

docker images # List Docker images available on the system

docker container ls -a # List all Docker containers (including stopped ones)

docker run -d --name <container-name> -p 80:80 <image-name> # Run a Docker container in detached mode with a specified name, mapping port 80 of the host to port 80 of the container (replace "<container-name>" and "<image-name>" with actual names)

docker ps # List running Docker containers

docker logs <container-id> # Display the logs of a specific Docker container (replace "<container-id>" with the actual container ID)

docker stop <container-name> # Stop a specific Docker container (replace "<container-name>" with the actual container name)

docker start <container-name> # Start a specific Docker container (replace "<container-name>" with the actual container name)

docker rm <container-id> # Remove a specific Docker container by ID (replace "<container-id>" with the actual container ID)

docker rm <image-name> # Remove a specific Docker image by name (replace "<image-name>" with the actual image name)