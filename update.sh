#!/bin/bash
echo "Pulling latest changes..."
git pull

echo "Installing dependencies..."
npm install

echo "Building Next.js project..."
npm run build

echo "Restarting PM2..."
pm2 reload next-app

echo "Update complete!" 