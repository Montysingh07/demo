import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/projects';
import { SectionHeader } from '../common/SectionHeader';
import { ProjectCard } from '../projects/ProjectCard';

export const FeaturedProjectsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F7F5F0]">
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="Selected Portfolio"
            title="Six sample works across residential, commercial & interior spaces."
            description="Curated demo case studies illustrating our architectural planning, construction execution, and interior styling capabilities."
          />

          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="shrink-0">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1E1E1D] hover:bg-[#B86B4B] text-[#F7F5F0] text-sm font-semibold transition-colors"
            >
              <span>Filter Portfolio</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

