import { useState } from "react";
import { motion } from "motion/react";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { FAQS } from "@/lib/constants";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-charcoal overflow-hidden">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-champagne font-medium mb-4">
            FAQs
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory">
            Common Questions
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-3"
        >
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="glass-card rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-sm font-medium text-ivory/90 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-champagne flex-shrink-0 transition-transform duration-300",
                    open === i && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm text-ivory/50 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
