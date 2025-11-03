import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, MapPin, Clock, DollarSign, Heart, Target, Zap, ChevronRight, Send, FileText, Award, Globe, Coffee, Laptop, Smartphone } from 'lucide-react';

const jobOpenings = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'Mumbai, Bangalore',
    type: 'Full-time',
    experience: '3-5 years',
    salary: '₹8-15 LPA',
    description: 'We are looking for a Senior Software Engineer to join our dynamic engineering team.',
    requirements: [
      'Strong experience in React, Node.js, and TypeScript',
      'Experience with cloud platforms (AWS/Azure)',
      'Knowledge of microservices architecture',
      'Excellent problem-solving skills'
    ],
    benefits: ['Health Insurance', 'Flexible Hours', 'Learning Budget', 'Stock Options'],
    posted: '2 days ago',
    urgent: false
  },
  {
    id: 2,
    title: 'Product Manager',
    department: 'Product',
    location: 'Mumbai',
    type: 'Full-time',
    experience: '4-6 years',
    salary: '₹12-20 LPA',
    description: 'Lead product strategy and roadmap for our digital lending platform.',
    requirements: [
      'Experience in fintech or lending products',
      'Strong analytical and communication skills',
      'Experience with agile methodologies',
      'MBA preferred but not required'
    ],
    benefits: ['Health Insurance', 'Flexible Hours', 'Learning Budget', 'Stock Options'],
    posted: '1 week ago',
    urgent: true
  },
  {
    id: 3,
    title: 'Business Development Manager',
    department: 'Sales',
    location: 'Delhi, Mumbai',
    type: 'Full-time',
    experience: '2-4 years',
    salary: '₹6-12 LPA',
    description: 'Drive business growth by building relationships with banks and NBFCs.',
    requirements: [
      'Experience in B2B sales in financial services',
      'Strong networking and relationship building skills',
      'Understanding of lending products',
      'Excellent communication skills'
    ],
    benefits: ['Health Insurance', 'Performance Bonus', 'Travel Allowance', 'Learning Budget'],
    posted: '3 days ago',
    urgent: false
  },
  {
    id: 4,
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'Bangalore',
    type: 'Full-time',
    experience: '2-4 years',
    salary: '₹5-10 LPA',
    description: 'Create intuitive and beautiful user experiences for our digital platform.',
    requirements: [
      'Proficiency in Figma, Sketch, or Adobe Creative Suite',
      'Experience in mobile and web design',
      'Understanding of user research methods',
      'Portfolio demonstrating design skills'
    ],
    benefits: ['Health Insurance', 'Flexible Hours', 'Learning Budget', 'Design Tools'],
    posted: '5 days ago',
    urgent: false
  },
  {
    id: 5,
    title: 'Data Analyst',
    department: 'Analytics',
    location: 'Mumbai',
    type: 'Full-time',
    experience: '1-3 years',
    salary: '₹4-8 LPA',
    description: 'Analyze customer data to drive business insights and improve our products.',
    requirements: [
      'Experience with SQL, Python, or R',
      'Knowledge of data visualization tools',
      'Understanding of statistical analysis',
      'Experience in fintech preferred'
    ],
    benefits: ['Health Insurance', 'Flexible Hours', 'Learning Budget', 'Data Tools'],
    posted: '1 week ago',
    urgent: false
  },
  {
    id: 6,
    title: 'Customer Success Manager',
    department: 'Customer Success',
    location: 'Mumbai, Delhi',
    type: 'Full-time',
    experience: '2-3 years',
    salary: '₹5-9 LPA',
    description: 'Ensure customer satisfaction and help customers achieve their financial goals.',
    requirements: [
      'Experience in customer success or support',
      'Strong communication and problem-solving skills',
      'Understanding of lending processes',
      'Customer-centric mindset'
    ],
    benefits: ['Health Insurance', 'Flexible Hours', 'Learning Budget', 'Performance Bonus'],
    posted: '4 days ago',
    urgent: false
  }
];

const departments = [
  { name: 'All', count: jobOpenings.length },
  { name: 'Engineering', count: jobOpenings.filter(job => job.department === 'Engineering').length },
  { name: 'Product', count: jobOpenings.filter(job => job.department === 'Product').length },
  { name: 'Sales', count: jobOpenings.filter(job => job.department === 'Sales').length },
  { name: 'Design', count: jobOpenings.filter(job => job.department === 'Design').length },
  { name: 'Analytics', count: jobOpenings.filter(job => job.department === 'Analytics').length },
  { name: 'Customer Success', count: jobOpenings.filter(job => job.department === 'Customer Success').length }
];

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance for you and your family'
  },
  {
    icon: DollarSign,
    title: 'Competitive Salary',
    description: 'Market-competitive compensation with performance bonuses'
  },
  {
    icon: Clock,
    title: 'Flexible Hours',
    description: 'Work-life balance with flexible working hours'
  },
  {
    icon: Target,
    title: 'Career Growth',
    description: 'Clear career progression paths and growth opportunities'
  },
  {
    icon: Zap,
    title: 'Learning Budget',
    description: 'Annual learning budget for courses and certifications'
  },
  {
    icon: Users,
    title: 'Team Culture',
    description: 'Collaborative and inclusive work environment'
  }
];

