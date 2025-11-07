# Quick Start Guide

## 1. Run the Application

```bash
npm run dev:full
```

This starts both:
- **Backend API**: http://localhost:3001
- **Frontend**: http://localhost:5173 (or 5174 if 5173 is in use)

## 2. Open Your Browser

Visit: **http://localhost:5173** (check terminal for actual port)

## 3. Test Validation

1. Click **"Validate Idea"** in the navigation
2. Try one of the example ideas like "Smart water bottles that track hydration"
3. Click **"Validate My Idea"**
4. Wait ~5-10 seconds for AI analysis
5. View your comprehensive validation report!

## Troubleshooting

### If you get "Load failed"

Make sure both servers are running:
```bash
npm run dev:full
```

### If ports are in use

Kill processes:
```bash
# Kill port 3001 (API)
lsof -ti:3001 | xargs kill -9

# Kill port 5173 (Frontend)
lsof -ti:5173 | xargs kill -9
```

Then restart:
```bash
npm run dev:full
```

## What's Working

✅ Backend API server (Express)
✅ Frontend dev server (Vite + React)
✅ Anthropic Claude AI integration
✅ Beautiful SaaS UI with animations
✅ Mobile responsive design
✅ Full validation functionality

## Next Steps

- Customize the design colors in `tailwind.config.js`
- Update social links in `Footer.jsx`
- Deploy to Vercel (it's already configured!)
