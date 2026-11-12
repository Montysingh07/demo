import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import type { ProjectItem } from '../../types';
import { ARCHITECTURAL_EASE } from '../common/MotionPrimitives';

interface ProjectCardProps {
  project: ProjectItem;
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0 }) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.65,
        delay: (index % 3) * 0.08,
        ease: ARCHITECTURAL_EASE,
      }}
      className="group flex flex-col h-full rounded-2xl bg-[#F7F5F0] border border-[#D6CEC2]/80 overflow-hidden hover:border-[#B86B4B]/60 hover:shadow-2xl hover:shadow-[#1E1E1D]/8 transition-all duration-500"
    >
      <Link to={`/projects/${project.slug}`} className="flex flex-col h-full">
        <div className="relative aspect-[16/11] overflow-hidden bg-[#EAE4DC]">
          <motion.img
            src={project.mainImage}
            alt={project.mainImageAlt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1D]/65 via-[#1E1E1D]/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

          {/* Category Pill */}
          <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#F7F5F0]/92 backdrop-blur-sm text-[11px] font-semibold uppercase tracking-[0.15em] text-[#1E1E1D]">
            {project.category}
          </span>

          {/* Floating View Project Pill on Hover */}
          <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#B86B4B] text-[#F7F5F0] text-xs font-semibold tracking-wide shadow-lg">
              <span>View Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-1.5 text-xs text-[#7A766F] mb-2">
            <MapPin className="w-3.5 h-3.5 text-[#B86B4B] shrink-0" />
            <span>{project.location}</span>
          </div>

          <h3 className="font-serif text-2xl font-medium text-[#1E1E1D] group-hover:text-[#B86B4B] transition-colors">
            {project.title}
          </h3>

          <p className="mt-2.5 text-sm text-[#4A4945] leading-relaxed flex-1">
            {project.shortSummary}
          </p>

          <div className="mt-5 pt-4 border-t border-[#EAE4DC] flex items-center justify-between text-xs font-semibold uppercase tracking-[0.14em] text-[#1E1E1D] group-hover:text-[#B86B4B] transition-colors">
            <span>View Project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

