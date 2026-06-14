import { motion } from "motion/react";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-[#2a2015]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(201,169,110,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(201,169,110,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h2 className="type-section-title text-ivory">
            Your Transformation
            <span className="block gradient-text">Begins Today</span>
          </h2>
          <p className="mt-6 text-ivory/50 text-lg max-w-lg mx-auto">
            Join hundreds who have discovered a stronger, more balanced version of themselves.
          </p>
          <div className="mt-10">
            <a
              href="#book"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#book")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 rounded-full bg-champagne text-charcoal px-10 py-4 text-base font-semibold tracking-wide hover:bg-champagne/90 transition-all hover:shadow-lg hover:shadow-champagne/20"
            >
              Start Your Journey
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
