// ./landing/CtaSection.tsx
import React from "react";
import { MailCheck, ChevronRight, Zap } from "lucide-react";

interface CtaSectionProps {
  ctaRef: React.RefObject<HTMLDivElement | null>;
  isVisible: boolean;
}

const CtaSection: React.FC<CtaSectionProps> = ({ ctaRef, isVisible }) => {
  return (
    <section 
      ref={ctaRef}
      id="cta-section" 
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 relative"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03),transparent_45%)]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      </div>
      
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16 text-center relative z-10">
        <div className={`space-y-8 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 text-sm font-medium text-blue-700 dark:text-blue-300">
            <Zap className="w-3.5 h-3.5" />
            <span>Limited spots available</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-white">
            Join Our Limited Beta and <span className="relative inline-block">
              <span className="relative z-10">Transform</span>
              <span className="absolute -bottom-1 left-0 right-0 h-3 bg-blue-500/20 -rotate-1 z-0"></span>
            </span> Your Inbox
          </h2>
          
          <p className="text-xl text-black/70 dark:text-white/70 max-w-2xl mx-auto">
            Be among the first to experience the future of email productivity, with complete privacy and control.
          </p>
          
          <div className="relative inline-block mt-6">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-30"></div>
            <a
              href="https://app.youform.com/forms/thxq4irm"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all text-lg font-medium"
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
  );
};

export default CtaSection;