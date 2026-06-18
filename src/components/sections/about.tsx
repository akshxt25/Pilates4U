import { motion } from "motion/react";
import { slideInLeft, slideInRight, viewportOnce } from "@/lib/animations";
import aboutStudioImg from "@/assets/media/about/about-studio.jpeg";

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
                src={aboutStudioImg}
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
            <p className="mt-6 text-warm-gray leading-relaxed">
              Pilates For You is a leading Pilates studio in Gurugram, combining
              physiotherapy expertise with Reformer and Mat Pilates and mindful movement
              to help you build strength, improve mobility, and enhance overall
              well-being.
            </p>
            <p className="mt-4 text-warm-gray leading-relaxed">
              From rehabilitation and prenatal Pilates to strength training and
              Pilates classes for women, our expert-led programs are tailored to
              support every stage of your wellness journey.
            </p>
            <p className="mt-4 text-warm-gray leading-relaxed">
              Whether your goal is weight loss, recovery, flexibility, or
              long-term fitness, we're here to help you move better, feel
              stronger, and live healthier.
            </p>

            {/* Quick stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6">
              {[
                { value: "Holistic Wellness", label: "Strength • Mobility • Recovery" },
                { value: "3 Founders", label: "Physiotherapists & Pilates Experts" },
                { value: "Expert Guidance", label: "For Every Goal and Ability" },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="block w-6 h-0.5 bg-champagne mb-3" />
                  <p className="font-heading text-base sm:text-lg font-semibold text-charcoal leading-snug">
                    {stat.value}
                  </p>
                  <p className="text-xs text-taupe mt-1 italic">
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
