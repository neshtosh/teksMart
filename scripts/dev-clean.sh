#!/bin/bash

# Clean development script for TeqSmart
echo "🧹 Cleaning Next.js cache and node_modules..."

# Remove Next.js cache
rm -rf .next

# Remove node_modules and reinstall (optional - uncomment if needed)
# rm -rf node_modules
# npm install

echo "🚀 Starting development server..."
npm run dev

