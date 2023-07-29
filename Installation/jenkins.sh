#!/bin/bash

# Update the package lists to get the latest information on available packages.
sudo apt update -y

# Upgrade installed packages to their latest versions.
sudo apt upgrade -y

# Install the OpenJDK 17 runtime environment. Jenkins requires Java to run.
sudo apt install openjdk-17-jre -y

# Fetch the Jenkins repository key and store it in the keyring.
curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key | sudo tee \
  /usr/share/keyrings/jenkins-keyring.asc > /dev/null

# Add the Jenkins repository URL to the list of package sources.
echo "deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
   https://pkg.jenkins.io/debian-stable binary/" | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null

# Update the package lists again to include the Jenkins repository.
sudo apt-get update -y

# Install Jenkins from the newly added repository.
sudo apt-get install jenkins -y

# Display the initial administrator password for Jenkins setup.
echo "Jenkins initial administrator password:"
sudo cat /var/lib/jenkins/secrets/initialAdminPassword