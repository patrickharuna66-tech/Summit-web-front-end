import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, Check,
  ArrowUpRight
} from 'lucide-react';
import { services, portfolioItems, testimonials, newsItems, stats, industries } from '@/data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated particles background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      radius: number; opacity: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(74, 108, 247, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(74, 108, 247, ${0.08 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div>
      {/* ========== HERO ========== */}
      <section className="relative min-h-screen bg-black overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f1c]/30 to-[#0a0f1c] z-[1]" />

        <div className="relative z-10 w-full px-6 lg:px-12 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              <motion.div
                variants={fadeUp}
                custom={0}
                className="flex items-center gap-2 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-[#4a6cf7]" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                  Your Digital Partner
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                custom={1}
                className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-normal leading-[1.1] tracking-[-2px] text-white"
              >
                The{' '}
                <em className="italic text-[#7b95ff]">Holistic</em>
                <br />
                Plus+ Digital
                <br />
                Agency
              </motion.h1>

              <motion.p
                variants={fadeUp}
                custom={2}
                className="mt-6 text-lg text-gray-300 max-w-lg leading-relaxed"
              >
                We accelerate ambition, grow brands, build digital products, and craft experiences that bring positive change, value, and innovation.
              </motion.p>

              <motion.div
                variants={fadeUp}
                custom={3}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 bg-[#4a6cf7] hover:bg-[#3a5ce5] text-white font-medium px-7 py-3.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#4a6cf7]/25"
                >
                  Get Your Plan
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-medium px-7 py-3.5 rounded-lg transition-all duration-200"
                >
                  Free Consultation
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={fadeUp}
                custom={4}
                className="mt-16 flex items-center gap-8"
              >
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-bold text-white font-display">{stat.value}</div>
                    <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#111827]/80 backdrop-blur-sm">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                  alt="Dashboard"
                  className="w-full h-auto object-cover opacity-80"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-white font-medium">Live Project</span>
                </div>
                <div className="absolute top-4 right-4 bg-[#4a6cf7]/90 backdrop-blur-sm rounded-xl px-4 py-3">
                  <div className="text-2xl font-bold text-white">+150%</div>
                  <div className="text-xs text-white/80">Sales growth · 2 months</div>
                </div>
                <div className="absolute bottom-4 left-4 bg-[#111827]/90 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10">
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Support</div>
                  <div className="text-lg font-bold text-white">&lt;1 min</div>
                  <div className="text-xs text-gray-500">Average response</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== MARQUEE SERVICES ========== */}
      <section className="py-6 bg-[#0a0f1c] border-y border-white/5 overflow-hidden">
        <div className="flex animate-scroll-x">
          {[...services, ...services].map((service, i) => (
            <div key={i} className="flex items-center gap-3 px-8 shrink-0">
              <span className="text-[#4a6cf7]">
                <Check className="w-4 h-4" />
              </span>
              <span className="text-sm text-gray-300 whitespace-nowrap">{service.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ========== COMPANY PROFILE ========== */}
      <section className="py-32 bg-[#0a0f1c]">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#4a6cf7]" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                Company Profile
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-display text-4xl sm:text-5xl lg:text-[56px] font-normal leading-[1.2] text-white"
            >
              We are a team of professional designers, developers, and marketers combining our knowledge to create{' '}
              <span className="text-[#7b95ff]">exceptional outcomes.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-8 text-lg text-gray-400 leading-relaxed max-w-2xl"
            >
              With one of the largest ranges of services under one roof, we are your trusted partner for all things digital. Tell us about your goals and we'll show you how we can achieve them.
            </motion.p>

            <motion.div variants={fadeUp} custom={3} className="mt-10">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[#4a6cf7] hover:text-[#7b95ff] font-medium transition-colors group"
              >
                Learn more about us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========== SERVICES GRID ========== */}
      <section className="py-32 bg-black">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="mb-16"
          >
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#4a6cf7]" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">What We Do</span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl sm:text-5xl text-white">
              Our Services
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link
                  to={`/${service.id}`}
                  className="group block relative rounded-2xl overflow-hidden bg-[#111827] border border-white/5 hover:border-[#4a6cf7]/30 transition-all duration-300 h-full"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/50 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[#4a6cf7] text-sm font-medium">{service.number}</span>
                      <span className="text-gray-600">—</span>
                      <span className="text-xs text-gray-500 uppercase tracking-wider">
                        {service.subServices[0]}
                      </span>
                    </div>
                    <h3 className="text-2xl font-display text-white group-hover:text-[#7b95ff] transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-400 line-clamp-2">{service.description}</p>
                    <div className="mt-4 flex items-center gap-1 text-[#4a6cf7] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== INDUSTRIES ========== */}
      <section className="py-24 bg-[#0a0f1c]">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-12"
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
              Trusted across industries
            </span>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, i) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-6 py-3 rounded-full bg-[#111827] border border-white/5 text-gray-300 text-sm font-medium"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PORTFOLIO ========== */}
      <section className="py-32 bg-[#0a0f1c]">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="mb-16"
          >
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#4a6cf7]" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">Our Work</span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl sm:text-5xl text-white">
              Delivering value to businesses
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {portfolioItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden bg-[#111827] border border-white/5 hover:border-white/10 transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs text-[#4a6cf7] font-medium uppercase tracking-wider">{item.category}</span>
                  <h3 className="mt-2 text-xl font-display text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ABOUT SNIPPET ========== */}
      <section className="py-32 bg-black">
        <div className="w-full px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">About us</span>
              </motion.div>
              <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl sm:text-5xl text-white leading-tight">
                Allow us to introduce ourselves...
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="mt-6 text-lg text-gray-400 leading-relaxed">
                Summit Web is a specialist digital agency offering expert support across every area of the digital landscape. We are a team combining our knowledge and expertise to create exceptional outcomes tailored to your business's needs.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-white text-black hover:bg-gray-100 font-medium px-7 py-3.5 rounded-lg transition-all"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Team"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="py-32 bg-[#0a0f1c]">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#4a6cf7]" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">Testimonials</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-white">
              What our clients say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-2xl p-8 bg-[#111827] border border-white/5"
              >
                <div className="text-4xl text-[#4a6cf7] font-display mb-4">&ldquo;</div>
                <p className="text-gray-300 leading-relaxed">{testimonial.quote}</p>
                <div className="mt-6 pt-6 border-t border-white/5">
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
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
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-4xl sm:text-5xl lg:text-6xl text-white">
              Ready to Reach Your Summit?
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="mt-6 text-lg text-gray-400">
              Stop struggling with digital marketing. Let's make it simple together. Your first consultation is completely free.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="mt-10 flex flex-wrap justify-center gap-4">
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

      {/* ========== NEWS ========== */}
      <section className="py-32 bg-[#0a0f1c]">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="mb-16"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#4a6cf7]" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">Latest News</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-white">Featured news</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {newsItems.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="rounded-2xl overflow-hidden bg-[#111827] border border-white/5 hover:border-white/10 transition-all">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="text-[#4a6cf7] font-medium">{item.category}</span>
                      <span>{item.date}</span>
                    </div>
                    <h3 className="mt-3 text-lg font-display text-white group-hover:text-[#7b95ff] transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <div className="mt-3 text-sm text-gray-500">By {item.author}</div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
