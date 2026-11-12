import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import { ARCHITECTURAL_EASE, RevealSection } from './MotionPrimitives';

interface CTASectionProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  eyebrow = 'Begin Your Build',
  heading = 'Ready to shape a space built to endure?',
  description = 'Share your project vision through our guided enquiry wizard or schedule a consultation with our architectural and construction team.',
  primaryLabel = 'Start Your Project',
  primaryTo = '/get-started',
  secondaryLabel = 'Contact the Studio',
  secondaryTo = '/contact',
}) => {
  return (
    <section className="relative py-20 sm:py-28 bg-[#1E1E1D] text-[#F7F5F0] overflow-hidden">
      {/* Subtle animated architectural grid overlay */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.12 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(247,245,240,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(247,245,240,0.18) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* Ambient slow-moving warm accent glow */}
      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.16, 0.24, 0.16],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-32 -bottom-32 w-[480px] h-[480px] rounded-full bg-[#B86B4B] blur-[140px] pointer-events-none"
      />

      <div className="relative w-full px-5 sm:px-8 lg:px-12 xl:px-16">
        <RevealSection className="max-w-3xl">
          <div className="inline-flex items-center gap-2.5 text-[#E9D6CD] text-xs font-semibold uppercase tracking-[0.2em] mb-5">
            <Compass className="w-4 h-4 text-[#B86B4B]" />
            <span>{eyebrow}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[3.4rem] leading-[1.12] font-medium text-[#F7F5F0]">
            {heading}
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#D6CEC2] leading-relaxed max-w-2xl">
            {description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25, ease: ARCHITECTURAL_EASE }}
            >
              <Link
                to={primaryTo}
                className="group inline-flex items-center gap-2.5 px-7 py-4 bg-[#B86B4B] hover:bg-[#9A5437] text-[#F7F5F0] text-sm font-semibold tracking-wide rounded-full transition-colors shadow-lg shadow-[#B86B4B]/20"
              >
                <span>{primaryLabel}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25, ease: ARCHITECTURAL_EASE }}
            >
              <Link
                to={secondaryTo}
                className="inline-flex items-center gap-2 px-7 py-4 border border-[#F7F5F0]/30 hover:border-[#F7F5F0] text-[#F7F5F0] text-sm font-medium tracking-wide rounded-full transition-colors"
              >
                <span>{secondaryLabel}</span>
              </Link>
            </motion.div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};

