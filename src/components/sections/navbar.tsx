import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS, BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-ivory/85 backdrop-blur-xl shadow-sm border-b border-sand/40"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNav("#home"); }}
            className="flex items-center gap-3 group"
          >
            <div className="flex flex-col">
              <span className={cn(
                "font-heading text-xl font-semibold tracking-wide transition-colors",
                scrolled ? "text-charcoal" : "text-ivory"
              )}>
                {BUSINESS.name}
              </span>
              <span className={cn(
                "type-eyebrow text-[10px] hidden sm:block transition-colors",
                scrolled ? "text-taupe" : "text-ivory/60"
              )}>
                {BUSINESS.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors relative group",
                  scrolled
                    ? "text-warm-gray hover:text-charcoal"
                    : "text-ivory/70 hover:text-ivory"
                )}
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-champagne transition-all duration-300 group-hover:w-3/4" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              onClick={() => document.querySelector("#book")?.scrollIntoView({ behavior: "smooth" })}
              className={cn(
                "rounded-full px-6 font-medium text-sm tracking-wide transition-all",
                scrolled
                  ? "bg-charcoal text-ivory hover:bg-charcoal/90"
                  : "bg-ivory/15 text-ivory border border-ivory/30 hover:bg-ivory/25 backdrop-blur-sm"
              )}
            >
              Book a Session
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              scrolled ? "text-charcoal" : "text-ivory"
            )}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-champagne origin-left z-50"
          style={{ scaleX }}
        />
      </motion.header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-charcoal/95 backdrop-blur-xl flex flex-col"
        >
          <div className="flex-1 flex flex-col items-center justify-center gap-8">
            {NAV_ITEMS.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
                className="text-2xl font-heading font-medium text-ivory/80 hover:text-champagne transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_ITEMS.length * 0.08, duration: 0.4 }}
            >
              <Button
                onClick={() => {
                  setMobileOpen(false);
                  document.querySelector("#book")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-4 bg-champagne text-charcoal hover:bg-champagne/90 rounded-full px-8 py-3 font-medium text-base"
              >
                Book a Session
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  );
}
