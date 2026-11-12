import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion } from 'framer-motion';
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  Edit3,
  Hammer,
  Home,
  Info,
  Layers,
  MapPin,
  PaintBucket,
  Sparkles,
  Trash2,
} from 'lucide-react';
import {
  BUDGET_RANGE_OPTIONS,
  CONTACT_METHOD_OPTIONS,
  PROJECT_TYPE_OPTIONS,
  PROPERTY_TYPE_OPTIONS,
  START_TIME_OPTIONS,
  STEP_FIELDS,
  URGENCY_OPTIONS,
  enquiryFormSchema,
  type EnquiryFormValues,
} from './enquirySchema';
import { ARCHITECTURAL_EASE } from '../common/MotionPrimitives';
import {
  clearSavedEnquiries,
  getSavedEnquiries,
  saveDemoEnquiry,
} from '../../lib/storage';
import type { EnquiryProjectType, EnquirySubmission } from '../../types';

const STEP_LABELS = [
  'Project Type',
  'Project Details',
  'Budget & Timeline',
  'Your Contact',
  'Review & Submit',
];

const PROJECT_ICONS: Record<EnquiryProjectType, React.ElementType> = {
  'Residential Construction': Home,
  'Commercial Construction': Building2,
  'Interior Design': PaintBucket,
  'Architectural Planning': Compass,
  Renovation: Hammer,
  'Land Development': Layers,
  Other: Sparkles,
};

interface EnquiryWizardProps {
  initialProjectType?: string | null;
  initialReference?: string | null;
}

