# Railway Deployment Guide for Bhavitha's Portfolio

## 🚂 Option 1: Deploy as Separate Services (RECOMMENDED)

### Step 1: Deploy Backend

1. **Create New Project in Railway**
   - Go to https://railway.app
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository

2. **Configure Backend Service**
   - Service Name: `portfolio-backend`
   - Root Directory: `/backend`
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `uvicorn server:app --host 0.0.0.0 --port $PORT`
   - Or use Dockerfile: Select `Dockerfile.backend`

3. **Set Environment Variables**
   ```
   MONGO_URL=mongodb+srv://your-mongodb-url
   DB_NAME=portfolio
   CORS_ORIGINS=https://your-frontend-url.railway.app
   ```

4. **Deploy**
   - Railway will give you a URL like: `https://portfolio-backend-xxx.railway.app`
   - Copy this URL!

### Step 2: Deploy Frontend

1. **Add New Service to Same Project**
   - Click "New" → "GitHub Repo" (same repo)
   
2. **Configure Frontend Service**
   - Service Name: `portfolio-frontend`
   - Root Directory: `/frontend`
   - Build Command: `yarn install && yarn build`
   - Start Command: `npx serve -s build -l $PORT`
   - Or use Dockerfile: Select `Dockerfile.frontend`

3. **Set Environment Variables**
   ```
   REACT_APP_BACKEND_URL=https://portfolio-backend-xxx.railway.app
   ```
   (Use the backend URL from Step 1)

4. **Deploy**
   - Your portfolio will be live! 🎉

---

## 🚂 Option 2: Use Railway Template (Easier)

1. **Deploy Backend First**
   - Create new project
   - Select "Empty Project"
   - Click "Deploy from Dockerfile"
   - Select `Dockerfile.backend`
   - Add environment variables

2. **Deploy Frontend**
   - In same project, add new service
   - Select "Deploy from Dockerfile"
   - Select `Dockerfile.frontend`
   - Add environment variables

---

## 📦 MongoDB Setup Options

### Option A: Railway MongoDB (In same project)
1. Click "New" → "Database" → "Add MongoDB"
2. Railway will provide MONGO_URL automatically
3. Use this in backend environment variables

### Option B: MongoDB Atlas (Recommended - Free)
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free cluster
3. Get connection string
4. Add to Railway environment variables

---

## 🔧 Environment Variables Reference

### Backend (.env)
```
MONGO_URL=your_mongodb_connection_string
DB_NAME=portfolio
CORS_ORIGINS=https://your-frontend.railway.app
PORT=8001
```

### Frontend (.env)
```
REACT_APP_BACKEND_URL=https://your-backend.railway.app
PORT=3000
```

---

## 🐛 Common Issues & Fixes

### Issue 1: "Error creating build plan with Railpack"
**Solution:** Use Dockerfiles or specify root directory

### Issue 2: Frontend can't connect to backend
**Solution:** 
- Check CORS_ORIGINS in backend includes frontend URL
- Check REACT_APP_BACKEND_URL in frontend points to backend

### Issue 3: MongoDB connection fails
**Solution:**
- Whitelist all IPs (0.0.0.0/0) in MongoDB Atlas
- Check MONGO_URL format is correct

### Issue 4: Build succeeds but app crashes
**Solution:**
- Check logs in Railway dashboard
- Ensure PORT environment variable is used
- Verify all dependencies are in requirements.txt/package.json

---

## ✅ Checklist Before Deploying

- [ ] MongoDB database created and accessible
- [ ] MONGO_URL ready
- [ ] Both Dockerfiles tested locally (optional)
- [ ] Environment variables prepared
- [ ] CORS configured for production URLs

---

## 🎯 Quick Deploy Commands

If you want to test Dockerfiles locally first:

### Backend:
```bash
cd /app
docker build -f Dockerfile.backend -t portfolio-backend .
docker run -p 8001:8001 -e MONGO_URL="your_url" -e PORT=8001 portfolio-backend
```

### Frontend:
```bash
cd /app
docker build -f Dockerfile.frontend -t portfolio-frontend .
docker run -p 3000:3000 -e PORT=3000 portfolio-frontend
```

---

## 📞 Need Help?

If you're still getting errors:
1. Check Railway logs (click "View logs" button)
2. Share the specific error message
3. Verify all environment variables are set correctly

Your portfolio is ready to deploy! 🚀
