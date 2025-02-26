/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useRef, useEffect } from "react";
import Script from "next/script";
import { EmailPreviewProps } from "./types";
import { sampleEmails } from "./sampleEmails";

// Import separated components
import HeroSection from "./landing/HeroSection";
import FeaturesSection from "./landing/FeaturesSection";
import MetricsSection from "./landing/MetricsSection";
import DemoSection from "./landing/DemoSection";
import SecuritySection from "./landing/SecuritySection";
import CtaSection from "./landing/CtaSection";
import Footer from "./landing/Footer";
import FloatingNav from "./landing/FloatingNav";

const HeroScreen: React.FC = () => {
  // State for the currently selected folder and email
  const [selectedFolder, setSelectedFolder] = useState("Inbox");
  const [selectedEmail, setSelectedEmail] = useState<EmailPreviewProps | null>(null);
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  
  // Refs for scrolling to sections
  const featuresRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const demoRef = useRef<HTMLDivElement>(null);
  const securityRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Animation states for scroll effects
  const [isVisible, setIsVisible] = useState({
    features: false,
    metrics: false,
    demo: false,
    security: false,
    cta: false,
  });

  // Scroll to section function
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Filter emails based on the selected folder
  const filteredEmails = sampleEmails.filter(
    (email: { folder: string }) => email.folder === selectedFolder
  );

  // Helper to change folders and close any open email
  const handleFolderClick = (folder: string) => {
    setSelectedFolder(folder);
    setSelectedEmail(null);
  };

  // Sample tasks for demonstration
  const sampleTasks = [
    "Schedule meeting with marketing team for next week",
    "Review and approve Q2 budget proposal by Friday",
    "Send feedback on new product design mockups",
    "Follow up with client regarding contract renewal"
  ];

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.target.id === 'features-section' && entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, features: true }));
          } else if (entry.target.id === 'metrics-section' && entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, metrics: true }));
          } else if (entry.target.id === 'demo-section' && entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, demo: true }));
          } else if (entry.target.id === 'security-section' && entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, security: true }));
          } else if (entry.target.id === 'cta-section' && entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, cta: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    if (featuresRef.current) observer.observe(featuresRef.current);
    if (metricsRef.current) observer.observe(metricsRef.current);
    if (demoRef.current) observer.observe(demoRef.current);
    if (securityRef.current) observer.observe(securityRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Script
        defer
        data-website-id="67acc69653c7643ac65edd51"
        data-domain="ithena.one"
        src="https://datafa.st/js/script.js"
      />

      {/* Desktop view */}
      <div className=" w-full bg-slate-50 dark:bg-slate-950 overflow-x-hidden">
        {/* Floating Navigation */}
        <FloatingNav 
          scrollToSection={scrollToSection}
          featuresRef={featuresRef}
          metricsRef={metricsRef}
          demoRef={demoRef}
          securityRef={securityRef}
        />


        {/* Hero Section */}
        <HeroSection 
          scrollToSection={scrollToSection}
          demoRef={demoRef}
          featuresRef={featuresRef}
          sampleEmails={filteredEmails}
          selectedFolder={selectedFolder}
          handleFolderClick={handleFolderClick}
          sidebarExpanded={sidebarExpanded}
          setSidebarExpanded={setSidebarExpanded}
        />

        {/* Features Section */}
        <FeaturesSection 
          featuresRef={featuresRef}
          isVisible={isVisible.features}
          sampleTasks={sampleTasks}
        />
        
        {/* Metrics Section */}
        <MetricsSection 
          metricsRef={metricsRef} 
          isVisible={isVisible.metrics}
        />

        {/* Demo Section */}
        <DemoSection 
          demoRef={demoRef}
          isVisible={isVisible.demo}
          selectedEmail={selectedEmail}
          setSelectedEmail={setSelectedEmail}
          filteredEmails={filteredEmails}
          selectedFolder={selectedFolder}
          handleFolderClick={handleFolderClick}
          sidebarExpanded={sidebarExpanded}
          setSidebarExpanded={setSidebarExpanded}
        />

        {/* Security & Privacy Section */}
        <SecuritySection 
          securityRef={securityRef}
          isVisible={isVisible.security}
        />

        {/* CTA Section */}
        <CtaSection 
          ctaRef={ctaRef}
          isVisible={isVisible.cta}
        />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default HeroScreen;