export const EnquiryWizard: React.FC<EnquiryWizardProps> = ({
  initialProjectType,
  initialReference,
}) => {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [submittedRecord, setSubmittedRecord] = useState<EnquirySubmission | null>(
    null
  );
  const [savedHistory, setSavedHistory] = useState<EnquirySubmission[]>([]);

  const matchedType = PROJECT_TYPE_OPTIONS.find(
    (opt) => opt.toLowerCase() === initialProjectType?.toLowerCase()
  );

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquiryFormSchema),
    mode: 'onTouched',
    defaultValues: {
      projectType: matchedType ?? 'Residential Construction',
      location: '',
      propertyType: 'Independent Plot / Land',
      approximateArea: '',
      requirements: initialReference
        ? `Interested in a project similar to "${initialReference}". `
        : '',
      budgetRange: '$150,000 – $350,000 (Demo Range)',
      preferredStartTime: '1 – 3 Months',
      urgency: 'Standard Planning Pace',
      fullName: '',
      phone: '',
      email: '',
      preferredContactMethod: 'Phone Call',
    },
  });

  useEffect(() => {
    setSavedHistory(getSavedEnquiries());
  }, []);

  const values = watch();

  const handleNext = async () => {
    const fieldsToValidate = STEP_FIELDS[step];
    if (fieldsToValidate) {
      const valid = await trigger(fieldsToValidate);
      if (!valid) return;
    }
    setDirection(1);
    setStep((prev) => Math.min(prev + 1, STEP_LABELS.length - 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const jumpToStep = (targetStep: number) => {
    setDirection(targetStep > step ? 1 : -1);
    setStep(targetStep);
  };

  const onSubmit = (data: EnquiryFormValues) => {
    const saved = saveDemoEnquiry({
      ...data,
      email: data.email || undefined,
      approximateArea: data.approximateArea || undefined,
    });
    setSubmittedRecord(saved);
    setSavedHistory(getSavedEnquiries());
  };

  const handleStartAnother = () => {
    setSubmittedRecord(null);
    setStep(0);
    setDirection(-1);
    reset();
  };

  const handleClearHistory = () => {
    clearSavedEnquiries();
    setSavedHistory([]);
  };

  if (submittedRecord) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: ARCHITECTURAL_EASE }}
        className="rounded-3xl bg-[#F7F5F0] border border-[#D6CEC2] p-8 sm:p-12 shadow-xl shadow-[#1E1E1D]/5"
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
            className="w-16 h-16 rounded-full bg-[#5F6A57]/15 text-[#5F6A57] flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle2 className="w-9 h-9" />
          </motion.div>

          <span className="inline-block px-3.5 py-1 rounded-full bg-[#EAE4DC] text-xs font-semibold uppercase tracking-[0.16em] text-[#B86B4B] mb-4">
            Demo Enquiry Saved Locally · Ref {submittedRecord.id}
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1E1E1D]">
            Thank you, {submittedRecord.fullName}.
          </h2>

          <p className="mt-4 text-base text-[#4A4945] leading-relaxed">
            Your project brief for{' '}
            <strong className="text-[#1E1E1D]">{submittedRecord.projectType}</strong>{' '}
            in <strong className="text-[#1E1E1D]">{submittedRecord.location}</strong>{' '}
            has been recorded in this browser’s local storage.
          </p>

          <div
            role="status"
            className="mt-6 p-4 rounded-xl bg-[#EAE4DC] border border-[#D6CEC2] text-left flex items-start gap-3 text-sm text-[#4A4945]"
          >
            <Info className="w-5 h-5 text-[#B86B4B] shrink-0 mt-0.5" />
            <p>
              <strong className="text-[#1E1E1D]">Demo Mode Notice:</strong> This
              enquiry wizard is a frontend demonstration and is{' '}
              <strong>not connected</strong> to a live company CRM, email server, or
              backend enquiry system.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleStartAnother}
              className="px-6 py-3 rounded-full bg-[#1E1E1D] hover:bg-[#B86B4B] text-[#F7F5F0] text-sm font-semibold transition-colors"
            >
              Submit Another Demo Enquiry
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 36 : -36,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: ARCHITECTURAL_EASE },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -36 : 36,
      opacity: 0,
      transition: { duration: 0.25, ease: ARCHITECTURAL_EASE },
    }),
  };

  return (
    <div className="space-y-8">
      {/* Demo System Notice Banner */}
      <div className="p-4 rounded-2xl bg-[#EAE4DC] border border-[#D6CEC2] flex items-start gap-3 text-sm text-[#4A4945]">
        <Info className="w-5 h-5 text-[#B86B4B] shrink-0 mt-0.5" />
        <div>
          <strong className="text-[#1E1E1D]">Frontend Demo Enquiry System:</strong>{' '}
          Submissions are validated and stored locally in your browser’s{' '}
          <code className="text-xs px-1.5 py-0.5 rounded bg-[#F7F5F0]">
            localStorage
          </code>
          . This form is not connected to a live company enquiry system.
        </div>
      </div>

      {/* Main Wizard Card */}
      <div className="rounded-3xl bg-[#F7F5F0] border border-[#D6CEC2] shadow-xl shadow-[#1E1E1D]/5 overflow-hidden">
        {/* Step Progress Header */}
        <div className="px-6 sm:px-10 pt-8 pb-6 border-b border-[#EAE4DC] bg-[#EAE4DC]/40">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-[#7A766F] mb-4">
            <span>
              Step {step + 1} of {STEP_LABELS.length}
            </span>
            <span className="text-[#B86B4B]">{STEP_LABELS[step]}</span>
          </div>

          {/* Animated Progress Bar */}
          <div className="h-1.5 w-full rounded-full bg-[#D6CEC2] overflow-hidden mb-6">
            <motion.div
              className="h-full bg-[#B86B4B] rounded-full"
              initial={false}
              animate={{
                width: `${((step + 1) / STEP_LABELS.length) * 100}%`,
              }}
              transition={{ duration: 0.45, ease: ARCHITECTURAL_EASE }}
            />
          </div>

          {/* Step Indicators */}
          <div className="grid grid-cols-5 gap-2">
            {STEP_LABELS.map((label, idx) => {
              const isCompleted = idx < step;
              const isCurrent = idx === step;
              return (
                <button
                  key={label}
                  type="button"
                  disabled={idx > step}
                  onClick={() => idx < step && jumpToStep(idx)}
                  className={`text-left group transition-opacity ${
                    idx > step ? 'opacity-45 cursor-not-allowed' : 'cursor-pointer'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-6 h-6 rounded-full text-[11px] font-semibold flex items-center justify-center transition-colors ${
                        isCurrent
                          ? 'bg-[#B86B4B] text-[#F7F5F0]'
                          : isCompleted
                            ? 'bg-[#5F6A57] text-[#F7F5F0]'
                            : 'bg-[#D6CEC2] text-[#4A4945]'
                      }`}
                    >
                      {isCompleted ? <Check className="w-3.5 h-3.5" /> : idx + 1}
                    </span>
                    <span className="hidden md:inline text-xs font-medium text-[#1E1E1D] truncate">
                      {label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Form Steps */}
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="p-6 sm:p-10">
          <AnimatePresence mode="wait" custom={direction}>
            {step === 0 && (
              <motion.div
                key="step-0"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-6"
              >
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1E1E1D]">
                    What type of project are you planning?
                  </h2>
                  <p className="mt-2 text-sm text-[#4A4945]">
                    Select the primary discipline or build scope that best fits your needs.
                  </p>
                </div>

                <div
                  role="radiogroup"
                  aria-label="Project Type"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                  {PROJECT_TYPE_OPTIONS.map((option) => {
                    const Icon = PROJECT_ICONS[option];
                    const selected = values.projectType === option;
                    return (
                      <motion.button
                        key={option}
                        type="button"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() =>
                          setValue('projectType', option, { shouldValidate: true })
                        }
                        aria-pressed={selected}
                        className={`p-5 rounded-2xl border text-left transition-all flex items-start gap-4 ${
                          selected
                            ? 'bg-[#1E1E1D] text-[#F7F5F0] border-[#1E1E1D] shadow-lg'
                            : 'bg-[#F7F5F0] text-[#1E1E1D] border-[#D6CEC2] hover:border-[#B86B4B]'
                        }`}
                      >
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                            selected
                              ? 'bg-[#B86B4B] text-[#F7F5F0]'
                              : 'bg-[#EAE4DC] text-[#1E1E1D]'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="block font-medium text-sm sm:text-base">
                            {option}
                          </span>
                          <span
                            className={`block text-xs mt-1 ${
                              selected ? 'text-[#D6CEC2]' : 'text-[#7A766F]'
                            }`}
                          >
                            {selected ? 'Selected' : 'Click to choose'}
                          </span>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                {errors.projectType && (
                  <p role="alert" className="text-sm text-[#9A5437] flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.projectType.message}</span>
                  </p>
                )}
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step-1"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-6"
              >
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1E1E1D]">
                    Tell us about the site & requirements.
                  </h2>
                  <p className="mt-2 text-sm text-[#4A4945]">
                    Provide location, property type, and an overview of what you would like to build or transform.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#4A4945] mb-2"
                    >
                      Project Location *
                    </label>
                    <input
                      id="location"
                      type="text"
                      placeholder="e.g. North Hills / City District"
                      aria-invalid={!!errors.location}
                      {...register('location')}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#D6CEC2] focus:border-[#B86B4B] focus:outline-none text-sm text-[#1E1E1D]"
                    />
                    {errors.location && (
                      <p role="alert" className="mt-1.5 text-xs text-[#9A5437]">
                        {errors.location.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="propertyType"
                      className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#4A4945] mb-2"
                    >
                      Property Type *
                    </label>
                    <select
                      id="propertyType"
                      aria-invalid={!!errors.propertyType}
                      {...register('propertyType')}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#D6CEC2] focus:border-[#B86B4B] focus:outline-none text-sm text-[#1E1E1D]"
                    >
                      {PROPERTY_TYPE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.propertyType && (
                      <p role="alert" className="mt-1.5 text-xs text-[#9A5437]">
                        {errors.propertyType.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="approximateArea"
                    className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#4A4945] mb-2"
                  >
                    Approximate Area (Optional)
                  </label>
                  <input
                    id="approximateArea"
                    type="text"
                    placeholder="e.g. 3,200 sq.ft or 450 sq.m"
                    {...register('approximateArea')}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#D6CEC2] focus:border-[#B86B4B] focus:outline-none text-sm text-[#1E1E1D]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="requirements"
                    className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#4A4945] mb-2"
                  >
                    Requirements Description *
                  </label>
                  <textarea
                    id="requirements"
                    rows={4}
                    placeholder="Share your vision, number of rooms/floors, architectural style, or scope of renovation..."
                    aria-invalid={!!errors.requirements}
                    {...register('requirements')}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#D6CEC2] focus:border-[#B86B4B] focus:outline-none text-sm text-[#1E1E1D]"
                  />
                  {errors.requirements && (
                    <p role="alert" className="mt-1.5 text-xs text-[#9A5437]">
                      {errors.requirements.message}
                    </p>
                  )}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step-2"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-6"
              >
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1E1E1D]">
                    Estimated budget & preferred timeline.
                  </h2>
                  <p className="mt-2 text-sm text-[#4A4945]">
                    These ranges are configurable demo options to help frame your initial consultation.
                  </p>
                </div>

                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="budgetRange"
                      className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#4A4945] mb-2"
                    >
                      Estimated Budget Range *
                    </label>
                    <select
                      id="budgetRange"
                      aria-invalid={!!errors.budgetRange}
                      {...register('budgetRange')}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#D6CEC2] focus:border-[#B86B4B] focus:outline-none text-sm text-[#1E1E1D]"
                    >
                      {BUDGET_RANGE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.budgetRange && (
                      <p role="alert" className="mt-1.5 text-xs text-[#9A5437]">
                        {errors.budgetRange.message}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="preferredStartTime"
                        className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#4A4945] mb-2"
                      >
                        Preferred Starting Time *
                      </label>
                      <select
                        id="preferredStartTime"
                        aria-invalid={!!errors.preferredStartTime}
                        {...register('preferredStartTime')}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#D6CEC2] focus:border-[#B86B4B] focus:outline-none text-sm text-[#1E1E1D]"
                      >
                        {START_TIME_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.preferredStartTime && (
                        <p role="alert" className="mt-1.5 text-xs text-[#9A5437]">
                          {errors.preferredStartTime.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="urgency"
                        className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#4A4945] mb-2"
                      >
                        Project Urgency *
                      </label>
                      <select
                        id="urgency"
                        aria-invalid={!!errors.urgency}
                        {...register('urgency')}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#D6CEC2] focus:border-[#B86B4B] focus:outline-none text-sm text-[#1E1E1D]"
                      >
                        {URGENCY_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.urgency && (
                        <p role="alert" className="mt-1.5 text-xs text-[#9A5437]">
                          {errors.urgency.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step-3"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-6"
              >
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1E1E1D]">
                    Your contact preferences.
                  </h2>
                  <p className="mt-2 text-sm text-[#4A4945]">
                    Tell us how you prefer to be reached (stored locally in demo mode only).
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#4A4945] mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="Your full name"
                      aria-invalid={!!errors.fullName}
                      {...register('fullName')}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#D6CEC2] focus:border-[#B86B4B] focus:outline-none text-sm text-[#1E1E1D]"
                    />
                    {errors.fullName && (
                      <p role="alert" className="mt-1.5 text-xs text-[#9A5437]">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#4A4945] mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="e.g. +1 555 010 2000"
                      aria-invalid={!!errors.phone}
                      {...register('phone')}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#D6CEC2] focus:border-[#B86B4B] focus:outline-none text-sm text-[#1E1E1D]"
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
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#4A4945] mb-2"
                    >
                      Email Address (Optional)
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      aria-invalid={!!errors.email}
                      {...register('email')}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#D6CEC2] focus:border-[#B86B4B] focus:outline-none text-sm text-[#1E1E1D]"
                    />
                    {errors.email && (
                      <p role="alert" className="mt-1.5 text-xs text-[#9A5437]">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#4A4945] mb-2">
                      Preferred Contact Method *
                    </span>
                    <div className="grid grid-cols-3 gap-2">
                      {CONTACT_METHOD_OPTIONS.map((method) => {
                        const active = values.preferredContactMethod === method;
                        return (
                          <button
                            key={method}
                            type="button"
                            onClick={() =>
                              setValue('preferredContactMethod', method, {
                                shouldValidate: true,
                              })
                            }
                            className={`py-3 px-2 rounded-xl border text-xs font-semibold transition-colors ${
                              active
                                ? 'bg-[#1E1E1D] text-[#F7F5F0] border-[#1E1E1D]'
                                : 'bg-white text-[#4A4945] border-[#D6CEC2] hover:border-[#B86B4B]'
                            }`}
                          >
                            {method}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step-4"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1E1E1D]">
                      Review your project brief.
                    </h2>
                    <p className="mt-2 text-sm text-[#4A4945]">
                      Verify your details below or click Edit on any section before submitting.
                    </p>
                  </div>
                  <ClipboardCheck className="w-7 h-7 text-[#B86B4B] shrink-0 hidden sm:block" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Section 1 Summary */}
                  <div className="p-5 rounded-2xl bg-[#EAE4DC]/65 border border-[#D6CEC2]">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#B86B4B]">
                        01 · Project Type
                      </span>
                      <button
                        type="button"
                        onClick={() => jumpToStep(0)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#1E1E1D] hover:text-[#B86B4B]"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Edit</span>
                      </button>
                    </div>
                    <p className="font-medium text-[#1E1E1D]">{values.projectType}</p>
                  </div>

                  {/* Section 3 Summary */}
                  <div className="p-5 rounded-2xl bg-[#EAE4DC]/65 border border-[#D6CEC2]">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#B86B4B]">
                        03 · Budget & Timeline
                      </span>
                      <button
                        type="button"
                        onClick={() => jumpToStep(2)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#1E1E1D] hover:text-[#B86B4B]"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Edit</span>
                      </button>
                    </div>
                    <p className="text-sm text-[#1E1E1D] font-medium">{values.budgetRange}</p>
                    <p className="text-xs text-[#4A4945] mt-1">
                      Start: {values.preferredStartTime} · {values.urgency}
                    </p>
                  </div>

                  {/* Section 2 Summary */}
                  <div className="p-5 rounded-2xl bg-[#EAE4DC]/65 border border-[#D6CEC2]">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#B86B4B]">
                        02 · Project Details
                      </span>
                      <button
                        type="button"
                        onClick={() => jumpToStep(1)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#1E1E1D] hover:text-[#B86B4B]"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Edit</span>
                      </button>
                    </div>
                    <p className="text-sm font-medium text-[#1E1E1D] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#B86B4B]" />
                      <span>
                        {values.location} · {values.propertyType}
                      </span>
                    </p>
                    {values.approximateArea && (
                      <p className="text-xs text-[#4A4945] mt-1">
                        Area: {values.approximateArea}
                      </p>
                    )}
                    <p className="text-sm text-[#4A4945] mt-2 line-clamp-3">
                      {values.requirements}
                    </p>
                  </div>

                  {/* Section 4 Summary */}
                  <div className="p-5 rounded-2xl bg-[#EAE4DC]/65 border border-[#D6CEC2]">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#B86B4B]">
                        04 · Contact Details
                      </span>
                      <button
                        type="button"
                        onClick={() => jumpToStep(3)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#1E1E1D] hover:text-[#B86B4B]"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Edit</span>
                      </button>
                    </div>
                    <p className="text-sm font-medium text-[#1E1E1D]">{values.fullName}</p>
                    <p className="text-xs text-[#4A4945] mt-1">
                      {values.phone}
                      {values.email ? ` · ${values.email}` : ''}
                    </p>
                    <p className="text-xs text-[#7A766F] mt-1">
                      Preferred: {values.preferredContactMethod}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="mt-10 pt-6 border-t border-[#EAE4DC] flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={handlePrev}
              disabled={step === 0}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-full border text-sm font-semibold transition-colors ${
                step === 0
                  ? 'border-[#D6CEC2]/60 text-[#7A766F]/50 cursor-not-allowed'
                  : 'border-[#1E1E1D]/25 text-[#1E1E1D] hover:border-[#1E1E1D]'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {step < STEP_LABELS.length - 1 ? (
              <motion.button
                type="button"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1E1E1D] hover:bg-[#B86B4B] text-[#F7F5F0] text-sm font-semibold transition-colors"
              >
                <span>Next Step</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            ) : (
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#B86B4B] hover:bg-[#9A5437] text-[#F7F5F0] text-sm font-semibold transition-colors shadow-lg shadow-[#B86B4B]/20"
              >
                <Check className="w-4 h-4" />
                <span>Submit Demo Enquiry</span>
              </motion.button>
            )}
          </div>
        </form>
      </div>

      {/* Saved Demo Enquiries Viewer (for Demo Presentation) */}
      {savedHistory.length > 0 && (
        <div className="rounded-2xl bg-[#EAE4DC]/65 border border-[#D6CEC2] p-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="font-serif text-xl font-medium text-[#1E1E1D]">
                Saved Demo Enquiries (Local Browser Storage)
              </h3>
              <p className="text-xs text-[#7A766F]">
                Stored only in this browser for presentation verification.
              </p>
            </div>
            <button
              type="button"
              onClick={handleClearHistory}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#D6CEC2] hover:border-[#9A5437] text-xs font-semibold text-[#4A4945] hover:text-[#9A5437] transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Demo History</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {savedHistory.slice(0, 4).map((entry) => (
              <div
                key={entry.id}
                className="p-4 rounded-xl bg-[#F7F5F0] border border-[#D6CEC2] text-xs space-y-1"
              >
                <div className="flex items-center justify-between font-semibold text-[#1E1E1D]">
                  <span>{entry.projectType}</span>
                  <span className="text-[#B86B4B]">{entry.id}</span>
                </div>
                <p className="text-[#4A4945]">
                  {entry.fullName} · {entry.location} · {entry.budgetRange}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

