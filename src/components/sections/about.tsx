import { motion } from "motion/react";
import { slideInLeft, slideInRight, viewportOnce } from "@/lib/animations";
export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-ivory overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-[3/4]">
              <img
                src="/media/about/about-studio.jpg"
                alt="Inside Pilates For You Studio"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-champagne/10 border border-champagne/20 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <p className="type-eyebrow text-champagne mb-4">
              About Us
            </p>
            <h2 className="type-section-title text-charcoal">
              Where Wellness
              <span className="block text-champagne italic">Meets Precision</span>
            </h2>
            <p className="mt-6 text-warm-gray leading-relaxed text-lg">
              Pilates For You was born from a vision of creating a holistic fitness
              environment that caters to each individual's unique journey. We blend
              the art of Pilates with physiotherapy expertise.
            </p>
            <p className="mt-4 text-warm-gray leading-relaxed">
              Our mission is simple — bring practical, sustainable wellness changes
              through mindful movement. We provide, we teach, we train. It's
              Pilates for <em className="text-champagne font-medium not-italic">you</em>.
            </p>

            {/* Quick stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { value: "Since 2014", label: "Established" },
                { value: "3 Founders", label: "Expert Team" },
                { value: "All Ages", label: "Kids to Elders" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="type-stat text-charcoal">
                    {stat.value}
                  </p>
                  <p className="text-xs text-taupe uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
