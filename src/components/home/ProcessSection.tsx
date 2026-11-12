import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { OUR_PROCESS_STEPS } from '../../data/homeContent';
import { SectionHeader } from '../common/SectionHeader';
import {
  ARCHITECTURAL_EASE,
  StaggerContainer,
  StaggerItem,
} from '../common/MotionPrimitives';

export const ProcessSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="py-20 sm:py-28 bg-[#F7F5F0] architectural-grid">
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="mb-14">
          <SectionHeader
            eyebrow="Our Process"
            title="Six structured phases from first sketch to handover."
            description="A transparent, milestone-driven workflow designed to remove uncertainty from architecture, approvals, and construction."
          />
        </div>

        {/* Interactive Animated Timeline Bar (Desktop) */}
        <div className="hidden lg:block mb-10 relative">
          <div className="h-[2px] w-full bg-[#D6CEC2] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#B86B4B]"
              initial={false}
              animate={{
                width: `${((activeIndex + 1) / OUR_PROCESS_STEPS.length) * 100}%`,
              }}
              transition={{ duration: 0.45, ease: ARCHITECTURAL_EASE }}
            />
          </div>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OUR_PROCESS_STEPS.map((step, index) => {
            const isActive = activeIndex === index;
            return (
              <StaggerItem key={step.stepNumber}>
                <motion.div
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: ARCHITECTURAL_EASE }}
                  className={`relative cursor-pointer h-full p-7 rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? 'bg-[#1E1E1D] text-[#F7F5F0] border-[#1E1E1D] shadow-xl shadow-[#1E1E1D]/15'
                      : 'bg-[#F7F5F0]/95 text-[#1E1E1D] border-[#D6CEC2] hover:border-[#B86B4B]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`font-serif text-3xl font-medium ${
                        isActive ? 'text-[#E9D6CD]' : 'text-[#B86B4B]'
                      }`}
                    >
                      {step.stepNumber}
                    </span>
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-[0.18em] px-3 py-1 rounded-full ${
                        isActive
                          ? 'bg-[#B86B4B] text-[#F7F5F0]'
                          : 'bg-[#EAE4DC] text-[#4A4945]'
                      }`}
                    >
                      Phase {index + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-medium">{step.title}</h3>
                  <p
                    className={`mt-1 text-xs uppercase tracking-[0.16em] font-semibold ${
                      isActive ? 'text-[#E9D6CD]' : 'text-[#7A766F]'
                    }`}
                  >
                    {step.subtitle}
                  </p>
                  <p
                    className={`mt-4 text-sm leading-relaxed ${
                      isActive ? 'text-[#D6CEC2]' : 'text-[#4A4945]'
                    }`}
                  >
                    {step.description}
                  </p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

