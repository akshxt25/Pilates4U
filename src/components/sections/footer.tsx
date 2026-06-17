import { motion } from "motion/react";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { BUSINESS } from "@/lib/constants";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
        >
          {/* Brand */}
          <motion.div variants={staggerItem} className="lg:col-span-1">
            <div className="mb-6">
              <p className="font-heading text-2xl font-semibold text-ivory">
                {BUSINESS.name}
              </p>
              <p className="text-xs uppercase tracking-[0.25em] text-champagne mt-1.5">
                {BUSINESS.tagline}
              </p>
            </div>
            <p className="text-sm text-ivory/50 leading-relaxed pr-8">
              Gurgaon's Premium Pilates studio - transforming lives through
              mindful movement since 2022.
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-8">
              <a
                href={BUSINESS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-ivory/5 border border-ivory/10 flex items-center justify-center hover:bg-champagne/15 hover:border-champagne/30 transition-all hover:-translate-y-1"
              >
                <svg className="w-4 h-4 text-ivory/80 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
              </a>
              <a
                href={BUSINESS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-ivory/5 border border-ivory/10 flex items-center justify-center hover:bg-champagne/15 hover:border-champagne/30 transition-all hover:-translate-y-1"
              >
                <svg className="w-4 h-4 text-ivory/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div variants={staggerItem}>
            <h4 className="font-sans text-sm font-semibold text-ivory uppercase tracking-wider mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="group flex items-start gap-4 p-3 -ml-3 rounded-xl hover:bg-ivory/5 transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-champagne/10 flex items-center justify-center flex-shrink-0 group-hover:bg-champagne/20 transition-colors">
                    <Phone className="w-4 h-4 text-champagne" />
                  </div>
                  <div>
                    <p className="text-[10px] text-ivory/40 uppercase tracking-wider mb-0.5">Phone</p>
                    <p className="text-sm text-ivory/70 group-hover:text-champagne transition-colors">{BUSINESS.phone}</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="group flex items-start gap-4 p-3 -ml-3 rounded-xl hover:bg-ivory/5 transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-champagne/10 flex items-center justify-center flex-shrink-0 group-hover:bg-champagne/20 transition-colors">
                    <Mail className="w-4 h-4 text-champagne" />
                  </div>
                  <div>
                    <p className="text-[10px] text-ivory/40 uppercase tracking-wider mb-0.5">Email</p>
                    <p className="text-sm text-ivory/70 group-hover:text-champagne transition-colors">{BUSINESS.email}</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-4 p-3 -ml-3">
                <div className="w-10 h-10 rounded-full bg-champagne/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-champagne" />
                </div>
                <div>
                  <p className="text-[10px] text-ivory/40 uppercase tracking-wider mb-0.5">Address</p>
                  <p className="text-sm text-ivory/70 leading-relaxed pr-4">{BUSINESS.address}</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Map */}
          <motion.div variants={staggerItem}>
            <h4 className="font-sans text-sm font-semibold text-ivory uppercase tracking-wider mb-6">
              Location
            </h4>
            <div className="rounded-2xl overflow-hidden border border-ivory/10 shadow-2xl h-64 group relative bg-[#2a2a2a]">
              <div className="absolute inset-0 bg-champagne/5 mix-blend-overlay pointer-events-none group-hover:opacity-0 transition-opacity duration-500 z-10" />
              <iframe
                src={BUSINESS.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(0.92) contrast(0.85) sepia(0.1) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio location map"
                className="relative z-0 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
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
