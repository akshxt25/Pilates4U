import { useState, lazy, Suspense } from "react";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { WHATSAPP_URL } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

// Lazy load below-the-fold components for performance (Code Splitting)
const Services = lazy(() => import("@/components/sections/services").then(m => ({ default: m.Services })));
const WhyChooseUs = lazy(() => import("@/components/sections/why-choose-us").then(m => ({ default: m.WhyChooseUs })));
const Benefits = lazy(() => import("@/components/sections/benefits").then(m => ({ default: m.Benefits })));
const Testimonials = lazy(() => import("@/components/sections/testimonials").then(m => ({ default: m.Testimonials })));
const Instructors = lazy(() => import("@/components/sections/instructors").then(m => ({ default: m.Instructors })));
const Gallery = lazy(() => import("@/components/sections/gallery").then(m => ({ default: m.Gallery })));
const FAQ = lazy(() => import("@/components/sections/faq").then(m => ({ default: m.FAQ })));
const BookTrial = lazy(() => import("@/components/sections/book-trial").then(m => ({ default: m.BookTrial })));
const CTA = lazy(() => import("@/components/sections/cta").then(m => ({ default: m.CTA })));
const Footer = lazy(() => import("@/components/sections/footer").then(m => ({ default: m.Footer })));

export default function App() {
  const [isBookingSubmitted, setIsBookingSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <main>
        <Hero />
        <About />
        
        {/* Suspense boundary for lazy-loaded sections */}
        <Suspense fallback={<div className="h-32 bg-ivory" />}>
          <Services />
          <WhyChooseUs />
          <Benefits />
          <Testimonials />
          <Instructors />
          <Gallery />
          <FAQ />
          <BookTrial onSubmitSuccess={() => setIsBookingSubmitted(true)} />
          {!isBookingSubmitted && <CTA />}
        </Suspense>
      </main>
      
      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl hover:scale-110 transition-transform whatsapp-float"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
    </div>
  );
}