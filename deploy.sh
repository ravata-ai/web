#!/bin/bash

# Airavata Website Deployment Script
echo "🚀 Deploying Airavata website to GitHub Pages..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing git repository..."
    git init
fi

# Add all files
echo "📦 Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy Airavata website to GitHub Pages"

# Check if remote exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "⚠️  No remote repository found!"
    echo "Please add your GitHub repository:"
    echo "git remote add origin https://github.com/YOUR-USERNAME/airavata-web-page.git"
    exit 1
fi

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push origin main

echo "✅ Deployment complete!"
echo "🌐 Your website will be available at:"
echo "   https://YOUR-USERNAME.github.io/airavata-web-page/"
echo ""
echo "📝 Next steps:"
echo "1. Go to your repository Settings → Pages"
echo "2. Select 'GitHub Actions' as source"
echo "3. Wait for the deployment to complete"
echo "4. Visit your live website!"
