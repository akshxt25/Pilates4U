import { motion } from "motion/react";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { SERVICES } from "@/lib/constants";
import { Waves, Flower2, UserCheck, HeartPulse, Baby, ArrowRight } from "lucide-react";

const iconMap = {
  Waves,
  Flower2,
  UserCheck,
  HeartPulse,
  Baby,
} as const;

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-ivory overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-champagne/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16 lg:mb-20 max-w-2xl mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-champagne font-medium mb-3">
            Our Programs
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal">
            Curated for Your Wellness
          </h2>
          <p className="mt-4 text-warm-gray leading-relaxed">
            Every program is thoughtfully designed to meet you where you are and
            guide you toward where you want to be.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                variants={staggerItem}
                className="group relative bg-white rounded-2xl p-8 border border-sand/30 hover:border-champagne/40 transition-all duration-500 hover:shadow-xl hover:shadow-sand/20 hover:-translate-y-1"
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-champagne/0 to-sage/0 group-hover:from-champagne/3 group-hover:to-sage/3 transition-all duration-500" />

                <div className="relative">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-champagne/10 flex items-center justify-center mb-6 group-hover:bg-champagne/15 transition-colors duration-500">
                    <Icon className="w-6 h-6 text-champagne" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-warm-gray text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-sm text-charcoal">
                        <div className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button className="inline-flex items-center gap-2 text-sm font-medium text-champagne hover:text-bronze transition-colors group/btn">
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
