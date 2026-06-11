// Summit Web - All content data

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Design', href: '/design' },
  { label: 'Development', href: '/development' },
  { label: 'Marketing', href: '/marketing' },
  { label: 'IT & Cyber Security', href: '/it-cyber' },
  { label: 'Consultancy', href: '/consultancy' },
  { label: 'MedTech', href: '/medtech' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Custom Plan', href: '/custom-plan' },
  { label: 'Course', href: '/course' },
  { label: 'Contact', href: '/contact' },
];

export const currencies = [
  { code: 'NGN', symbol: '₦', name: 'NGN' },
  { code: 'USD', symbol: '$', name: 'USD' },
  { code: 'EUR', symbol: '€', name: 'EUR' },
  { code: 'GBP', symbol: '£', name: 'GBP' },
];

// Exchange rates (relative to USD)
export const exchangeRates: Record<string, number> = {
  USD: 1,
  NGN: 1550,
  EUR: 0.92,
  GBP: 0.79,
};

export const services = [
  {
    id: 'design',
    number: '01',
    title: 'Design',
    description: 'Creating visually stunning and user-centric designs that elevate your brand and engage your audience.',
    subServices: ['Web Design', 'Graphic Design', 'UI/UX Design', 'Brand Identity'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
  },
  {
    id: 'development',
    number: '02',
    title: 'Development',
    description: 'Building robust, scalable, and high-performance digital solutions tailored to your business needs.',
    subServices: ['Web Development', 'App Development', 'E-commerce', 'CMS Solutions'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
  },
  {
    id: 'marketing',
    number: '03',
    title: 'Marketing',
    description: 'Data-driven marketing strategies that increase visibility, drive traffic, and convert leads into customers.',
    subServices: ['SEO', 'Paid Advertising', 'Social Media', 'Content Marketing'],
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80',
  },
  {
    id: 'it-cyber',
    number: '04',
    title: 'IT & Cyber Security',
    description: 'Award-winning IT and cyber security expertise to protect your business and improve technological performance.',
    subServices: ['Managed IT Services', 'Cyber Security', 'Cloud Services', 'AI and Automation'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
  },
  {
    id: 'consultancy',
    number: '05',
    title: 'Consultancy',
    description: 'Valuable, cost-effective consultancy to improve efficiency and facilitate compliance in crucial business areas.',
    subServices: ['ISO Compliance', 'GDPR', 'Digital Transformation', 'AI Strategy'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
  },
  {
    id: 'medtech',
    number: '06',
    title: 'MedTech',
    description: 'Advancing technology to improve the digital health landscape with bespoke, secure healthcare applications.',
    subServices: ['Healthcare Apps', 'Diagnostic Tools', 'Patient Care Systems', 'Compliance'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
  },
];

export const summitServices = [
  { name: 'Business Branding', icon: 'Palette' },
  { name: 'Website Design', icon: 'Globe' },
  { name: 'SEO', icon: 'Search' },
  { name: 'Graphic Design', icon: 'PenTool' },
  { name: 'Advertisement', icon: 'Megaphone' },
  { name: 'Social Media', icon: 'Share2' },
  { name: 'Full AI Setup', icon: 'Cpu' },
];

export const pricingPlans = [
  {
    id: 'essential',
    name: 'Summit Essential',
    priceUSD: 9.72,
    period: 'per month',
    description: 'Perfect for startups and small businesses getting started online.',
    features: [
      { text: '2 Branding Consultations', included: true },
      { text: '1 Branded Flyer', included: true },
      { text: 'Link In Bio', included: true },
      { text: 'Essential AI Setup', included: true },
      { text: 'Website', included: false },
      { text: 'Social Media Setup', included: false },
      { text: 'Unlimited Q&A', included: true },
      { text: 'Priority Support', included: true },
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    id: 'growth',
    name: 'Summit Growth',
    priceUSD: 56.78,
    period: 'per month',
    description: 'Our most popular plan for growing businesses ready to scale.',
    features: [
      { text: '10 Branding Consultations', included: true },
      { text: '3 Branded Flyers', included: true },
      { text: 'Link In Bio', included: true },
      { text: 'Full AI Setup', included: true },
      { text: 'Mini Website + 3 months hosting & Free Domain', included: true },
      { text: 'Social Media Setup', included: true },
      { text: '7 Days Social Media Management', included: true },
      { text: 'Unlimited Q&A', included: true },
      { text: 'Priority Support', included: true },
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    id: '360',
    name: 'Summit 360',
    priceUSD: 116.43,
    period: 'per month',
    description: 'The complete package for businesses that want it all.',
    features: [
      { text: 'S.E.O.', included: true },
      { text: 'Unlimited Branding Consultations', included: true },
      { text: 'Professional Business Logo', included: true },
      { text: 'Link In Bio', included: true },
      { text: 'Full AI Setup', included: true },
      { text: 'Advanced Website + 6 months hosting & Free Domain', included: true },
      { text: 'Social Media Setup', included: true },
      { text: '10 Days Social Media Management', included: true },
      { text: 'Unlimited Q&A', included: true },
      { text: 'Priority Support', included: true },
    ],
    cta: 'Get Started',
    popular: false,
  },
];

export const customPlanServices = [
  {
    id: 'branding-consultation',
    name: 'Branding / Marketing Consultation',
    description: 'Professional 1-on-1 session to define your brand direction and marketing strategy.',
    priceUSD: 1.30,
  },
  {
    id: 'business-consultation',
    name: 'Business Management Consultation',
    description: 'Expert guidance on managing and scaling your business operations effectively.',
    priceUSD: 2.28,
  },
  {
    id: 'logo-design',
    name: 'Professional Logo Design',
    description: 'A unique, memorable logo that represents your brand identity.',
    priceUSD: 9.75,
  },
  {
    id: 'essential-ai',
    name: 'Essential AI Setup',
    description: 'Basic AI tools to start automating customer replies and simple tasks.',
    priceUSD: 3.25,
  },
  {
    id: 'growth-ai',
    name: 'Growth AI Setup',
    description: 'Intermediate AI automation for lead generation and marketing workflows.',
    priceUSD: 7.80,
  },
  {
    id: 'premium-ai',
    name: 'Premium AI Setup',
    description: 'Full AI integration — chatbots, CRM automation, and advanced marketing AI.',
    priceUSD: 16.25,
  },
  {
    id: 'flyer-design',
    name: 'Flyer Design',
    description: 'Eye-catching branded flyer designed for print or digital use.',
    priceUSD: 2.60,
  },
  {
    id: 'seo',
    name: 'S.E.O.',
    description: 'Search engine optimization to rank your website higher on Google.',
    priceUSD: 13.00,
  },
  {
    id: 'mini-website',
    name: 'Mini Website Design',
    description: 'A clean, mobile-ready website with up to 5 pages.',
    priceUSD: 26.00,
  },
  {
    id: 'advanced-website',
    name: 'Advanced Website Design',
    description: 'A full-featured website with custom design, blog, and advanced functionality.',
    priceUSD: 48.27,
  },
  {
    id: 'premium-website',
    name: 'Premium Website Design',
    description: 'Top-tier custom web platform — e-commerce, dashboards, or complex web apps.',
    priceUSD: 162.50,
  },
  {
    id: 'social-media-management',
    name: 'Social Media Management',
    description: 'Daily management of your social media accounts for consistent growth.',
    priceUSD: 10.92,
  },
  {
    id: 'social-media-optimization',
    name: 'Social Media Optimization',
    description: 'Bio, highlights, hashtag strategy, and profile overhaul for maximum reach.',
    priceUSD: 10.14,
  },
  {
    id: 'telegram-members',
    name: '1,000 Certified Telegram Members',
    description: '1,000 verified, targeted members added to your Telegram channel for marketing.',
    priceUSD: 4.88,
  },
  {
    id: 'advertisement',
    name: 'Advertisement Services',
    description: 'Targeted ad campaigns on Facebook, Instagram, or Google to drive real results.',
    priceUSD: 9.75,
  },
];

export const courseData = {
  title: 'Business Digital Marketing Course',
  subtitle: 'Online Course',
  priceUSD: 1.33,
  paymentType: 'one-time payment',
  description: 'Everything you need to master digital marketing for your Nigerian business.',
  features: [
    'Complete Digital Marketing Training',
    'PDF Course Material — sent to you',
    'Instant delivery after payment',
    'Valid for all business types',
    'Applicable strategies for Nigeria',
  ],
  whatYouWillLearn: [
    'How to build a strong digital presence for your business',
    'Social media strategies that actually work in Nigeria',
    'SEO basics to rank on Google without spending a kobo',
    'How to run profitable paid ads on a small budget',
    'Content creation tips to attract and convert customers',
    'WhatsApp and Telegram marketing for Nigerian businesses',
  ],
  deliveryOptions: [
    { label: 'Email (PDF sent to your inbox)', value: 'email' },
    { label: 'WhatsApp (PDF sent to your number)', value: 'whatsapp' },
  ],
};

export const portfolioItems = [
  {
    title: 'Summit Dashboard',
    category: 'Web Development',
    description: 'Live project with +150% sales growth in 2 months.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    title: 'Market Intelligence Platform',
    category: 'Data & Analytics',
    description: 'Data-led market intelligence for product growth.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    title: 'AI Consultancy Launch',
    category: 'Brand Strategy',
    description: 'Amplifying the merger launch of a leading AI consultancy.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
  },
];

export const testimonials = [
  {
    quote: "Summit Web grew our online sales by 150% in 2 months. Finally, a team that gets it! No jargon, just results. I can finally focus on my business instead of worrying about my online presence.",
    author: 'Amara O.',
    role: 'Lagos Fashion Brand Owner',
  },
  {
    quote: "Partnering with Summit Web was the change needed for our business. Their expertise and strategies have not only amplified our online presence but also significantly boosted our lead quality and conversion rates.",
    author: 'Sashka Langsdon',
    role: 'Marketing Manager, Oltco',
  },
  {
    quote: "The team has great knowledge and experience, ensuring that the insights gained are geared to action, and expressed in ways that are clear to all stakeholders.",
    author: 'Tony Reid',
    role: 'Head of Marketing & Brand, Manning Impex',
  },
];

export const newsItems = [
  {
    title: 'Summit Web to Exhibit and Speak at DTX Lagos 2026',
    author: 'Summit Team',
    date: '08.06.2026',
    category: 'News',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
  },
  {
    title: 'How Brandwatch\'s LinkedIn update unlocks high-intent B2B market intelligence in 2026',
    author: 'Tilly',
    date: '10.02.2026',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c1d9?w=600&q=80',
  },
  {
    title: 'Looking Ahead: Summit Web Hosts First-Ever Internal Conference',
    author: 'Simon',
    date: '04.03.2026',
    category: 'News',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80',
  },
];

export const faqs = [
  {
    question: 'How fast will my website be ready?',
    answer: 'Your website will be ready in 7–14 days, depending on the complexity. We prioritise speed without compromising quality. You\'ll receive regular updates throughout the process.',
  },
  {
    question: 'Can I switch plans later?',
    answer: 'Absolutely! You can upgrade or downgrade your plan anytime. We\'ll make the transition seamless with no disruption to your service.',
  },
  {
    question: 'What is "Full AI Setup"?',
    answer: 'We integrate AI tools to automate lead generation, customer replies, and marketing tasks — saving you hours every week and increasing efficiency across your business.',
  },
  {
    question: 'Is there a setup fee?',
    answer: 'No setup fees at all! You only pay the monthly investment for your chosen plan. What you see is exactly what you pay.',
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'All plans include priority support via WhatsApp, phone, and email. Our average response time is under 1 minute during business hours (Mon–Fri, 9am–6pm WAT).',
  },
];

export const footerLinks = {
  services: [
    { label: 'Design', href: '/design' },
    { label: 'Development', href: '/development' },
    { label: 'Marketing', href: '/marketing' },
    { label: 'IT & Cyber Security', href: '/it-cyber' },
    { label: 'Consultancy', href: '/consultancy' },
    { label: 'MedTech', href: '/medtech' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Custom Plan', href: '/custom-plan' },
    { label: 'Course', href: '/course' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'Blog', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'FAQs', href: '/pricing#faqs' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
};

export const contactInfo = {
  phone: '+234 904 874 7185',
  email: 'summitweb33@gmail.com',
  whatsapp: 'https://wa.me/2349048747185',
  address: 'Jos, Plateau State, Nigeria',
  hours: 'Mon–Fri, 9am–6pm WAT',
};

export const stats = [
  { value: '50+', label: 'Businesses Served' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '<1min', label: 'Support Response' },
];

export const industries = ['Retail', 'Healthcare', 'Real Estate', 'Education', 'Finance', 'Hospitality'];
