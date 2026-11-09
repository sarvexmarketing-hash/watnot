export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  client: string;
  headline: string;
  description: string;
  image: string;
  tags: string[];
  deliverables: string[];
  metrics?: { label: string; value: string }[];
  accentColor?: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: "space",
    title: "Space",
    category: "Web Design",
    year: "2024",
    client: "Space Dynamics Ltd",
    headline: "Concept, Design, and Development. All-in-one.",
    description:
      "A modern and visually appealing website that reflected the client's brand. Built with a bespoke design system, subtle micro-interactions, and high-impact visual storytelling.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop",
    tags: ["Web Design", "UI/UX", "Art Direction", "Framer"],
    deliverables: [
      "Custom Design System",
      "Interactive Wireframing",
      "Responsive Layouts",
      "High-Fidelity Animations",
    ],
    metrics: [
      { label: "Conversion Lift", value: "+148%" },
      { label: "Bounce Rate", value: "-34%" },
      { label: "Page Speed Score", value: "99/100" },
    ],
  },
  {
    id: "nova",
    title: "Nova",
    category: "Web Design",
    year: "2024",
    client: "Nova Architecture",
    headline: "Minimalist spatial aesthetics meet digital editorial craftsmanship.",
    description:
      "Modern and visually appealing digital showcase for an architectural practice. Clean typography hierarchy, asymmetric grids, and seamless fluid page choreography.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    tags: ["Web Design", "Editorial", "Interaction Design"],
    deliverables: [
      "Brand Narrative",
      "Interactive Project Index",
      "Mobile-First Responsive Engine",
      "CMS Architecture",
    ],
    metrics: [
      { label: "Client Inquiries", value: "3.2x" },
      { label: "Avg Session Duration", value: "4m 12s" },
      { label: "Design Award", value: "Site of the Day" },
    ],
  },
  {
    id: "sonic",
    title: "Sonic",
    category: "Web Design & Development",
    year: "2023",
    client: "Sonic Labs",
    headline: "High-performance sound engineering brought to life on the web.",
    description:
      "A fast, responsive web application and product showcase tailored for high-end audio hardware and digital plugins. Smooth Framer Motion transitions and tactile interactive feedback.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop",
    tags: ["Development", "Next.js", "Web Design", "Animations"],
    deliverables: [
      "Interactive Sound Visualizer",
      "Custom React Components",
      "Performance Optimization",
      "E-commerce Flow",
    ],
    metrics: [
      { label: "Hardware Pre-orders", value: "$420K" },
      { label: "Render Time", value: "<0.8s" },
      { label: "Organic Traffic", value: "+210%" },
    ],
  },
  {
    id: "solar",
    title: "Solar",
    category: "Web Design & SEO",
    year: "2023",
    client: "Solar Future Energy",
    headline: "Sustainable energy platform built for search visibility and trust.",
    description:
      "Complete brand transformation with end-to-end SEO hierarchy, custom clean-energy calculator widgets, and an ultra-modern champagne & charcoal design system.",
    image: "/images/solar.jpg",
    tags: ["Web Design", "SEO Strategy", "Analytics", "CMS"],
    deliverables: [
      "Full Technical SEO Audit",
      "Keyword & Content Strategy",
      "Interactive ROI Calculator",
      "Tailwind Component Suite",
    ],
    metrics: [
      { label: "Google Top 3 Ranks", value: "48+" },
      { label: "Lead Growth", value: "+320%" },
      { label: "Core Web Vitals", value: "All Green" },
    ],
  },
  {
    id: "supersonic",
    title: "Supersonic",
    category: "Digital Branding & Web",
    year: "2023",
    client: "Supersonic Media",
    headline: "Bold typography and kinetic motion for next-gen agency branding.",
    description:
      "A high-impact portfolio experience designed to stand out in the crowded creative technology market.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    tags: ["Brand Identity", "Motion", "Web Design"],
    deliverables: ["Visual Identity", "3D Motion Graphics", "Headless CMS Setup"],
    metrics: [
      { label: "Global Reach", value: "40+ Countries" },
      { label: "Brand Recall", value: "89%" },
    ],
  },
  {
    id: "vanguard",
    title: "Vanguard",
    category: "Web Development",
    year: "2023",
    client: "Vanguard Capital",
    headline: "Institutional finance reimagined with clean luxury minimalism.",
    description:
      "A secure, elegant private equity digital portal featuring real-time data visualizations and bespoke typography.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    tags: ["Fintech", "Development", "Design System"],
    deliverables: ["Data Visualization", "Client Portal", "Security Architecture"],
    metrics: [
      { label: "AUM Showcased", value: "$1.4B" },
      { label: "Institutional Trust", value: "100%" },
    ],
  },
];

