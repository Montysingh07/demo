import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ABOUT_PREVIEW_CONTENT } from '../../data/homeContent';
import {
  ARCHITECTURAL_EASE,
  MaskedTextReveal,
  ParallaxImage,
  RevealSection,
} from '../common/MotionPrimitives';

export const AboutPreviewSection: React.FC = () => {
  return (
    <section id="about-preview" className="py-20 sm:py-28 bg-[#F7F5F0]">
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <RevealSection direction="left" className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] shadow-2xl shadow-[#1E1E1D]/10">
              <ParallaxImage
                src={ABOUT_PREVIEW_CONTENT.image}
                alt={ABOUT_PREVIEW_CONTENT.imageAlt}
                className="w-full h-full"
                speed={36}
              />
            </div>

            {/* Floating architectural caption card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.25, ease: ARCHITECTURAL_EASE }}
              className="hidden sm:block absolute -bottom-6 -right-4 lg:-right-8 max-w-xs p-5 rounded-xl bg-[#EAE4DC] border border-[#D6CEC2] shadow-lg"
            >
              <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B86B4B]">
                Integrated Practice
              </span>
              <p className="mt-1.5 text-sm text-[#1E1E1D] font-medium leading-snug">
                Concept planning, 3D visualisation, site execution, and interior styling aligned in one studio.
              </p>
            </motion.div>
          </RevealSection>

          {/* Content Column */}
          <div className="lg:col-span-6 lg:pl-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-4"
            >
              <span className="h-[1px] w-8 bg-[#B86B4B]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B86B4B]">
                {ABOUT_PREVIEW_CONTENT.eyebrow}
              </span>
            </motion.div>

            <MaskedTextReveal
              as="h2"
              text={ABOUT_PREVIEW_CONTENT.heading}
              className="font-serif text-3xl sm:text-4xl lg:text-[2.85rem] leading-[1.15] font-medium text-[#1E1E1D]"
            />

            <RevealSection delay={0.18}>
              <p className="mt-6 text-base sm:text-lg text-[#4A4945] leading-relaxed">
                {ABOUT_PREVIEW_CONTENT.description}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6 py-6 border-y border-[#D6CEC2]">
                <div>
                  <span className="font-serif text-xl sm:text-2xl text-[#1E1E1D] block">
                    Design-Led
                  </span>
                  <span className="text-xs text-[#7A766F] uppercase tracking-wider mt-1 block">
                    Architecture & Interiors
                  </span>
                </div>
                <div>
                  <span className="font-serif text-xl sm:text-2xl text-[#1E1E1D] block">
                    Turnkey Build
                  </span>
                  <span className="text-xs text-[#7A766F] uppercase tracking-wider mt-1 block">
                    Structured Site Delivery
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block"
                >
                  <Link
                    to="/about"
                    className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1E1E1D] hover:bg-[#B86B4B] text-[#F7F5F0] text-sm font-semibold tracking-wide transition-colors duration-300"
                  >
                    <span>{ABOUT_PREVIEW_CONTENT.ctaLabel}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </motion.div>
              </div>
            </RevealSection>
          </div>
        </div>
      </div>
    </section>
  );
};

