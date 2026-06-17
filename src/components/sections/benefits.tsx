import { motion } from "motion/react";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { BENEFITS } from "@/lib/constants";
import { Sparkles, Shield, StretchHorizontal, Scale, ShieldCheck, Heart } from "lucide-react";

const iconMap = {
  Sparkles,
  Shield,
  StretchHorizontal,
  Scale,
  ShieldCheck,
  Heart,
} as Record<string, React.ComponentType<{ className?: string }>>;

export function Benefits() {
  return (
    <section id="benefits" className="relative py-24 lg:py-32 bg-ivory overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <p className="type-eyebrow text-champagne mb-4">
            Benefits
          </p>
          <h2 className="type-section-title text-charcoal">
            Why Pilates Works
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {BENEFITS.map((benefit) => {
            const Icon = iconMap[benefit.icon];
            return (
              <motion.div
                key={benefit.title}
                variants={staggerItem}
                className="group flex flex-col items-center text-center p-6 rounded-2xl hover:bg-cream transition-colors duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-champagne/10 to-sage/10 flex items-center justify-center mb-4 group-hover:from-champagne/20 group-hover:to-sage/20 transition-all duration-500">
                  {Icon && <Icon className="w-7 h-7 text-champagne" />}
                </div>
                <h3 className="font-sans text-sm font-semibold text-charcoal">
                  {benefit.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
