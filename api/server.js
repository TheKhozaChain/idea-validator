import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// CORS configuration - only allow specific origins
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      'http://localhost:5173',
      'http://localhost:5174',
      'http://localhost:3000',
    ];
    // Allow requests with no origin (like mobile apps or curl requests) in development
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json({ limit: '1mb' })); // Limit request body size

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API server is running' });
});

// Validate idea endpoint
app.post('/api/validate', async (req, res) => {
  try {
    const { prompt } = req.body;

    // Input validation
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    if (typeof prompt !== 'string') {
      return res.status(400).json({ error: 'Prompt must be a string' });
    }

    // Limit prompt length to prevent abuse
    if (prompt.length > 50000) {
      return res.status(400).json({ error: 'Prompt is too long. Maximum 50,000 characters.' });
    }

    // Check for minimum length
    if (prompt.trim().length < 10) {
      return res.status(400).json({ error: 'Prompt is too short. Please provide more details.' });
    }

    const apiKey = process.env.VITE_ANTHROPIC_API_KEY;

    if (!apiKey) {
      console.error('API key not configured');
      return res.status(500).json({ error: 'API key not configured' });
    }

    console.log('Making request to Anthropic API...');

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 4000,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Anthropic API error:', errorData);
      return res.status(response.status).json({
        error: errorData.error?.message || 'API request failed',
      });
    }

    const data = await response.json();
    console.log('Successfully received response from Anthropic API');

    res.json(data);
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({
      error: error.message || 'Internal server error',
    });
  }
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});
