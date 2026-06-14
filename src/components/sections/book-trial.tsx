import { motion } from "motion/react";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { FORM_URL, BUSINESS } from "@/lib/constants";
import { Phone, MessageCircle } from "lucide-react";

export function BookTrial() {
  return (
    <section className="relative py-24 lg:py-32 bg-ivory overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-champagne font-medium mb-4">
            Get Started
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Book Your Trial Session
          </h2>
          <p className="text-warm-gray text-lg max-w-xl mx-auto mb-10">
            Experience the transformative power of Pilates firsthand.
            Your journey to a stronger, more balanced you starts with a single session.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-8 py-3.5 text-sm font-semibold tracking-wide hover:bg-[#22c55e] transition-all hover:shadow-lg hover:shadow-[#25D366]/20"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-sand text-charcoal px-8 py-3.5 text-sm font-medium tracking-wide hover:bg-cream transition-all"
            >
              <Phone className="w-4 h-4" />
              {BUSINESS.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
