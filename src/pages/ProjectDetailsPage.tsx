import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Maximize2,
  MapPin,
  Ruler,
  X,
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/projects';
import { ProjectCard } from '../components/projects/ProjectCard';
import {
  ARCHITECTURAL_EASE,
  MaskedTextReveal,
  PageTransition,
  RevealSection,
} from '../components/common/MotionPrimitives';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const ProjectDetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    setActiveImageIndex(0);
    setLightboxOpen(false);
  }, [slug]);

  useDocumentTitle(
    project ? project.title : 'Project Not Found',
    project?.shortSummary
  );

  if (!project) {
    return (
      <PageTransition>
        <section className="pt-36 pb-24 max-w-4xl mx-auto px-5 text-center">
          <h1 className="font-serif text-4xl font-medium text-[#1E1E1D]">
            Project Not Found
          </h1>
          <p className="mt-4 text-[#4A4945]">
            The requested portfolio case study could not be located.
          </p>
          <Link
            to="/projects"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1E1E1D] text-[#F7F5F0] text-sm font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>
        </section>
      </PageTransition>
    );
  }

  const activePhoto = project.gallery[activeImageIndex] ?? {
    url: project.mainImage,
    alt: project.mainImageAlt,
    caption: project.title,
  };

  const relatedProjects = PROJECTS_DATA.filter((p) => p.slug !== project.slug).slice(
    0,
    3
  );

  const similarProjectQuery = new URLSearchParams({
    project: project.title,
    type:
      project.category === 'Residential'
        ? 'Residential Construction'
        : project.category === 'Commercial'
          ? 'Commercial Construction'
          : project.category === 'Interior Design'
            ? 'Interior Design'
            : project.category === 'Renovation'
              ? 'Renovation'
              : 'Architectural Planning',
  }).toString();

  return (
    <PageTransition>
      <section className="pt-28 sm:pt-32 pb-16 bg-[#F7F5F0]">
        <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
          {/* Breadcrumb */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#7A766F] hover:text-[#B86B4B] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>

          {/* Header Info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3.5 py-1 rounded-full bg-[#1E1E1D] text-[#F7F5F0] text-xs font-semibold uppercase tracking-[0.14em]">
                  {project.category}
                </span>
                <span className="px-3.5 py-1 rounded-full bg-[#EAE4DC] text-[#7A766F] text-xs font-medium">
                  {project.statusLabel}
                </span>
              </div>

              <MaskedTextReveal
                as="h1"
                immediate
                text={project.title}
                className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] font-medium text-[#1E1E1D]"
              />
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end text-sm text-[#4A4945]">
              <div className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#B86B4B]" />
                <span>{project.location}</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <Ruler className="w-4 h-4 text-[#B86B4B]" />
                <span>{project.areaLabel}</span>
              </div>
            </div>
          </div>

          {/* Interactive Main Image + Gallery Switcher */}
          <div className="space-y-4">
            <div className="relative rounded-3xl overflow-hidden aspect-[16/10] sm:aspect-[16/9] bg-[#EAE4DC] shadow-2xl shadow-[#1E1E1D]/10">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activePhoto.url}
                  src={activePhoto.url}
                  alt={activePhoto.alt}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: ARCHITECTURAL_EASE }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 bg-gradient-to-t from-[#1E1E1D]/80 via-[#1E1E1D]/25 to-transparent flex items-end justify-between gap-4">
                <p className="text-sm sm:text-base text-[#F7F5F0] font-medium">
                  {activePhoto.caption}
                </p>
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  aria-label="Open full-screen image preview"
                  className="p-2.5 rounded-full bg-[#F7F5F0]/90 hover:bg-[#F7F5F0] text-[#1E1E1D] transition-colors shrink-0"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {project.gallery.map((img, idx) => {
                const isSelected = idx === activeImageIndex;
                return (
                  <button
                    key={img.url}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative rounded-xl overflow-hidden aspect-[16/10] border-2 transition-all ${
                      isSelected
                        ? 'border-[#B86B4B] ring-2 ring-[#B86B4B]/25'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Description, Highlights & CTA */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <RevealSection className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1E1E1D]">
                  Architectural Overview
                </h2>
                <p className="mt-4 text-base sm:text-lg text-[#4A4945] leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-medium text-[#1E1E1D] mb-4">
                  Project Highlights
                </h3>
                <ul className="space-y-3">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 p-4 rounded-xl bg-[#EAE4DC]/55 border border-[#D6CEC2]"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#5F6A57] shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-[#1E1E1D]">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealSection>

            <RevealSection delay={0.12} className="lg:col-span-5">
              <div className="p-7 sm:p-8 rounded-3xl bg-[#1E1E1D] text-[#F7F5F0] space-y-6 sticky top-28">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E9D6CD]">
                    Scope & Deliverables
                  </span>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.deliverables.map((item) => (
                      <span
                        key={item}
                        className="px-3.5 py-1.5 rounded-full bg-[#2B2B29] border border-[#3B3B38] text-xs font-medium text-[#EAE4DC]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#343431]">
                  <h3 className="font-serif text-2xl font-medium">
                    Inspired by this project?
                  </h3>
                  <p className="mt-2 text-sm text-[#D6CEC2] leading-relaxed">
                    Launch our guided enquiry wizard pre-filled with this project style and share your site details.
                  </p>
                  <Link
                    to={`/get-started?${similarProjectQuery}`}
                    className="mt-6 group inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-full bg-[#B86B4B] hover:bg-[#9A5437] text-[#F7F5F0] text-sm font-semibold transition-colors"
                  >
                    <span>Start a Similar Project</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 sm:py-24 bg-[#EAE4DC]/65 border-t border-[#D6CEC2]">
        <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex items-center justify-between gap-4 mb-10">
            <h2 className="font-serif text-3xl font-medium text-[#1E1E1D]">
              Related Sample Projects
            </h2>
            <Link
              to="/projects"
              className="text-sm font-semibold text-[#B86B4B] hover:text-[#9A5437] inline-flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {relatedProjects.map((rel, idx) => (
              <ProjectCard key={rel.id} project={rel} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#141413]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close image preview"
              className="absolute top-6 right-6 p-3 rounded-full bg-[#F7F5F0]/10 hover:bg-[#F7F5F0]/20 text-[#F7F5F0] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.3, ease: ARCHITECTURAL_EASE }}
              src={activePhoto.url}
              alt={activePhoto.alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};

