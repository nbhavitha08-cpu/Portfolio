# Railway Deployment - Simple Guide

## 🎯 SIMPLEST METHOD: Use This Configuration

Since Railway settings aren't showing the options, let's use a different approach.

### Method 1: Deploy Using Dockerfile (Recommended)

1. **Delete your current Railway service** (if it exists)
   - Go to your Railway project
   - Click on the failing service
   - Settings → Danger Zone → Delete Service

2. **Create NEW service:**
   - Click "New" → "Empty Service"
   - Don't select GitHub yet

3. **Connect to GitHub:**
   - Click on the empty service
   - Click "Connect to GitHub"
   - Select your repository
   - **Important:** After connecting, Railway will show settings

4. **Configure the service:**
   - In the service card, click "Settings"
   - Look for "Source" or "Build" section
   - Set **Root Directory**: `backend`
   - Look for "Dockerfile Path" and set it to: `Dockerfile.backend`

5. **Add Environment Variables:**
   - Click "Variables" tab
   - Add:
     - `MONGO_URL` = your mongodb connection string
     - `DB_NAME` = portfolio

6. **Deploy:**
   - Railway will automatically deploy
   - Or click "Deploy" button

---

### Method 2: Deploy from Railway Dashboard with Template

1. **Go to Railway Dashboard**

2. **Click "New Project"**

3. **Select "Empty Project"**

4. **Click "Deploy from GitHub repo"**

5. **Select your repository**

6. **Railway will ask for configuration:**
   - Service name: `portfolio-backend`
   - Root directory: `backend`
   
7. **Click "Deploy"**

8. **After deployment starts, go to Variables tab**
   - Add MONGO_URL
   - Add DB_NAME

---

### Method 3: Push a Railway-Specific Config File

I'll create a file that Railway will automatically detect:
