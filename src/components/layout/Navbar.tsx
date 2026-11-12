import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { NAV_LINKS, SITE_CONFIG } from '../../data/siteConfig';
import { ARCHITECTURAL_EASE } from '../common/MotionPrimitives';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 36);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const useLightHeaderText = isHomePage && !isScrolled && !mobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled || !isHomePage || mobileMenuOpen
          ? 'bg-[#F7F5F0]/92 backdrop-blur-md border-b border-[#D6CEC2]/60 shadow-[0_4px_24px_-12px_rgba(30,30,29,0.12)]'
          : 'bg-gradient-to-b from-[#1E1E1D]/65 via-[#1E1E1D]/30 to-transparent border-b border-transparent'
      }`}
    >
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label={`${SITE_CONFIG.brandName} Home`}
          >
            <div
              className={`w-10 h-10 rounded-sm border flex items-center justify-center transition-colors duration-300 ${
                useLightHeaderText
                  ? 'border-[#F7F5F0]/40 bg-[#F7F5F0]/10 text-[#F7F5F0]'
                  : 'border-[#1E1E1D]/20 bg-[#1E1E1D] text-[#F7F5F0]'
              }`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="transition-transform duration-500 group-hover:scale-105"
              >
                <path d="M3 21V8l9-5 9 5v13" />
                <path d="M9 21v-8h6v8" />
              </svg>
            </div>
            <div>
              <span
                className={`block font-serif text-xl font-semibold tracking-tight leading-none transition-colors duration-300 ${
                  useLightHeaderText ? 'text-[#F7F5F0]' : 'text-[#1E1E1D]'
                }`}
              >
                {SITE_CONFIG.brandName}
              </span>
              <span
                className={`block text-[10px] uppercase tracking-[0.2em] mt-1 transition-colors duration-300 ${
                  useLightHeaderText ? 'text-[#EAE4DC]/80' : 'text-[#7A766F]'
                }`}
              >
                {SITE_CONFIG.brandSubtext}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `relative py-2 text-sm font-medium tracking-wide transition-colors duration-300 ${
                    useLightHeaderText
                      ? isActive
                        ? 'text-[#F7F5F0]'
                        : 'text-[#EAE4DC]/85 hover:text-[#F7F5F0]'
                      : isActive
                        ? 'text-[#1E1E1D]'
                        : 'text-[#4A4945] hover:text-[#B86B4B]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-underline"
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 32,
                        }}
                        className={`absolute left-0 right-0 -bottom-0.5 h-[2px] ${
                          useLightHeaderText ? 'bg-[#E9D6CD]' : 'bg-[#B86B4B]'
                        }`}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="hidden sm:block"
            >
              <Link
                to="/get-started"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B86B4B] hover:bg-[#9A5437] text-[#F7F5F0] text-xs font-semibold uppercase tracking-[0.12em] transition-colors shadow-sm"
              >
                <span>Request a Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              className={`lg:hidden p-2.5 rounded-full border transition-colors ${
                useLightHeaderText
                  ? 'border-[#F7F5F0]/30 text-[#F7F5F0] hover:bg-[#F7F5F0]/10'
                  : 'border-[#D6CEC2] text-[#1E1E1D] hover:bg-[#EAE4DC]'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: ARCHITECTURAL_EASE }}
            className="lg:hidden overflow-hidden bg-[#F7F5F0] border-b border-[#D6CEC2]"
          >
            <div className="px-5 py-6 space-y-2">
              {NAV_LINKS.map((item, idx) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                >
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) =>
                      `flex items-center justify-between py-3 px-4 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-[#EAE4DC] text-[#1E1E1D]'
                          : 'text-[#4A4945] hover:bg-[#EAE4DC]/60'
                      }`
                    }
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#B86B4B]" />
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
                className="pt-3"
              >
                <Link
                  to="/get-started"
                  className="flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full bg-[#B86B4B] text-[#F7F5F0] text-sm font-semibold uppercase tracking-[0.12em]"
                >
                  <span>Request a Quote</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

