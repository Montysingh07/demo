import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/common/MotionPrimitives';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const NotFoundPage: React.FC = () => {
  useDocumentTitle('Page Not Found');

  return (
    <PageTransition>
      <section className="min-h-[82vh] flex items-center justify-center px-5 pt-24 pb-16 architectural-grid">
        <div className="max-w-xl text-center">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 rounded-2xl bg-[#EAE4DC] border border-[#D6CEC2] flex items-center justify-center mx-auto mb-6"
          >
            <Compass className="w-8 h-8 text-[#B86B4B]" />
          </motion.div>

          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B86B4B]">
            Error 404
          </span>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl font-medium text-[#1E1E1D]">
            Blueprint not found.
          </h1>
          <p className="mt-4 text-base text-[#4A4945] leading-relaxed">
            The page you’re looking for doesn’t exist or may have been moved. Return to the studio homepage or browse our sample portfolio.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1E1E1D] hover:bg-[#B86B4B] text-[#F7F5F0] text-sm font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return Home</span>
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#D6CEC2] hover:border-[#1E1E1D] text-[#1E1E1D] text-sm font-semibold transition-colors"
            >
              <span>Browse Projects</span>
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

