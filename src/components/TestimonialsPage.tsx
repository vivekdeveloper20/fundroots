import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Users, DollarSign, TrendingUp, CheckCircle, MapPin, Calendar, Heart, Award, ThumbsUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai, Maharashtra',
    loanType: 'Personal Loan',
    amount: '₹5,00,000',
    rating: 5,
    date: '2 weeks ago',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'FundRoot made my dream of starting my own bakery possible. The process was so smooth and transparent. I got my loan approved in just 2 days!',
    story: 'I always wanted to start my own bakery but lacked the funds. FundRoot helped me get a personal loan with competitive rates. Their team was supportive throughout the process.',
    benefits: ['Quick Approval', 'Low Interest Rate', 'Transparent Process'],
    verified: true,
    featured: true
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    location: 'Delhi, NCR',
    loanType: 'Home Loan',
    amount: '₹25,00,000',
    rating: 5,
    date: '1 month ago',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'Finally bought my dream home! FundRoot connected me with the best bank and got me an amazing interest rate. Highly recommended!',
    story: 'After years of renting, I finally decided to buy my own home. FundRoot helped me compare different banks and choose the best option.',
    benefits: ['Best Interest Rate', 'Expert Guidance', 'Quick Processing'],
    verified: true,
    featured: true
  },
  {
    id: 3,
    name: 'Anita Patel',
    location: 'Bangalore, Karnataka',
    loanType: 'Business Loan',
    amount: '₹10,00,000',
    rating: 5,
    date: '3 weeks ago',
    avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
    quote: 'Expanded my IT company with FundRoot\'s help. The business loan process was hassle-free and the rates were unbeatable.',
    story: 'My IT startup needed funds for expansion. FundRoot helped me secure a business loan with flexible repayment terms.',
    benefits: ['Flexible Terms', 'Quick Disbursal', 'No Hidden Charges'],
    verified: true,
    featured: false
  },
  {
    id: 4,
    name: 'Vikram Singh',
    location: 'Pune, Maharashtra',
    loanType: 'Car Loan',
    amount: '₹8,00,000',
    rating: 5,
    date: '1 week ago',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    quote: 'Got my dream car with FundRoot\'s car loan. The EMI is affordable and the process was super quick!',
    story: 'I wanted to buy a new car for my family. FundRoot helped me get a car loan with the best terms and lowest EMI.',
    benefits: ['Low EMI', 'Quick Approval', 'Easy Documentation'],
    verified: true,
    featured: false
  },
  {
    id: 5,
    name: 'Sneha Reddy',
    location: 'Hyderabad, Telangana',
    loanType: 'Personal Loan',
    amount: '₹3,00,000',
    rating: 5,
    date: '2 weeks ago',
    avatar: 'https://randomuser.me/api/portraits/women/35.jpg',
    quote: 'FundRoot helped me consolidate my debts. The customer service is outstanding and the rates are very competitive.',
    story: 'I had multiple credit card debts and needed consolidation. FundRoot helped me get a personal loan to pay off all debts.',
    benefits: ['Debt Consolidation', 'Low Interest', 'Great Service'],
    verified: true,
    featured: false
  },
  {
    id: 6,
    name: 'Amit Gupta',
    location: 'Kolkata, West Bengal',
    loanType: 'Home Loan',
    amount: '₹18,00,000',
    rating: 5,
    date: '1 month ago',
    avatar: 'https://randomuser.me/api/portraits/men/38.jpg',
    quote: 'Excellent service! FundRoot made home buying so easy. The team guided me through every step of the process.',
    story: 'Buying a home seemed overwhelming until I found FundRoot. They made the entire process simple and stress-free.',
    benefits: ['Expert Guidance', 'Stress-free Process', 'Best Rates'],
    verified: true,
    featured: false
  }
];

const successStats = [
  {
    icon: Users,
    number: '10,000+',
    label: 'Happy Customers',
    color: 'text-blue-600'
  },
  {
    icon: DollarSign,
    number: '₹500Cr+',
    label: 'Loans Disbursed',
    color: 'text-green-600'
  },
  {
    icon: Star,
    number: '4.9/5',
    label: 'Average Rating',
    color: 'text-yellow-600'
  },
  {
    icon: TrendingUp,
    number: '99%',
    label: 'Approval Rate',
    color: 'text-purple-600'
  }
];

