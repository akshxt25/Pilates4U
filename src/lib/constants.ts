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
  social: {
    facebook: "https://www.facebook.com/pilatesforyou.in",
    instagram: "https://www.instagram.com/pilatesforyou.in",
  },
} as const;

// ─── External Form URL ───────────────────────────────────────────────────────

export const FORM_URL = `https://wa.me/${BUSINESS.phoneRaw}`;

// ─── Navigation ──────────────────────────────────────────────────────────────

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Benefits", href: "#benefits" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

// ─── Hero Statistics ─────────────────────────────────────────────────────────

export const HERO_STATS = [
  { value: "10+", label: "Years of Excellence" },
  { value: "1000+", label: "Sessions Completed" },
  { value: "100%", label: "Certified Instructors" },
] as const;

// ─── Services ────────────────────────────────────────────────────────────────

export const SERVICES = [
  {
    title: "Reformer Pilates",
    description:
      "Experience the transformative power of spring-based resistance training. Our state-of-the-art Reformer machines provide a full-body workout that sculpts, strengthens, and realigns your body with precision.",
    benefits: [
      "Full-body toning & sculpting",
      "Improved spinal alignment",
      "Low-impact, high-results training",
    ],
    icon: "Waves" as const,
  },
  {
    title: "Mat Pilates",
    description:
      "Return to the roots of Pilates with our mindful mat sessions. Using your own body weight as resistance, develop deep core strength, flexibility, and a profound mind-body connection.",
    benefits: [
      "Deep core activation",
      "Enhanced flexibility & mobility",
      "No equipment needed",
    ],
    icon: "Flower2" as const,
  },
  {
    title: "Personal Training",
    description:
      "Receive undivided attention from our expert trainers in one-on-one sessions tailored entirely to your goals. Whether recovering from injury or pursuing peak performance, every session is crafted for you.",
    benefits: [
      "Customized programs",
      "Accelerated results",
      "Injury-specific modifications",
    ],
    icon: "UserCheck" as const,
  },
  {
    title: "Rehabilitation Pilates",
    description:
      "Heal and rebuild with our therapeutic Pilates approach. Designed in collaboration with physiotherapists, these sessions help you recover from injuries while building sustainable strength.",
    benefits: [
      "Post-injury recovery",
      "Pain management",
      "Guided by certified specialists",
    ],
    icon: "HeartPulse" as const,
  },
  {
    title: "Prenatal Pilates",
    description:
      "Nurture your body through motherhood with safe, gentle movements designed for each trimester. Strengthen your pelvic floor, ease discomfort, and prepare for a more comfortable delivery.",
    benefits: [
      "Pelvic floor strengthening",
      "Safe for every trimester",
      "Postpartum recovery support",
    ],
    icon: "Baby" as const,
  },
] as const;

// ─── Why Choose Us ───────────────────────────────────────────────────────────

export const WHY_CHOOSE_US = [
  {
    title: "Professional Assistance",
    description:
      "Our certified instructors bring years of specialized training to every session, ensuring safe and effective practice tailored to your unique needs.",
    icon: "Award" as const,
  },
  {
    title: "Celebrity Trainers",
    description:
      "Train with instructors who have worked with elite clientele and bring world-class expertise to your personalized wellness journey.",
    icon: "Star" as const,
  },
  {
    title: "Result-Oriented Approach",
    description:
      "Every program is designed with measurable outcomes in mind. We track your progress and continuously adapt to keep you moving toward your goals.",
    icon: "Target" as const,
  },
  {
    title: "Holistic Health",
    description:
      "Beyond physical fitness, we nurture mental well-being through mindful movement, breathwork, and a supportive community that uplifts your entire self.",
    icon: "Leaf" as const,
  },
  {
    title: "Intimate Class Sizes",
    description:
      "With small group sessions capped at just a few participants, you receive the personalized attention that transforms good workouts into extraordinary results.",
    icon: "Users" as const,
  },
  {
    title: "Premium Equipment",
    description:
      "Our studio features top-of-the-line Reformers and apparatus from the world's leading manufacturers, ensuring the finest movement experience.",
    icon: "Gem" as const,
  },
] as const;

// ─── Benefits ────────────────────────────────────────────────────────────────

export const BENEFITS = [
  {
    title: "Improved Posture",
    description:
      "Realign your spine and stand taller with exercises that strengthen postural muscles and correct imbalances from modern lifestyles.",
    icon: "Sparkles" as const,
  },
  {
    title: "Core Strength",
    description:
      "Build a powerhouse center that supports every movement in your daily life, from lifting groceries to athletic performance.",
    icon: "Shield" as const,
  },
  {
    title: "Flexibility",
    description:
      "Move with grace and ease as you increase your range of motion through controlled stretching and lengthening exercises.",
    icon: "Wind" as const,
  },
  {
    title: "Balance & Stability",
    description:
      "Develop proprioception and body awareness that keeps you steady and confident, reducing your risk of falls and injuries.",
    icon: "Scale" as const,
  },
  {
    title: "Injury Prevention",
    description:
      "Strengthen supporting muscles and correct movement patterns that protect your joints and keep you active for years to come.",
    icon: "ShieldCheck" as const,
  },
  {
    title: "Stress Reduction",
    description:
      "Calm your nervous system through focused breathing and mindful movement, leaving each session feeling centered and renewed.",
    icon: "Sun" as const,
  },
] as const;

