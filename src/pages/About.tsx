import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Zap, Shield } from 'lucide-react';
import { services, stats } from '@/data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4a6cf7]/5 via-transparent to-transparent" />
        <div className="relative z-10 w-full px-6 lg:px-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#4a6cf7]" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">About Us</span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="font-display text-5xl sm:text-6xl lg:text-7xl text-white max-w-4xl">
              Allow us to introduce ourselves...
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="mt-6 text-lg text-gray-400 max-w-2xl">
              Summit Web is a specialist digital agency offering expert support across every area of the digital landscape. We combine our knowledge and expertise to create exceptional outcomes tailored to your business's needs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-[#0a0f1c]">
        <div className="w-full px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              <motion.div variants={fadeUp} custom={0} className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#4a6cf7]" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">Our Story</span>
              </motion.div>
              <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl text-white mb-6">
                A Passion For Progress
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-gray-400 leading-relaxed mb-6">
                We established Summit Web to be a driving force in the digital revolution. Our team of specialists combines expertise in design, development, marketing, and technology to deliver comprehensive digital solutions.
              </motion.p>
              <motion.p variants={fadeUp} custom={3} className="text-gray-400 leading-relaxed">
                We believe in building long-term partnerships with our clients, providing ongoing support and strategic guidance to help them navigate the ever-evolving digital landscape. With one of the largest ranges of digital services under one roof, we are your trusted partner for all things digital.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              className="space-y-6"
            >
              {[
                { icon: Users, title: 'Client-Centric', desc: 'We put our clients at the heart of everything we do, ensuring their needs and goals drive every decision.' },
                { icon: Target, title: 'Results-Driven', desc: 'We focus on delivering measurable outcomes that directly impact your business growth and success.' },
                { icon: Zap, title: 'Innovation', desc: 'We stay ahead of the curve, embracing emerging technologies and strategies to keep you competitive.' },
                { icon: Shield, title: 'Trust & Transparency', desc: 'We build relationships based on honesty, clear communication, and delivering on our promises.' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  custom={i}
                  className="flex items-start gap-4 p-5 rounded-xl bg-[#111827] border border-white/5"
                >
                  <div className="p-2 rounded-lg bg-[#4a6cf7]/10 text-[#4a6cf7]">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{item.title}</h4>
                    <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 bg-black">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="mb-16"
          >
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#4a6cf7]" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">Our Services</span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl text-white">
              With one of the largest ranges of services under one roof, we are your trusted partner for all things digital.
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={`/${service.id}`}
                  className="group block p-8 rounded-2xl bg-[#111827] border border-white/5 hover:border-[#4a6cf7]/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl font-display text-[#4a6cf7]/20 group-hover:text-[#4a6cf7]/40 transition-colors">
                      {service.number}
                    </span>
                    <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-[#4a6cf7] group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-xl font-display text-white group-hover:text-[#7b95ff] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400">{service.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.subServices.map((sub) => (
                      <span key={sub} className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-500">
                        {sub}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-[#0a0f1c]">
        <div className="w-full px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#4a6cf7]" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">Why Choose Us</span>
              </div>
              <h2 className="font-display text-4xl text-white">
                From our clients' point of view
              </h2>
              <p className="mt-6 text-gray-400 leading-relaxed">
                "We chose Summit Web because they offered the full package — from web design to marketing and AI automation — all in one place. Their team truly understands the Nigerian market and delivers results that matter."
              </p>
              <div className="mt-6">
                <div className="font-semibold text-white">Client Testimonial</div>
                <div className="text-sm text-gray-500">Business Owner, Lagos</div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
              className="grid grid-cols-3 gap-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  custom={i}
                  className="text-center p-6 rounded-2xl bg-[#111827] border border-white/5"
                >
                  <div className="text-3xl font-bold text-[#4a6cf7] font-display">{stat.value}</div>
                  <div className="text-sm text-gray-500 mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-4xl sm:text-5xl text-white">
              Ready to Reach Your Summit?
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="mt-6 text-lg text-gray-400">
              Tell us about your goals and we'll show you how we can achieve them together.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#4a6cf7] hover:bg-[#3a5ce5] text-white font-medium px-8 py-4 rounded-lg transition-all text-lg"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
