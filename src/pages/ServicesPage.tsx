import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';
import { SERVICES_DATA } from '../data/services';
import { CTASection } from '../components/common/CTASection';
import {
  ARCHITECTURAL_EASE,
  MaskedTextReveal,
  PageTransition,
  RevealSection,
} from '../components/common/MotionPrimitives';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const ServicesPage: React.FC = () => {
  useDocumentTitle(
    'Services',
    'Residential construction, commercial construction, architectural planning, interior design, 3D visualisation, land development, renovation, and project management.'
  );

  return (
    <PageTransition>
      {/* Hero Header */}
      <section className="pt-32 pb-16 sm:pb-20 bg-[#F7F5F0] border-b border-[#D6CEC2]">
        <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 mb-5"
            >
              <span className="h-[1px] w-8 bg-[#B86B4B]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B86B4B]">
                Our Disciplines
              </span>
            </motion.div>

            <MaskedTextReveal
              as="h1"
              immediate
              text="Integrated architecture, interiors & construction services."
              className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] font-medium text-[#1E1E1D]"
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: ARCHITECTURAL_EASE }}
              className="mt-6 text-base sm:text-xl text-[#4A4945] leading-relaxed"
            >
              Explore our eight core capabilities—each structured with clear deliverables, material transparency, and dedicated site coordination.
            </motion.p>
          </div>

          {/* Quick Jump Pills */}
          <div className="mt-10 flex flex-wrap gap-2.5">
            {SERVICES_DATA.map((service) => (
              <a
                key={service.id}
                href={`#${service.slug}`}
                className="px-4 py-2 rounded-full bg-[#EAE4DC] hover:bg-[#1E1E1D] text-xs font-semibold text-[#1E1E1D] hover:text-[#F7F5F0] transition-colors"
              >
                {service.shortTitle}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="py-16 sm:py-24 bg-[#F7F5F0]">
        <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 space-y-20 sm:space-y-28">
          {SERVICES_DATA.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <article
                key={service.id}
                id={service.slug}
                className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
              >
                {/* Image */}
                <RevealSection
                  direction={isEven ? 'left' : 'right'}
                  className={`lg:col-span-6 ${isEven ? '' : 'lg:order-2'}`}
                >
                  <div className="group relative rounded-3xl overflow-hidden aspect-[16/11] bg-[#EAE4DC] shadow-xl shadow-[#1E1E1D]/8">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-[#F7F5F0]/92 backdrop-blur-sm text-xs font-semibold uppercase tracking-[0.16em] text-[#1E1E1D]">
                      {service.categoryLabel}
                    </span>
                  </div>
                </RevealSection>

                {/* Content */}
                <RevealSection
                  direction={isEven ? 'right' : 'left'}
                  delay={0.08}
                  className={`lg:col-span-6 ${isEven ? '' : 'lg:order-1'}`}
                >
                  <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1E1E1D]">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base text-[#4A4945] leading-relaxed">
                    {service.fullDescription}
                  </p>

                  {/* Key Features & Scope */}
                  <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#D6CEC2]">
                    <div>
                      <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#B86B4B] mb-3">
                        Key Features
                      </h3>
                      <ul className="space-y-2.5">
                        {service.keyFeatures.map((feat) => (
                          <li
                            key={feat}
                            className="flex items-start gap-2.5 text-sm text-[#1E1E1D]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#5F6A57] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#B86B4B] mb-3">
                        Scope of Services
                      </h3>
                      <ul className="space-y-2.5">
                        {service.scopeOfServices.map((scope) => (
                          <li
                            key={scope}
                            className="flex items-start gap-2.5 text-sm text-[#4A4945]"
                          >
                            <Layers className="w-4 h-4 text-[#B86B4B] shrink-0 mt-0.5" />
                            <span>{scope}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link
                      to={`/get-started?type=${encodeURIComponent(service.shortTitle)}`}
                      className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1E1E1D] hover:bg-[#B86B4B] text-[#F7F5F0] text-sm font-semibold transition-colors"
                    >
                      <span>Enquire About {service.shortTitle}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </RevealSection>
              </article>
            );
          })}
        </div>
      </section>

      <CTASection />
    </PageTransition>
  );
};

