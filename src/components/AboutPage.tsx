import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, User, Users } from 'lucide-react';

const team = [
  { name: 'Rohan Sharma', role: 'Founder & CEO', img: 'https://randomuser.me/api/portraits/men/50.jpg', quote: 'Visionary leader with a passion for fintech.', linkedin: '#', twitter: '#' },
  { name: 'Priya Verma', role: 'COO', img: 'https://randomuser.me/api/portraits/women/51.jpg', quote: 'Operational excellence is my mantra.', linkedin: '#', twitter: '#' },
  { name: 'Amit Singh', role: 'CTO', img: 'https://randomuser.me/api/portraits/men/52.jpg', quote: 'Building scalable tech for a better tomorrow.', linkedin: '#', twitter: '#' },
  { name: 'Sneha Patel', role: 'Head of Customer Success', img: 'https://randomuser.me/api/portraits/women/53.jpg', quote: 'Customer happiness is our true metric.', linkedin: '#', twitter: '#' },
];

const AboutPage: React.FC = () => (
  <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
    <div>
      <header className="mb-12 text-center relative overflow-visible">
        <div aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-3xl h-40 md:h-56 blur-2xl opacity-60 pointer-events-none z-0 animate-pulse-glow"
          style={{ background: 'radial-gradient(circle at 60% 40%, #38B00055 0%, #0047AB33 60%, transparent 100%)' }}
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 text-primary-700 dark:text-primary-300 drop-shadow-lg text-center">
          About <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-success-600 bg-clip-text text-transparent">FundRoot</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto relative z-10">
          Empowering your financial journey with trust, transparency, and technology. Learn more about our mission, vision, and the team behind FundRoot.
        </p>
      </header>

      {/* Modern About FundRoot Section */}
      <section className="mb-16 flex flex-col lg:flex-row items-center bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-2xl px-8 py-12 gap-10 max-w-6xl mx-auto border border-primary-100 dark:border-primary-800">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col justify-center items-start">
          <span className="text-primary-600 font-bold uppercase mb-2 tracking-widest text-sm">About Us</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white leading-tight">
            Empowering India's Dreams<br />with <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-success-600 bg-clip-text text-transparent">Digital Loans</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-xl">
            FundRoot is India's trusted digital loan platform, dedicated to making finance simple, fast, and accessible for all. We combine technology, transparency, and expert guidance to help you achieve your goals—whether it's growing your business, buying a home, or fulfilling personal dreams.
          </p>
          {/* Remove the Meet our team avatars and text here */}
          <button className="px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-primary-600 to-success-600 text-white shadow hover:from-primary-700 hover:to-success-700 transition-all duration-200 focus:outline-none text-lg">Get Started</button>
        </div>
        {/* Right: Illustration */}
        <div className="flex-1 flex justify-center items-center">
          {/* Modern SVG illustration (replace with your own if desired) */}
          <svg width="320" height="240" viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="40" width="280" height="160" rx="32" fill="#f3f4f6" />
            <rect x="60" y="80" width="80" height="80" rx="16" fill="#a5b4fc" />
            <rect x="160" y="100" width="100" height="60" rx="12" fill="#6ee7b7" />
            <circle cx="110" cy="120" r="24" fill="#6366f1" />
            <circle cx="210" cy="130" r="18" fill="#22d3ee" />
            <rect x="120" y="60" width="40" height="20" rx="6" fill="#facc15" />
            <rect x="200" y="70" width="30" height="12" rx="4" fill="#f472b6" />
          </svg>
        </div>
      </section>
      {/* Company Statement - Modern Centered Two-Tone */}
      <section className="max-w-4xl mx-auto text-center mb-10">
        <p className="text-2xl md:text-3xl font-medium text-gray-800 leading-snug">
          At <span className="font-bold text-primary-700">FundRoot</span>, we are committed to revolutionizing finance in India with innovative, digital, and customer-centric solutions. With a proven track record of empowering thousands, we combine <span className="font-semibold">technology</span>, <span className="font-semibold">expertise</span>, and <span className="font-semibold">trust</span>
          <span className="block text-gray-400 font-normal mt-2 text-xl md:text-2xl">to help you achieve your dreams and build a brighter financial future.</span>
        </p>
      </section>
      {/* Stats Row - Modern, Colorful, and Centered */}
      <section className="flex flex-wrap justify-center gap-12 mb-16 max-w-6xl mx-auto">
        <div className="flex flex-col items-center min-w-[160px]">
          <span className="text-4xl md:text-5xl font-extrabold text-[#0a2a5c]">5,000+</span>
          <span className="text-lg text-gray-600 font-medium mt-1">Customers Served</span>
        </div>
        <div className="flex flex-col items-center min-w-[160px]">
          <span className="text-4xl md:text-5xl font-extrabold text-[#159947] flex items-center gap-1"><span className="text-3xl">₹</span>1Cr+</span>
          <span className="text-lg text-gray-600 font-medium mt-1">Loans Processed</span>
        </div>
        <div className="flex flex-col items-center min-w-[160px]">
          <span className="text-4xl md:text-5xl font-extrabold text-[#d29a00] flex items-center gap-1">4.7<span className="text-3xl">★</span></span>
          <span className="text-lg text-gray-600 font-medium mt-1">Google Rating</span>
        </div>
        <div className="flex flex-col items-center min-w-[160px]">
          <span className="text-4xl md:text-5xl font-extrabold text-[#1767d7]">Pan-India</span>
          <span className="text-lg text-gray-600 font-medium mt-1">Presence</span>
        </div>
      </section>
      {/* Mission & Vision Section - Modern Card Layout (Enhanced) */}
      <section className="flex flex-col gap-12 md:gap-20 max-w-6xl mx-auto mb-20">
        {/* Mission Card */}
        <div className="flex flex-col md:flex-row items-center rounded-3xl shadow-xl p-8 md:p-12 gap-8 border border-primary-100 dark:border-primary-800 relative group transition-transform duration-300 hover:scale-[1.025] hover:shadow-2xl bg-gradient-to-br from-blue-50 via-blue-100 to-purple-50 dark:from-blue-900 dark:via-blue-800 dark:to-purple-900">
          {/* Vertical Accent Bar */}
          <div className="absolute left-0 top-6 bottom-6 w-2 bg-gradient-to-b from-primary-500 to-primary-300 rounded-full" />
          {/* Images/Illustration with BG Shape */}
          <div className="flex-1 flex flex-col gap-4 items-center justify-center relative">
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-to-br from-primary-100 to-purple-100 rounded-full blur-2xl opacity-40 -z-10" />
            <img src="https://images.unsplash.com/photo-1515168833906-d2a3b82b3029?auto=format&fit=crop&w=400&q=80" alt="Mission" className="rounded-2xl w-full max-w-xs shadow-lg border-4 border-primary-100 dark:border-primary-800" />
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Teamwork" className="rounded-2xl w-2/3 max-w-[180px] shadow-md border-2 border-success-100 dark:border-success-800 -mt-8 ml-12" />
          </div>
          {/* Mission Content */}
          <div className="flex-1 pl-6 relative z-10">
            {/* Icon */}
            <div className="flex items-center mb-2">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-purple-400 text-white shadow-lg mr-3">
                <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#2563eb" fillOpacity="0.12"/><path d="M16 8v16M8 16h16" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round"/><circle cx="16" cy="16" r="5" fill="#2563eb" fillOpacity="0.2" stroke="#2563eb" strokeWidth="1.5"/></svg>
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-primary-600 via-purple-600 to-success-600 bg-clip-text text-transparent mb-0">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">To empower every Indian with easy, transparent, and fast access to finance. We believe in financial inclusion, digital-first solutions, and building trust through technology and expert support. Our mission is to simplify the loan process and help you achieve your dreams—no matter where you are in India.</p>
            <ul className="space-y-2 mt-4">
              <li className="flex items-center gap-3"><span className="text-success-600 text-xl">✔️</span> <span className="font-semibold text-gray-800 dark:text-gray-100">Financial Inclusion for All</span></li>
              <li className="flex items-center gap-3"><span className="text-success-600 text-xl">✔️</span> <span className="font-semibold text-gray-800 dark:text-gray-100">100% Digital, Hassle-Free Process</span></li>
              <li className="flex items-center gap-3"><span className="text-success-600 text-xl">✔️</span> <span className="font-semibold text-gray-800 dark:text-gray-100">Customer-Centric Support</span></li>
              <li className="flex items-center gap-3"><span className="text-success-600 text-xl">✔️</span> <span className="font-semibold text-gray-800 dark:text-gray-100">Building Trust & Transparency</span></li>
            </ul>
          </div>
        </div>
        {/* Vision Card */}
        <div className="flex flex-col md:flex-row-reverse items-center rounded-3xl shadow-xl p-8 md:p-12 gap-8 border border-success-100 dark:border-success-800 relative group transition-transform duration-300 hover:scale-[1.025] hover:shadow-2xl bg-gradient-to-br from-green-50 via-green-100 to-blue-50 dark:from-green-900 dark:via-green-800 dark:to-blue-900">
          {/* Vertical Accent Bar */}
          <div className="absolute right-0 top-6 bottom-6 w-2 bg-gradient-to-b from-success-500 to-green-400 rounded-full" />
          {/* Images/Illustration with BG Shape */}
          <div className="flex-1 flex flex-col gap-4 items-center justify-center relative">
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-br from-success-100 to-primary-100 rounded-full blur-2xl opacity-40 -z-10" />
            <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="Vision" className="rounded-2xl w-full max-w-xs shadow-lg border-4 border-success-100 dark:border-success-800" />
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Growth" className="rounded-2xl w-2/3 max-w-[180px] shadow-md border-2 border-primary-100 dark:border-primary-800 -mt-8 ml-12 md:ml-0 md:mr-12" />
          </div>
          {/* Vision Content */}
          <div className="flex-1 pr-6 relative z-10">
            {/* Icon */}
            <div className="flex items-center mb-2">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-success-500 to-green-400 text-white shadow-lg mr-3">
                <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#22c55e" fillOpacity="0.12"/><path d="M16 24l-7 3.5 1.5-9-6.5-6.5 9-1.5L16 5l4 8.5 9 1.5-6.5 6.5 1.5 9z" fill="#22c55e"/></svg>
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-success-600 via-primary-600 to-purple-600 bg-clip-text text-transparent mb-0">Our Vision</h2>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">To be India's most trusted digital loan platform, leading the way in innovation, customer satisfaction, and financial empowerment. We envision a future where everyone can access the right financial products easily and securely, and where technology bridges the gap between dreams and reality.</p>
            <ul className="space-y-2 mt-4">
              <li className="flex items-center gap-3"><span className="text-primary-600 text-xl">🌱</span> <span className="font-semibold text-gray-800 dark:text-gray-100">Driving Innovation in Digital Lending</span></li>
              <li className="flex items-center gap-3"><span className="text-primary-600 text-xl">🌱</span> <span className="font-semibold text-gray-800 dark:text-gray-100">Empowering Dreams Across India</span></li>
              <li className="flex items-center gap-3"><span className="text-primary-600 text-xl">🌱</span> <span className="font-semibold text-gray-800 dark:text-gray-100">Trusted by Customers & Partners</span></li>
              <li className="flex items-center gap-3"><span className="text-primary-600 text-xl">🌱</span> <span className="font-semibold text-gray-800 dark:text-gray-100">Promoting Financial Literacy & Growth</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Values Section - Enhanced Minimal Premium Style */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 mb-20 bg-gradient-to-br from-[#f6f8fa] via-[#f3f7fb] to-[#eaf3fa]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">Our Values</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">The core principles that drive FundRoot's culture, service, and innovation.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Value 1: Integrity */}
            <div className="flex flex-col items-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 group cursor-pointer">
              {/* Accent bar */}
              <div className="w-10 h-1.5 rounded-full mb-4 bg-gradient-to-r from-green-400 to-teal-400 group-hover:from-green-500 group-hover:to-teal-500 transition-all duration-300" />
              {/* Icon */}
              <div className="mb-6 w-full flex justify-center">
                <svg width="72" height="72" fill="none" viewBox="0 0 72 72" className="drop-shadow-md"><circle cx="36" cy="36" r="36" fill="#e0f2fe"/><path d="M24 36l10 10 14-14" stroke="#22c55e" strokeWidth="4" strokeLinecap="round"/></svg>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Integrity</h3>
              <p className="text-base text-gray-600 text-center">We uphold the highest standards of honesty and ethics in all our actions and decisions.</p>
            </div>
            {/* Value 2: Innovation */}
            <div className="flex flex-col items-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 group cursor-pointer">
              <div className="w-10 h-1.5 rounded-full mb-4 bg-gradient-to-r from-yellow-300 to-yellow-500 group-hover:from-yellow-400 group-hover:to-yellow-600 transition-all duration-300" />
              <div className="mb-6 w-full flex justify-center">
                <svg width="72" height="72" fill="none" viewBox="0 0 72 72" className="drop-shadow-md"><rect x="20" y="20" width="32" height="32" rx="8" fill="#fef9c3"/><rect x="28" y="28" width="16" height="16" rx="4" fill="#fde047"/></svg>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Innovation</h3>
              <p className="text-base text-gray-600 text-center">We embrace new ideas and technology to deliver better solutions for our customers.</p>
            </div>
            {/* Value 3: Customer First */}
            <div className="flex flex-col items-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 group cursor-pointer">
              <div className="w-10 h-1.5 rounded-full mb-4 bg-gradient-to-r from-blue-400 to-teal-400 group-hover:from-blue-500 group-hover:to-teal-500 transition-all duration-300" />
              <div className="mb-6 w-full flex justify-center">
                <svg width="72" height="72" fill="none" viewBox="0 0 72 72" className="drop-shadow-md"><circle cx="36" cy="36" r="36" fill="#e0e7ff"/><circle cx="36" cy="36" r="18" fill="#6366f1"/><circle cx="36" cy="36" r="8" fill="#fff"/></svg>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Customer First</h3>
              <p className="text-base text-gray-600 text-center">Our customers' needs are at the heart of every decision we make.</p>
            </div>
            {/* Value 4: Inclusion */}
            <div className="flex flex-col items-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 group cursor-pointer">
              <div className="w-10 h-1.5 rounded-full mb-4 bg-gradient-to-r from-teal-400 to-blue-400 group-hover:from-teal-500 group-hover:to-blue-500 transition-all duration-300" />
              <div className="mb-6 w-full flex justify-center">
                <svg width="72" height="72" fill="none" viewBox="0 0 72 72" className="drop-shadow-md"><rect x="12" y="36" width="48" height="24" rx="12" fill="#d1fae5"/><circle cx="36" cy="36" r="12" fill="#22d3ee"/><rect x="28" y="20" width="16" height="8" rx="4" fill="#fbbf24"/></svg>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Inclusion</h3>
              <p className="text-base text-gray-600 text-center">We foster a diverse and inclusive environment where everyone is valued and respected.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section: Responsive Vertical Timeline */}
      <section className="mb-16 w-full py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 dark:from-gray-900 dark:via-purple-900 dark:to-green-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary-600 via-purple-600 to-success-600 bg-clip-text text-transparent inline-block drop-shadow-lg">
              <span role="img" aria-label="journey" className="mr-2">🚀</span>
              Our Journey
            </h2>
            <div className="mx-auto mb-4 w-32 h-2 rounded-full bg-gradient-to-r from-primary-600 via-purple-600 to-success-600 animate-gradient-move" />
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Milestones that shaped FundRoot's growth and impact in the financial world.
            </p>
          </div>
          <div className="relative flex flex-col items-center">
            {/* Wavy Vertical Line */}
            <svg viewBox="0 0 120 1200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-16 z-0">
              <defs>
                <linearGradient id="timeline-vert-gradient" x1="0" y1="0" x2="0" y2="1200" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#38B000" />
                  <stop offset="0.5" stopColor="#7C3AED" />
                  <stop offset="1" stopColor="#0047AB" />
                </linearGradient>
              </defs>
              <path d="M60,0 Q90,60 60,120 Q30,180 60,240 Q90,300 60,360 Q30,420 60,480 Q90,540 60,600 Q30,660 60,720 Q90,780 60,840 Q30,900 60,960 Q90,1020 60,1080 Q30,1140 60,1200" stroke="url(#timeline-vert-gradient)" strokeWidth="10" fill="none" />
            </svg>
            {/* Timeline Items */}
            <div className="relative w-full min-h-[1000px] flex flex-col gap-2 z-10">
              <TimelineMilestone side="left" icon="Shield" heading="Founded" desc="FundRoot is born to democratize access to loans in India." index={0} />
              <TimelineMilestone side="right" icon="Users" heading="First 1,000 Customers" desc="We help our first thousand customers achieve their dreams." index={1} />
              <TimelineMilestone side="left" icon="TrendingUp" heading="Major Funding" desc="Secured Series A funding to accelerate our growth." index={2} />
              <TimelineMilestone side="right" icon="User" heading="National Expansion" desc="Expanded operations pan-India, serving 20+ states." index={3} />
              <TimelineMilestone side="left" icon="Users" heading="Industry Awards" desc="Recognized as a top digital lending platform." index={4} />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center justify-center gap-3">
            <span role="img" aria-label="team" className="text-4xl md:text-5xl">👥</span>
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary-600 via-purple-600 to-success-600 bg-clip-text text-transparent drop-shadow-lg text-center">
              Meet Our Team
            </h2>
          </div>
          <div className="mt-3 w-32 h-2 rounded-full bg-gradient-to-r from-primary-600 via-purple-600 to-success-600 animate-gradient-move" />
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
        >
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              className="relative flex flex-col items-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-3xl shadow-xl border-2 border-transparent group px-4 py-7 pt-12 max-w-xs w-full mx-auto overflow-visible transition-all duration-300 hover:shadow-2xl hover:border-gradient animate-fade-in"
              whileHover={{ y: -8, scale: 1.04 }}
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            >
              {/* Animated Gradient Border */}
              <div className="absolute -inset-1 rounded-3xl z-0 bg-gradient-to-br from-primary-400 via-purple-400 to-success-400 opacity-60 group-hover:opacity-90 animate-gradient-move pointer-events-none" />
              {/* Team Image */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-10">
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary-500 to-success-500 flex items-center justify-center shadow-lg ring-4 ring-white dark:ring-gray-900 group-hover:scale-105 transition-transform duration-300">
                  <img src={member.img} alt={member.name} className="h-20 w-20 rounded-full object-cover border-4 border-white dark:border-gray-900 shadow-xl" />
                </div>
              </div>
              {/* Card Content */}
              <div className="mt-16 flex flex-col items-center text-center relative z-10">
                <span className="inline-block px-3 py-1 mb-2 rounded-full text-xs font-semibold bg-gradient-to-r from-primary-100 to-success-100 dark:from-primary-900 dark:to-success-900 text-primary-700 dark:text-primary-200 shadow-sm border border-primary-200 dark:border-primary-700">{member.role}</span>
                <div className="font-bold text-lg text-gray-800 dark:text-white mb-1">{member.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-300 mb-2 italic">"{member.quote || 'Passionate about making a difference.'}"</div>
                {/* Social Icons */}
                <div className="flex gap-3 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 justify-center">
                  <a href={member.linkedin || '#'} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-blue-500 to-blue-700 p-2 rounded-full shadow hover:scale-110 transition-transform" aria-label="LinkedIn">
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
                  </a>
                  <a href={member.twitter || '#'} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-blue-400 to-blue-600 p-2 rounded-full shadow hover:scale-110 transition-transform" aria-label="Twitter">
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.457-2.548z"/></svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="text-center mt-12">
        <div className="inline-block bg-gradient-to-r from-primary-500/10 to-success-500/10 dark:from-primary-500/5 dark:to-success-500/5 backdrop-blur-lg border border-primary-200/50 dark:border-primary-800/50 rounded-2xl p-10 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Want to join or connect with us?
          </h2>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Reach out for partnerships, careers, or any queries. We'd love to hear from you!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-success-500 text-white font-semibold px-8 py-4 rounded-xl shadow hover:from-primary-600 hover:to-success-600 transition-all duration-200 text-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  </section>
);

// --- TimelineMilestone component ---
type TimelineMilestoneProps = {
  side: 'left' | 'right';
  icon: 'Shield' | 'TrendingUp' | 'User' | 'Users';
  heading: string;
  desc: string;
  index: number;
};
const TimelineMilestone: React.FC<TimelineMilestoneProps> = ({ side, icon, heading, desc, index }) => (
  <div className={
    `relative w-full flex items-center min-h-[160px]` +
    ` ${side === 'left' ? 'justify-end' : 'justify-start'}` +
    ` mt-0`
  }>
    {/* Desktop: absolute card left/right of center, icon flush with wave */}
    <div className={
      `hidden md:block absolute top-0 ` +
      (side === 'left' ? 'right-1/2 translate-x-[0]' : 'left-1/2 translate-x-[0]') +
      ' w-[340px] z-10'
    } style={{ marginTop: `${index * 60}px` }}>
      <div className="relative flex items-center">
        {/* Icon flush with wave */}
        <div className={side === 'left' ? 'absolute top-1/2 -translate-y-1/2 -right-8 z-20' : 'absolute top-1/2 -translate-y-1/2 -left-8 z-20'}>
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary-500 to-success-500 flex items-center justify-center shadow-lg ring-4 ring-white dark:ring-gray-900">
            {iconMap[icon] && React.createElement(iconMap[icon], { className: 'h-8 w-8 text-white' })}
          </div>
        </div>
        <div className={side === 'left' ? 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-2 border-primary-200 dark:border-primary-700 rounded-2xl shadow-xl px-8 py-6 min-w-[220px] max-w-md text-left pr-12' : 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-2 border-primary-200 dark:border-primary-700 rounded-2xl shadow-xl px-8 py-6 min-w-[220px] max-w-md text-left pl-12'}>
          <div className="text-xl font-bold text-primary-700 mb-2">{heading}</div>
          <div className="text-gray-600 dark:text-gray-300 text-base">{desc}</div>
        </div>
      </div>
    </div>
    {/* Mobile: stacked, centered */}
    <div className="block md:hidden w-full flex flex-col items-center mb-8">
      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary-500 to-success-500 flex items-center justify-center shadow-lg ring-4 ring-white dark:ring-gray-900 mb-4">
        {iconMap[icon] && React.createElement(iconMap[icon], { className: 'h-8 w-8 text-white' })}
      </div>
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-2 border-primary-200 dark:border-primary-700 rounded-2xl shadow-xl px-6 py-5 min-w-[200px] max-w-md text-center">
        <div className="text-xl font-bold text-primary-700 mb-2">{heading}</div>
        <div className="text-gray-600 dark:text-gray-300 text-base">{desc}</div>
      </div>
    </div>
  </div>
);

// --- Icon Map for TimelineMilestone ---
const iconMap: { [key: string]: React.ElementType } = {
  Shield: Shield,
  TrendingUp: TrendingUp,
  User: User,
  Users: Users,
};

export default AboutPage; 