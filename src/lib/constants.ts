// ─── Business Information ─────────────────────────────────────────────────────

export const BUSINESS = {
  name: "Pilates For You",
  tagline: "Art of Pose & Poise",
  phone: "+91 9540777666",
  phoneRaw: "919540777666",
  email: "info@pilatesforyou.in",
  address:
    "4304, Third Floor, Near Galleria Market, Sector-28, DLF Phase 4, Gurugram, Haryana-122009",
  addressShort: "DLF Phase 4, Gurugram",
  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.123!2d77.082!3d28.443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI2JzM0LjgiTiA3N8KwMDQnNTUuMiJF!5e0!3m2!1sen!2sin!4v1",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61587086254731",
    instagram: "https://www.instagram.com/pilatesforyougurugram/",
  },
} as const;

// ─── External Links ──────────────────────────────────────────────────────────

export const FORM_URL = `https://wa.me/${BUSINESS.phoneRaw}`;
export const WHATSAPP_URL = `https://wa.me/${BUSINESS.phoneRaw}`;

// ─── Navigation ──────────────────────────────────────────────────────────────

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#services" },
  { label: "Trainers", href: "#instructors" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const;

// ─── Hero Statistics ─────────────────────────────────────────────────────────

export const HERO_STATS = [
  { value: "10+", label: "Years" },
  { value: "1000+", label: "Sessions" },
  { value: "5.0", label: "Rating" },
] as const;

// ─── Services ────────────────────────────────────────────────────────────────

export const SERVICES = [
  {
    title: "Reformer Pilates",
    description:
      "Spring-based resistance training that sculpts, strengthens, and realigns your body with precision.",
    icon: "Waves" as const,
  },
  {
    title: "Mat Pilates",
    description:
      "Mindful mat sessions that develop deep core strength, flexibility, and a profound mind-body connection.",
    icon: "Flower2" as const,
  },
  {
    title: "Personal Training",
    description:
      "One-on-one sessions tailored entirely to your goals — from injury recovery to peak performance.",
    icon: "UserCheck" as const,
  },
  {
    title: "Rehabilitation",
    description:
      "Therapeutic Pilates designed with physiotherapists to help you recover and rebuild sustainably.",
    icon: "HeartPulse" as const,
  },
] as const;

// ─── Why Choose Us ───────────────────────────────────────────────────────────

export const WHY_CHOOSE_US = [
  {
    title: "Certified Experts",
    description: "Instructors with years of specialized training and international certifications.",
    icon: "Award" as const,
  },
  {
    title: "Result-Driven",
    description: "Measurable outcomes with programs that adapt to your progress.",
    icon: "Target" as const,
  },
  {
    title: "Holistic Approach",
    description: "Nurturing body, mind, and spirit through mindful movement.",
    icon: "Leaf" as const,
  },
  {
    title: "Premium Equipment",
    description: "World-class Reformers and apparatus for the finest movement experience.",
    icon: "Gem" as const,
  },
] as const;

// ─── Benefits ────────────────────────────────────────────────────────────────

export const BENEFITS = [
  { title: "Improved Posture", icon: "Sparkles" as const },
  { title: "Core Strength", icon: "Shield" as const },
  { title: "Flexibility", icon: "Wind" as const },
  { title: "Balance", icon: "Scale" as const },
  { title: "Injury Prevention", icon: "ShieldCheck" as const },
  { title: "Stress Relief", icon: "Sun" as const },
] as const;

// ─── Testimonials ────────────────────────────────────────────────────────────

export const TESTIMONIALS = [
  {
    name: "Abha Jain",
    quote:
      "This studio completely changed my perspective on fitness. I've never felt stronger or more confident.",
    rating: 5,
  },
  {
    name: "Vikas Yadav",
    quote:
      "Significant improvement in my posture and core strength. The best investment in my health.",
    rating: 5,
  },
  {
    name: "Preeti Singh",
    quote:
      "Came for back pain relief and stayed because of how incredible I feel — physically and mentally.",
    rating: 5,
  },
  {
    name: "Ritu Sharma",
    quote:
      "As someone intimidated by fitness studios, this place made me feel completely at home.",
    rating: 5,
  },
  {
    name: "Ananya Gupta",
    quote:
      "The prenatal sessions were thoughtfully designed and made my pregnancy journey so much smoother.",
    rating: 5,
  },
] as const;

// ─── Instructors ─────────────────────────────────────────────────────────────

export const INSTRUCTORS = [
  {
    name: "Dr. Vishakha S Rao",
    role: "Founder & Lead Instructor",
    bio: "With a doctorate in physiotherapy and over a decade of Pilates expertise, Dr. Vishakha brings a unique therapeutic perspective to every session.",
    image: "/media/instructors/instructor-vishakha.jpg",
  },
  {
    name: "Akhlekh",
    role: "Founder & Senior Trainer",
    bio: "A passionate movement specialist who combines athletic precision with mindful coaching to make complex movements accessible.",
    image: "/media/instructors/instructor-akhlekh.jpg",
  },
  {
    name: "Karan",
    role: "Founder & Senior Trainer",
    bio: "Karan's holistic approach integrates strength, flexibility, and mindfulness into a seamless practice that unlocks your potential.",
    image: "/media/instructors/instructor-karan.jpg",
  },
] as const;

// ─── FAQs ────────────────────────────────────────────────────────────────────

export const FAQS = [
  {
    question: "What is Pilates and how is it different from yoga?",
    answer:
      "Pilates focuses on controlled movements that improve strength, flexibility, and posture using precise, flowing exercises — often with specialized equipment like Reformers.",
  },
  {
    question: "Who can practice Pilates?",
    answer:
      "Everyone — regardless of age or fitness level. Our instructors modify every exercise to match your ability, making it ideal for beginners, athletes, and those recovering from injuries.",
  },
  {
    question: "How often should I practice?",
    answer:
      "We recommend 2-3 sessions per week for optimal results. As Joseph Pilates said, 'In 10 sessions you'll feel the difference, in 20 you'll see it.'",
  },
  {
    question: "What's the difference between Mat and Reformer Pilates?",
    answer:
      "Mat Pilates uses body weight for resistance. Reformer Pilates uses a specialized machine with springs and straps for variable resistance — offering more variety and support.",
  },
  {
    question: "Do you offer trial sessions?",
    answer:
      "Absolutely! Book an introductory session to experience our studio and meet our instructors firsthand.",
  },
  {
    question: "Can Pilates help with back pain?",
    answer:
      "Yes — by strengthening deep core muscles, improving flexibility, and correcting postural imbalances, many clients experience significant pain relief.",
  },
] as const;

// ─── Gallery ─────────────────────────────────────────────────────────────────

const galleryGlob = import.meta.glob('/public/media/gallery/*.{jpg,JPG,jpeg,JPEG,png,PNG,mp4,webm}', { eager: true });

export const STUDIO_MEDIA = Object.keys(galleryGlob).map((filePath) => {
  // Vite returns paths like /public/media/gallery/1.jpg. We serve from /media/...
  const publicUrl = filePath.replace('/public', '');
  const type = publicUrl.toLowerCase().match(/\.(mp4|webm)$/) ? "video" : "image";
  return { type, src: publicUrl };
});
