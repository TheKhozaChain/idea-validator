# Idea Validator

A beautiful, production-ready AI-powered SaaS platform for validating ecommerce product ideas. Built with React, Tailwind CSS, and powered by Claude AI.

![Idea Validator](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![React](https://img.shields.io/badge/React-18.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC)

## Overview

Idea Validator helps ecommerce entrepreneurs make data-driven decisions about product ideas before investing time and money. Get comprehensive analysis on market demand, competition, profitability, ad angles, scalability, and risks in minutes.

## Features

- **AI-Powered Analysis** - Leverages Claude AI for comprehensive product validation
- **Market Demand Research** - Analyzes search trends, social validation, and consumer interest
- **Competition Insights** - Identifies competitors and positioning opportunities
- **Profitability Calculations** - Estimates COGS, margins, and unit economics
- **Ad Creative Angles** - Suggests proven marketing angles for your product
- **Risk Assessment** - Identifies potential blockers and policy restrictions
- **Beautiful UI/UX** - Modern, responsive design with smooth animations
- **Mobile First** - Fully responsive on all devices

## Tech Stack

- **Frontend Framework**: React 18.3
- **Routing**: React Router v6
- **Styling**: Tailwind CSS 3.4
- **Build Tool**: Vite 5.4
- **AI Model**: Claude Sonnet 4 (via Anthropic API)
- **Icons**: Lucide React

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Add your Anthropic API key to .env file
# (Copy .env.example to .env and add your key)

# 3. Run the app (frontend + backend)
npm run dev:full
```

Visit `http://localhost:5173` and start validating ideas!

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Anthropic API key ([Get one here](https://console.anthropic.com/))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/idea-validator.git
cd idea-validator
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Add your Anthropic API key to `.env`:
```env
VITE_ANTHROPIC_API_KEY=your_api_key_here
```

### Development

**Option 1: Run frontend and backend together (Recommended)**
```bash
npm run dev:full
```

This will start:
- Frontend dev server at `http://localhost:5173`
- Backend API server at `http://localhost:3001`

**Option 2: Run separately**

Terminal 1 - Frontend:
```bash
npm run dev
```

Terminal 2 - Backend API:
```bash
npm run dev:api
```

The app will be available at `http://localhost:5173`

### Production Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
idea-validator/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation with smooth scroll effects
│   │   ├── Footer.jsx       # Footer with social links
│   │   ├── Landing.jsx      # Landing page with hero, features, testimonials
│   │   └── Validator.jsx    # Main validation component
│   ├── App.jsx              # Main app with routing
│   ├── main.jsx             # App entry point
│   └── index.css            # Global styles with Tailwind
├── api/
│   ├── server.js            # Express API server for development
│   └── validate.js          # Vercel serverless function for production
├── public/                  # Static assets
├── index.html               # HTML entry point
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js           # Vite configuration
├── vercel.json              # Vercel deployment configuration
└── README.md                # This file
```

## Architecture

The application uses a proxy architecture to securely call the Anthropic API:

- **Development**: Express server (`api/server.js`) runs on port 3001 and proxies requests to Anthropic
- **Production**: Vercel serverless function (`api/validate.js`) handles API requests
- **Frontend**: React app detects environment and calls appropriate endpoint

This approach:
- Prevents CORS issues
- Keeps API keys secure (not exposed in browser)
- Works seamlessly in both dev and production

## Key Components

### Landing Page (`/`)
- Hero section with animated gradient background
- Features showcase
- How it works section
- Benefits and testimonials
- Final CTA section

### Validator Page (`/validate`)
- Product idea input form
- Example ideas for quick testing
- Real-time AI analysis
- Comprehensive validation results including:
  - Verdict (Build it / Maybe / Skip it)
  - Market demand analysis
  - Competition overview
  - Profitability breakdown
  - Ad creative angles
  - Scalability assessment
  - Risk analysis
  - Similar products
  - Improvement suggestions

## Design Philosophy

The design follows modern SaaS aesthetics inspired by Linear and Vercel:
- Clean white backgrounds
- Purple/pink gradient accents
- Smooth animations and transitions
- Generous white space
- Clear typography hierarchy
- Mobile-first responsive design

## API Usage

The application uses the Anthropic Claude API with the following configuration:
- Model: `claude-sonnet-4-20250514`
- Max tokens: 4000
- Structured JSON output for consistent results

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_ANTHROPIC_API_KEY` | Your Anthropic API key | Yes |

## Troubleshooting

### "Load failed" error
- **Cause**: CORS issue or API server not running
- **Solution**: Make sure you're running `npm run dev:full` to start both frontend and backend
- **Check**: API server should be running on `http://localhost:3001`

### API key errors
- **Cause**: Missing or invalid API key
- **Solution**:
  1. Copy `.env.example` to `.env`
  2. Add your Anthropic API key to the `.env` file
  3. Restart the servers

### Port already in use
- **Cause**: Port 3001 or 5173 is already in use
- **Solution**: Kill the process using the port or change the port in the configuration

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your `VITE_ANTHROPIC_API_KEY` in Environment Variables
4. Deploy

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Add environment variables in Netlify dashboard

### Other Platforms

The build output in the `dist` folder can be deployed to any static hosting service.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Support

For support, please open an issue in the GitHub repository.

## Acknowledgments

- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Powered by [Anthropic Claude AI](https://www.anthropic.com/)
- Icons by [Lucide](https://lucide.dev/)

---

Made with ❤️ for ecommerce entrepreneurs