const loanTypes = [
  { name: 'All', count: testimonials.length },
  { name: 'Personal Loan', count: testimonials.filter(t => t.loanType === 'Personal Loan').length },
  { name: 'Home Loan', count: testimonials.filter(t => t.loanType === 'Home Loan').length },
  { name: 'Business Loan', count: testimonials.filter(t => t.loanType === 'Business Loan').length },
  { name: 'Car Loan', count: testimonials.filter(t => t.loanType === 'Car Loan').length }
];

const TestimonialsPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedLoanType, setSelectedLoanType] = useState('All');

  const filteredTestimonials = selectedLoanType === 'All' 
    ? testimonials 
    : testimonials.filter(t => t.loanType === selectedLoanType);

  const featuredTestimonials = testimonials.filter(t => t.featured);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-16 text-center relative overflow-visible">
          <div aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-3xl h-40 md:h-56 blur-2xl opacity-60 pointer-events-none z-0 animate-pulse-glow"
            style={{ background: 'radial-gradient(circle at 60% 40%, #38B00055 0%, #0047AB33 60%, transparent 100%)' }}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 text-primary-700 dark:text-primary-300 drop-shadow-lg text-center">
            Customer <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-success-600 bg-clip-text text-transparent">Success Stories</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto relative z-10">
            Real stories from real customers who achieved their dreams with FundRoot. 
            See how we've helped thousands of Indians secure their financial future.
          </p>
        </header>

        {/* Success Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {successStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2 flex items-center justify-center gap-2`}>
                  <stat.icon className="h-8 w-8" />
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Featured Testimonials */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent">
                Featured Success Stories
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Inspiring stories from our customers who achieved their dreams with our help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-success-500 rounded-full flex items-center justify-center">
                    <Quote className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-center italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center justify-center gap-4 mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-4 border-primary-200 dark:border-primary-700"
                  />
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{testimonial.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <MapPin className="h-4 w-4" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>

                {/* Loan Details */}
                <div className="bg-gradient-to-r from-primary-50 to-success-50 dark:from-primary-900/20 dark:to-success-900/20 rounded-2xl p-6 mb-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">Loan Type</div>
                      <div className="font-semibold text-primary-600 dark:text-primary-400">{testimonial.loanType}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">Amount</div>
                      <div className="font-semibold text-success-600 dark:text-success-400">{testimonial.amount}</div>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">{testimonial.rating}/5</span>
                </div>

                {/* Benefits */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {testimonial.benefits.map((benefit, idx) => (
                    <span key={idx} className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-200 text-xs font-semibold rounded-full">
                      {benefit}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* All Testimonials */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent">
                All Customer Reviews
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Browse through all our customer testimonials and see why they chose FundRoot.
            </p>
          </div>

          {/* Loan Type Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {loanTypes.map((type) => (
              <motion.button
                key={type.name}
                onClick={() => setSelectedLoanType(type.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedLoanType === type.name
                    ? 'bg-gradient-to-r from-primary-500 to-success-500 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 border border-gray-200 dark:border-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {type.name} ({type.count})
              </motion.button>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Customer Header */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-primary-200 dark:border-primary-700"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <MapPin className="h-3 w-3" />
                      {testimonial.location}
                    </div>
                  </div>
                  {testimonial.verified && (
                    <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-xs font-semibold">Verified</span>
                    </div>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">{testimonial.rating}/5</span>
                </div>

                {/* Quote */}
                <blockquote className="text-sm text-gray-700 dark:text-gray-300 mb-4 italic line-clamp-3">
                  "{testimonial.quote}"
                </blockquote>

                {/* Loan Info */}
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-3 mb-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Loan Type:</span>
                    <span className="font-semibold text-primary-600 dark:text-primary-400">{testimonial.loanType}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Amount:</span>
                    <span className="font-semibold text-success-600 dark:text-success-400">{testimonial.amount}</span>
                  </div>
                </div>

                {/* Date */}
                <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  {testimonial.date}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="inline-block bg-gradient-to-r from-primary-500/10 to-success-500/10 dark:from-primary-500/5 dark:to-success-500/5 backdrop-blur-lg border border-primary-200/50 dark:border-primary-800/50 rounded-2xl p-10 shadow-lg">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent">
                Ready to Write Your Success Story?
              </span>
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have achieved their dreams with FundRoot. 
              Let us help you secure the perfect loan for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-primary-500 to-success-500 text-white font-semibold px-8 py-4 rounded-xl shadow hover:from-primary-600 hover:to-success-600 transition-all duration-200 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/apply')}
              >
                Apply for Loan
              </motion.button>
              <motion.button
                className="border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold px-8 py-4 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/check-eligibility')}
              >
                Check Eligibility
              </motion.button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default TestimonialsPage;
