export type PortfolioLocale = "en" | "ar";

export type PortfolioProject = {
  id: string;
  title: Record<PortfolioLocale, string>;
  description: Record<PortfolioLocale, string>;
  problem: Record<PortfolioLocale, string>;
  solution: Record<PortfolioLocale, string>;
  result: Record<PortfolioLocale, string>;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string; // replace with imports later when you upload assets
};

const projects: PortfolioProject[] = [
  {
    id: "ecommerce",
    title: { en: "E‑Commerce Platform", ar: "منصة تجارة إلكترونية" },
    description: {
      en: "A full‑stack e‑commerce experience built for scale and speed.",
      ar: "تجربة تجارة إلكترونية Full‑Stack مبنية للتوسع والسرعة.",
    },
    problem: {
      en: "Customers needed a smooth shopping flow with reliable admin operations.",
      ar: "كان مطلوب تجربة شراء سلسة مع لوحة تحكم وإدارة موثوقة.",
    },
    solution: {
      en: "Modular frontend, clean APIs, and maintainable backend structure.",
      ar: "واجهة منظمة + APIs واضحة + Backend قابل للصيانة والتوسع.",
    },
    result: {
      en: "Faster UX, clearer operations, and a foundation ready to grow.",
      ar: "تجربة أسرع، إدارة أوضح، وأساس جاهز للتوسع.",
    },
    stack: ["React", "Python", "REST"],
    githubUrl: "https://github.com/mahmoudabd437/E-commerce-Website",
    liveUrl: "https://e-commerce-website-two-sigma.vercel.app/",
    imageUrl: "https://mahmoudabd-portfolio-app.netlify.app/Assets/e-commerce.png",
  },
  {
    id: "gym",
    title: { en: "Gym Management System", ar: "نظام إدارة جيم" },
    description: { en: "Full‑stack system for members, plans, and operations.", ar: "نظام Full‑Stack لإدارة الأعضاء والاشتراكات والعمليات." },
    problem: { en: "Manual operations were error‑prone and slow.", ar: "الإدارة اليدوية كانت بطيئة ومعرّضة للأخطاء." },
    solution: { en: "Structured flows, clear permissions, and scalable data model.", ar: "Flows منظمة وصلاحيات واضحة ونموذج بيانات قابل للتوسع." },
    result: { en: "More reliable operations and smoother staff experience.", ar: "عمليات أكثر موثوقية وتجربة أفضل للموظفين." },
    stack: ["React", "Python"],
    githubUrl: "https://github.com/Mahmoudt559/GYM_SYSTEM/tree/final_update",
    liveUrl: "",
    imageUrl: "",
  },
  {
    id: "dashboard",
    title: { en: "Admin Dashboard", ar: "لوحة تحكم إدارية" },
    description: { en: "Analytics‑ready dashboard with crisp UX.", ar: "Dashboard جاهز للتحليلات وتجربة استخدام نظيفة." },
    problem: { en: "Teams needed visibility and control in one place.", ar: "كان لازم رؤية وتحكم في مكان واحد." },
    solution: { en: "Reusable components and thoughtful information hierarchy.", ar: "مكوّنات قابلة لإعادة الاستخدام وهرمية معلومات واضحة." },
    result: { en: "Clearer decisions and faster workflows.", ar: "قرارات أوضح وسير عمل أسرع." },
    stack: ["React", "Charts"],
    githubUrl: "https://github.com/mahmoudabd437/Template4",
    liveUrl: "https://mahmoudabd437.github.io/Template4/",
    imageUrl: "https://mahmoudabd-portfolio-app.netlify.app/Assets/template4.png",
  },
  {
    id: "foodie",
    title: { en: "Foodie Website", ar: "موقع مطاعم (Foodie)" },
    description: { en: "A modern, responsive site focused on storytelling.", ar: "موقع عصري Responsive بتركيز على الـ Storytelling." },
    problem: { en: "Brand needed a premium feel without clutter.", ar: "كان مطلوب إحساس Premium بدون زحمة." },
    solution: { en: "Minimal layout with micro‑interactions and strong typography.", ar: "تصميم Minimal مع Micro‑interactions وتايبوجرافي قوية." },
    result: { en: "Higher engagement and better readability.", ar: "تفاعل أعلى وقابلية قراءة أفضل." },
    stack: ["React", "Bootstrap"],
    githubUrl: "https://github.com/mahmoudabd437/Foodie-website",
    liveUrl: "https://mahmoudabd437.github.io/Foodie-website/",
    imageUrl: "https://mahmoudabd-portfolio-app.netlify.app/Assets/foodie.png",
  },
  {
    id: "kitty",
    title: { en: "Kitty Website", ar: "موقع Kitty" },
    description: { en: "A clean, playful landing experience with polished UI.", ar: "Landing لطيف ونضيف بواجهة مصقولة." },
    problem: { en: "Needed an engaging, lightweight landing with clear sections.", ar: "كان مطلوب Landing خفيف وجذاب بأقسام واضحة." },
    solution: { en: "Minimal layout, strong hierarchy, and smooth interactions.", ar: "تصميم Minimal وهرمية قوية وتفاعلات سلسة." },
    result: { en: "Better clarity and a premium feel without clutter.", ar: "وضوح أكتر وإحساس Premium بدون زحمة." },
    stack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/mahmoudabd437/Kitty-Website",
    liveUrl: "https://mahmoudabd437.github.io/Kitty-Website/",
    imageUrl: "https://mahmoudabd-portfolio-app.netlify.app/Assets/kitty.png",
  },
  {
    id: "glowing",
    title: { en: "Glowing — Skin Landing", ar: "Glowing — سكين كير" },
    description: { en: "A beauty brand landing page with modern visuals and flow.", ar: "Landing لبراند سكين كير بشكل عصري وسلس." },
    problem: { en: "Needed a visually rich landing while keeping readability high.", ar: "كان مطلوب شكل غني بصريًا مع قراءة مريحة." },
    solution: { en: "Bold sections, balanced spacing, and consistent components.", ar: "أقسام قوية ومساحات متوازنة ومكوّنات متسقة." },
    result: { en: "More engaging presentation and clearer calls-to-action.", ar: "عرض أجمل وتفاعل أعلى وCTA أوضح." },
    stack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/mahmoudabd437/Glowing---Reveal-The-Beauty-of-Skin",
    liveUrl: "https://mahmoudabd437.github.io/Glowing---Reveal-The-Beauty-of-Skin/",
    imageUrl: "https://mahmoudabd-portfolio-app.netlify.app/Assets/glowing.png",
  },
];

