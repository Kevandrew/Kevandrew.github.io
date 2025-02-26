// ./landing/HeroSection.tsx
import React from "react";
import { MailCheck, Info, Zap, ArrowDown } from "lucide-react";
import Sidebar from "../sidebar";
import { EmailPreview } from "../emails";
import { EmailPreviewProps } from "../types";

interface HeroSectionProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
  demoRef: React.RefObject<HTMLDivElement | null>;
  featuresRef: React.RefObject<HTMLDivElement | null>;
  sampleEmails: EmailPreviewProps[];
  selectedFolder: string;
  handleFolderClick: (folder: string) => void;
  sidebarExpanded: boolean;
  setSidebarExpanded: (expanded: boolean) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  scrollToSection,
  demoRef,
  featuresRef,
  sampleEmails,
  selectedFolder,
  handleFolderClick,
  sidebarExpanded,
  setSidebarExpanded,
}) => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-8 lg:px-16 py-10 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-950">
      <div className="absolute inset-0 overflow-hidden">
        {/* Email pattern background */}
        <div className="absolute -top-[10%] -right-[5%] w-[800px] h-[800px] opacity-[0.03] dark:opacity-[0.04]">
          <div className="w-full h-full flex flex-col gap-2">
            {Array.from({length: 15}).map((_, i) => (
              <div key={i} className="h-14 border border-black/10 dark:border-white/10 rounded-lg"></div>
            ))}
          </div>
        </div>
        
        <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-blue-200/20 dark:bg-blue-700/10 rounded-full blur-[100px]" aria-hidden="true"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[300px] h-[300px] bg-indigo-200/30 dark:bg-indigo-700/10 rounded-full blur-[80px]" aria-hidden="true"></div>
      </div>
      
      <div className="max-w-screen-xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 text-sm font-medium text-blue-700 dark:text-blue-300">
            <Zap className="w-3.5 h-3.5" />
            <span>Stop drowning in email</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-black dark:text-white">
              Your inbox is a <span className="relative inline-block">
                <span className="relative z-10">mess.</span>
                <span className="absolute -bottom-1 left-0 right-0 h-3 bg-blue-500/20 -rotate-1 z-0"></span>
              </span><br />
              <span className="text-blue-600 dark:text-blue-400">We fixed it.</span>
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
              className="group flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all text-lg font-medium shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30"
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
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
              2-minute setup with Gmail
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
              100% private & local-first
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
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
              className="pointer-events-auto flex flex-col items-center gap-2 text-blue-600 dark:text-blue-400 backdrop-blur-sm bg-white/30 dark:bg-black/30 px-4 py-2 rounded-lg border border-blue-200 dark:border-blue-900"
            >
              <span className="font-medium">Interactive Demo Below</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
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
              {sampleEmails.slice(0, 3).map((email, index) => (
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
          className="flex items-center gap-2 text-black/60 dark:text-white/60 hover:text-blue-600 dark:hover:text-blue-400 transition-colors bg-white/70 dark:bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full"
        >
          <span>Discover Features</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;