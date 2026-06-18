import vishakhaImg from '@/assets/media/instructors/instructor-vishakha.jpg';
import akhlekhImg from '@/assets/media/instructors/instructor-akhlekh.jpg';
import karanImg from '@/assets/media/instructors/instructor-karan.jpg';

// ─── Business Information ─────────────────────────────────────────────────────

export const BUSINESS = {
  name: "Pilates For You",
  tagline: "Art of Pose & Poise",
  phone: "+91 9540777666",
  phoneRaw: "919540777666",
  email: "pilatesforyougurugram@gmail.com",
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
export const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbwlDl2NGxYAxhIwsIAUGT4bSnqMF9p1ATTBmfxgCLe01uXmcp_1Pb6w50RYtNFPUrU_/exec";

// ─── Navigation ──────────────────────────────────────────────────────────────

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#services" },
  { label: "Team", href: "#instructors" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const;

// ─── Hero Statistics ─────────────────────────────────────────────────────────

export const HERO_STATS = [
  { value: "5+", label: "Years" },
  { value: "1000+", label: "Sessions" },
  { value: "5.0", label: "Rating" },
] as const;

// ─── Services ────────────────────────────────────────────────────────────────

export const SERVICES = [
  {
    title: "Reformer Pilates",
    description:
      "Experience the power of Reformer Pilates through spring-based resistance training that improves strength, posture, flexibility, balance, and core stability. Ideal for beginners, fitness enthusiasts, and anyone seeking low-impact, full-body conditioning.",
    icon: "Waves" as const,
  },
  {
    title: "Mat Pilates",
    description:
      "Develop a strong foundation with Mat Pilates classes focused on core strength, mobility, flexibility, posture, and mindful movement. Perfect for improving body awareness and everyday movement patterns.",
    icon: "Flower2" as const,
  },
  {
    title: "Personal Training",
    description:
      "Achieve your fitness goals with one-on-one Pilates training tailored to your needs. Whether your focus is weight loss, strength building, injury prevention, or overall wellness, our personalised sessions are designed around you.",
    icon: "UserCheck" as const,
  },
  {
    title: "Rehabilitation Pilates",
    description:
      "Our physiotherapy-led Rehabilitation Pilates program combines clinical expertise with therapeutic movement to support injury recovery, pain management, improved mobility, and long-term strength.",
    icon: "HeartPulse" as const,
  },
] as const;

// ─── Why Choose Us ───────────────────────────────────────────────────────────

export const WHY_CHOOSE_US = [
  {
    title: "Physiotherapy-Led Expertise",
    description: "Our programs are designed and guided by experienced physiotherapists and certified Pilates instructors, ensuring safe, effective, and evidence-based movement for every stage of life.",
    icon: "Award" as const,
  },
  {
    title: "Personalised for Your Body",
    description: "No two bodies are the same. Every session is tailored to your goals, fitness level, movement patterns, and individual needs, helping you progress with confidence.",
    icon: "Target" as const,
  },
  {
    title: "Results That Last",
    description: "Whether your goal is weight loss, improved posture, injury recovery, prenatal wellness, or overall fitness, our programs focus on sustainable progress and long-term well-being.",
    icon: "TrendingUp" as const,
  },
  {
    title: "Premium Reformer Pilates Experience",
    description: "Train on world-class Pilates equipment in a welcoming boutique studio designed to support focus, comfort, and transformation through mindful movement.",
    icon: "Gem" as const,
  },
] as const;

// ─── Benefits ────────────────────────────────────────────────────────────────

export const BENEFITS = [
  { title: "Improved Posture", icon: "Sparkles" as const },
  { title: "Core Strength", icon: "Shield" as const },
  { title: "Flexibility", icon: "StretchHorizontal" as const },
  { title: "Balance", icon: "Scale" as const },
  { title: "Injury Prevention", icon: "ShieldCheck" as const },
  { title: "Stress Relief", icon: "Heart" as const },
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
    image: vishakhaImg,
  },
  {
    name: "Mohammed Akhlakh",
    role: "Co-Founder & Senior Trainer",
    bio: "A passionate movement specialist who combines athletic precision with mindful coaching to make complex movements accessible.",
    image: akhlekhImg,
  },
  {
    name: "Karan Bir Singh",
    role: "Co-Founder & Senior Trainer",
    bio: "Karan's holistic approach integrates strength, flexibility, and mindfulness into a seamless practice that unlocks your potential.",
    image: karanImg,
  },
];

// ─── FAQs ────────────────────────────────────────────────────────────────────

export const FAQS = [
  {
    question: "What is Pilates and how is it different from yoga?",
    answer:
      "Pilates focuses on controlled movements that improve strength, flexibility, and posture using precise, flowing exercises - often with specialized equipment like Reformers.",
  },
  {
    question: "Who can practice Pilates?",
    answer:
      "Everyone - regardless of age or fitness level. Our instructors modify every exercise to match your ability, making it ideal for beginners, athletes, and those recovering from injuries.",
  },
  {
    question: "How often should I practice?",
    answer:
      "We recommend 2-3 sessions per week for optimal results. As Joseph Pilates said, 'In 10 sessions you'll feel the difference, in 20 you'll see it.'",
  },
  {
    question: "What's the difference between Mat and Reformer Pilates?",
    answer:
      "Mat Pilates uses body weight for resistance. Reformer Pilates uses a specialized machine with springs and straps for variable resistance - offering more variety and support.",
  },
  {
    question: "Do you offer trial sessions?",
    answer:
      "Absolutely! Book an introductory session to experience our studio and meet our instructors firsthand.",
  },
  {
    question: "Can Pilates help with back pain?",
    answer:
      "Yes - by strengthening deep core muscles, improving flexibility, and correcting postural imbalances, many clients experience significant pain relief.",
  },
] as const;

// ─── Gallery ─────────────────────────────────────────────────────────────────

const galleryGlob = import.meta.glob('@/assets/media/gallery/*.{jpg,JPG,jpeg,JPEG,png,PNG,mp4,webm}', { eager: true, import: 'default' });

export const STUDIO_MEDIA = Object.entries(galleryGlob).map(([filePath, url]) => {
  const type = filePath.toLowerCase().match(/\.(mp4|webm)$/) ? "video" : "image";
  return { type, src: url as string };
});
