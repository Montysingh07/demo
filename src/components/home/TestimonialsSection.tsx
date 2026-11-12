import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { DEMO_TESTIMONIALS } from '../../data/homeContent';
import { SectionHeader } from '../common/SectionHeader';
import {
  ARCHITECTURAL_EASE,
  StaggerContainer,
  StaggerItem,
} from '../common/MotionPrimitives';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#EAE4DC]/65 border-t border-[#D6CEC2]/70">
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="Client Perspectives (Demo)"
            title="Illustrative feedback formats for presentation."
            description="These sample testimonials demonstrate how verified client reviews will appear once your real project feedback is added."
          />

          <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#F7F5F0] border border-[#D6CEC2] text-xs font-medium text-[#7A766F] shrink-0">
            Demo Placeholders · Not Genuine Reviews
          </span>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DEMO_TESTIMONIALS.map((item) => (
            <StaggerItem key={item.id}>
              <motion.blockquote
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3, ease: ARCHITECTURAL_EASE }}
                className="h-full flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-[#F7F5F0] border border-[#D6CEC2] shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <Quote className="w-7 h-7 text-[#B86B4B]/70" />
                    <span className="px-3 py-1 rounded-full bg-[#EAE4DC] text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7A766F]">
                      {item.demoLabel}
                    </span>
                  </div>

                  <p className="font-serif text-lg sm:text-xl text-[#1E1E1D] leading-relaxed italic">
                    “{item.quote}”
                  </p>
                </div>

                <footer className="mt-7 pt-5 border-t border-[#EAE4DC] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <cite className="not-italic text-sm font-semibold text-[#1E1E1D] block">
                      {item.authorPlaceholder}
                    </cite>
                    <span className="text-xs text-[#7A766F]">{item.projectType}</span>
                  </div>
                  <span className="text-xs text-[#7A766F]">{item.locationPlaceholder}</span>
                </footer>
              </motion.blockquote>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

