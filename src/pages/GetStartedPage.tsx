import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EnquiryWizard } from '../components/enquiry/EnquiryWizard';
import {
  ARCHITECTURAL_EASE,
  MaskedTextReveal,
  PageTransition,
} from '../components/common/MotionPrimitives';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const GetStartedPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get('type');
  const initialProject = searchParams.get('project');

  useDocumentTitle(
    'Start Your Project',
    'Complete our interactive 5-step project enquiry wizard to share your construction, architectural, or interior design requirements.'
  );

  return (
    <PageTransition>
      <section className="pt-32 pb-12 bg-[#F7F5F0] border-b border-[#D6CEC2]">
        <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 mb-5"
          >
            <span className="h-[1px] w-8 bg-[#B86B4B]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B86B4B]">
              Project Enquiry Wizard
            </span>
          </motion.div>

          <MaskedTextReveal
            as="h1"
            immediate
            text="Start your project with a structured brief."
            className="font-serif text-4xl sm:text-5xl leading-[1.1] font-medium text-[#1E1E1D]"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: ARCHITECTURAL_EASE }}
            className="mt-4 text-base sm:text-lg text-[#4A4945] leading-relaxed max-w-2xl"
          >
            Walk through five quick steps—from project type and site location to budget range and contact preferences.
          </motion.p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-[#F7F5F0]">
        <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
          <EnquiryWizard
            initialProjectType={initialType}
            initialReference={initialProject}
          />
        </div>
      </section>
    </PageTransition>
  );
};

