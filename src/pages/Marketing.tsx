import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, TrendingUp, Share2, FileText, BarChart3, Target } from 'lucide-react';
import { services } from '@/data/content';

const service = services.find(s => s.id === 'marketing')!;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const subServices = [
  { icon: Search, title: 'SEO', desc: 'Dominate search results with data-driven SEO strategies that drive organic traffic and leads.' },
  { icon: TrendingUp, title: 'Paid Advertising', desc: 'High-ROI ad campaigns on Google, Facebook, and Instagram that maximize your marketing budget.' },
  { icon: Share2, title: 'Social Media', desc: 'Strategic social media management that builds communities and drives engagement across platforms.' },
  { icon: FileText, title: 'Content Marketing', desc: 'Compelling content that tells your story, educates your audience, and converts readers into customers.' },
  { icon: BarChart3, title: 'Analytics', desc: 'In-depth analytics and reporting to track performance and optimize your marketing strategy.' },
  { icon: Target, title: 'Email Marketing', desc: 'Automated email campaigns that nurture leads and drive repeat business.' },
];

export default function Marketing() {
  return (
    <div>
      <section className="relative pt-32 pb-20 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4a6cf7]/5 via-transparent to-transparent" />
        <div className="relative z-10 w-full px-6 lg:px-12">
          <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#4a6cf7]" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">{service.number} — Our Services</span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="font-display text-5xl sm:text-6xl lg:text-7xl text-white max-w-4xl">
              {service.title}
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="mt-6 text-lg text-gray-400 max-w-2xl">
              {service.description} Data-driven marketing strategies that increase visibility, drive traffic, and convert leads into loyal customers.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="mt-10">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#4a6cf7] hover:bg-[#3a5ce5] text-white font-medium px-7 py-3.5 rounded-lg transition-all">
                Get a Marketing Plan
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-[#0a0f1c]">
        <div className="w-full px-6 lg:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#4a6cf7]" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">What We Offer</span>
            </div>
            <h2 className="font-display text-4xl text-white">Our Marketing Services</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subServices.map((sub, i) => (
              <motion.div key={sub.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group p-8 rounded-2xl bg-[#111827] border border-white/5 hover:border-[#4a6cf7]/30 transition-all">
                <div className="p-3 rounded-xl bg-[#4a6cf7]/10 text-[#4a6cf7] w-fit mb-4">
                  <sub.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display text-white group-hover:text-[#7b95ff] transition-colors">{sub.title}</h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">{sub.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-black">
        <div className="w-full px-6 lg:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#4a6cf7]" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">Results</span>
            </div>
            <h2 className="font-display text-4xl text-white">Marketing That Delivers</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: '150%', label: 'Average Sales Growth', desc: 'Within the first 2 months of engagement' },
              { value: '3x', label: 'ROI on Ad Spend', desc: 'Return on investment for paid campaigns' },
              { value: '<1min', label: 'Support Response', desc: 'Average response time for all clients' },
            ].map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-8 rounded-2xl bg-[#111827] border border-white/5">
                <div className="text-4xl font-bold text-[#4a6cf7] font-display">{item.value}</div>
                <div className="text-lg text-white mt-2 font-semibold">{item.label}</div>
                <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0a0f1c]">
        <div className="w-full px-6 lg:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className="text-center max-w-3xl mx-auto">
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-4xl text-white">
              Ready to Grow Your Business?
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="mt-6 text-gray-400">
              Let's create a marketing strategy that drives real results for your business.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="mt-10">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#4a6cf7] hover:bg-[#3a5ce5] text-white font-medium px-8 py-4 rounded-lg transition-all text-lg">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
