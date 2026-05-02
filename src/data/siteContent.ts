import heroImage from "@/assets/nikita-hero-cinematic.jpg";
import performanceCardBackground from "@/assets/performance-card-bg.jpg";

export type ContentMap = Record<string, string>;

export type SiteContentRow = {
  id: string;
  key: string;
  value: string;
  display_order: number | null;
  is_visible: boolean | null;
};

export type MediaCategory = "images" | "videos" | "audios" | "certificates";

export type MediaItemRow = {
  id: string;
  title: string;
  description: string | null;
  category: MediaCategory;
  storage_path: string;
  public_url: string;
  display_order: number | null;
  is_featured: boolean | null;
  is_visible: boolean | null;
};

export type BookingType = "performance" | "lesson" | "inquiry";

export const siteContent = {
  content: {
    hero_kicker: "Saraswati Veena • Frisco ISD, Texas",
    hero_title: "Nikita Studio",
    hero_subtitle: "Nikita Prakash - Veena Artist & Aspiring Physician",
    hero_description:
      "5+ Years of Carnatic Veena · Performances in India & USA · Original Compositions · Future Masterclasses",
    hero_quote:
      '"Blending tradition with discipline - A journey of passion and perseverance"',
    featured_title: "Watch & Listen",
    featured_description:
      "Experience the Saraswati Veena - a featured performance or original composition by Nikita.",
    gallery_title: "Moments in Music",
    albums_title: "My Music",
    certificates_title: "Certificates",
  } satisfies ContentMap,

  assets: {
    heroImage,
    performanceCardBackground,
  },

  navigation: {
    brand: "Nikita Studio",
    links: [
      { href: "#about", label: "About" },
      { href: "#journey", label: "Journey" },
      { href: "#performances", label: "Performances" },
      { href: "#albums", label: "Albums" },
      { href: "#booking", label: "Booking" },
      { href: "#gallery", label: "Gallery" },
    ],
  },

  quickNav: [
    { href: "#about", label: "About", icon: "user" },
    { href: "#featured-video", label: "Featured Video", icon: "video" },
    { href: "#journey", label: "Journey", icon: "route" },
    { href: "#performances", label: "Performances", icon: "music" },
    { href: "#albums", label: "Albums", icon: "disc" },
    { href: "#booking", label: "Booking", icon: "calendar" },
    { href: "#gallery", label: "Gallery", icon: "image" },
  ],

  hero: {
    imageAlt: "Nikita playing Saraswati Veena",
    ctas: [
      { href: "#about", label: "Explore My Journey", variant: "primary" },
      { href: "#performances", label: "Watch Performances", variant: "secondary" },
      { href: "#booking", label: "Book Nikita", variant: "secondary" },
    ],
  },

  about: {
    eyebrow: "About",
    title: "Nikita Prakash",
    subtitle: "The Artist · The Brand · The Vision",
    highlightedTerms: ["Nikita Prakash", "Nikita Studio"],
    paragraphs: [
      "My name is Nikita Prakash, and I am a 7th-grade student at Frisco ISD, Texas. Five years ago, I placed my fingers on the strings of a Saraswati Veena for the first time — and in that quiet moment, something shifted. What began as a young child's curiosity has grown into a deep, sustaining commitment to one of India's most ancient and revered instruments.",
      "Nikita Studio is the creative brand I built around that commitment — a platform to share performances, compositions, and eventually masterclasses with the world. Through daily practice, patient study under my Guru's guidance, and an ever-deepening relationship with Carnatic music, the Veena has become both my anchor and my aspiration.",
      "That dedication has carried me to stages across two continents. I have had the privilege of performing at cultural festivals and temple celebrations in India, as well as concerts and community events throughout the United States. Along the way, I have reproduced several classical albums — now available on YouTube — and composed and released my first original piece, a milestone that challenged me to move from interpreter to creator.",
      "What I value most, however, is not the applause but the process. The Veena demands the same qualities I hope to bring to a career in Medicine: unwavering focus, disciplined repetition, cultural empathy, and the humility to remain a lifelong student. Balancing rigorous academics at Frisco ISD with hours of daily riyaaz has sharpened my time-management and taught me that meaningful achievement grows slowly — one raga, one lesson, one honest practice session at a time.",
      "Through Nikita Studio, I hope to share this journey — not as a finished story, but as a continuing exploration of tradition, creativity, and the quiet discipline that connects art to every other pursuit worth undertaking.",
    ],
  },

  featuredVideo: {
    eyebrow: "Featured",
    fallbackLabel: "Video Coming Soon",
  },

  journey: {
    eyebrow: "My Journey",
    title: "5 Years of Growth",
    milestones: [
      { year: "2019", title: "Started Saraswati Veena Lessons", description: "Began formal Saraswati Veena training at age 7, discovering a passion for Carnatic music.", location: "India" },
      { year: "2020", title: "First Recital Performance", description: "Performed at a local temple cultural event, showcasing foundational ragas to an appreciative audience.", location: "India" },
      { year: "2021", title: "Moved to Frisco, Texas", description: "Continued musical training in the USA while adapting to a new school and cultural environment at Frisco ISD.", location: "Frisco, USA" },
      { year: "2022", title: "First US Stage Performance", description: "Debuted on a US stage at a Carnatic music festival in the Dallas–Fort Worth area.", location: "Texas, USA" },
      { year: "2023", title: "Reproduced First Album", description: "Successfully reproduced a collection of classical compositions, earning recognition from her Guru.", location: "USA" },
      { year: "2024", title: "Released Original Composition", description: "Composed and released her very first original Saraswati Veena piece — a proud milestone in her young career.", location: "Frisco, USA" },
      { year: "2025", title: "Multi-Concert Performer", description: "Performed at multiple prestigious cultural events across India and the USA, growing her audience.", location: "India & USA" },
    ],
  },

  performances: {
    eyebrow: "Performances",
    title: "On Stage",
    fallbackVideoLabel: "Video Coming Soon",
    defaultPlace: "Nikita Studio",
    defaultDate: "Recent",
    items: [
      { date: "2024", event: "Annual Carnatic Music Festival", place: "Chennai, India", description: "Performed a 30-minute solo Saraswati Veena recital featuring Raga Kalyani and Raga Shankarabharanam.", video: "" },
      { date: "2024", event: "DFW Telugu Association Cultural Night", place: "Dallas, USA", description: "Showcased classical and semi-classical compositions to an audience of over 500 attendees.", video: "" },
      { date: "2023", event: "Temple Anniversary Celebration", place: "Frisco, USA", description: "Opened the evening program with a devotional Saraswati Veena performance at the local Hindu temple.", video: "" },
      { date: "2023", event: "India Heritage Festival", place: "Hyderabad, India", description: "Invited as a young prodigy performer at this prestigious cultural gathering.", video: "" },
      { date: "2022", event: "Frisco Arts & Culture Showcase", place: "Frisco, USA", description: "First public US performance, introducing Carnatic Saraswati Veena to a diverse American audience.", video: "" },
      { date: "2021", event: "Virtual Carnatic Concert Series", place: "Online (India & USA)", description: "Participated in a pandemic-era virtual concert series connecting musicians across continents.", video: "" },
    ],
  },

  albums: {
    eyebrow: "Albums & Compositions",
    uploadedType: "Uploaded",
    listenLabel: "Listen Now",
    items: [
      { title: "Raga Reverie", type: "Reproduced", description: "A collection of timeless Carnatic compositions featuring Raga Mohanam and Raga Hamsadhwani.", url: "#" },
      { title: "Veena Vandanam", type: "Reproduced", description: "Devotional pieces celebrating the divine, rendered through the soulful tones of the Saraswati Veena.", url: "#" },
      { title: "Classical Horizons", type: "Reproduced", description: "An exploration of complex ragas and talas showcasing technical growth and musicality.", url: "#" },
      { title: "Strings of the Soul", type: "Original", description: "Nikita's debut original composition — a heartfelt piece blending traditional ragas with her own creative voice.", url: "#" },
    ],
  },

  booking: {
    eyebrow: "Bookings",
    title: "Work With Nikita",
    description:
      "Whether it's a live performance, a private lesson, or a creative collaboration — reach out to get started.",
    contactEmail: "nikitamusicalstudio@gmail.com",
    options: [
      { type: "performance" as BookingType, icon: "music", title: "Book a Performance", desc: "Invite Nikita for a live Saraswati Veena recital at your event." },
      { type: "lesson" as BookingType, icon: "graduation", title: "Private Lesson", desc: "Schedule one-on-one Veena lessons — online or in-person in Texas." },
      { type: "inquiry" as BookingType, icon: "message", title: "General Inquiry", desc: "Collaborations, media, or anything else — let's connect." },
    ],
    form: {
      successTitle: "Request Received!",
      successPrefix: "Thank you",
      successSuffix: "We'll get back to you shortly regarding your",
      requestLabels: {
        performance: "performance booking",
        lesson: "lesson request",
        inquiry: "inquiry",
      },
      nameLabel: "Your Name",
      namePlaceholder: "Full name",
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      dateLabel: "Preferred Date",
      messageLabels: {
        performance: "Event Details",
        lesson: "What would you like to learn?",
        inquiry: "Your Message",
      },
      messagePlaceholders: {
        performance: "Tell us about your event — date, venue, audience size...",
        lesson: "Your current skill level, goals, preferred schedule...",
        inquiry: "How can we help?",
      },
      submitLabel: "Submit Request",
    },
  },

  gallery: {
    eyebrow: "Gallery",
    emptyMessage: "Upload gallery images from Developer Mode.",
  },

  certificates: {
    eyebrow: "Achievements",
    defaultDescription: "Certificate",
  },

  footer: {
    brand: "Nikita Studio",
    description:
      "Young Saraswati Veena virtuoso from Frisco, Texas. Dedicated to preserving and sharing the beauty of Carnatic music with the world.",
    portfolio: {
      label: "Download Portfolio PDF",
      href: "#",
    },
    quickLinksTitle: "Quick Links",
    quickLinks: [
      { href: "#about", label: "About" },
      { href: "#journey", label: "Journey" },
      { href: "#performances", label: "Performances" },
      { href: "#albums", label: "Albums" },
      { href: "#booking", label: "Booking" },
    ],
    connectTitle: "Connect",
    contactEmail: "nikitamusicalstudio@gmail.com",
    youtube: {
      label: "YouTube Channel",
      href: "#",
    },
    socialLinks: [
      { label: "Instagram", href: "#", icon: "instagram" },
      { label: "YouTube", href: "#", icon: "youtube" },
      { label: "Facebook", href: "#", icon: "facebook" },
    ],
    copyright: "Nikita Studio. All rights reserved.",
    updatedPrefix: "Last Updated:",
    studentNote: "Proud 7th Grader, Frisco ISD, Texas 🎓",
  },

  masterclass: {
    eyebrow: "Coming Soon",
    title: "Sharing the Tradition – Masterclasses with Nikita",
    description:
      "Comprehensive masterclasses designed for aspiring Saraswati Veena players of all levels. Learn technique, ragas, and the art of performance from a passionate young artist committed to preserving this timeless tradition.",
    features: [
      { icon: "book", title: "Technique & Fundamentals", desc: "Master Saraswati Veena posture, finger techniques, and foundational exercises." },
      { icon: "sparkles", title: "Raga Exploration", desc: "Deep-dive into classical ragas, their moods, and performance nuances." },
      { icon: "users", title: "Performance Skills", desc: "Stage presence, audience engagement, and recital preparation." },
      { icon: "globe", title: "Online & In-Person", desc: "Flexible learning options — join from anywhere in the world or attend live in Texas." },
    ],
    notifyTitle: "Get Notified",
    notifyDescription: "Be the first to know when masterclasses launch.",
    successMessage: "Thank you! We'll notify you when masterclasses launch. 🎶",
    emailPlaceholder: "Enter your email",
    submitLabel: "Notify Me",
  },

  media: [] as MediaItemRow[],
};

export const fallbackContent = siteContent.content;
export const fallbackMedia = siteContent.media;
