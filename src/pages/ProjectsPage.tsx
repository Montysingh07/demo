import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECT_CATEGORIES, PROJECTS_DATA } from '../data/projects';
import type { ProjectCategory } from '../types';
import { ProjectCard } from '../components/projects/ProjectCard';
import { CTASection } from '../components/common/CTASection';
import {
  ARCHITECTURAL_EASE,
  MaskedTextReveal,
  PageTransition,
} from '../components/common/MotionPrimitives';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');

  useDocumentTitle(
    'Projects & Portfolio',
    'Browse sample architectural, residential, commercial, interior design, and renovation projects.'
  );

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return PROJECTS_DATA;
    return PROJECTS_DATA.filter((proj) => proj.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <PageTransition>
      <section className="pt-32 pb-12 sm:pb-16 bg-[#F7F5F0] border-b border-[#D6CEC2]">
        <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 mb-5"
            >
              <span className="h-[1px] w-8 bg-[#B86B4B]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B86B4B]">
                Portfolio Showcase
              </span>
            </motion.div>

            <MaskedTextReveal
              as="h1"
              immediate
              text="Selected architectural & interior works."
              className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] font-medium text-[#1E1E1D]"
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: ARCHITECTURAL_EASE }}
              className="mt-5 text-base sm:text-lg text-[#4A4945] leading-relaxed"
            >
              Sample portfolio case studies across residential, commercial, interior design, renovation, and 3D concept design. Locations and specifications are editable demo placeholders.
            </motion.p>
          </div>

          {/* Animated Category Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="mt-10 flex flex-wrap gap-2.5"
          >
            {PROJECT_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-[#F7F5F0]'
                      : 'text-[#4A4945] hover:text-[#1E1E1D] bg-[#EAE4DC]/80'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="project-filter-pill"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                      className="absolute inset-0 rounded-full bg-[#1E1E1D]"
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-24 bg-[#F7F5F0]">
        <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="mb-8 text-xs font-semibold uppercase tracking-[0.16em] text-[#7A766F]">
            Showing {filteredProjects.length}{' '}
            {filteredProjects.length === 1 ? 'Sample Project' : 'Sample Projects'}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  );
};

