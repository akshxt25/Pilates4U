import { motion } from "motion/react";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { STUDIO_MEDIA } from "@/lib/constants";

export function Gallery() {
  // Group media into columns: alternating between 1 item and 2 items
  const columns = [];
  let currentIndex = 0;
  let isSingle = true;

  while (currentIndex < STUDIO_MEDIA.length) {
    if (isSingle) {
      columns.push([STUDIO_MEDIA[currentIndex]]);
      currentIndex += 1;
    } else {
      if (currentIndex + 1 < STUDIO_MEDIA.length) {
        columns.push([STUDIO_MEDIA[currentIndex], STUDIO_MEDIA[currentIndex + 1]]);
        currentIndex += 2;
      } else {
        columns.push([STUDIO_MEDIA[currentIndex]]);
        currentIndex += 1;
      }
    }
    isSingle = !isSingle;
  }

  // Duplicate columns twice to ensure a perfect 50% translation loop
  const duplicatedColumns = [...columns, ...columns];

  return (
    <section id="gallery" className="relative py-24 lg:py-32 bg-cream overflow-hidden">
      <div className="mx-auto px-6 lg:px-8 max-w-full">
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

        {/* Marquee Gallery */}
        <div className="relative w-full overflow-hidden flex items-center py-4">
          {/* Fading edges for a cleaner look */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

          <div 
            className="flex animate-marquee w-max"
            style={{ "--marquee-duration": "90s" } as React.CSSProperties}
          >
            {duplicatedColumns.map((col, colIndex) => (
              <div 
                key={`col-${colIndex}`}
                className="flex flex-col gap-4 sm:gap-6 pr-4 sm:pr-6 shrink-0 w-[280px] sm:w-[450px]"
              >
                {col.map((media, itemIndex) => (
                  <div 
                    key={`${media.src}-${colIndex}-${itemIndex}`} 
                    className={`relative w-full rounded-2xl overflow-hidden group ${
                      col.length === 1 
                        ? 'h-[400px] sm:h-[600px]' 
                        : 'h-[192px] sm:h-[288px]'
                    }`}
                  >
                    {media.type === "video" ? (
                      <video
                        src={media.src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <img
                        src={media.src}
                        alt="Pilates Studio"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-500" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
