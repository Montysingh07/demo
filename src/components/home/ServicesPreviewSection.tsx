import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../../data/services';
import { SectionHeader } from '../common/SectionHeader';
import {
  ARCHITECTURAL_EASE,
  StaggerContainer,
  StaggerItem,
} from '../common/MotionPrimitives';

export const ServicesPreviewSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#EAE4DC]/65 border-y border-[#D6CEC2]/70">
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="What We Do"
            title="Comprehensive architecture, interior & construction services."
            description="Every discipline works together—from initial land feasibility and 3D visualisation to turnkey execution and final handover."
          />

          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="shrink-0">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#1E1E1D]/25 hover:border-[#1E1E1D] bg-[#F7F5F0] text-sm font-semibold text-[#1E1E1D] transition-colors"
            >
              <span>All Services</span>
              <ArrowUpRight className="w-4 h-4 text-[#B86B4B] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <StaggerItem key={service.id}>
              <Link
                to={`/services#${service.slug}`}
                className="group flex flex-col h-full rounded-2xl bg-[#F7F5F0] border border-[#D6CEC2]/80 overflow-hidden hover:border-[#B86B4B]/60 hover:shadow-xl hover:shadow-[#1E1E1D]/5 transition-all duration-500"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-[#D6CEC2]">
                  <motion.img
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    whileHover={{ scale: 1.07 }}
                    transition={{ duration: 0.6, ease: ARCHITECTURAL_EASE }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1D]/45 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#F7F5F0]/90 backdrop-blur-sm text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1E1E1D]">
                    {service.categoryLabel}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-serif text-xl font-medium text-[#1E1E1D] group-hover:text-[#B86B4B] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-[#4A4945] leading-relaxed flex-1">
                    {service.shortDescription}
                  </p>

                  <div className="mt-5 pt-4 border-t border-[#EAE4DC] flex items-center justify-between text-xs font-semibold uppercase tracking-[0.14em] text-[#1E1E1D] group-hover:text-[#B86B4B] transition-colors">
                    <span>Explore Scope</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

