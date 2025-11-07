import React, { useState } from 'react';
import { Lightbulb, TrendingUp, DollarSign, Zap, AlertTriangle, Target } from 'lucide-react';

export default function Validator() {
  const [idea, setIdea] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const exampleIdeas = [
    "Smart water bottles that track hydration",
    "Eco-friendly reusable food wraps",
    "Posture-correcting laptop stands",
    "Pet GPS tracking collars",
    "Magnetic phone mounts for cars"
  ];

  const validateIdea = async () => {
    if (!idea.trim()) {
      setError('Please enter a product idea first!');
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const prompt = `You are an expert ecommerce strategist with years of experience validating dropshipping and DTC product ideas. You help entrepreneurs avoid costly mistakes by providing brutally honest analysis.

A user wants to validate this ecommerce product idea:
"${idea}"

Your task: Evaluate this product using the comprehensive framework below, then provide a clear verdict.

## Evaluation Framework

Conduct a comprehensive analysis using all six criteria below, then deliver a structured verdict.

### 1. Market Demand & Trends

Assess consumer interest and momentum:

- **Search volume**: Use web_search to check if people are actively searching for the product or related terms
- **Social validation**: Search TikTok, Instagram, Reddit, and niche forums for organic mentions, UGC, and discussions
- **Trend trajectory**: Identify if interest is growing, stable, or declining (check Google Trends when possible)
- **Seasonal factors**: Note if demand is seasonal or year-round

**Red flags**: No organic social content, declining search interest, purely seasonal with short windows

### 2. Competitor Landscape

Understand who's already in the market and how they're positioned:

- **Direct competitors**: Search for businesses selling the exact product and analyze their positioning
- **Facebook Ads Library**: Check fb ads library to see if competitors are running ads (indicates profitability)
- **Pricing analysis**: Identify the typical price range competitors are selling at
- **Marketing gaps**: Look for weaknesses in competitor messaging, creative quality, offers, or customer complaints
- **Market saturation**: Assess if the market is oversaturated or has room for a new entrant with a unique angle

**Opportunities**: Weak creative, poor UX, no clear unique angle, consistent negative reviews

### 3. Profitability & COGS

Estimate unit economics realistically:

- **Sourcing cost**: Search for typical wholesale/manufacturing costs (Alibaba, AliExpress, supplier sites)
- **Selling price**: Based on competitor analysis, determine realistic retail price
- **Gross margin**: Calculate (Selling Price - COGS) / Selling Price
- **Ad profitability threshold**: Estimate if 40-60% gross margin allows room for 20-30% ad spend to CAC
- **Shipping & fulfillment**: Factor in weight, fragility, and fulfillment complexity

**Minimum viable margin**: Generally 50%+ gross margin needed for paid ad sustainability

### 4. Ad Angles & Creative Potential

Determine if the product can drive scroll-stopping direct-response ads:

- **Visual appeal**: Does the product create interesting before/after, transformation, or demo content?
- **Hook potential**: Identify 3-5 strong angles that could work for video ads:
  - Problem-solution (pain point → relief)
  - Social proof (testimonials, UGC)
  - Comparison (vs. alternatives)
  - Urgency/scarcity (limited time, exclusive)
  - Educational (how-to, demonstration)
- **UGC viability**: Can customers naturally create authentic content with this product?
- **Ad fatigue risk**: Will creative angles burn out quickly or is there creative depth?

**Strong indicators**: Multiple unique angles, naturally visual product, emotional resonance, demo-able

### 5. Scalability & Longevity

Assess whether this product can sustain long-term growth:

- **Product lifecycle**: Is this a fleeting trend (3-6 months), seasonal (annual), or evergreen?
- **Purchase frequency**: One-time purchase or repeat/subscription potential?
- **Expansion opportunities**: Can you build a product line or ecosystem around it?
- **Scaling constraints**: Inventory complexity, supply chain fragility, customer support burden

**Ideal profile**: Evergreen with repeat purchase potential or clear expansion path to product line

### 6. Risks & Restrictions

Identify potential blockers before launch:

- **Meta policy issues**: Check if the product category has restrictions:
  - Health claims, supplements, medical devices (heavily restricted)
  - Adult products, weapons, tobacco (banned)
  - Before/after claims without disclaimers (flagged)
  - Questionable efficacy claims (rejected)
- **Fulfillment challenges**: Fragile, perishable, oversized, hazmat, customs issues
- **Return risk**: Products with high return rates (sizing issues, expectation mismatches)
- **Liability concerns**: Safety issues, regulatory compliance, warranty requirements
- **Reputation risks**: Dropshipping stigma, ethical concerns, sustainability questions

**Dealbreakers**: Meta policy violations, unmanageable return rates, legal/liability exposure

## Research Process

When evaluating a product idea, follow this workflow:

1. **Clarify the idea**: Ensure you understand exactly what product is being proposed
2. **Market demand research**: Search for evidence of consumer interest and trend data
3. **Competitor analysis**: Identify 3-5 direct competitors and analyze their approach
4. **Profitability estimation**: Research COGS and calculate realistic margins
5. **Creative brainstorm**: Generate 3-5 potential ad angles based on product benefits
6. **Risk assessment**: Check for policy restrictions and fulfillment challenges
7. **Synthesize verdict**: Weigh all factors to reach a clear Build/Maybe/Skip recommendation

Use web_search extensively to gather real data rather than speculation. Check multiple sources.

## Output Format

IMPORTANT: Your ENTIRE response must be ONLY a single, valid JSON object. DO NOT include any text outside of the JSON structure, including backticks or explanations.

Deliver analysis in this exact JSON structure:

{
  "verdict": "🟢 Build it" OR "🟡 Maybe" OR "🔴 Skip it",
  "summary": "2-3 sentence summary explaining the core reasoning behind the verdict. Focus on the decisive factors.",
  "marketDemand": "Brief analysis with supporting data",
  "competition": "Key competitors and positioning gaps",
  "profitability": {
    "description": "Overview of profitability",
    "cogs": "Estimated COGS: $X",
    "sellingPrice": "Realistic selling price: $Y",
    "margin": "Gross margin: Z%"
  },
  "adAngles": [
    "Angle 1: Hook description",
    "Angle 2: Hook description",
    "Angle 3: Hook description"
  ],
  "scalability": "Long-term viability assessment",
  "risks": "Critical blockers or concerns",
  "similarProducts": [
    "Competitor 1 with brief description",
    "Competitor 2 with brief description"
  ],
  "improvements": [
    "Actionable suggestion 1",
    "Actionable suggestion 2"
  ]
}

## Decision Criteria

Use these thresholds to guide verdict:

**🟢 Build it** - Strong product with 4+ positive signals:
- Clear growing demand with social validation
- Healthy margins (50%+ gross)
- Multiple strong ad angles
- Manageable competition or clear differentiation angle
- No major policy/fulfillment risks
- Sustainable longevity (not just a flash trend)

**🟡 Maybe** - Mixed signals requiring deeper investigation:
- Moderate demand but unclear trajectory
- Margins are workable but tight (40-50%)
- Some ad potential but limited creative depth
- Heavy competition but possible differentiation
- Minor risks that could be mitigated
- Consider pivoting the angle or product variation

**🔴 Skip it** - Multiple red flags:
- No evidence of organic demand
- Margins too thin (<40%) to profitably scale with ads
- No obvious ad angles or visual appeal
- Oversaturated market with no differentiation path
- Meta policy violations or major fulfillment risks
- Purely trend-driven with short runway

## Critical Reminders

- **Be brutally honest**: The goal is to save the user time and money, not validate every idea
- **Use real data**: Always search for actual evidence rather than making assumptions
- **Think like a media buyer**: Would this product convert on cold traffic with video ads?
- **Consider opportunity cost**: Is this the best use of time compared to other ideas?
- **Focus on decisive factors**: Don't bury the verdict in nuance—be direct about dealbreakers

REMINDER: Output ONLY valid JSON. No markdown, no explanations, no text outside the JSON object.`;

      // Call the API proxy instead of Anthropic directly
      const apiEndpoint = import.meta.env.DEV
        ? 'http://localhost:3001/api/validate'
        : '/api/validate';

      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`API request failed: ${response.status} - ${errorData.error || 'Unknown error'}`);
      }

      const data = await response.json();
      let responseText = data.content[0].text;

      // Strip markdown code blocks if present
      responseText = responseText.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();

      const parsedResult = JSON.parse(responseText);
      setResult(parsedResult);
    } catch (err) {
      console.error("Error validating idea:", err);
      setError(err.message || "Something went wrong. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  const getVerdictColor = (verdict) => {
    if (verdict.includes('🟢')) return 'from-green-500 to-emerald-600';
    if (verdict.includes('🟡')) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-rose-600';
  };

  const getVerdictIcon = (verdict) => {
    if (verdict.includes('🟢')) return '🚀';
    if (verdict.includes('🟡')) return '🤔';
    return '⛔';
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Lightbulb className="w-12 h-12 text-purple-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Validate Your Idea
            </h1>
          </div>
          <p className="text-xl text-gray-600">
            Get brutally honest feedback on your ecommerce product ideas
          </p>
        </div>

        {/* Input Section */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-gray-100 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <label className="block text-lg font-semibold mb-3 text-gray-900">
            What's your product idea?
          </label>
          <textarea
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="E.g., Magnetic charging cables for all devices..."
            className="w-full h-32 px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition-all"
          />

          <div className="flex flex-wrap gap-2 mt-4 mb-6">
            <span className="text-sm text-gray-500 font-medium">Try:</span>
            {exampleIdeas.map((example, idx) => (
              <button
                key={idx}
                onClick={() => setIdea(example)}
                className="text-sm px-3 py-1.5 bg-gray-100 hover:bg-purple-50 border border-gray-300 hover:border-purple-300 rounded-full transition-all text-gray-700 hover:text-purple-700"
              >
                {example}
              </button>
            ))}
          </div>

          <button
            onClick={validateIdea}
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-bold text-lg transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Analyzing your idea...
              </span>
            ) : (
              'Validate My Idea'
            )}
          </button>

          {error && (
            <div className="mt-4 p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-700 animate-fade-in">
              {error}
            </div>
          )}
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6 animate-fade-in">
            {/* Verdict Card */}
            <div className={`bg-gradient-to-r ${getVerdictColor(result.verdict)} rounded-2xl p-8 shadow-xl text-white`}>
              <div className="flex items-center gap-4">
                <span className="text-6xl">{getVerdictIcon(result.verdict)}</span>
                <div>
                  <h2 className="text-3xl font-bold">{result.verdict}</h2>
                  <p className="text-white/95 mt-2 text-lg">{result.summary}</p>
                </div>
              </div>
            </div>

            {/* Analysis Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Market Demand */}
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-100 hover:border-blue-200 transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">Market Demand</h3>
                </div>
                <p className="text-gray-700">{result.marketDemand}</p>
              </div>

              {/* Competition */}
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-100 hover:border-red-200 transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-6 h-6 text-red-600" />
                  <h3 className="text-xl font-bold text-gray-900">Competition</h3>
                </div>
                <p className="text-gray-700">{result.competition}</p>
              </div>

              {/* Profitability */}
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-100 hover:border-green-200 transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <DollarSign className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-900">Profitability</h3>
                </div>
                <p className="text-gray-700 mb-3">{result.profitability.description}</p>
                <div className="space-y-2 text-sm bg-gray-50 p-3 rounded-lg">
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-medium">COGS:</span>
                    <span className="text-gray-900">{result.profitability.cogs}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-medium">Selling Price:</span>
                    <span className="text-gray-900">{result.profitability.sellingPrice}</span>
                  </div>
                  <div className="flex justify-between font-bold pt-2 border-t border-gray-200">
                    <span className="text-gray-700">Margin:</span>
                    <span className="text-gray-900">{result.profitability.margin}</span>
                  </div>
                </div>
              </div>

              {/* Scalability */}
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-100 hover:border-yellow-200 transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-6 h-6 text-yellow-600" />
                  <h3 className="text-xl font-bold text-gray-900">Scalability</h3>
                </div>
                <p className="text-gray-700">{result.scalability}</p>
              </div>
            </div>

            {/* Ad Angles */}
            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Ad Creative Angles</h3>
              <div className="space-y-3">
                {result.adAngles.map((angle, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {idx + 1}
                    </span>
                    <p className="text-gray-700">{angle}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Risks */}
            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-100 hover:border-orange-200 transition-all">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
                <h3 className="text-xl font-bold text-gray-900">Risks & Restrictions</h3>
              </div>
              <p className="text-gray-700">{result.risks}</p>
            </div>

            {/* Similar Products */}
            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Similar Products in Market</h3>
              <ul className="space-y-2">
                {result.similarProducts.map((product, idx) => (
                  <li key={idx} className="text-gray-700 flex gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>{product}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Improvements */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">How to Make This Stronger</h3>
              <ul className="space-y-3">
                {result.improvements.map((improvement, idx) => (
                  <li key={idx} className="text-gray-800 flex gap-3">
                    <span className="flex-shrink-0 text-2xl">💡</span>
                    <span>{improvement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Try Another */}
            <button
              onClick={() => {
                setResult(null);
                setIdea('');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full py-4 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white rounded-lg font-semibold transition-all transform hover:scale-[1.02] shadow-lg"
            >
              Validate Another Idea
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
