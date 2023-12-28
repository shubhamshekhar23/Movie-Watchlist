#!/bin/bash

# Run build
npm run build

# Stage the dist directory
git add dist -f

# Commit changes
git commit -am "deploying changes"

git push origin :gh-pages

# Push to gh-pages branch using git subtree
git subtree push --prefix dist origin gh-pages
