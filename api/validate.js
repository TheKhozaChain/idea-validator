// Vercel Serverless Function
export default async function handler(req, res) {
  // Configure CORS - restrict to your domain in production
  const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:5174',
    'https://idea-validator-kappa.vercel.app',
    'https://idea-validator-git-main-siphos-projects-12c71fff.vercel.app',
  ];

  // Allow all Vercel preview deployments for this project
  const isVercelPreview = req.headers.origin?.includes('idea-validator') &&
                          req.headers.origin?.includes('vercel.app');

  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin) || isVercelPreview) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Accept'
  );

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { prompt } = req.body;

    // Input validation
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    if (typeof prompt !== 'string') {
      return res.status(400).json({ error: 'Prompt must be a string' });
    }

    // Limit prompt length to prevent abuse (max ~50k chars for reasonable product descriptions)
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

      // Don't leak sensitive error details in production
      const isProduction = process.env.NODE_ENV === 'production';
      return res.status(response.status).json({
        error: isProduction
          ? 'Unable to process your request. Please try again.'
          : errorData.error?.message || 'API request failed',
      });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Server error:', error);

    // Don't leak sensitive error details in production
    const isProduction = process.env.NODE_ENV === 'production';
    res.status(500).json({
      error: isProduction
        ? 'Internal server error. Please try again later.'
        : error.message || 'Internal server error',
    });
  }
}
