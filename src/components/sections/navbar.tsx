import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { NAV_ITEMS, BUSINESS, FORM_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-ivory/80 backdrop-blur-xl shadow-sm border-b border-sand/40"
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
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-champagne/20 border border-champagne/30 transition-colors group-hover:bg-champagne/30">
            <span className="font-heading text-lg font-bold text-champagne">P</span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg font-semibold tracking-wide text-charcoal">
              {BUSINESS.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-taupe hidden sm:block">
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
              className="px-3 py-2 text-sm font-medium text-warm-gray hover:text-charcoal transition-colors relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-champagne transition-all duration-300 group-hover:w-3/4" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            onClick={() => window.open(FORM_URL, "_blank", "noopener,noreferrer")}
            className="bg-charcoal text-ivory hover:bg-charcoal/90 rounded-full px-6 font-medium text-sm tracking-wide"
          >
            Book a Session
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-charcoal">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-ivory border-sand/40 p-0">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-sand/40">
                <span className="font-heading text-lg font-semibold text-charcoal">
                  {BUSINESS.name}
                </span>
              </div>
              <div className="flex flex-col gap-1 p-6 flex-1">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
                    className="px-4 py-3 text-base font-medium text-warm-gray hover:text-charcoal hover:bg-cream rounded-lg transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="p-6 border-t border-sand/40">
                <Button
                  onClick={() => {
                    setMobileOpen(false);
                    window.open(FORM_URL, "_blank", "noopener,noreferrer");
                  }}
                  className="w-full bg-charcoal text-ivory hover:bg-charcoal/90 rounded-full font-medium"
                >
                  Book a Session
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  );
}
