import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type HTMLMotionProps,
} from 'framer-motion';

export const ARCHITECTURAL_EASE = [0.22, 1, 0.36, 1] as const;

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-[#B86B4B] origin-left pointer-events-none"
      style={{ scaleX }}
    />
  );
};

interface RevealSectionProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
}

export const RevealSection: React.FC<RevealSectionProps> = ({
  children,
  delay = 0,
  direction = 'up',
  distance = 36,
  className = '',
  ...rest
}) => {
  const getInitialOffset = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getInitialOffset();

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.75,
        delay,
        ease: ARCHITECTURAL_EASE,
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

interface MaskedTextRevealProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  delay?: number;
  immediate?: boolean;
}

export const MaskedTextReveal: React.FC<MaskedTextRevealProps> = ({
  text,
  as = 'h2',
  className = '',
  delay = 0,
  immediate = false,
}) => {
  const words = text.split(' ');
  const Component = motion[as];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.045,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { y: '115%', opacity: 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: ARCHITECTURAL_EASE,
      },
    },
  };

  return (
    <Component
      variants={containerVariants}
      initial="hidden"
      {...(immediate
        ? { animate: 'visible' }
        : { whileInView: 'visible', viewport: { once: true, amount: 0.25 } })}
      className={className}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden align-bottom pb-[0.06em] mr-[0.26em] last:mr-0"
        >
          <motion.span variants={wordVariants} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
};

interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerDelay = 0.09,
  delayChildren = 0.05,
  className = '',
  ...rest
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<HTMLMotionProps<'div'>> = ({
  children,
  className = '',
  ...rest
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28, scale: 0.98 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.65,
            ease: ARCHITECTURAL_EASE,
          },
        },
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  speed?: number;
}

export const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  className = '',
  imgClassName = '',
  speed = 45,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-speed, speed]);

  return (
    <div ref={ref} className={`overflow-hidden relative ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ y, scale: 1.12 }}
        className={`w-full h-full object-cover ${imgClassName}`}
      />
    </div>
  );
};

export const PageTransition: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: ARCHITECTURAL_EASE }}
    >
      {children}
    </motion.div>
  );
};

