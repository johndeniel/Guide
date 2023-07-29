#!/bin/bash 

# Update the package lists to get the latest information on available packages.
sudo apt update -y

# Upgrade installed packages to their latest versions.
sudo apt upgrade -y 

# Install Git.
sudo apt install git -y

# Check the installed Git version.
git --version