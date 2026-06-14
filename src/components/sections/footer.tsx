import { motion } from "motion/react";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { BUSINESS, NAV_ITEMS } from "@/lib/constants";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative bg-dark text-ivory/80 overflow-hidden">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
        >
          {/* Brand */}
          <motion.div variants={staggerItem} className="lg:col-span-1">
            <div className="mb-5">
              <p className="font-heading text-xl font-bold text-ivory">
                {BUSINESS.name}
              </p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-ivory/40 mt-1">
                {BUSINESS.tagline}
              </p>
            </div>
            <p className="text-sm text-ivory/40 leading-relaxed">
              Gurgaon's premier Pilates studio — transforming lives through
              mindful movement since 2014.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a
                href={BUSINESS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-ivory/5 border border-ivory/10 flex items-center justify-center hover:bg-champagne/15 hover:border-champagne/30 transition-all"
              >
                <svg className="w-4 h-4 text-ivory/60 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
              </a>
              <a
                href={BUSINESS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-ivory/5 border border-ivory/10 flex items-center justify-center hover:bg-champagne/15 hover:border-champagne/30 transition-all"
              >
                <svg className="w-4 h-4 text-ivory/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={staggerItem}>
            <h4 className="text-sm font-semibold text-ivory uppercase tracking-wider mb-5 font-heading">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
                    className="text-sm text-ivory/40 hover:text-champagne transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={staggerItem}>
            <h4 className="text-sm font-semibold text-ivory uppercase tracking-wider mb-5 font-heading">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-champagne/60 mt-0.5 flex-shrink-0" />
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="text-sm text-ivory/40 hover:text-champagne transition-colors"
                >
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-champagne/60 mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-sm text-ivory/40 hover:text-champagne transition-colors"
                >
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-champagne/60 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-ivory/40 leading-relaxed">
                  {BUSINESS.address}
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Map */}
          <motion.div variants={staggerItem}>
            <h4 className="text-sm font-semibold text-ivory uppercase tracking-wider mb-5 font-heading">
              Location
            </h4>
            <div className="rounded-xl overflow-hidden border border-ivory/10 aspect-square">
              <iframe
                src={BUSINESS.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(0.92) contrast(0.8)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio location map"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-ivory/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/25">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="text-xs text-ivory/25">
            Designed with ♡ for wellness
          </p>
        </div>
      </div>
    </footer>
  );
}
