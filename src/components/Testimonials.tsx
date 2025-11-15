import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      city: 'Mumbai',
      rating: 5,
      text: "FundRoot made my business loan process incredibly smooth. Got ₹15 lakhs approved within 24 hours for my manufacturing unit expansion. The transparency and quick disbursal exceeded my expectations.",
      loanType: 'Business Loan',
      amount: '₹15 Lakhs',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Priya Sharma',
      city: 'Delhi',
      rating: 5,
      text: "Needed urgent funds for my daughter's education. FundRoot's personal loan process was hassle-free and the interest rates were very competitive. Highly recommend their services!",
      loanType: 'Personal Loan',
      amount: '₹8 Lakhs',
      image: 'https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Amit Patel',
      city: 'Bangalore',
      rating: 5,
      text: "Excellent service for home loan! The team guided me through every step and helped me get the best interest rate. My dream home is now a reality thanks to FundRoot.",
      loanType: 'Home Loan',
      amount: '₹45 Lakhs',
      image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Sneha Reddy',
      city: 'Hyderabad',
      rating: 5,
      text: "Got my car loan approved in just 4 hours! The digital process was seamless and the customer support team was very helpful throughout. Great experience with FundRoot.",
      loanType: 'Car Loan',
      amount: '₹12 Lakhs',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Vikram Singh',
      city: 'Pune',
      rating: 5,
      text: "As an MSME owner, getting loans was always challenging. FundRoot understood my business needs and provided the perfect financing solution for my textile business expansion.",
      loanType: 'MSME Loan',
      amount: '₹25 Lakhs',
      image: 'https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating 
            ? 'text-yellow-400 fill-yellow-400' 
            : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6">
            What Our
            <span className="bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent"> Clients Say</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about their FundRoot experience.
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-white/50 dark:border-gray-700/50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-12 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Quote Icon */}
                <div className="bg-gradient-to-r from-primary-500 to-success-500 p-4 rounded-full inline-flex mb-8">
                  <Quote className="h-8 w-8 text-white" />
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 sm:mb-8 italic px-2 sm:px-0">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Rating */}
                <div className="flex justify-center gap-1 mb-4 sm:mb-6">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>

                {/* Customer Info */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover border-2 sm:border-4 border-gradient-to-r from-primary-500 to-success-500"
                    />
                    <div className="text-left">
                      <h4 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
                        {testimonials[currentIndex].name}
                      </h4>
                      <div className="flex items-center gap-1 text-sm sm:text-base text-gray-500 dark:text-gray-400">
                        <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>{testimonials[currentIndex].city}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <div className="bg-primary-100 dark:bg-primary-900/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                      <span className="text-xs sm:text-sm text-primary-600 dark:text-primary-400 font-semibold">
                        {testimonials[currentIndex].loanType}
                      </span>
                    </div>
                    <div className="bg-success-100 dark:bg-success-900/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                      <span className="text-xs sm:text-sm text-success-600 dark:text-success-400 font-semibold">
                        {testimonials[currentIndex].amount}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                onClick={prevTestimonial}
                className="bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm border border-white/50 dark:border-gray-600/50 p-3 rounded-full hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              </motion.button>
              <motion.button
                onClick={nextTestimonial}
                className="bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm border border-white/50 dark:border-gray-600/50 p-3 rounded-full hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              </motion.button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-primary-500 to-success-500 w-8'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Google Reviews Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 dark:from-blue-500/5 dark:to-green-500/5 backdrop-blur-lg border border-blue-200/50 dark:border-blue-800/50 rounded-2xl p-6 inline-block">
            <div className="flex items-center gap-4">
              <div className="bg-white p-3 rounded-lg shadow-md">
                <img 
                  src="https://cdn.worldvectorlogo.com/logos/google-g-2015.svg" 
                  alt="Google" 
                  className="h-8 w-8"
                />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl font-bold text-gray-800 dark:text-white">4.9</span>
                  <div className="flex gap-1">
                    {renderStars(5)}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Based on <span className="font-semibold">1,250+ Google Reviews</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;