"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import BlogSection from "@/components/BlogSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ProjectModal from "@/components/ProjectModal";
import ServiceModal from "@/components/ServiceModal";
import ContactModal from "@/components/ContactModal";
import PricingModal from "@/components/PricingModal";
import { Project } from "@/lib/projects";
import { Service } from "@/lib/data";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);

  const scrollToServices = () => {
    const el = document.getElementById("services");
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="min-h-screen bg-[#0E0E0E] text-[#DAC5A7] relative overflow-x-hidden selection:bg-[#DAC5A7] selection:text-[#0E0E0E]">
      {/* Luxury smooth editorial custom cursor */}
      <CustomCursor />

      {/* Top Fixed Navigation */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* 1. Hero Section */}
      <Hero
        onExploreServices={scrollToServices}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* 2. Services Section */}
      <Services onSelectService={(service) => setSelectedService(service)} />

      {/* 3. Selected Work Section */}
      <Work onSelectProject={(project) => setSelectedProject(project)} />

      {/* 4. The Process Section */}
      <Process />

      {/* 5. Testimonials Section */}
      <Testimonials />

      {/* 6. Personal Brand / About Section */}
      <About onOpenContact={() => setIsContactOpen(true)} />

      {/* 7. Thought Leadership / Blog Section */}
      <BlogSection />

      {/* 8. Large CTA Section */}
      <CTA onOpenContact={() => setIsContactOpen(true)} />

      {/* 9. Footer */}
      <Footer
        onOpenContact={() => setIsContactOpen(true)}
        onOpenPricing={() => setIsPricingOpen(true)}
      />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <PricingModal
        isOpen={isPricingOpen}
        onClose={() => setIsPricingOpen(false)}
        onOpenContact={() => setIsContactOpen(true)}
      />
    </main>
  );
}

