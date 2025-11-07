import React from 'react';
import { Link } from 'react-router-dom';
import {
  Lightbulb,
  TrendingUp,
  DollarSign,
  Zap,
  Target,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Shield,
  Clock,
} from 'lucide-react';

export default function Landing() {
  const features = [
    {
      icon: TrendingUp,
      title: 'Market Analysis',
      description: 'Deep dive into market demand, search trends, and consumer interest with real-time data.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Target,
      title: 'Competition Insights',
      description: 'Analyze your competitors, identify gaps, and discover opportunities to differentiate.',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      icon: DollarSign,
      title: 'Profitability Check',
      description: 'Calculate realistic margins, COGS, and determine if your idea can scale profitably.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Zap,
      title: 'Ad Creative Angles',
      description: 'Get 3-5 proven ad angles that can drive scroll-stopping direct-response campaigns.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      icon: Shield,
      title: 'Risk Assessment',
      description: 'Identify potential blockers, policy issues, and fulfillment challenges before launch.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Clock,
      title: 'Instant Results',
      description: 'Get comprehensive validation in minutes, not weeks of manual research.',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
    },
  ];

  const benefits = [
    'Brutally honest AI-powered analysis',
    'Data-driven market research',
    'Competitor positioning insights',
    'Profitability calculations',
    'Creative ad angle suggestions',
    'Risk & restriction analysis',
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Ecommerce Entrepreneur',
      text: 'This tool saved me from investing $10k into a saturated market. The analysis was spot-on and helped me pivot to a winning product.',
      avatar: '👩‍💼',
    },
    {
      name: 'Marcus Johnson',
      role: 'Dropshipping Expert',
      text: "I've validated 50+ ideas with this tool. It's like having an expert consultant on demand. The ad angles alone are worth it.",
      avatar: '👨‍💻',
    },
    {
      name: 'Emily Rodriguez',
      role: 'DTC Brand Owner',
      text: 'The profitability analysis helped me negotiate better supplier rates. Now my margins are exactly where they need to be.',
      avatar: '👩‍🚀',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-white" />

        {/* Animated circles */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '1s' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200 shadow-sm mb-8 animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">
                AI-Powered Ecommerce Validation
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in-up leading-tight" style={{ animationDelay: '0.1s' }}>
              Validate Your{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Product Ideas
              </span>{' '}
              Before You Build
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Get brutally honest, AI-powered validation for your ecommerce ideas.
              Stop wasting time and money on products that won't sell.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Link
                to="/validate"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Validate Your Idea Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#features"
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 rounded-lg font-bold text-lg transition-all border-2 border-gray-200 hover:border-gray-300"
              >
                See How It Works
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Instant Results</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Data-Driven Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>No Credit Card Required</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Make Smart Decisions
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Comprehensive analysis in minutes, not weeks of manual research
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Simple 3-Step Process
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              From idea to validation in under 5 minutes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                step: '01',
                title: 'Enter Your Idea',
                description: 'Describe your product idea in a few words or sentences',
                icon: Lightbulb,
              },
              {
                step: '02',
                title: 'AI Analysis',
                description: 'Our AI analyzes markets, competitors, profitability, and more',
                icon: Sparkles,
              },
              {
                step: '03',
                title: 'Get Your Verdict',
                description: 'Receive a comprehensive report with actionable insights',
                icon: CheckCircle,
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl mb-6 shadow-lg">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-5xl font-bold text-purple-200 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-purple-300 to-pink-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Stop Guessing,{' '}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Start Validating
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Every successful ecommerce business starts with a validated idea.
                Our AI-powered platform gives you the insights you need to make
                confident decisions.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 shadow-2xl">
                <div className="h-full flex flex-col justify-center items-center text-center">
                  <Lightbulb className="w-24 h-24 text-purple-600 mb-6 animate-float" />
                  <p className="text-2xl font-bold text-gray-900 mb-2">
                    Save Time & Money
                  </p>
                  <p className="text-gray-600">
                    Validate ideas in minutes instead of spending weeks and thousands on failed products
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Entrepreneurs
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              See what successful founders are saying
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-purple-200 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-bold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Validate Your Next Big Idea?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Join thousands of entrepreneurs who are making smarter decisions with AI-powered validation
          </p>
          <Link
            to="/validate"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-purple-600 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-2xl hover:shadow-3xl"
          >
            Get Started Free
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
