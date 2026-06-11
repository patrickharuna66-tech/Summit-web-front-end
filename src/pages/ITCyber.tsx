import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Cloud, Lock, Wifi, Monitor, Cpu } from 'lucide-react';
import { services } from '@/data/content';

const service = services.find(s => s.id === 'it-cyber')!;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const subServices = [
  { icon: Monitor, title: 'Managed IT Services', desc: 'Comprehensive IT support and infrastructure management so you can focus on your business.' },
  { icon: Shield, title: 'Cyber Security', desc: 'Advanced threat detection, penetration testing, and security audits to protect your digital assets.' },
  { icon: Cloud, title: 'Cloud Services', desc: 'Cloud migration, management, and optimization for improved scalability and cost efficiency.' },
  { icon: Cpu, title: 'AI and Automation', desc: 'Intelligent automation solutions that streamline operations and boost productivity.' },
  { icon: Lock, title: 'Data Protection', desc: 'Backup, recovery, and encryption solutions to keep your sensitive data secure.' },
  { icon: Wifi, title: 'Network Solutions', desc: 'Enterprise-grade networking infrastructure design, implementation, and ongoing support.' },
];

export default function ITCyber() {
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
              {service.description} Protect your business and improve technological performance with our expert IT and cyber security solutions.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="mt-10">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#4a6cf7] hover:bg-[#3a5ce5] text-white font-medium px-7 py-3.5 rounded-lg transition-all">
                Secure Your Business
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
            <h2 className="font-display text-4xl text-white">Our IT & Security Services</h2>
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
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp} custom={0}>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#4a6cf7]" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">Why Security Matters</span>
              </div>
              <h2 className="font-display text-4xl text-white mb-6">
                Protecting Your Digital Assets
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                In today's digital landscape, cyber threats are evolving rapidly. Our comprehensive security solutions ensure your business stays protected against the latest threats, from ransomware to data breaches.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We provide 24/7 monitoring, regular security audits, and proactive threat hunting to keep your infrastructure safe and your data secure.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} custom={1} className="grid grid-cols-2 gap-4">
              {[
                { value: '99.9%', label: 'Uptime Guaranteed' },
                { value: '24/7', label: 'Monitoring' },
                { value: '<15min', label: 'Incident Response' },
                { value: '100%', label: 'Compliance' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-6 rounded-2xl bg-[#111827] border border-white/5">
                  <div className="text-2xl font-bold text-[#4a6cf7] font-display">{stat.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-[#0a0f1c]">
        <div className="w-full px-6 lg:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className="text-center max-w-3xl mx-auto">
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-4xl text-white">
              Secure Your Business Today
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="mt-6 text-gray-400">
              Don't wait for a breach. Proactive security is the best defense.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="mt-10">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#4a6cf7] hover:bg-[#3a5ce5] text-white font-medium px-8 py-4 rounded-lg transition-all text-lg">
                Get Security Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
