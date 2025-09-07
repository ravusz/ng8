# Project Setup Instructions

This guide explains how to set up and run the projects **host-ng8** and **remote-details**.

## 1. Install dependencies for host-ng8

Navigate to the `host-ng8` directory and install dependencies using legacy peer deps:

cd host-ng8
npm install --legacy-peer-deps

## 2. Install dependencies for remote-details

Navigate to the remote-details directory and install dependencies normally:

cd ../remote-details
npm install

## 3. Build remote-details

Still in the remote-details directory, build the project:

npm run build

## 4. Serve host-ng8

Go back to the host-ng8 directory and start the development server:

cd ../host-ng8
npm run start