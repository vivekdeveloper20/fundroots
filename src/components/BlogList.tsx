import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, FileText, User, Briefcase, Home, Car, Percent, Tag, Share2 } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: '5 Tips to Improve Your CIBIL Score',
    date: '2024-05-01',
    category: 'CIBIL Tips',
    description: 'Learn actionable strategies to boost your CIBIL score and improve your chances of loan approval.',
    thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    link: '#',
    icon: <Percent className="h-4 w-4 text-primary-500" />,
    author: {
      name: 'Rohan Sharma',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    readingTime: '3 min read',
  },
  {
    id: 2,
    title: 'Personal Loan vs. Credit Card Loan: Which is Better?',
    date: '2024-04-20',
    category: 'Personal Loan',
    description: 'A detailed comparison to help you choose the right borrowing option for your needs.',
    thumbnail: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    link: '#',
    icon: <User className="h-4 w-4 text-success-500" />,
    author: {
      name: 'Priya Verma',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    readingTime: '4 min read',
  },
  {
    id: 3,
    title: 'Limited Time Offer: Reduced Interest Rates!',
    date: '2024-04-10',
    category: 'Offers',
    description: 'Grab our special offer on personal and business loans. Lower rates for a limited period.',
    thumbnail: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b3029?auto=format&fit=crop&w=400&q=80',
    link: '#',
    icon: <Tag className="h-4 w-4 text-accent-500" />,
    author: {
      name: 'Amit Singh',
      avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    },
    readingTime: '2 min read',
  },
  {
    id: 4,
    title: 'How to Apply for a Home Loan in 2024',
    date: '2024-03-28',
    category: 'Home Loan',
    description: 'Step-by-step guide to applying for a home loan, including eligibility and documentation.',
    thumbnail: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80',
    link: '#',
    icon: <Home className="h-4 w-4 text-primary-600" />,
    author: {
      name: 'Sneha Patel',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
    readingTime: '5 min read',
  },
  {
    id: 5,
    title: 'Business Loan Eligibility Checklist',
    date: '2024-03-15',
    category: 'Business Loan',
    description: 'Everything you need to know to qualify for a business loan in India.',
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    link: '#',
    icon: <Briefcase className="h-4 w-4 text-primary-700" />,
    author: {
      name: 'Ravi Kumar',
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    readingTime: '6 min read',
  },
  {
    id: 6,
    title: 'Car Loan Myths Busted!',
    date: '2024-02-28',
    category: 'Car Loan',
    description: 'Don’t let these common car loan myths stop you from buying your dream car.',
    thumbnail: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80',
    link: '#',
    icon: <Car className="h-4 w-4 text-success-600" />,
    author: {
      name: 'Meera Joshi',
      avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
    },
    readingTime: '3 min read',
  },
];

const categories = [
  { name: 'All', icon: <FileText className="h-4 w-4 text-primary-500" /> },
  { name: 'Personal Loan', icon: <User className="h-4 w-4 text-success-500" /> },
  { name: 'Business Loan', icon: <Briefcase className="h-4 w-4 text-primary-700" /> },
  { name: 'Home Loan', icon: <Home className="h-4 w-4 text-primary-600" /> },
  { name: 'Car Loan', icon: <Car className="h-4 w-4 text-success-600" /> },
  { name: 'CIBIL Tips', icon: <Percent className="h-4 w-4 text-primary-500" /> },
  { name: 'Offers', icon: <Tag className="h-4 w-4 text-accent-500" /> },
];

const shareLinks = (title: string, url: string) => [
  {
    name: 'Facebook',
    href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12"/></svg>
    ),
    color: 'hover:text-blue-600',
  },
  {
    name: 'Twitter',
    href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 16.11 4c-2.485 0-4.5 2.015-4.5 4.5 0 .353.04.697.116 1.027C7.728 9.38 4.1 7.6 1.671 4.905c-.388.666-.61 1.44-.61 2.263 0 1.563.796 2.942 2.008 3.75a4.48 4.48 0 0 1-2.037-.563v.057c0 2.185 1.555 4.008 3.623 4.426a4.52 4.52 0 0 1-2.032.077c.573 1.788 2.236 3.09 4.205 3.125A9.01 9.01 0 0 1 2 19.54a12.73 12.73 0 0 0 6.92 2.03c8.303 0 12.85-6.877 12.85-12.85 0-.196-.004-.392-.013-.586A9.18 9.18 0 0 0 24 4.59a8.98 8.98 0 0 1-2.54.698z"/></svg>
    ),
    color: 'hover:text-blue-400',
  },
  {
    name: 'WhatsApp',
    href: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`,
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.22-1.44l-.37-.22-3.69.97.99-3.59-.24-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-1 2.43 0 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.62.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
    ),
    color: 'hover:text-green-500',
  },
];

const BlogList: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const tabListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tabListRef.current) {
      const active = tabListRef.current.querySelector('[aria-current="true"]');
      if (active && 'scrollIntoView' in active) {
        (active as HTMLElement).scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [selectedCategory]);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-10 md:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="w-full p-8 md:p-12">
        {/* Page Title & Intro */}
        <header className="mb-8 md:mb-12 text-center relative overflow-visible">
          {/* Animated Gradient Background */}
          <div aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-4xl h-48 md:h-64 blur-2xl opacity-60 pointer-events-none z-0 animate-pulse-glow"
            style={{
              background: 'radial-gradient(circle at 60% 40%, #38B00055 0%, #0047AB33 60%, transparent 100%)',
            }}
          />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 relative z-10">
            FundRoot <span className="bg-gradient-to-r from-primary-600 to-success-600 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto relative z-10">
            Insights, tips, and the latest updates on loans, credit, and financial wellness. Stay informed and make smarter borrowing decisions!
          </p>
        </header>

        {/* Search & Category Filter */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 md:mb-10">
          <input
            type="text"
            placeholder="Search blog posts..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full md:w-1/3 px-4 py-3 border border-primary-100 dark:border-primary-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white/80 dark:bg-gray-900/60 text-gray-900 dark:text-gray-100 shadow"
            aria-label="Search blog posts"
          />
          <div
            ref={tabListRef}
            className="flex gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-primary-100 dark:scrollbar-thumb-primary-900/30 py-1 px-1 md:overflow-x-visible md:justify-end"
            tabIndex={0}
            aria-label="Blog categories"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {categories.map(cat => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`inline-flex items-center gap-1 px-5 py-2 rounded-full border text-sm font-semibold transition-all duration-200 shadow-sm backdrop-blur-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 ${
                  selectedCategory === cat.name
                    ? 'bg-gradient-to-r from-primary-500 to-success-500 text-white border-primary-500 scale-105 shadow-lg ring-2 ring-primary-200 dark:ring-primary-800'
                    : 'bg-white/80 dark:bg-gray-900/60 text-gray-700 dark:text-gray-200 border-primary-100 dark:border-primary-800 hover:bg-primary-50 dark:hover:bg-primary-900/20'
                }`}
                aria-pressed={selectedCategory === cat.name}
                aria-current={selectedCategory === cat.name ? 'true' : undefined}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <section className="grid gap-5 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 dark:text-gray-400">No blog posts found.</div>
          ) : (
            filteredPosts.map(post => (
              <article
                key={post.id}
                className="relative group bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-white/50 dark:border-gray-700/50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden min-h-[420px]"
              >
                <div className="aspect-[4/3] w-full overflow-hidden rounded-t-3xl">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 flex flex-col p-6">
                  {/* Author & Reading Time */}
                  <div className="flex items-center gap-3 mb-2">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="h-8 w-8 rounded-full border-2 border-primary-100 dark:border-primary-800 shadow-sm"
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{post.author.name}</span>
                    <span className="text-xs text-gray-400 ml-auto">{post.readingTime}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold mb-2 bg-gradient-to-r from-primary-100 to-success-100 dark:from-primary-900/20 dark:to-success-900/20 text-primary-700 dark:text-primary-200 px-3 py-1 rounded-full">
                    {post.icon} {post.category}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-1 line-clamp-2">{post.title}</h2>
                  <time className="flex items-center gap-1 text-xs text-gray-400 mb-2" dateTime={post.date}>
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                  </time>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.description}</p>
                  <div className="mt-auto flex items-end justify-between">
                    <Link
                      to={post.link}
                      className="inline-flex items-center gap-1 bg-gradient-to-r from-primary-500 to-success-500 text-white font-semibold px-5 py-2 rounded-xl shadow hover:from-primary-600 hover:to-success-600 transition-all duration-200"
                    >
                      Read More <ArrowRight className="h-4 w-4" />
                    </Link>
                    <div className="flex gap-2 ml-2">
                      {shareLinks(post.title, window.location.origin + post.link).map((share, idx) => (
                        <a
                          key={share.name}
                          href={share.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`Share on ${share.name}`}
                          className={`p-2 rounded-full bg-white/80 dark:bg-gray-900/60 border border-primary-100 dark:border-primary-800 shadow-sm transition-colors duration-200 hover:bg-primary-50 dark:hover:bg-primary-900/20 ${share.color}`}
                        >
                          {share.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))
          )}
        </section>

        {/* CTA Section */}
        <section className="mt-16 md:mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-primary-500/10 to-success-500/10 dark:from-primary-500/5 dark:to-success-500/5 backdrop-blur-lg border border-primary-200/50 dark:border-primary-800/50 rounded-2xl p-8 md:p-10 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Ready to take the next step?
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Apply for a loan with FundRoot and get instant approval, low interest rates, and expert support.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-success-500 text-white font-semibold px-8 py-4 rounded-xl shadow hover:from-primary-600 hover:to-success-600 transition-all duration-200 text-lg"
            >
              Apply Now <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* Success Stories / Testimonials */}
        {/* Modern background for all sections from Success Stories downward */}
        <div className="relative mt-20">
          <div aria-hidden="true" className="absolute inset-0 w-full h-full z-0 pointer-events-none">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[90vw] h-[1200px] md:h-[900px] blur-3xl opacity-40 animate-pulse-glow"
              style={{ background: 'radial-gradient(circle at 60% 40%, #7C3AED33 0%, #38B00022 60%, #0047AB11 100%)' }}
            />
          </div>
          <div className="relative z-10">
            <section className="py-12 w-full px-0">
              <div className="flex flex-col items-center mb-8">
                <div className="flex items-center justify-center gap-3">
                  <span role="img" aria-label="star" className="text-4xl md:text-5xl">⭐</span>
                  <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary-600 via-purple-600 to-success-600 bg-clip-text text-transparent drop-shadow-lg text-center">
                    Success Stories
                  </h2>
                </div>
                <div className="mt-3 w-32 h-2 rounded-full bg-gradient-to-r from-primary-600 via-purple-600 to-success-600 animate-gradient-move" />
              </div>
              <Testimonials />
            </section>

            {/* Poll and Quiz Side by Side */}
            <div className="mt-20 py-12 w-full px-0 flex flex-col md:flex-row gap-8">
              <div className="flex-1 w-full min-h-[340px] flex flex-col">
                <SectionHeading icon="📊" color="purple">What topic do you want to read next?</SectionHeading>
                <Poll />
              </div>
              <div className="flex-1 w-full min-h-[340px] flex flex-col">
                <SectionHeading icon="🧠" color="accent">Test your loan knowledge!</SectionHeading>
                <Quiz />
              </div>
            </div>

            {/* Ask Expert and Webinars Side by Side */}
            <div className="mt-20 py-12 w-full px-0 flex flex-col md:flex-row gap-8">
              <div className="flex-1 w-full min-h-[340px] flex flex-col">
                <SectionHeading icon="👨‍💼" color="primary">Ask our Loan Expert</SectionHeading>
                <AskExpert />
              </div>
              <div className="flex-1 w-full min-h-[340px] flex flex-col">
                <SectionHeading icon="🎤" color="green">Upcoming Webinars & Events</SectionHeading>
                <Webinars />
              </div>
            </div>

            {/* Animated Fun Fact/Tip */}
            <section className="mt-20 py-12 w-full px-0 flex flex-col items-center justify-center">
              <div className="w-full flex flex-col items-center">
                <div className="mb-4 animate-bounce">
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
                    <circle cx="28" cy="28" r="28" fill="url(#bulb-gradient)" fillOpacity="0.15" />
                    <defs>
                      <linearGradient id="bulb-gradient" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#38B000" />
                        <stop offset="0.5" stopColor="#7C3AED" />
                        <stop offset="1" stopColor="#0047AB" />
                      </linearGradient>
                    </defs>
                    <path d="M28 14C22.477 14 18 18.477 18 24c0 3.53 2.61 6.48 6.09 7.36V36a2 2 0 0 0 2 2h3.82a2 2 0 0 0 2-2v-4.64C35.39 30.48 38 27.53 38 24c0-5.523-4.477-10-10-10Zm1 24h-2v2a1 1 0 1 0 2 0v-2Zm-4 0h6v2a3 3 0 1 1-6 0v-2Z" fill="#7C3AED"/>
                  </svg>
                </div>
                <div className="w-full bg-white/80 dark:bg-gray-800/80 border-2 border-gradient-to-r from-primary-400 via-purple-400 to-success-400 rounded-2xl shadow-lg px-6 py-8 flex flex-col items-center animate-fade-in" style={{borderImage: 'linear-gradient(90deg, #38B000, #7C3AED, #0047AB) 1'}}>
                  <SectionHeading icon="💡" color="accent">Did You Know?</SectionHeading>
                  <FunFact />
                </div>
              </div>
            </section>

            {/* Social Feed and FAQ Side by Side */}
            <div className="mt-20 py-12 w-full px-0 flex flex-col md:flex-row gap-8">
              <div className="flex-1 w-full min-h-[340px] flex flex-col">
                <SectionHeading icon="📱" color="blue">Latest from FundRoot Social</SectionHeading>
                <SocialFeed />
              </div>
              <div className="flex-1 w-full min-h-[340px] flex flex-col">
                <SectionHeading icon="❓" color="primary">Frequently Asked Questions</SectionHeading>
                <FAQ />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;

// Add the following components at the bottom of the file:

// FAQ Component
const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: 'How do I apply for a loan?', a: 'Click on “Apply Now”, fill the form, and our team will contact you within 24 hours.' },
    { q: 'What documents are required?', a: 'Basic KYC, income proof, and bank statements. Details depend on loan type.' },
    { q: 'How long does approval take?', a: 'Most loans are approved within 48 hours if documents are complete.' },
    { q: 'Can I check my eligibility online?', a: 'Yes, use our EMI calculator and eligibility checker tools.' },
  ];
  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div key={i} className="border rounded-xl bg-white/70 dark:bg-gray-900/60">
          <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex justify-between items-center px-4 py-3 font-semibold text-left text-gray-800 dark:text-gray-200 focus:outline-none">
            {faq.q}
            <span>{open === i ? '−' : '+'}</span>
          </button>
          {open === i && <div className="px-4 pb-4 text-gray-600 dark:text-gray-300 animate-fade-in">{faq.a}</div>}
        </div>
      ))}
    </div>
  );
};

// Testimonials Component (Success Stories)
const Testimonials = () => {
  const stories = [
    { name: 'Amit S.', text: 'FundRoot made my home loan process super easy and transparent. Highly recommended!', img: 'https://randomuser.me/api/portraits/men/45.jpg' },
    { name: 'Priya V.', text: 'I got my business loan approved in just 2 days. The team is very supportive!', img: 'https://randomuser.me/api/portraits/women/46.jpg' },
    { name: 'Ravi K.', text: 'The EMI calculator and expert advice helped me choose the best loan.', img: 'https://randomuser.me/api/portraits/men/47.jpg' },
    { name: 'Sneha P.', text: 'Quick approval and friendly staff. I got my car loan without any hassle!', img: 'https://randomuser.me/api/portraits/women/48.jpg' },
    { name: 'Vikas M.', text: 'Transparent process and great rates. FundRoot is my go-to for all loan needs.', img: 'https://randomuser.me/api/portraits/men/49.jpg' },
  ];
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center">
      {stories.map((s, i) => (
        <div key={i} className="flex-1 bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 shadow border border-primary-100 dark:border-primary-800 flex flex-col items-center">
          <img src={s.img} alt={s.name} className="h-16 w-16 rounded-full mb-3 border-2 border-success-200" />
          <p className="text-gray-700 dark:text-gray-200 mb-2">“{s.text}”</p>
          <span className="font-semibold text-success-700 dark:text-success-300">{s.name}</span>
        </div>
      ))}
    </div>
  );
};

// Poll Component
const Poll = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const options = ['CIBIL Tips', 'Business Loan', 'Offers', 'Personal Loan', 'Home Loan'];
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 shadow border border-primary-100 dark:border-primary-800">
      {!submitted ? (
        <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
          {options.map(opt => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="poll" value={opt} checked={selected === opt} onChange={() => setSelected(opt)} className="accent-primary-500" />
              <span>{opt}</span>
            </label>
          ))}
          <button type="submit" disabled={!selected} className="mt-2 bg-gradient-to-r from-primary-500 to-success-500 text-white px-6 py-2 rounded-xl font-semibold shadow disabled:opacity-50">Submit</button>
        </form>
      ) : (
        <div className="text-success-700 dark:text-success-300 font-semibold">Thank you for voting!</div>
      )}
    </div>
  );
};

// Quiz Component
const Quiz = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const question = {
    q: 'Which document is essential for any loan application?',
    options: ['PAN Card', 'Passport', 'Driving License', 'Voter ID'],
    answer: 'PAN Card',
  };
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 shadow border border-accent-100 dark:border-accent-800">
      <div className="mb-3 font-semibold">{question.q}</div>
      {question.options.map(opt => (
        <label key={opt} className={`flex items-center gap-2 cursor-pointer mb-1 ${showResult && opt === question.answer ? 'text-success-600 font-bold' : ''}`}>
          <input type="radio" name="quiz" value={opt} checked={selected === opt} onChange={() => setSelected(opt)} className="accent-accent-500" disabled={showResult} />
          <span>{opt}</span>
        </label>
      ))}
      {!showResult ? (
        <button onClick={() => setShowResult(true)} disabled={!selected} className="mt-2 bg-gradient-to-r from-accent-500 to-success-500 text-white px-6 py-2 rounded-xl font-semibold shadow disabled:opacity-50">Check</button>
      ) : (
        <div className="mt-2 font-semibold text-success-700">{selected === question.answer ? 'Correct!' : 'Correct answer: PAN Card'}</div>
      )}
    </div>
  );
};

// AskExpert Component
const AskExpert = () => {
  const [form, setForm] = useState({ name: '', email: '', question: '' });
  const [sent, setSent] = useState(false);
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 shadow border border-primary-100 dark:border-primary-800">
      {!sent ? (
        <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="space-y-4">
          <input type="text" placeholder="Your Name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="w-full px-4 py-2 rounded border border-primary-100 dark:border-primary-800 focus:outline-none" required />
          <input type="email" placeholder="Your Email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className="w-full px-4 py-2 rounded border border-primary-100 dark:border-primary-800 focus:outline-none" required />
          <textarea placeholder="Your Question" value={form.question} onChange={e => setForm(f => ({ ...f, question: e.target.value }))} className="w-full px-4 py-2 rounded border border-primary-100 dark:border-primary-800 focus:outline-none" required rows={3} />
          <button type="submit" className="bg-gradient-to-r from-primary-500 to-success-500 text-white px-6 py-2 rounded-xl font-semibold shadow">Send</button>
        </form>
      ) : (
        <div className="text-success-700 dark:text-success-300 font-semibold">Thank you! Our expert will reply soon.</div>
      )}
    </div>
  );
};

// FunFact Component
const FunFact = () => {
  const tips = [
    '💡 Did you know? Improving your CIBIL score by 50 points can lower your interest rate!',
    '💡 80%+ of loan approvals happen within 48 hours at FundRoot!',
    '💡 You can check your eligibility online instantly.',
    '💡 Women applicants often get special interest rates on home loans.',
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % tips.length), 5000);
    return () => clearInterval(t);
  }, []);
  return <div className="text-lg font-semibold text-accent-700 dark:text-accent-300 animate-fade-in">{tips[idx]}</div>;
};

// SocialFeed Component
const SocialFeed = () => {
  const posts = [
    { platform: 'Twitter', text: 'We just crossed 25,000 happy clients! Thank you for trusting FundRoot. 🚀', date: '2h ago' },
    { platform: 'Instagram', text: 'Swipe to see our latest loan success stories! #FundRootSuccess', date: '1d ago' },
    { platform: 'LinkedIn', text: 'Join our next webinar on MSME loans. Register now!', date: '3d ago' },
  ];
  return (
    <div className="flex flex-col gap-4">
      {posts.map((p, i) => (
        <div key={i} className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-4 shadow flex items-center gap-4 border border-primary-100 dark:border-primary-800">
          <span className="font-bold text-primary-600 dark:text-primary-300">{p.platform}</span>
          <span className="flex-1">{p.text}</span>
          <span className="text-xs text-gray-400">{p.date}</span>
        </div>
      ))}
    </div>
  );
};

// Webinars Component
const Webinars = () => {
  const events = [
    { title: 'Home Loan Webinar', date: 'June 15, 2024', desc: 'Learn how to get the best rates for your home loan.', link: '#' },
    { title: 'CIBIL Score Masterclass', date: 'June 22, 2024', desc: 'Tips to boost your credit score and get faster approvals.', link: '#' },
  ];
  return (
    <div className="flex flex-col gap-4">
      {events.map((e, i) => (
        <div key={i} className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-4 shadow flex flex-col md:flex-row md:items-center gap-2 border border-success-100 dark:border-success-800">
          <div className="flex-1">
            <div className="font-semibold text-success-700 dark:text-success-300">{e.title}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{e.date}</div>
            <div className="text-xs text-gray-600 dark:text-gray-300 mb-2">{e.desc}</div>
          </div>
          <a href={e.link} className="bg-gradient-to-r from-success-500 to-primary-500 text-white px-4 py-2 rounded-xl font-semibold shadow hover:from-success-600 hover:to-primary-600 transition-all text-center">Register</a>
        </div>
      ))}
    </div>
  );
};

const SectionHeading = ({ icon, color, children }: { icon: React.ReactNode; color: string; children: React.ReactNode }) => (
  <div className={`flex items-center justify-center gap-2 mb-8 animate-fade-in`}>
    <span className={`text-2xl md:text-3xl ${color === 'primary' ? 'text-primary-600' : color === 'success' ? 'text-success-600' : color === 'accent' ? 'text-accent-600' : color === 'purple' ? 'text-purple-600' : color === 'blue' ? 'text-blue-600' : color === 'green' ? 'text-green-600' : ''}`}>{icon}</span>
    <h3 className={`text-2xl md:text-3xl font-bold ${color === 'primary' ? 'text-primary-700 dark:text-primary-300' : color === 'success' ? 'text-success-700 dark:text-success-300' : color === 'accent' ? 'text-accent-700 dark:text-accent-300' : color === 'purple' ? 'text-purple-700 dark:text-purple-300' : color === 'blue' ? 'text-blue-700 dark:text-blue-300' : color === 'green' ? 'text-green-700 dark:text-green-300' : ''}`}>{children}</h3>
  </div>
);

const SectionDivider = () => (
  <div className="w-full flex justify-center my-8">
    <div className="h-1 w-32 md:w-48 rounded-full bg-gradient-to-r from-primary-200 via-purple-200 to-success-200 dark:from-primary-800 dark:via-purple-800 dark:to-success-800 opacity-60" />
  </div>
); 