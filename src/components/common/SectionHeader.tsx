import React from 'react';
import { motion } from 'framer-motion';
import { ARCHITECTURAL_EASE, MaskedTextReveal } from './MotionPrimitives';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}) => {
  const isCenter = align === 'center';

  return (
    <div className={isCenter ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: ARCHITECTURAL_EASE }}
        className={`inline-flex items-center gap-3 mb-4 ${
          isCenter ? 'justify-center' : ''
        }`}
      >
        <span
          className={`h-[1px] w-8 ${
            light ? 'bg-[#E9D6CD]/70' : 'bg-[#B86B4B]'
          }`}
        />
        <span
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${
            light ? 'text-[#E9D6CD]' : 'text-[#B86B4B]'
          }`}
        >
          {eyebrow}
        </span>
      </motion.div>

      <MaskedTextReveal
        as="h2"
        text={title}
        className={`font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] font-medium ${
          light ? 'text-[#F7F5F0]' : 'text-[#1E1E1D]'
        }`}
      />

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, delay: 0.15, ease: ARCHITECTURAL_EASE }}
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? 'text-[#D6CEC2]' : 'text-[#4A4945]'
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

