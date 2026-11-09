export interface Service {
  number: string;
  title: string;
  description: string;
  tagline: string;
  detail: string;
  features: string[];
  tools: string[];
}

export const services: Service[] = [
  {
    number: "01",
    title: "Web Design",
    tagline: "About Web Design",
    description:
      "Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.",
    detail:
      "Transforming concepts into high-end, responsive digital interfaces that leave lasting impressions. Every project receives bespoke typography pairing, custom grid systems, and motion guidelines.",
    features: [
      "User Experience & Wireframing",
      "Interactive High-Fidelity Prototypes",
      "Bespoke Brand & Digital Design System",
      "Mobile-First Responsive Layouts",
    ],
    tools: ["Framer", "Figma", "Tailwind CSS", "Design Systems"],
  },
  {
    number: "02",
    title: "Development",
    tagline: "About Development",
    description:
      "Get custom web development solutions that are tailored to your specifications, designed to deliver a flawless user experience.",
    detail:
      "Engineered with clean code, lightning performance, and silky smooth transitions. Built using modern stacks like Next.js, React, TypeScript, and Framer Motion for unbeatable responsiveness.",
    features: [
      "Custom React & Next.js Architecture",
      "Framer Motion Choreography",
      "Headless CMS Integration",
      "Sub-second Load Times & Clean Code",
    ],
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    number: "03",
    title: "Content & SEO",
    tagline: "About SEO",
    description:
      "Proven SEO strategies that enhance your online performance, bringing you to the forefront of organic search results.",
    detail:
      "Data-backed optimization covering technical SEO, semantic content structuring, speed enhancements, and search intent targeting to guarantee organic customer acquisition.",
    features: [
      "Technical On-Page & Schema Audit",
      "Content Strategy & Copywriting",
      "Keyword Research & Search Intent",
      "Core Web Vitals 95+ Guarantee",
    ],
    tools: ["Google Search Console", "SEMrush", "Schema.org", "PageSpeed Insights"],
  },
  {
    number: "04",
    title: "Social Media Optimization (SMO)",
    tagline: "About SMO",
    description:
      "Build a powerful social media presence through strategic content, profile optimization and engaging campaigns that connect your brand with the right audience.",
    detail:
      "Comprehensive social media architecture tailored for high engagement and brand affinity. From content strategy to viral visual assets, profile revamps, and cross-platform growth campaigns that transform followers into paying clients.",
    features: [
      "Strategic Content Calendar & Copywriting",
      "High-Conversion Profile Optimization",
      "Brand-Aligned Visual Design & Reels/Graphics",
      "Audience Targeting & Community Engagement",
    ],
    tools: ["Instagram", "LinkedIn", "Twitter / X", "Canva", "Meta Business Suite"],
  },
  {
    number: "05",
    title: "Google Business Profile (GMB)",
    tagline: "About GMB",
    description:
      "Improve your local online visibility with Google Business Profile optimization, helping customers discover your business on Google Search and Maps.",
    detail:
      "Dominating local search queries so your business ranks #1 when nearby customers search for your services. Includes full GMB verification, geo-targeted keyword optimization, local citation building, and automated review acquisition.",
    features: [
      "Local Map Pack Ranking & Visibility",
      "Google Search & Maps Listing Optimization",
      "Local Citation & NAP Consistency Audit",
      "Customer Review Strategy & Q&A Management",
    ],
    tools: ["Google Maps", "Google Business Profile", "BrightLocal", "Geo-Grid Rank Tracker"],
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery Call",
    subtitle: "Do we Match?",
    duration: "2 Hours",
    description:
      "Before we start, we determine if and how I can help you. What are your requirements for your new website? Why do you need a new website? What goals do you have, and what problems can we solve with a new website?",
    deliverables: [
      "We get to know each other better",
      "Determine how I can best assist you",
      "Understand the goals you have for your website",
    ],
  },
  {
    number: "02",
    title: "Concept & Strategy",
    subtitle: "WE need a plan",
    duration: "2 Weeks",
    description:
      "Together, we develop a strategy that successfully combines your goals with the needs of your target audience. Based on this concept, I create the first wireframes and an interactive prototype. This provides us with a very good impression of the website and the user interface.",
    deliverables: [
      "UX Design & User Flows",
      "Low to Mid-Fidelity Wireframes",
      "Interactive Strategy Prototype",
    ],
  },
  {
    number: "03",
    title: "Web Design",
    subtitle: "Some Magic",
    duration: "2 Weeks",
    description:
      "Now comes the magic. Based on the previously developed concept, I create a high-end screen design perfectly tailored to your brand. A web design that sets you apart from your competition, fits your target audience ideally, and provides an excellent user experience.",
    deliverables: [
      "High-end web design tailored to your brand",
      "Interactive prototype of the design",
      "Design system with components & styles",
    ],
  },
  {
    number: "04",
    title: "Development",
    subtitle: "More Magic",
    duration: "2 Weeks",
    description:
      "In this step, we breathe life into your new high-end design. You will receive a custom-built website using a modular web design system and CMS integration. Animations will add the necessary flair to your site and set you apart from the boring competition.",
    deliverables: [
      "Custom production-grade website",
      "Modular web design systems",
      "CMS integration & SEO optimization",
      "Fluid Framer Motion animations",
    ],
  },
  {
    number: "05",
    title: "Website Onboarding",
    subtitle: "Ready to go",
    duration: "2 Hours",
    description:
      "In a personal workshop, I will show you how to make changes to your new website quickly and easily. Additionally, you will receive personalized video tutorials that you can access at any time. Edit your website without a complicated backend or the need for an additional programmer. It's as simple as that.",
    deliverables: [
      "Personal workshop & walkthrough",
      "Personalized video tutorials",
      "Edit text and images directly on your website",
    ],
  },
];

export const navigationLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
];

export const footerColumns = {
  pages: [
    { label: "Home", href: "#" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],
  cms: [
    { label: "Work", href: "#work" },
    { label: "Work Single", href: "#work" },
    { label: "Blog", href: "#blog" },
    { label: "Blog Single", href: "#blog" },
  ],
  utility: [
    { label: "Styleguide", href: "#" },
    { label: "404 Error Page", href: "/404" },
    { label: "Licensing", href: "#" },
  ],
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Twitter/X", href: "https://twitter.com" },
    { label: "Dribbble", href: "https://dribbble.com" },
    { label: "Behance", href: "https://behance.net" },
  ],
};

