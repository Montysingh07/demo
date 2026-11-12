import React from 'react';
import { motion } from 'framer-motion';
import {
  Compass,
  Layers,
  MessageSquare,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../../data/homeContent';
import { SectionHeader } from '../common/SectionHeader';
import {
  ARCHITECTURAL_EASE,
  StaggerContainer,
  StaggerItem,
} from '../common/MotionPrimitives';

const ICON_MAP = {
  ShieldCheck,
  Compass,
  Sparkles,
  MessageSquare,
  Layers,
};

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#EAE4DC]/75 border-y border-[#D6CEC2]/70">
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <SectionHeader
              eyebrow="Why Choose Us"
              title="Built on architectural clarity & disciplined delivery."
              description="We pair thoughtful spatial design with structured on-site execution so every detail is delivered as intended."
            />
          </div>

          <StaggerContainer className="lg:col-span-7 space-y-4">
            {WHY_CHOOSE_US.map((item) => {
              const Icon = ICON_MAP[item.iconName];
              return (
                <StaggerItem key={item.id}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.3, ease: ARCHITECTURAL_EASE }}
                    className="group p-6 sm:p-7 rounded-2xl bg-[#F7F5F0] border border-[#D6CEC2] hover:border-[#B86B4B]/70 transition-colors shadow-sm"
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-xl bg-[#EAE4DC] group-hover:bg-[#B86B4B] text-[#1E1E1D] group-hover:text-[#F7F5F0] flex items-center justify-center shrink-0 transition-colors duration-300">
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-4">
                          <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1E1E1D]">
                            {item.title}
                          </h3>
                          <span className="text-xs font-semibold tracking-[0.2em] text-[#B86B4B]">
                            {item.number}
                          </span>
                        </div>
                        <p className="mt-2 text-sm sm:text-base text-[#4A4945] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

