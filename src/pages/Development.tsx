import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Smartphone, ShoppingCart, Database, Globe, Server } from 'lucide-react';
import { services } from '@/data/content';

const service = services.find(s => s.id === 'development')!;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const subServices = [
  { icon: Globe, title: 'Web Development', desc: 'Custom websites built with modern technologies. From simple landing pages to complex web applications.' },
  { icon: Smartphone, title: 'App Development', desc: 'Native and cross-platform mobile apps that deliver seamless user experiences on any device.' },
  { icon: ShoppingCart, title: 'E-commerce', desc: 'Full-featured online stores with secure payments, inventory management, and conversion optimization.' },
  { icon: Database, title: 'CMS Solutions', desc: 'Custom content management systems that make updating your website effortless and intuitive.' },
  { icon: Server, title: 'API Development', desc: 'Robust REST and GraphQL APIs that power your applications and integrate with third-party services.' },
  { icon: Code2, title: 'Web Applications', desc: 'Scalable web apps with real-time features, dashboards, and complex business logic.' },
];

export default function Development() {
  return (
    <div>
      <section className="relative pt-32 pb-20 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4a6cf7]/5 via-transparent to-transparent" />
        <div className="relative z-10 w-full px-6 lg:px-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#4a6cf7]" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">{service.number} — Our Services</span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="font-display text-5xl sm:text-6xl lg:text-7xl text-white max-w-4xl">
              {service.title}
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="mt-6 text-lg text-gray-400 max-w-2xl">
              {service.description} We build robust, scalable, and high-performance digital solutions tailored to your business needs.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="mt-10">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#4a6cf7] hover:bg-[#3a5ce5] text-white font-medium px-7 py-3.5 rounded-lg transition-all">
                Start a Project
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
            <h2 className="font-display text-4xl text-white">Our Development Services</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subServices.map((sub, i) => (
              <motion.div
                key={sub.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-8 rounded-2xl bg-[#111827] border border-white/5 hover:border-[#4a6cf7]/30 transition-all"
              >
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
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">Our Process</span>
            </div>
            <h2 className="font-display text-4xl text-white">How We Build</h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Planning', desc: 'We define requirements, architecture, and project milestones.' },
              { step: '02', title: 'Development', desc: 'Agile sprints with regular demos and continuous integration.' },
              { step: '03', title: 'Testing', desc: 'Rigorous QA including unit tests, integration tests, and UX review.' },
              { step: '04', title: 'Launch', desc: 'Seamless deployment with monitoring and ongoing support.' },
            ].map((item, i) => (
              <motion.div key={item.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-5xl font-display text-[#4a6cf7]/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-display text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0a0f1c]">
        <div className="w-full px-6 lg:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className="text-center max-w-3xl mx-auto">
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-4xl text-white">
              Ready to Build Something Amazing?
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="mt-6 text-gray-400">
              Let's turn your vision into a powerful digital product.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="mt-10">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#4a6cf7] hover:bg-[#3a5ce5] text-white font-medium px-8 py-4 rounded-lg transition-all text-lg">
                Start a Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
