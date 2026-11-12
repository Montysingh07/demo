import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Clock,
  Info,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { saveDemoEnquiry } from '../lib/storage';
import {
  ARCHITECTURAL_EASE,
  MaskedTextReveal,
  PageTransition,
  RevealSection,
} from '../components/common/MotionPrimitives';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const contactFormSchema = z.object({
  fullName: z.string().trim().min(2, 'Please enter your name.'),
  phone: z
    .string()
    .trim()
    .min(7, 'Please enter a valid phone number.')
    .regex(/^[+\d\s()-]{7,20}$/, 'Please enter a valid phone number format.'),
  email: z
    .string()
    .trim()
    .email('Please enter a valid email address.')
    .optional()
    .or(z.literal('')),
  subject: z.string().trim().min(2, 'Please enter a subject or project type.'),
  message: z
    .string()
    .trim()
    .min(10, 'Please enter a short message (at least 10 characters).'),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export const ContactPage: React.FC = () => {
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useDocumentTitle(
    'Contact Us',
    'Get in touch with Atelier Forma for architectural planning, construction, or interior design enquiries.'
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onTouched',
  });

  const onSubmit = (data: ContactFormValues) => {
    const saved = saveDemoEnquiry({
      projectType: 'Other',
      location: 'Contact Form Enquiry',
      propertyType: data.subject,
      requirements: data.message,
      budgetRange: 'To be discussed',
      preferredStartTime: 'To be discussed',
      urgency: 'Standard',
      fullName: data.fullName,
      phone: data.phone,
      email: data.email || undefined,
      preferredContactMethod: 'Phone Call',
    });
    setSubmittedRef(saved.id);
    reset();
  };

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsappNumberPlaceholder}?text=${encodeURIComponent(
    SITE_CONFIG.contact.whatsappPrefillText
  )}`;

  return (
    <PageTransition>
      <section className="pt-32 pb-14 bg-[#F7F5F0] border-b border-[#D6CEC2]">
        <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 mb-5"
            >
              <span className="h-[1px] w-8 bg-[#B86B4B]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B86B4B]">
                Get in Touch
              </span>
            </motion.div>

            <MaskedTextReveal
              as="h1"
              immediate
              text="Let’s discuss your upcoming project."
              className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] font-medium text-[#1E1E1D]"
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: ARCHITECTURAL_EASE }}
              className="mt-5 text-base sm:text-lg text-[#4A4945] leading-relaxed"
            >
              Use the editable placeholder contact details below or send a quick message. All contact data is configured in{' '}
              <code className="text-xs px-1.5 py-0.5 rounded bg-[#EAE4DC]">
                src/data/siteConfig.ts
              </code>{' '}
              for easy client replacement.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#F7F5F0]">
        <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Contact Info & WhatsApp & Map Placeholder */}
            <RevealSection direction="left" className="lg:col-span-5 space-y-6">
              <div className="p-7 sm:p-8 rounded-3xl bg-[#EAE4DC]/70 border border-[#D6CEC2] space-y-6">
                <h2 className="font-serif text-2xl font-medium text-[#1E1E1D]">
                  Studio Details (Demo Placeholders)
                </h2>

                <div className="space-y-5 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F7F5F0] border border-[#D6CEC2] flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-[#B86B4B]" />
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-[#7A766F] font-semibold">
                        Phone
                      </span>
                      <span className="text-[#1E1E1D] font-medium mt-0.5 block">
                        {SITE_CONFIG.contact.phonePlaceholder}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F7F5F0] border border-[#D6CEC2] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-[#B86B4B]" />
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-[#7A766F] font-semibold">
                        Email
                      </span>
                      <span className="text-[#1E1E1D] font-medium mt-0.5 block break-all">
                        {SITE_CONFIG.contact.emailPlaceholder}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F7F5F0] border border-[#D6CEC2] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-[#B86B4B]" />
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-[#7A766F] font-semibold">
                        Studio Address
                      </span>
                      <span className="text-[#1E1E1D] font-medium mt-0.5 block">
                        {SITE_CONFIG.contact.addressLine1}
                      </span>
                      <span className="text-[#4A4945] block">
                        {SITE_CONFIG.contact.addressLine2}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F7F5F0] border border-[#D6CEC2] flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-[#B86B4B]" />
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-[#7A766F] font-semibold">
                        Studio Hours
                      </span>
                      <span className="text-[#1E1E1D] font-medium mt-0.5 block">
                        {SITE_CONFIG.contact.workingHours}
                      </span>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="pt-4 border-t border-[#D6CEC2]">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2.5 w-full px-6 py-3.5 rounded-full bg-[#5F6A57] hover:bg-[#485241] text-[#F7F5F0] text-sm font-semibold transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp (Placeholder)</span>
                  </a>
                </div>
              </div>

              {/* Configurable Map Placeholder */}
              <div className="rounded-3xl border border-[#D6CEC2] bg-[#EAE4DC]/40 p-7 text-center architectural-grid">
                <div className="w-12 h-12 rounded-full bg-[#F7F5F0] border border-[#D6CEC2] flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-5 h-5 text-[#B86B4B]" />
                </div>
                <h3 className="font-serif text-xl font-medium text-[#1E1E1D]">
                  Interactive Map Placeholder
                </h3>
                <p className="mt-2 text-xs text-[#7A766F] max-w-xs mx-auto leading-relaxed">
                  {SITE_CONFIG.contact.mapCoordinatesLabel}
                </p>
              </div>
            </RevealSection>

            {/* Quick Enquiry Form */}
            <RevealSection direction="right" delay={0.1} className="lg:col-span-7">
              <div className="rounded-3xl bg-white border border-[#D6CEC2] p-7 sm:p-10 shadow-xl shadow-[#1E1E1D]/5">
                <h2 className="font-serif text-3xl font-medium text-[#1E1E1D]">
                  Send a Quick Message
                </h2>
                <p className="mt-2 text-sm text-[#4A4945]">
                  For detailed project scoping, use our multi-step wizard—or send a brief note below.
                </p>

                <div className="mt-5 p-3.5 rounded-xl bg-[#EAE4DC]/75 border border-[#D6CEC2] flex items-start gap-2.5 text-xs text-[#4A4945]">
                  <Info className="w-4 h-4 text-[#B86B4B] shrink-0 mt-0.5" />
                  <span>
                    Demo Form Notice: Submissions are saved locally in your browser and are not sent to a live company inbox.
                  </span>
                </div>

                {submittedRef && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    role="status"
                    className="mt-6 p-4 rounded-xl bg-[#5F6A57]/12 border border-[#5F6A57]/30 flex items-start gap-3 text-sm text-[#1E1E1D]"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#5F6A57] shrink-0 mt-0.5" />
                    <div>
                      <strong>Demo message recorded ({submittedRef}).</strong>{' '}
                      Saved locally in your browser’s storage.
                    </div>
                  </motion.div>
                )}

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="mt-7 space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#4A4945] mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="Your name"
                        {...register('fullName')}
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F5F0] border border-[#D6CEC2] focus:border-[#B86B4B] focus:outline-none text-sm"
                      />
                      {errors.fullName && (
                        <p role="alert" className="mt-1.5 text-xs text-[#9A5437]">
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#4A4945] mb-2"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="e.g. +1 555 010 2000"
                        {...register('phone')}
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F5F0] border border-[#D6CEC2] focus:border-[#B86B4B] focus:outline-none text-sm"
                      />
                      {errors.phone && (
                        <p role="alert" className="mt-1.5 text-xs text-[#9A5437]">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#4A4945] mb-2"
                      >
                        Email (Optional)
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="name@example.com"
                        {...register('email')}
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F5F0] border border-[#D6CEC2] focus:border-[#B86B4B] focus:outline-none text-sm"
                      />
                      {errors.email && (
                        <p role="alert" className="mt-1.5 text-xs text-[#9A5437]">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#4A4945] mb-2"
                      >
                        Subject / Service *
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        placeholder="e.g. Villa Construction / Interior Design"
                        {...register('subject')}
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F5F0] border border-[#D6CEC2] focus:border-[#B86B4B] focus:outline-none text-sm"
                      />
                      {errors.subject && (
                        <p role="alert" className="mt-1.5 text-xs text-[#9A5437]">
                          {errors.subject.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#4A4945] mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder="Tell us briefly about your site, timeline, or design goals..."
                      {...register('message')}
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F5F0] border border-[#D6CEC2] focus:border-[#B86B4B] focus:outline-none text-sm"
                    />
                    {errors.message && (
                      <p role="alert" className="mt-1.5 text-xs text-[#9A5437]">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#1E1E1D] hover:bg-[#B86B4B] text-[#F7F5F0] text-sm font-semibold transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Demo Message</span>
                  </motion.button>
                </form>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

