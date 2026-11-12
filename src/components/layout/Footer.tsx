import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { NAV_LINKS, SITE_CONFIG } from '../../data/siteConfig';
import { SERVICES_DATA } from '../../data/services';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#181817] text-[#EAE4DC] border-t border-[#2E2E2C]">
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <span className="font-serif text-2xl font-semibold text-[#F7F5F0]">
                {SITE_CONFIG.brandName}
              </span>
              <span className="block text-[11px] uppercase tracking-[0.2em] text-[#B86B4B] mt-1">
                {SITE_CONFIG.brandSubtext}
              </span>
            </div>
            <p className="text-sm text-[#B8B0A4] leading-relaxed max-w-sm">
              {SITE_CONFIG.description}
            </p>
            <div className="inline-block px-3.5 py-2 rounded-lg bg-[#242422] border border-[#343431] text-[11px] text-[#D6CEC2] leading-relaxed">
              {SITE_CONFIG.isDemoNotice}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#F7F5F0] mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-[#B8B0A4] hover:text-[#F7F5F0] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/get-started"
                  className="text-[#E9D6CD] hover:text-[#B86B4B] font-medium transition-colors inline-flex items-center gap-1"
                >
                  <span>Start Your Project</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#F7F5F0] mb-5">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.slug}`}
                    className="text-[#B8B0A4] hover:text-[#F7F5F0] transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Placeholders */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#F7F5F0] mb-5">
              Studio Contact (Demo)
            </h3>

            <div className="space-y-3 text-sm text-[#B8B0A4]">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#B86B4B] shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contact.phonePlaceholder}</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#B86B4B] shrink-0 mt-0.5" />
                <span className="break-all">{SITE_CONFIG.contact.emailPlaceholder}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B86B4B] shrink-0 mt-0.5" />
                <span>
                  {SITE_CONFIG.contact.addressLine1}
                  <br />
                  {SITE_CONFIG.contact.addressLine2}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <span className="block text-[11px] uppercase tracking-[0.16em] text-[#7A766F] mb-2.5">
                Social Placeholders
              </span>
              <div className="flex flex-wrap gap-2">
                {Object.entries(SITE_CONFIG.social).map(([network, href]) => (
                  <a
                    key={network}
                    href={href}
                    onClick={(e) => e.preventDefault()}
                    title={`${network} placeholder link`}
                    className="px-3 py-1.5 rounded-full border border-[#343431] hover:border-[#B86B4B] text-xs capitalize text-[#D6CEC2] hover:text-[#F7F5F0] transition-colors"
                  >
                    {network}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-[#2A2A28] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#7A766F]">
          <p>
            © {currentYear} {SITE_CONFIG.brandName}. Client Presentation Demo. Replace all placeholder data before launch.
          </p>
          <p>Architecture · Construction · Interior Design</p>
        </div>
      </div>
    </footer>
  );
};