export const portfolioContent = {
  name: "Mahmoud",
  links: {
    email: "Mahmoud.abdelmoneam2004@gmail.com",
    github: "https://github.com/mahmoudabd437",
    linkedin: "https://www.linkedin.com/in/mahmoud-abd-elmoneam-ramadan-738146304",
  },
  role: {
    en: "Full-Stack Developer",
    ar: "مطور Full‑Stack",
  },
  hero: {
    headline: {
      en: "I Build Powerful Full‑Stack Experiences",
      ar: "ببني تجارب Full‑Stack قوية",
    },
    subhead: {
      en: "Full‑Stack Developer turning ideas into scalable digital products using React & Python.",
      ar: "مطور Full‑Stack بحوّل الأفكار لأنظمة رقمية قوية وقابلة للتوسع باستخدام React و Python.",
    },
    ctas: {
      work: { en: "View My Work", ar: "شوف شغلي" },
      contact: { en: "Contact Me", ar: "تواصل معايا" },
    },
    tech: ["JS", "React", "Python", "Django", "Bootstrap"],
  },
  about: {
    title: { en: "About", ar: "نبذة" },
    story: {
      en: "Hi, I’m Mahmoud — a Full‑Stack Developer who enjoys building systems that actually solve problems. I focus on creating fast, scalable, and maintainable applications with clean architecture and modern technologies.",
      ar: "أنا محمود، مطور Full‑Stack بحب أبني أنظمة حقيقية تحل مشاكل فعلية. تركيزي دايمًا على الأداء، التنظيم، وسهولة التوسع باستخدام أحدث التقنيات.",
    },
    timeline: [
      {
        year: "2019–",
        en: "Started shipping real apps and learning to think in systems.",
        ar: "بدأت أشتغل على مشاريع حقيقية واتعلم أفكر بشكل Systems.",
      },
      {
        year: "2021–",
        en: "Built full‑stack products with APIs, auth, and dashboards.",
        ar: "بنيت منتجات Full‑Stack فيها APIs وAuth وDashboards.",
      },
      {
        year: "Today",
        en: "Focused on performance, clean architecture, and UX that feels premium.",
        ar: "حاليًا مركّز على الأداء وClean Architecture وتجربة مستخدم بمستوى Premium.",
      },
    ],
  },
  skills: {
    title: { en: "Skills", ar: "المهارات" },
    groups: [
      { title: { en: "Frontend", ar: "الواجهة" }, items: ["React", "JavaScript", "HTML", "CSS", "Bootstrap"] },
      { title: { en: "Backend", ar: "الخلفية" }, items: ["Python", "Django", "REST APIs"] },
      { title: { en: "Tools", ar: "أدوات" }, items: ["Git", "GitHub", "Testing", "Performance"] },
    ],
  },
  projects: {
    title: { en: "Featured Projects", ar: "أبرز المشاريع" },
    items: projects,
  },
  why: {
    title: { en: "Why Hire Me", ar: "ليه توظفني؟" },
    points: [
      { en: "Clean, scalable code that’s easy to maintain.", ar: "كود نظيف وقابل للتوسع وسهل الصيانة." },
      { en: "Real full‑stack experience shipping end‑to‑end features.", ar: "خبرة Full‑Stack حقيقية من البداية للنهاية." },
      { en: "Strong problem‑solving mindset and ownership.", ar: "عقلية حل مشاكل وOwnership." },
      { en: "Performance + UX focus (fast, smooth, delightful).", ar: "تركيز على الأداء وتجربة المستخدم." },
      { en: "Detail‑oriented and reliable in delivery.", ar: "دقيق وملتزم في التسليم." },
    ],
  },
  contact: {
    title: { en: "Contact", ar: "تواصل" },
    subtitle: {
      en: "Let’s build something clean, fast, and scalable.",
      ar: "خلّينا نبني حاجة نظيفة وسريعة وقابلة للتوسع.",
    },
  },
  footer: {
    en: "© " + new Date().getFullYear() + " Mahmoud. Built with care.",
    ar: "© " + new Date().getFullYear() + " محمود. مبني بعناية.",
  },
} as const;