// ─── Testimonials ────────────────────────────────────────────────────────────

export const TESTIMONIALS = [
  {
    name: "Abha Jain",
    quote:
      "This studio has completely changed my perspective on fitness. The personalized approach and the warmth of the instructors make every session feel like a gift to myself. I've never felt stronger or more confident.",
    rating: 5,
  },
  {
    name: "Vikas Yadav",
    quote:
      "I have seen a significant improvement in my posture and core strength since joining Pilates For You. The trainers are incredibly knowledgeable and attentive. It's the best investment I've made in my health.",
    rating: 5,
  },
  {
    name: "Preeti Singh",
    quote:
      "The personalized attention in each class makes a huge difference. I came for back pain relief and stayed because of how incredible I feel — physically and mentally. This place is truly special.",
    rating: 5,
  },
  {
    name: "Ritu Sharma",
    quote:
      "As someone who was intimidated by fitness studios, Pilates For You made me feel completely at home. The instructors are patient, the environment is serene, and the results speak for themselves.",
    rating: 5,
  },
  {
    name: "Ananya Gupta",
    quote:
      "I joined during my pregnancy and it was the best decision. The prenatal sessions were thoughtfully designed and made my journey so much smoother. Highly recommend to all expecting mothers.",
    rating: 5,
  },
] as const;

// ─── Instructors ─────────────────────────────────────────────────────────────

export const INSTRUCTORS = [
  {
    name: "Dr. Vishakha S Rao",
    role: "Founder & Lead Instructor",
    bio: "With a background in physiotherapy and over a decade of Pilates expertise, Dr. Vishakha brings a unique therapeutic perspective to every session. Her vision of making Pilates accessible and transformative for everyone is the heart of Pilates For You.",
    certifications: [
      "Certified Pilates Instructor",
      "Doctorate in Physiotherapy",
      "Rehabilitation Specialist",
    ],
  },
  {
    name: "Akhlekh",
    role: "Founder & Senior Trainer",
    bio: "A passionate movement specialist, Akhlekh combines athletic precision with mindful coaching. His dynamic teaching style makes complex movements accessible and ensures every client feels both challenged and supported.",
    certifications: [
      "Certified Pilates Trainer",
      "Sports Rehabilitation Expert",
      "Advanced Reformer Specialist",
    ],
  },
  {
    name: "Karan",
    role: "Founder & Senior Trainer",
    bio: "Karan's holistic approach to Pilates integrates strength, flexibility, and mindfulness into a seamless practice. His calm, encouraging demeanor creates a space where clients discover their true physical potential.",
    certifications: [
      "Certified Pilates Professional",
      "Corrective Exercise Specialist",
      "Functional Movement Expert",
    ],
  },
] as const;

// ─── FAQs ────────────────────────────────────────────────────────────────────

export const FAQS = [
  {
    question: "What is Pilates, and how is it different from yoga?",
    answer:
      "Pilates is a method of exercise focusing on controlled movements that improve strength, flexibility, and posture. While yoga emphasizes spiritual practices and holding poses, Pilates concentrates on precise, flowing movements that target the deep stabilizing muscles, often using specialized equipment like Reformers.",
  },
  {
    question: "Who can practice Pilates?",
    answer:
      "Pilates is for everyone — regardless of age, fitness level, or physical condition. Our instructors modify every exercise to match your ability, making it ideal for beginners, athletes, pregnant women, seniors, and those recovering from injuries.",
  },
  {
    question:
      "What should I wear and bring to my first session?",
    answer:
      "Wear comfortable, form-fitting clothing that allows freedom of movement. Grip socks are recommended for Reformer sessions. We provide all equipment — just bring a water bottle and an open mind!",
  },
  {
    question: "How often should I practice Pilates?",
    answer:
      "For optimal results, we recommend 2-3 sessions per week. Consistency is key — Joseph Pilates himself said, 'In 10 sessions you will feel the difference, in 20 you will see the difference, and in 30 you'll have a whole new body.'",
  },
  {
    question:
      "What's the difference between Mat and Reformer Pilates?",
    answer:
      "Mat Pilates uses your body weight for resistance and is performed on a cushioned mat. Reformer Pilates utilizes a specialized machine with springs, straps, and a sliding carriage to add variable resistance. Both are effective; Reformers offer more variety and support for those with injuries.",
  },
  {
    question: "Do you offer trial sessions?",
    answer:
      "Absolutely! We offer introductory trial sessions so you can experience our studio, meet our instructors, and discover the transformative power of Pilates firsthand. Book your trial through the form on our website or contact us directly.",
  },
  {
    question: "Can Pilates help with back pain?",
    answer:
      "Yes, Pilates is one of the most effective methods for managing and alleviating back pain. By strengthening the deep core muscles that support your spine, improving flexibility, and correcting postural imbalances, many of our clients experience significant relief.",
  },
] as const;

// ─── Gallery Categories ──────────────────────────────────────────────────────

export const GALLERY_CATEGORIES = [
  "All",
  "Studio",
  "Classes",
  "Equipment",
  "Community",
] as const;

// ─── Trial Form Time Slots ──────────────────────────────────────────────────

export const TIME_SLOTS = {
  morning: ["7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM"],
  evening: ["4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"],
} as const;

export const TRIAL_TYPES = [
  { id: "group", label: "Group Session", price: "₹500" },
  { id: "personal", label: "Personal Training", price: "₹1,000" },
] as const;
