import { motion } from "motion/react";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { Separator } from "@/components/ui/separator";
import { BUSINESS, NAV_ITEMS } from "@/lib/constants";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative bg-charcoal text-ivory/80 overflow-hidden">
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
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-champagne/15 border border-champagne/20">
                <span className="font-heading text-lg font-bold text-champagne">P</span>
              </div>
              <div>
                <p className="font-heading text-lg font-semibold text-ivory">
                  {BUSINESS.name}
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-ivory/40">
                  {BUSINESS.tagline}
                </p>
              </div>
            </div>
            <p className="text-sm text-ivory/50 leading-relaxed">
              Gurgaon's premier Pilates studio, dedicated to transforming lives through
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
            <h4 className="font-heading text-sm font-semibold text-ivory uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
                    className="text-sm text-ivory/50 hover:text-champagne transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={staggerItem}>
            <h4 className="font-heading text-sm font-semibold text-ivory uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {["Reformer Pilates", "Mat Pilates", "Personal Training", "Rehabilitation Pilates", "Prenatal Pilates"].map(
                (service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      onClick={(e) => { e.preventDefault(); handleNav("#services"); }}
                      className="text-sm text-ivory/50 hover:text-champagne transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={staggerItem}>
            <h4 className="font-heading text-sm font-semibold text-ivory uppercase tracking-wider mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-champagne/60 mt-0.5 flex-shrink-0" />
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="text-sm text-ivory/50 hover:text-champagne transition-colors"
                >
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-champagne/60 mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-sm text-ivory/50 hover:text-champagne transition-colors"
                >
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-champagne/60 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-ivory/50 leading-relaxed">
                  {BUSINESS.address}
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <Separator className="my-10 bg-ivory/10" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/30">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="text-xs text-ivory/30">
            Designed with ♡ for wellness
          </p>
        </div>
      </div>
    </footer>
  );
}
