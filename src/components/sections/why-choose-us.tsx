import { motion } from "motion/react";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { WHY_CHOOSE_US } from "@/lib/constants";
import { Award, Target, Leaf, Gem } from "lucide-react";

const iconMap = {
  Award,
  Target,
  Leaf,
  Gem,
} as Record<string, React.ComponentType<{ className?: string }>>;

export function WhyChooseUs() {
  return (
    <section className="relative py-24 lg:py-32 bg-cream overflow-hidden">
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
            Why Pilates For You
          </p>
          <h2 className="type-section-title text-charcoal">
            The Difference
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {WHY_CHOOSE_US.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="group bg-ivory rounded-2xl p-8 border border-sand/40 hover:border-champagne/30 transition-all duration-500 hover:shadow-xl hover:shadow-sand/20 hover:-translate-y-1 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-champagne/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-champagne/20 transition-colors">
                  {Icon && <Icon className="w-6 h-6 text-champagne" />}
                </div>
                <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
