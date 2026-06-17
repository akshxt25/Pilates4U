import { motion } from "motion/react";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { TESTIMONIALS } from "@/lib/constants";
import { Star } from "lucide-react";

export function Testimonials() {
  // Double the cards for seamless infinite scroll
  const cards = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      id="testimonials"
      className="relative py-24 lg:py-32 bg-charcoal overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="type-eyebrow text-champagne mb-4">
            Testimonials
          </p>
          <h2 className="type-section-title text-ivory">
            Words That Move Us
          </h2>
        </motion.div>
      </div>

      {/* Scrolling track */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-charcoal to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-charcoal to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-6 animate-scroll"
          style={{
            "--card-count": TESTIMONIALS.length,
            "--scroll-duration": "60s",
            width: "max-content",
          } as React.CSSProperties}
        >
          {cards.map((testimonial, i) => (
            <div
              key={`${testimonial.name}-${i}`}
              className="glass-card rounded-2xl p-8 w-[320px] flex-shrink-0"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-champagne fill-champagne"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-ivory/70 text-sm leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Name */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-champagne/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-champagne">
                    {testimonial.name[0]}
                  </span>
                </div>
                <p className="text-sm font-medium text-ivory/80">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
