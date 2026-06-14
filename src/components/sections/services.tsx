import { motion } from "motion/react";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { SERVICES } from "@/lib/constants";
import { Waves, Flower2, UserCheck, HeartPulse } from "lucide-react";

const iconMap = {
  Waves,
  Flower2,
  UserCheck,
  HeartPulse,
} as Record<string, React.ComponentType<{ className?: string }>>;

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-charcoal overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(201,169,110,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(201,169,110,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16 lg:mb-20 max-w-2xl mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-champagne font-medium mb-4">
            Our Programs
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory">
            Curated for Your Wellness
          </h2>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                variants={staggerItem}
                className="group relative glass-card rounded-2xl p-8 hover:bg-white/12 transition-all duration-500 hover:-translate-y-1 glow-champagne"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-champagne/10 flex items-center justify-center mb-6 group-hover:bg-champagne/20 transition-colors duration-500">
                  {Icon && <Icon className="w-5 h-5 text-champagne" />}
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg font-bold text-ivory mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-ivory/50 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
