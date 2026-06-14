import { motion } from "motion/react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { HERO_STATS } from "@/lib/constants";
import { ChevronDown } from "lucide-react";
export function Hero() {
  const scrollToNext = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/media/hero/hero-bg.jpg"
          alt="Premium Pilates studio"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-32 pb-24 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.p
            variants={staggerItem}
            className="text-xs uppercase tracking-[0.3em] text-champagne mb-8 font-medium"
          >
            Premium Pilates Studio · Gurugram
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={staggerItem}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight text-ivory"
          >
            Move. Strengthen.
            <span className="block mt-2 gradient-text">Transform.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={staggerItem}
            className="mt-8 text-lg sm:text-xl text-ivory/60 max-w-xl mx-auto leading-relaxed"
          >
            Experience the art of mindful movement at Gurgaon's
            most exclusive Pilates studio.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={staggerItem}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#book"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#book")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center rounded-full bg-champagne text-charcoal px-8 py-3.5 text-sm font-semibold tracking-wide hover:bg-champagne/90 transition-all hover:shadow-lg hover:shadow-champagne/20"
            >
              Book Your Session
            </a>
            <button
              onClick={scrollToNext}
              className="inline-flex items-center justify-center rounded-full border border-ivory/20 text-ivory/80 px-8 py-3.5 text-sm font-medium tracking-wide hover:bg-ivory/10 transition-all"
            >
              Explore
            </button>
          </motion.div>
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-20 flex items-center justify-center gap-12 sm:gap-16"
        >
          {HERO_STATS.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl sm:text-4xl font-heading font-bold text-ivory">
                {stat.value}
              </p>
              <p className="text-[11px] text-ivory/40 uppercase tracking-[0.2em] mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/40">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4 text-ivory/40" />
        </motion.div>
      </motion.button>
    </section>
  );
}
