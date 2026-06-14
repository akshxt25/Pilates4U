import { useState } from "react";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Benefits } from "@/components/sections/benefits";
import { Testimonials } from "@/components/sections/testimonials";
import { Instructors } from "@/components/sections/instructors";
import { Gallery } from "@/components/sections/gallery";
import { FAQ } from "@/components/sections/faq";
import { BookTrial } from "@/components/sections/book-trial";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { WHATSAPP_URL } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

export default function App() {
  const [isBookingSubmitted, setIsBookingSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Benefits />
        <Testimonials />
        <Instructors />
        <Gallery />
        <FAQ />
        <BookTrial onSubmitSuccess={() => setIsBookingSubmitted(true)} />
        {!isBookingSubmitted && <CTA />}
      </main>
      <Footer />

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