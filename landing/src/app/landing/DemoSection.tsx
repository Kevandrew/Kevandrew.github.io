// ./landing/DemoSection.tsx
import React from "react";
import { Zap, Info } from "lucide-react";
import Sidebar from "../sidebar";
import { EmailDetailThreaded, EmailDetail, EmailPreview } from "../emails";
import { EmailPreviewProps } from "../types";

interface DemoSectionProps {
  demoRef: React.RefObject<HTMLDivElement | null>;
  isVisible: boolean;
  selectedEmail: EmailPreviewProps | null;
  setSelectedEmail: (email: EmailPreviewProps | null) => void;
  filteredEmails: EmailPreviewProps[];
  selectedFolder: string;
  handleFolderClick: (folder: string) => void;
  sidebarExpanded: boolean;
  setSidebarExpanded: (expanded: boolean) => void;
}

const DemoSection: React.FC<DemoSectionProps> = ({
  demoRef,
  isVisible,
  selectedEmail,
  setSelectedEmail,
  filteredEmails,
  selectedFolder,
  handleFolderClick,
  sidebarExpanded,
  setSidebarExpanded,
}) => {
  return (
    <section 
      ref={demoRef}
      id="demo-section" 
      className="py-20 bg-white dark:bg-black/40 relative"
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.015),transparent_25%)]"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 text-sm font-medium text-blue-700 dark:text-blue-300 mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Try it yourself</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black dark:text-white">
            Experience the <span className="text-blue-600 dark:text-blue-400">Difference</span>
          </h2>
          <p className="text-lg text-black/70 dark:text-white/70 max-w-2xl mx-auto">
            See how our smart email client transforms your workflow with this interactive demo.
          </p>
        </div>

        <div className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rounded-2xl blur opacity-20"></div>
            <div className="relative bg-white dark:bg-black/40 rounded-2xl border border-black/10 dark:border-white/10 shadow-xl overflow-hidden">
              <div className="bg-blue-50 dark:bg-blue-900/20 border-b border-black/5 dark:border-white/5 flex items-center gap-2 p-4">
                <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="font-medium">
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
      </div>
    </section>
  );
};

export default DemoSection;