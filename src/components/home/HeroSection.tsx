import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Compass } from 'lucide-react';
import { HERO_CONTENT } from '../../data/homeContent';
import { ARCHITECTURAL_EASE, MaskedTextReveal } from '../common/MotionPrimitives';

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.16]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.75], [0, 60]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92vh] sm:min-h-screen flex items-end pb-16 sm:pb-24 pt-32 overflow-hidden bg-[#181817]"
    >
      {/* Parallax & Animated Entrance Background Photo */}
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        initial={{ scale: 1.12, opacity: 0.7 }}
        animate={{ scale: 1.04, opacity: 1 }}
        transition={{ duration: 1.4, ease: ARCHITECTURAL_EASE }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src={HERO_CONTENT.heroImage}
          alt={HERO_CONTENT.heroImageAlt}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Architectural Dark Gradient Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#141413]/92 via-[#141413]/52 to-[#141413]/38"
      />

      {/* Subtle animated architectural hairline frame */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="hidden lg:block absolute inset-x-10 top-24 bottom-10 border border-[#F7F5F0]/10 pointer-events-none"
      />

      {/* Hero Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 w-full px-5 sm:px-8 lg:px-12 xl:px-16"
      >
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: ARCHITECTURAL_EASE }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#F7F5F0]/10 backdrop-blur-md border border-[#F7F5F0]/20 text-[#E9D6CD] text-xs font-semibold uppercase tracking-[0.2em] mb-7"
          >
            <Compass className="w-3.5 h-3.5 text-[#B86B4B]" />
            <span>{HERO_CONTENT.eyebrow}</span>
          </motion.div>

          <MaskedTextReveal
            as="h1"
            immediate
            delay={0.22}
            text={HERO_CONTENT.heading}
            className="font-serif text-4xl sm:text-6xl lg:text-[4.4rem] leading-[1.07] font-medium text-[#F7F5F0]"
          />

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: ARCHITECTURAL_EASE }}
            className="mt-6 text-base sm:text-xl text-[#EAE4DC]/90 leading-relaxed max-w-2xl"
          >
            {HERO_CONTENT.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.72, ease: ARCHITECTURAL_EASE }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#F7F5F0] hover:bg-[#EAE4DC] text-[#1E1E1D] text-sm font-semibold tracking-wide transition-colors shadow-xl"
              >
                <span>{HERO_CONTENT.primaryCta}</span>
                <ArrowUpRight className="w-4 h-4 text-[#B86B4B] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to="/get-started"
                className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#B86B4B] hover:bg-[#9A5437] text-[#F7F5F0] text-sm font-semibold tracking-wide transition-colors shadow-xl shadow-[#B86B4B]/25"
              >
                <span>{HERO_CONTENT.secondaryCta}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Scroll Cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05, duration: 0.8 }}
          className="hidden sm:flex items-center justify-between mt-14 pt-6 border-t border-[#F7F5F0]/15 text-xs uppercase tracking-[0.2em] text-[#EAE4DC]/75"
        >
          <span>Residential · Commercial · Interiors · 3D Visualisation</span>
          <a
            href="#about-preview"
            className="inline-flex items-center gap-2 hover:text-[#F7F5F0] transition-colors"
          >
            <span>Scroll to explore</span>
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown className="w-3.5 h-3.5 text-[#B86B4B]" />
            </motion.span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

