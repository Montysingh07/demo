import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ABOUT_PAGE_CONTENT } from '../data/aboutContent';
import { SectionHeader } from '../components/common/SectionHeader';
import { CTASection } from '../components/common/CTASection';
import {
  ARCHITECTURAL_EASE,
  MaskedTextReveal,
  PageTransition,
  ParallaxImage,
  RevealSection,
  StaggerContainer,
  StaggerItem,
} from '../components/common/MotionPrimitives';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const AboutPage: React.FC = () => {
  useDocumentTitle(
    'About Us',
    'Learn about Atelier Forma’s integrated architecture, construction, and interior design philosophy.'
  );

  return (
    <PageTransition>
      {/* Page Hero */}
      <section className="pt-32 pb-16 sm:pb-24 bg-[#F7F5F0]">
        <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-5"
            >
              <span className="h-[1px] w-8 bg-[#B86B4B]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B86B4B]">
                {ABOUT_PAGE_CONTENT.eyebrow}
              </span>
            </motion.div>

            <MaskedTextReveal
              as="h1"
              immediate
              text={ABOUT_PAGE_CONTENT.heading}
              className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] font-medium text-[#1E1E1D]"
            />

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: ARCHITECTURAL_EASE }}
              className="mt-6 text-base sm:text-xl text-[#4A4945] leading-relaxed max-w-3xl"
            >
              {ABOUT_PAGE_CONTENT.intro}
            </motion.p>
          </div>

          <RevealSection delay={0.2} className="mt-12 sm:mt-16">
            <div className="rounded-3xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] bg-[#EAE4DC] shadow-2xl shadow-[#1E1E1D]/10">
              <ParallaxImage
                src={ABOUT_PAGE_CONTENT.heroImage}
                alt={ABOUT_PAGE_CONTENT.heroImageAlt}
                className="w-full h-full"
                speed={32}
              />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-24 bg-[#EAE4DC]/70 border-y border-[#D6CEC2]">
        <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <RevealSection direction="up">
              <div className="h-full p-8 sm:p-10 rounded-3xl bg-[#F7F5F0] border border-[#D6CEC2]">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B86B4B]">
                  01 · Purpose
                </span>
                <h2 className="mt-3 font-serif text-3xl font-medium text-[#1E1E1D]">
                  {ABOUT_PAGE_CONTENT.mission.title}
                </h2>
                <p className="mt-4 text-base text-[#4A4945] leading-relaxed">
                  {ABOUT_PAGE_CONTENT.mission.body}
                </p>
              </div>
            </RevealSection>

            <RevealSection direction="up" delay={0.12}>
              <div className="h-full p-8 sm:p-10 rounded-3xl bg-[#1E1E1D] text-[#F7F5F0] border border-[#1E1E1D]">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E9D6CD]">
                  02 · Direction
                </span>
                <h2 className="mt-3 font-serif text-3xl font-medium">
                  {ABOUT_PAGE_CONTENT.vision.title}
                </h2>
                <p className="mt-4 text-base text-[#D6CEC2] leading-relaxed">
                  {ABOUT_PAGE_CONTENT.vision.body}
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Working Approach */}
      <section className="py-20 sm:py-28 bg-[#F7F5F0]">
        <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="mb-14">
            <SectionHeader
              eyebrow="Working Approach"
              title="How design intent becomes structural reality."
              description="Our studio bridges architectural drawing boards and active construction sites through disciplined coordination."
            />
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ABOUT_PAGE_CONTENT.approach.map((item) => (
              <StaggerItem key={item.step}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3, ease: ARCHITECTURAL_EASE }}
                  className="h-full p-8 rounded-2xl bg-[#EAE4DC]/45 border border-[#D6CEC2] hover:border-[#B86B4B]/70 transition-colors"
                >
                  <span className="font-serif text-3xl text-[#B86B4B] font-medium">
                    {item.step}
                  </span>
                  <h3 className="mt-3 font-serif text-2xl font-medium text-[#1E1E1D]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-[#4A4945] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-16 sm:py-24 bg-[#EAE4DC]/55 border-y border-[#D6CEC2]">
        <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Our Expertise"
                title="Multidisciplinary capabilities across scale."
                description="Whether crafting a single residence, a commercial workplace, or a phased site masterplan, every discipline collaborates seamlessly."
              />
              <div className="mt-8">
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1E1E1D] hover:bg-[#B86B4B] text-[#F7F5F0] text-sm font-semibold transition-colors"
                >
                  <span>Explore All Services</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            <StaggerContainer className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ABOUT_PAGE_CONTENT.expertise.map((skill) => (
                <StaggerItem key={skill}>
                  <div className="p-5 rounded-xl bg-[#F7F5F0] border border-[#D6CEC2] flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#5F6A57] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-[#1E1E1D]">{skill}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Optional Team Section (Demo Placeholders) */}
      <section className="py-20 sm:py-28 bg-[#F7F5F0]">
        <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <SectionHeader
              eyebrow="Studio Leadership (Demo)"
              title="Sample team structure & roles."
              description={ABOUT_PAGE_CONTENT.teamNote}
            />
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {ABOUT_PAGE_CONTENT.team.map((member) => (
              <StaggerItem key={member.name}>
                <div className="group rounded-2xl bg-[#F7F5F0] border border-[#D6CEC2] overflow-hidden">
                  <div className="aspect-[4/4.3] overflow-hidden bg-[#EAE4DC]">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-medium text-[#1E1E1D]">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#B86B4B] mt-1">
                      {member.role}
                    </p>
                    <p className="mt-3 text-sm text-[#4A4945] leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection
        eyebrow="Work With Us"
        heading="Have a site, blueprint, or renovation in mind?"
        description="Reach out to discuss feasibility, architectural planning, or turnkey construction."
        primaryLabel="Contact Us"
        primaryTo="/contact"
        secondaryLabel="Start Project Wizard"
        secondaryTo="/get-started"
      />
    </PageTransition>
  );
};

