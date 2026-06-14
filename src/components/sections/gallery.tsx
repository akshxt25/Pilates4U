import { motion } from "motion/react";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { GALLERY_IMAGES } from "@/lib/constants";

// Import all gallery images
import imgReformer from "@/assets/images/gallery-reformer.png";
import imgSession from "@/assets/images/gallery-session.png";
import imgDetails from "@/assets/images/gallery-details.png";
import imgStretch from "@/assets/images/gallery-stretch.png";
import imgStudio from "@/assets/images/about-studio.png";
import imgHero from "@/assets/images/hero-bg.png";

const imageMap: Record<string, string> = {
  "gallery-reformer.png": imgReformer,
  "gallery-session.png": imgSession,
  "gallery-details.png": imgDetails,
  "gallery-stretch.png": imgStretch,
  "about-studio.png": imgStudio,
  "hero-bg.png": imgHero,
};

// Define span sizes for masonry-like grid
const spanClasses = [
  "col-span-1 row-span-2",    // tall
  "col-span-1 row-span-1",    // normal
  "col-span-1 row-span-1",    // normal
  "col-span-1 row-span-2",    // tall
  "col-span-1 row-span-1",    // normal
  "col-span-1 row-span-1",    // normal
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-24 lg:py-32 bg-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-champagne font-medium mb-4">
            Gallery
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal">
            Inside the Studio
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 lg:grid-cols-3 auto-rows-[200px] lg:auto-rows-[220px] gap-4"
        >
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              variants={staggerItem}
              className={`${spanClasses[i]} group relative rounded-2xl overflow-hidden cursor-pointer`}
            >
              <img
                src={imageMap[img.src]}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
