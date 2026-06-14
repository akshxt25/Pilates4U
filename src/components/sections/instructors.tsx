import { motion } from "motion/react";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { INSTRUCTORS } from "@/lib/constants";

export function Instructors() {
  return (
    <section id="instructors" className="relative py-24 lg:py-32 bg-ivory overflow-hidden">
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
            Our Team
          </p>
          <h2 className="type-section-title text-charcoal">
            Meet Your Trainers
          </h2>
        </motion.div>

        {/* Instructor Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-3 gap-8"
        >
          {INSTRUCTORS.map((instructor) => (
            <motion.div
              key={instructor.name}
              variants={staggerItem}
              className="group"
            >
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mb-6">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Hover overlay bio */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-ivory/80 text-sm leading-relaxed">
                    {instructor.bio}
                  </p>
                </div>
              </div>

              {/* Info */}
              <h3 className="font-heading text-xl font-semibold text-charcoal">
                {instructor.name}
              </h3>
              <p className="text-sm text-champagne font-medium mt-1">
                {instructor.role}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
