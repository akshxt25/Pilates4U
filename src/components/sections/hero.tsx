import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { FORM_URL, HERO_STATS } from "@/lib/constants";
import { staggerContainer, staggerItem, float } from "@/lib/animations";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToPrograms = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-ivory via-cream to-ivory"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={float.animate}
          className="absolute top-20 right-[15%] w-72 h-72 rounded-full bg-champagne/5 blur-3xl"
        />
        <motion.div
          animate={{ y: [10, -10, 10], transition: { duration: 8, repeat: Infinity, ease: "easeInOut" as const } }}
          className="absolute bottom-32 left-[10%] w-96 h-96 rounded-full bg-sage/8 blur-3xl"
        />
        <motion.div
          animate={{ y: [-6, 6, -6], transition: { duration: 7, repeat: Infinity, ease: "easeInOut" as const, delay: 1 } }}
          className="absolute top-1/3 left-[60%] w-48 h-48 rounded-full bg-champagne/8 blur-2xl"
        />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,168,83,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,168,83,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left – Copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Eyebrow */}
            <motion.p
              variants={staggerItem}
              className="inline-flex items-center gap-2 rounded-full bg-champagne/10 border border-champagne/20 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-champagne mb-6"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-champagne animate-pulse" />
              Premium Pilates Studio in Gurgaon
            </motion.p>

            {/* Headline */}
            <motion.h1
              variants={staggerItem}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-charcoal"
            >
              Transform Your
              <span className="block mt-1">
                Body, Mind
              </span>
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-champagne via-bronze to-champagne">
                & Spirit
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={staggerItem}
              className="mt-6 text-lg text-warm-gray leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Experience the art of mindful movement at Gurgaon's most
              exclusive Pilates studio. Personalized sessions, certified
              instructors, world-class equipment — your journey to a
              stronger, more balanced you begins here.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={staggerItem}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={() => window.open(FORM_URL, "_blank", "noopener,noreferrer")}
                size="lg"
                className="bg-charcoal text-ivory hover:bg-charcoal/90 rounded-full px-8 h-13 text-base font-medium tracking-wide shadow-lg shadow-charcoal/20 group"
              >
                Book Your Session
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                onClick={scrollToPrograms}
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-13 text-base font-medium border-sand hover:bg-cream text-charcoal tracking-wide"
              >
                Explore Programs
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={staggerItem}
              className="mt-12 flex items-center gap-8 justify-center lg:justify-start"
            >
              {HERO_STATS.map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <p className="text-2xl lg:text-3xl font-heading font-bold text-charcoal">
                    {stat.value}
                  </p>
                  <p className="text-xs text-taupe uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right – Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main image container */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-cream to-sand/30 border border-sand/30 shadow-2xl shadow-sand/20">
                <div className="absolute inset-0 bg-gradient-to-br from-champagne/5 via-transparent to-sage/5" />
                {/* Placeholder elegant visual */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                  <div className="w-24 h-24 rounded-full border-2 border-champagne/30 flex items-center justify-center mb-6">
                    <span className="font-heading text-4xl text-champagne/60">P</span>
                  </div>
                  <p className="font-heading text-2xl text-charcoal/40 italic">
                    "In 10 sessions you will feel the difference"
                  </p>
                  <p className="mt-3 text-sm text-taupe tracking-wider uppercase">
                    — Joseph Pilates
                  </p>
                </div>
              </div>

              {/* Floating stat card */}
              <motion.div
                animate={float.animate}
                className="absolute -bottom-4 -left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-sand/30"
              >
                <p className="text-xs text-taupe uppercase tracking-wider">Student Rating</p>
                <div className="flex items-center gap-1 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-champagne fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-sm font-semibold text-charcoal">5.0</span>
                </div>
              </motion.div>

              {/* Floating experience card */}
              <motion.div
                animate={{ y: [6, -6, 6], transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const, delay: 0.5 } }}
                className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-sand/30"
              >
                <p className="text-xs text-taupe uppercase tracking-wider">Since</p>
                <p className="text-2xl font-heading font-bold text-charcoal">2014</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-taupe">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-4 w-4 text-taupe" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