const cultureValues = [
  {
    icon: Globe,
    title: 'Innovation',
    description: 'We encourage creative thinking and innovative solutions'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and collective success'
  },
  {
    icon: Heart,
    title: 'Empathy',
    description: 'We care about our customers and each other'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do'
  }
];

const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null
  });

  const filteredJobs = selectedDepartment === 'All' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setApplicationForm({
      ...applicationForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Application submitted:', applicationForm);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-16 text-center relative overflow-visible">
          <div aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-3xl h-40 md:h-56 blur-2xl opacity-60 pointer-events-none z-0 animate-pulse-glow"
            style={{ background: 'radial-gradient(circle at 60% 40%, #38B00055 0%, #0047AB33 60%, transparent 100%)' }}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 text-primary-700 dark:text-primary-300 drop-shadow-lg text-center">
            Join Our <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-success-600 bg-clip-text text-transparent">Amazing Team</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto relative z-10">
            Be part of India's fastest-growing digital lending platform. We're looking for passionate individuals 
            who want to make a difference in the financial services industry.
          </p>
        </header>

        {/* Company Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-300">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-success-600 mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-300">Open Positions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">4.8</div>
              <div className="text-gray-600 dark:text-gray-300">Glassdoor Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-300">Remote Friendly</div>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent">
                Why Join FundRoot?
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We offer more than just a job - we offer a career with purpose, growth, and impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-success-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Our Culture */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent">
                Our Culture & Values
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We believe in creating an environment where everyone can thrive and grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Job Openings */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent">
                Open Positions
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find your perfect role and join our growing team.
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {departments.map((dept) => (
              <motion.button
                key={dept.name}
                onClick={() => setSelectedDepartment(dept.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedDepartment === dept.name
                    ? 'bg-gradient-to-r from-primary-500 to-success-500 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 border border-gray-200 dark:border-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {dept.name} ({dept.count})
              </motion.button>
            ))}
          </div>

          {/* Job Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* Job Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{job.title}</h3>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-primary-100 to-success-100 dark:from-primary-900 dark:to-success-900 text-primary-700 dark:text-primary-200 shadow-sm border border-primary-200 dark:border-primary-700">
                      {job.department}
                    </span>
                  </div>
                  {job.urgent && (
                    <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 text-xs font-semibold rounded-full">
                      Urgent
                    </span>
                  )}
                </div>

                {/* Job Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <MapPin className="h-4 w-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Briefcase className="h-4 w-4" />
                    {job.type}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Clock className="h-4 w-4" />
                    {job.experience}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <DollarSign className="h-4 w-4" />
                    {job.salary}
                  </div>
                </div>

                {/* Job Description */}
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {job.description}
                </p>

                {/* Key Requirements */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Requirements:</h4>
                  <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                    {job.requirements.slice(0, 2).map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <ChevronRight className="h-3 w-3 text-primary-500 flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Benefits:</h4>
                  <div className="flex flex-wrap gap-1">
                    {job.benefits.slice(0, 3).map((benefit, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Posted Date */}
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                  Posted {job.posted}
                </div>

                {/* Apply Button */}
                <motion.button
                  className="w-full bg-gradient-to-r from-primary-500 to-success-500 text-white font-semibold px-4 py-2 rounded-xl hover:from-primary-600 hover:to-success-600 transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Apply Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Application Form */}
        <section className="mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                <span className="bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent">
                  Apply Now
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Don't see a position that matches your skills? Send us your resume anyway!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={applicationForm.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={applicationForm.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={applicationForm.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Position Interested In
                  </label>
                  <select
                    name="position"
                    value={applicationForm.position}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select a position</option>
                    {jobOpenings.map((job) => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Years of Experience
                </label>
                <select
                  name="experience"
                  value={applicationForm.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">Select experience level</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Upload Resume *
                </label>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-6 text-center hover:border-primary-500 dark:hover:border-primary-400 transition-colors">
                  <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    Drag and drop your resume here, or click to browse
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    PDF, DOC, DOCX up to 10MB
                  </p>
                </div>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-500 to-success-500 text-white font-semibold px-8 py-4 rounded-xl hover:from-primary-600 hover:to-success-600 transition-all duration-200 text-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="h-5 w-5" />
                Submit Application
              </motion.button>
            </form>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <div className="inline-block bg-gradient-to-r from-primary-500/10 to-success-500/10 dark:from-primary-500/5 dark:to-success-500/5 backdrop-blur-lg border border-primary-200/50 dark:border-primary-800/50 rounded-2xl p-10 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Have Questions?
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our HR team is here to help. Reach out to us for any questions about our open positions, 
              company culture, or application process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-primary-500 to-success-500 text-white font-semibold px-8 py-4 rounded-xl shadow hover:from-primary-600 hover:to-success-600 transition-all duration-200 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact HR Team
              </motion.button>
              <motion.button
                className="border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold px-8 py-4 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Call
              </motion.button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default CareersPage;
