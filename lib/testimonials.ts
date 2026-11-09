export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  headline: string;
  quote: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "matthew",
    name: "Matthew Smith",
    role: "Founder & CEO",
    company: "Sonic",
    headline: "Amazing Results with Watnot Technologies's Premium Web Design Services.",
    quote:
      "Watnot Technologies is a top-notch web design studio that created a stunning website for my business. They were attentive to my needs and provided excellent customer service throughout the entire process. I highly recommend their services.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: "andrea",
    name: "Andrea Lee",
    role: "Head of Product",
    company: "Stars",
    headline: "Professional, Collaborative Web Design Experience with Watnot Technologies.",
    quote:
      "I had the pleasure of working with Watnot Technologies on a website development project and was blown away by their expertise and professionalism. They made the process seamless and delivered a website that exceeded our expectations. I highly recommend Watnot Technologies for all your web development needs.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: "catharine",
    name: "Catharine Davis",
    role: "Marketing Director",
    company: "Supersonic",
    headline: "Web Design and Content Solutions: Stand Out from the Crowd.",
    quote:
      "Watnot Technologies's SEO services have helped my business improve its online presence and increase traffic to our website. They are knowledgeable, professional, and provide excellent results. I highly recommend them for all your SEO needs.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: "josh",
    name: "Josh Kim",
    role: "Co-Founder",
    company: "Solar",
    headline: "Expert Web Design and SEO Services: Excellent Work, Great Results.",
    quote:
      "Working with Watnot Technologies on my website redesign was a fantastic experience. They were able to take my vision and turn it into a beautiful and functional website. Their attention to detail and creative approach is unmatched. I couldn't be happier with the end result.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: "andreas",
    name: "Andreas Thompson",
    role: "Creative Director",
    company: "Design Inc.",
    headline: "Expertise in Web Design: Second to None with Watnot Technologies.",
    quote:
      "Watnot Technologies is not only an exceptional design team, but also a pleasure to work with. They took the time to understand my business and its unique needs, and created a website that perfectly represents my brand. I highly recommend Watnot Technologies's services to anyone looking for top-quality web design.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: "liam",
    name: "Liam Chen",
    role: "VP of Engineering",
    company: "Design Solutions",
    headline: "High-Quality Web Design: Exceptional Attention to Detail with Watnot Technologies.",
    quote:
      "Watnot Technologies's development services are top-notch. They are able to take complex ideas and turn them into functional, user-friendly websites. Their attention to detail and commitment to customer satisfaction are unmatched. I highly recommend Watnot Technologies for all your web development needs.",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=300&auto=format&fit=crop",
    rating: 5,
  },
];

