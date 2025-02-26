// ./landing/FloatingNav.tsx
import React from "react";
import { ChevronRight } from "lucide-react";

interface FloatingNavProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
  featuresRef: React.RefObject<HTMLDivElement | null>;
  metricsRef: React.RefObject<HTMLDivElement | null>;
  demoRef: React.RefObject<HTMLDivElement | null>;
  securityRef: React.RefObject<HTMLDivElement | null>;
}

const FloatingNav: React.FC<FloatingNavProps> = ({
  scrollToSection,
  featuresRef,
  metricsRef,
  demoRef,
  securityRef,
}) => {
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg border border-slate-200/50 dark:border-slate-700/50 rounded-full px-2 py-1.5 flex items-center gap-2 shadow-lg">
      <div className="flex items-center gap-1 px-3">
        <span className="font-medium tracking-tight text-slate-900 dark:text-white">Ithena Mail</span>
      </div>
      
      <div className="hidden sm:flex items-center">
        <button 
          onClick={() => scrollToSection(featuresRef)}
          className="px-3 py-1.5 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700/50 rounded-full transition"
        >
          Features
        </button>
        <button 
          onClick={() => scrollToSection(metricsRef)}
          className="px-3 py-1.5 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700/50 rounded-full transition"
        >
          Results
        </button>
        <button 
          onClick={() => scrollToSection(demoRef)}
          className="px-3 py-1.5 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700/50 rounded-full transition"
        >
          Demo
        </button>
        <button 
          onClick={() => scrollToSection(securityRef)}
          className="px-3 py-1.5 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700/50 rounded-full transition"
        >
          Security
        </button>
      </div>
      
      <div className="ml-2 pl-2 border-l border-slate-200 dark:border-slate-700">
        <a
          href="https://app.youform.com/forms/thxq4irm"
          target="_blank"
          rel="noopener noreferrer"
          className="group px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center gap-1.5 font-medium text-sm transition"
        >
          <span>Join Beta</span>
          <ChevronRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 transition" />
        </a>
      </div>
    </nav>
  );
};

export default FloatingNav;