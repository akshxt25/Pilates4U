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

export default function App() {
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
        <BookTrial />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}