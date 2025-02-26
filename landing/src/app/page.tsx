/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  MailCheck,
  Info,
  Zap,
  Lock,
  Shield,
  Star,
  CheckSquare,
  ArrowDown,
  ChevronRight,
  Clock,
  Send,
} from "lucide-react";
import Script from "next/script";
import { EmailPreviewProps } from "./types";
import { sampleEmails } from "./sampleEmails";
import Sidebar from "./sidebar";
import { EmailDetailThreaded, EmailDetail, EmailPreview } from "./emails";
import { EditableTasks } from "./utils";
import MobileHeroScreen from "./mobilehero";

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
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Animation states for scroll effects
  const [isVisible, setIsVisible] = useState({
    features: false,
    metrics: false,
    demo: false,
    security: false,
    testimonials: false,
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
          } else if (entry.target.id === 'testimonials-section' && entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, testimonials: true }));
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
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);
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
      <div className="hidden md:block w-full bg-slate-50 dark:bg-slate-950 overflow-x-hidden">
        {/* Title Bar */}
        <div
          className="h-[35px] flex-shrink-0"
          style={{ WebkitAppRegion: "drag" } as React.CSSProperties}
        />

        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center relative px-8 lg:px-16 py-10">
          <div className="max-w-screen-xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-sm font-medium text-blue-700 dark:text-blue-300">
                <Zap className="w-3.5 h-3.5" />
                <span>Stop drowning in email</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-black dark:text-white">
                  Reclaim Your Time & Focus
                  <span className="text-blue-600 dark:text-blue-400"> from Email Chaos</span>
                </h1>
                
                <p className="text-xl text-black/70 dark:text-white/70 max-w-xl">
                  Set up in 2 minutes and let AI sort what matters – so you
                  never miss a critical email or task, all while keeping your data private.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://app.youform.com/forms/thxq4irm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all text-lg font-medium"
                >
                  <MailCheck className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Join Our Limited Beta</span>
                </a>
                <button 
                  onClick={() => scrollToSection(demoRef)}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all text-lg font-medium"
                >
                  <Info className="w-5 h-5" />
                  <span>See It In Action</span>
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-black/60 dark:text-white/60">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  2-minute setup with Gmail
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  100% private & local-first
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Google Workspace ready
                </div>
              </div>
              
              <div className="mt-4 text-sm text-black/60 dark:text-white/60">
                <p>No credit card required. Easy to connect. Seamless to disconnect.</p>
              </div>
            </div>
            
            <div className="rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-black/40 overflow-hidden shadow-xl shadow-blue-900/5 h-[500px] relative">
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-t from-slate-50/80 dark:from-slate-950/80 via-transparent pointer-events-none">
                <button 
                  onClick={() => scrollToSection(demoRef)}
                  className="pointer-events-auto flex flex-col items-center gap-2 text-blue-600 dark:text-blue-400 animate-bounce"
                >
                  <span className="font-medium">Interactive Demo Below</span>
                  <ArrowDown className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex h-full">
                <Sidebar
                  selectedFolder={selectedFolder}
                  onFolderClick={handleFolderClick}
                  expanded={sidebarExpanded}
                  onToggle={() => setSidebarExpanded(!sidebarExpanded)}
                />

                <div className="flex-1 overflow-y-auto bg-white dark:bg-black/40">
                  {filteredEmails.slice(0, 3).map((email, index) => (
                    <EmailPreview
                      key={index}
                      {...email}
                      onClick={() => {}}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-6 left-0 right-0 flex justify-center">
            <button 
              onClick={() => scrollToSection(featuresRef)}
              className="flex items-center gap-2 text-black/60 dark:text-white/60 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span>Discover Features</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section 
          ref={featuresRef} 
          id="features-section"
          className="py-20 bg-white dark:bg-black/40"
        >
          <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black dark:text-white">
                Features That <span className="text-blue-600 dark:text-blue-400">Multiply</span> Your Productivity
              </h2>
              <p className="text-lg text-black/70 dark:text-white/70 max-w-2xl mx-auto">
                Stop wasting time sorting through emails and manually extracting tasks. 
                Our AI-powered tools help you focus on what truly matters.
              </p>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 transform ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-gradient-to-br from-blue-50/80 to-transparent dark:from-blue-900/20 dark:to-transparent border border-blue-100/50 dark:border-blue-500/10 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="p-2 rounded-lg bg-blue-100/50 dark:bg-blue-900/30 w-fit mb-4">
                  <MailCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">Intelligent Prioritization</h3>
                <p className="text-black/70 dark:text-white/70">
                  Our AI analyzes your incoming emails and assigns urgency levels so you'll never miss critical messages again.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50/80 to-transparent dark:from-purple-900/20 dark:to-transparent border border-purple-100/50 dark:border-purple-500/10 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="p-2 rounded-lg bg-purple-100/50 dark:bg-purple-900/30 w-fit mb-4">
                  <CheckSquare className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">Automated Task Extraction</h3>
                <p className="text-black/70 dark:text-white/70">
                  Automatically identify and extract actionable tasks from emails, turning conversations into organized to-dos.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50/80 to-transparent dark:from-emerald-900/20 dark:to-transparent border border-emerald-100/50 dark:border-emerald-500/10 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="p-2 rounded-lg bg-emerald-100/50 dark:bg-emerald-900/30 w-fit mb-4">
                  <Lock className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">100% Private & Local</h3>
                <p className="text-black/70 dark:text-white/70">
                  All processing happens on your device. Your emails never leave your computer, ensuring complete privacy.
                </p>
              </div>
            </div>

            <div className="mt-16 border-t border-black/5 dark:border-white/5 pt-12">
              <div className={`flex flex-col lg:flex-row gap-12 items-center transition-all duration-700 transform ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="lg:w-1/2">
                  <div className="bg-white dark:bg-black/40 p-6 rounded-xl border border-black/10 dark:border-white/10 shadow-lg">
                    <h4 className="text-lg font-medium mb-4 flex items-center gap-2">
                      <CheckSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span>Tasks Extracted From Your Inbox</span>
                    </h4>
                    <EditableTasks initialTasks={sampleTasks} />
                  </div>
                </div>
                <div className="lg:w-1/2 space-y-6">
                  <h3 className="text-2xl font-bold text-black dark:text-white">
                    Convert Emails to Actionable Tasks
                  </h3>
                  <p className="text-black/70 dark:text-white/70">
                    No more copying and pasting or manually creating tasks. Our AI automatically identifies action items in your emails and converts them into editable tasks.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Star className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h5 className="font-medium">Edit & Customize</h5>
                        <p className="text-sm text-black/60 dark:text-white/60">
                          Easily edit, delete, or add tasks directly from your inbox
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Star className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h5 className="font-medium">Export Anywhere</h5>
                        <p className="text-sm text-black/60 dark:text-white/60">
                          Send tasks to your favorite productivity tools with a single click
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Metrics Section */}
        <section 
  ref={metricsRef}
  id="metrics-section" 
  className="py-20 bg-slate-50 dark:bg-slate-950"
>
  <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
    <div className={`transition-all duration-700 transform ${isVisible.metrics ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <h2 className="text-3xl font-bold mb-6 text-center text-black dark:text-white">
        <span className="text-blue-600 dark:text-blue-400">Measurable</span> Results
      </h2>
      <p className="text-lg text-black/70 dark:text-white/70 max-w-2xl mx-auto text-center mb-12">
        Our users report meaningful improvements to their workflow and focus
      </p>
      
      {/* Metrics in email client style cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-black/40 rounded-xl border border-black/10 dark:border-white/10 p-6 overflow-hidden">
          <div className="flex items-start justify-between mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="text-sm text-black/40 dark:text-white/40">Time Savings</div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-4xl font-semibold text-black dark:text-white">2 hours</div>
            <p className="text-black/60 dark:text-white/60 text-sm">
              Average weekly time saved per user
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/5">
            <div className="text-xs text-black/60 dark:text-white/60 flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
              Based on user activity tracking
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-black/40 rounded-xl border border-black/10 dark:border-white/10 p-6 overflow-hidden">
          <div className="flex items-start justify-between mb-4">
            <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
              <Star className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="text-sm text-black/40 dark:text-white/40">Accuracy</div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-4xl font-semibold text-black dark:text-white">95%</div>
            <p className="text-black/60 dark:text-white/60 text-sm">
              Critical emails correctly prioritized
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/5">
            <div className="text-xs text-black/60 dark:text-white/60 flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
              Verified through user feedback
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-black/40 rounded-xl border border-black/10 dark:border-white/10 p-6 overflow-hidden">
          <div className="flex items-start justify-between mb-4">
            <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
              <CheckSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="text-sm text-black/40 dark:text-white/40">Effectiveness</div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-4xl font-semibold text-black dark:text-white">28%</div>
            <p className="text-black/60 dark:text-white/60 text-sm">
              Fewer overlooked important messages
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/5">
            <div className="text-xs text-black/60 dark:text-white/60 flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
              Based on comparative user studies
            </div>
          </div>
        </div>
      </div>
      
      {/* Before/After in email thread style */}
      <div className="mt-20 bg-white dark:bg-black/40 rounded-xl border border-black/10 dark:border-white/10 overflow-hidden">
        <div className="p-4 border-b border-black/5 dark:border-white/5">
          <h3 className="text-lg font-semibold">From Overwhelmed to In Control</h3>
        </div>
        
        <div className="flex flex-col">
          {/* Before - styled like an email message */}
          <div className="px-6 py-4 border-b border-black/5 dark:border-white/5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                <span className="text-sm font-medium text-red-600 dark:text-red-400">B</span>
              </div>
              <div>
                <div className="text-sm font-medium">Before</div>
                <div className="text-xs text-black/40 dark:text-white/40">The current email experience</div>
              </div>
            </div>
            <div className="pl-11 space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/5 flex-shrink-0 mt-0.5">
                  <span className="text-black/40 dark:text-white/40 text-[10px]">1</span>
                </div>
                <p className="text-sm text-black/80 dark:text-white/80">
                  Starting your day with an overwhelming inbox full of mixed-priority messages
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/5 flex-shrink-0 mt-0.5">
                  <span className="text-black/40 dark:text-white/40 text-[10px]">2</span>
                </div>
                <p className="text-sm text-black/80 dark:text-white/80">
                  Missing important action items buried within long email threads
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/5 flex-shrink-0 mt-0.5">
                  <span className="text-black/40 dark:text-white/40 text-[10px]">3</span>
                </div>
                <p className="text-sm text-black/80 dark:text-white/80">
                  Constantly switching between email and task management tools
                </p>
              </div>
            </div>
          </div>
          
          {/* After - styled like an email message with urgency indicator */}
          <div className="px-6 py-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">A</span>
                </div>
                <div>
                  <div className="text-sm font-medium">After</div>
                  <div className="text-xs text-black/40 dark:text-white/40">With our intelligent email assistant</div>
                </div>
              </div>
              <div className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                Optimized
              </div>
            </div>
            <div className="pl-11 space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/20 flex-shrink-0 mt-0.5">
                  <CheckSquare className="w-2.5 h-2.5 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-sm text-black/80 dark:text-white/80">
                  Opening your inbox to see important emails clearly flagged and prioritized
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/20 flex-shrink-0 mt-0.5">
                  <CheckSquare className="w-2.5 h-2.5 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-sm text-black/80 dark:text-white/80">
                  Tasks automatically extracted from emails and organized for you
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/20 flex-shrink-0 mt-0.5">
                  <CheckSquare className="w-2.5 h-2.5 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-sm text-black/80 dark:text-white/80">
                  Working confidently, knowing you won't miss critical communications
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA styled like email compose area */}
          <div className="border-t border-black/5 dark:border-white/5 p-4 bg-black/[0.02] dark:bg-white/[0.02]">
            <div className="flex items-center justify-between">
              <p className="text-sm text-black/60 dark:text-white/60">
                Ready to transform your inbox experience?
              </p>
              <a
                href="https://app.youform.com/forms/thxq4irm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm transition-colors"
              >
                <span>Join Beta</span>
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Demo Section */}
        <section 
          ref={demoRef}
          id="demo-section" 
          className="py-20 bg-white dark:bg-black/40"
        >
          <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black dark:text-white">
                Experience the <span className="text-blue-600 dark:text-blue-400">Difference</span>
              </h2>
              <p className="text-lg text-black/70 dark:text-white/70 max-w-2xl mx-auto">
                See how our smart email client transforms your workflow with this interactive demo.
              </p>
            </div>

            <div className={`transition-all duration-700 transform ${isVisible.demo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-white dark:bg-black/40 rounded-xl border border-black/10 dark:border-white/10 shadow-xl overflow-hidden">
                <div className="text-sm text-blue-500 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 flex items-center gap-2 p-3 border-b border-black/5 dark:border-white/5">
                  <Info className="w-4 h-4" />
                  <span>
                    Try it yourself! Click on emails and explore the interactive features.
                  </span>
                </div>
                <div className="h-[70vh] flex">
                  <Sidebar
                    selectedFolder={selectedFolder}
                    onFolderClick={handleFolderClick}
                    expanded={sidebarExpanded}
                    onToggle={() => setSidebarExpanded(!sidebarExpanded)}
                  />

                  <div className="flex-1 overflow-y-auto">
                    {selectedEmail ? (
                      selectedEmail.thread ? (
                        <EmailDetailThreaded
                          thread={selectedEmail.thread}
                          onBack={() => setSelectedEmail(null)}
                        />
                      ) : (
                        <EmailDetail
                          email={selectedEmail}
                          onBack={() => setSelectedEmail(null)}
                        />
                      )
                    ) : (
                      filteredEmails.map((email, index) => (
                        <EmailPreview
                          key={index}
                          {...email}
                          onClick={() => setSelectedEmail(email)}
                        />
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Privacy Section */}
        <section 
          ref={securityRef}
          id="security-section" 
          className="py-20 bg-slate-50 dark:bg-slate-950"
        >
          <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
            <div className={`flex flex-col lg:flex-row items-center gap-12 transition-all duration-700 transform ${isVisible.security ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="lg:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 text-sm font-medium text-emerald-700 dark:text-emerald-300">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Privacy-First Design</span>
                </div>
                
                <h2 className="text-3xl font-bold text-black dark:text-white">
                  Your Emails Never Leave Your Device
                </h2>
                
                <p className="text-lg text-black/70 dark:text-white/70">
                  Unlike other email productivity tools that process your data on remote servers, our solution keeps all your sensitive information on your local device.
                </p>
                
                <div className="pt-4 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Lock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h5 className="font-medium text-lg">End-to-End Privacy</h5>
                      <p className="text-black/60 dark:text-white/60">
                        All AI processing happens locally on your machine, not on our servers
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h5 className="font-medium text-lg">No Data Collection</h5>
                      <p className="text-black/60 dark:text-white/60">
                        We don't store, analyze, or monetize your email content or contacts
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h5 className="font-medium text-lg">Reduced Breach Risk</h5>
                      <p className="text-black/60 dark:text-white/60">
                        Since emails aren't stored on our servers, there's no risk of your data being exposed in a breach
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 lg:-inset-10 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-3xl blur-xl"></div>
                  <div className="relative bg-white dark:bg-black/40 rounded-2xl border border-black/10 dark:border-white/10 shadow-xl p-8 lg:p-10">
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                        <Lock className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-medium">
                        Local Processing
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                        <div className="flex-1 h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full w-full bg-emerald-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">100%</span>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Data stays on your device</span>
                          <span className="text-sm text-emerald-500">✓ Always</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Cloud processing</span>
                          <span className="text-sm text-red-500">✗ Never</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Data collection</span>
                          <span className="text-sm text-red-500">✗ Never</span>
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t border-black/5 dark:border-white/5">
                        <div className="text-center">
                          <span className="text-sm text-black/60 dark:text-white/60">
                            "Your privacy is our priority. We believe your emails should be for your eyes only."
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          ref={ctaRef}
          id="cta-section" 
          className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20"
        >
          <div className="max-w-screen-xl mx-auto px-8 lg:px-16 text-center">
            <div className={`space-y-8 transition-all duration-700 transform ${isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-white">
                Join Our Limited Beta and <span className="text-blue-600 dark:text-blue-400">Transform Your Inbox</span>
              </h2>
              
              <p className="text-xl text-black/70 dark:text-white/70 max-w-2xl mx-auto">
                Be among the first to experience the future of email productivity, with complete privacy and control.
              </p>
              
              <div className="inline-flex flex-col sm:flex-row gap-4 mt-6">
                <a
                  href="https://app.youform.com/forms/thxq4irm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all text-lg font-medium"
                >
                  <MailCheck className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Join Our Limited Beta Now</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mt-6 text-sm text-black/60 dark:text-white/60">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  2-minute setup
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Works with Gmail & Google Workspace
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Limited beta spots available
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Footer */}
        <footer className="py-8 border-t border-black/5 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm text-black/40 dark:text-white/40">
                © 2025 Inbox AI. All rights reserved.
              </div>
              <div className="flex items-center gap-6">
                <a href="#" className="text-sm text-black/60 dark:text-white/60 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy</a>
                <a href="#" className="text-sm text-black/60 dark:text-white/60 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms</a>
                <a href="#" className="text-sm text-black/60 dark:text-white/60 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Mobile view remains the same */}
      <div className="flex md:hidden">
        <MobileHeroScreen />
      </div>
    </>
  );
};

export default HeroScreen;