import React from 'react';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, User, Users, Award, Heart, Target, Zap } from 'lucide-react';

const team = [
  { 
    name: 'Rohan Sharma', 
    role: 'Founder & CEO', 
    img: 'https://randomuser.me/api/portraits/men/50.jpg', 
    quote: 'Visionary leader with a passion for fintech innovation.',
    linkedin: '#', 
    twitter: '#',
    experience: '12+ Years',
    expertise: 'Fintech & Strategy'
  },
  { 
    name: 'Priya Verma', 
    role: 'Chief Operating Officer', 
    img: 'https://randomuser.me/api/portraits/women/51.jpg', 
    quote: 'Operational excellence is my mantra for success.',
    linkedin: '#', 
    twitter: '#',
    experience: '10+ Years',
    expertise: 'Operations & Growth'
  },
  { 
    name: 'Amit Singh', 
    role: 'Chief Technology Officer', 
    img: 'https://randomuser.me/api/portraits/men/52.jpg', 
    quote: 'Building scalable tech for a better tomorrow.',
    linkedin: '#', 
    twitter: '#',
    experience: '15+ Years',
    expertise: 'Technology & Innovation'
  },
  { 
    name: 'Sneha Patel', 
    role: 'Head of Customer Success', 
    img: 'https://randomuser.me/api/portraits/women/53.jpg', 
    quote: 'Customer happiness is our true metric of success.',
    linkedin: '#', 
    twitter: '#',
    experience: '8+ Years',
    expertise: 'Customer Experience'
  },
  { 
    name: 'Rajesh Kumar', 
    role: 'Head of Risk Management', 
    img: 'https://randomuser.me/api/portraits/men/54.jpg', 
    quote: 'Ensuring secure and responsible lending practices.',
    linkedin: '#', 
    twitter: '#',
    experience: '14+ Years',
    expertise: 'Risk & Compliance'
  },
  { 
    name: 'Anita Desai', 
    role: 'Head of Marketing', 
    img: 'https://randomuser.me/api/portraits/women/55.jpg', 
    quote: 'Connecting dreams with the right financial solutions.',
    linkedin: '#', 
    twitter: '#',
    experience: '9+ Years',
    expertise: 'Marketing & Brand'
  },
];

const values = [
  {
    icon: Heart,
    title: 'Customer First',
    description: 'Every decision we make is guided by what\'s best for our customers.'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from service to technology.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and collective success.'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We continuously innovate to provide better financial solutions.'
  }
];

const OurTeamPage: React.FC = () => (
  <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="mb-16 text-center relative overflow-visible">
        <div aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-3xl h-40 md:h-56 blur-2xl opacity-60 pointer-events-none z-0 animate-pulse-glow"
          style={{ background: 'radial-gradient(circle at 60% 40%, #38B00055 0%, #0047AB33 60%, transparent 100%)' }}
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 text-primary-700 dark:text-primary-300 drop-shadow-lg text-center">
          Meet Our <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-success-600 bg-clip-text text-transparent">Amazing Team</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto relative z-10">
          The passionate individuals behind FundRoot who are dedicated to making your financial dreams come true. 
          Get to know the experts who work tirelessly to provide you with the best loan solutions.
        </p>
      </header>

      {/* Team Stats */}
      <section className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-300">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-success-600 mb-2">100+</div>
            <div className="text-gray-600 dark:text-gray-300">Years Combined Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">15+</div>
            <div className="text-gray-600 dark:text-gray-300">Cities Covered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600 dark:text-gray-300">Customer Support</div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent">
              Leadership Team
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Meet the visionary leaders who guide FundRoot's mission to democratize access to financial services.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
        >
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              className="relative flex flex-col items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-xl border-2 border-transparent group px-6 py-8 pt-16 max-w-sm w-full mx-auto overflow-visible transition-all duration-300 hover:shadow-2xl hover:border-gradient"
              whileHover={{ y: -8, scale: 1.02 }}
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
              <div className="mt-8 flex flex-col items-center text-center relative z-10">
                <span className="inline-block px-3 py-1 mb-3 rounded-full text-xs font-semibold bg-gradient-to-r from-primary-100 to-success-100 dark:from-primary-900 dark:to-success-900 text-primary-700 dark:text-primary-200 shadow-sm border border-primary-200 dark:border-primary-700">
                  {member.role}
                </span>
                <div className="font-bold text-xl text-gray-800 dark:text-white mb-2">{member.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-300 mb-4 italic text-center leading-relaxed">
                  "{member.quote}"
                </div>
                
                {/* Experience & Expertise */}
                <div className="grid grid-cols-2 gap-4 w-full mb-4">
                  <div className="text-center">
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Experience</div>
                    <div className="text-sm font-semibold text-primary-600 dark:text-primary-400">{member.experience}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Expertise</div>
                    <div className="text-sm font-semibold text-success-600 dark:text-success-400">{member.expertise}</div>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="flex gap-3 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 justify-center">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-blue-500 to-blue-700 p-2 rounded-full shadow hover:scale-110 transition-transform" aria-label="LinkedIn">
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
                    </svg>
                  </a>
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-blue-400 to-blue-600 p-2 rounded-full shadow hover:scale-110 transition-transform" aria-label="Twitter">
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.457-2.548z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Our Values */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent">
              Our Core Values
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The principles that guide our team and shape our company culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-success-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="text-center">
        <div className="inline-block bg-gradient-to-r from-primary-500/10 to-success-500/10 dark:from-primary-500/5 dark:to-success-500/5 backdrop-blur-lg border border-primary-200/50 dark:border-primary-800/50 rounded-2xl p-10 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Want to Join Our Team?
          </h2>
          <p className="mb-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're always looking for passionate individuals who share our vision of making finance accessible to everyone. 
            Join us in building the future of digital lending in India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-gradient-to-r from-primary-500 to-success-500 text-white font-semibold px-8 py-4 rounded-xl shadow hover:from-primary-600 hover:to-success-600 transition-all duration-200 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Open Positions
            </motion.button>
            <motion.button
              className="border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold px-8 py-4 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Your Resume
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  </section>
);

export default OurTeamPage;
