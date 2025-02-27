/* eslint-disable react/no-unescaped-entities */
// ./landing/SecuritySection.tsx
import React from "react";
import { Shield, Lock, Zap, CheckSquare, X } from "lucide-react";

interface SecuritySectionProps {
  securityRef: React.RefObject<HTMLDivElement | null>;
  isVisible: boolean;
}

const SecuritySection: React.FC<SecuritySectionProps> = ({ securityRef, isVisible }) => {
  return (
    <section 
      ref={securityRef}
      id="security-section" 
      className="py-20 bg-slate-50 dark:bg-slate-950 relative"
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle shield pattern */}
        <div className="absolute top-1/3 right-10 opacity-5 dark:opacity-[0.02]">
          <Shield className="w-64 h-64" />
        </div>
        
        <div className="absolute bottom-10 left-10 opacity-5 dark:opacity-[0.02]">
          <Lock className="w-48 h-48" />
        </div>
      </div>
      
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16 relative z-10">
        <div className={`flex flex-col lg:flex-row items-center gap-12 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-900/20 dark:to-blue-900/20 text-sm font-medium text-emerald-700 dark:text-emerald-300">
              <Shield className="w-3.5 h-3.5" />
              <span>Privacy-First Design</span>
            </div>
            
            <h2 className="text-3xl font-bold text-black dark:text-white">
              Your Emails <span className="text-emerald-600 dark:text-emerald-400">Never Leave</span> Your Device
            </h2>
            
            <p className="text-lg text-black/70 dark:text-white/70">
              Unlike other email productivity tools that process your data on remote servers, our solution keeps all your sensitive information on your local device.
            </p>
            
            <div className="pt-4 space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/30 transition">
                  <Lock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h5 className="font-medium text-lg">End-to-End Privacy</h5>
                  <p className="text-black/60 dark:text-white/60 mt-1">
                    All AI processing happens locally on your machine, not on our servers
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/30 transition">
                  <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h5 className="font-medium text-lg">No Data Collection</h5>
                  <p className="text-black/60 dark:text-white/60 mt-1">
                    We don't store, analyze, or monetize your email content or contacts
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/30 transition">
                  <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h5 className="font-medium text-lg">Reduced Breach Risk</h5>
                  <p className="text-black/60 dark:text-white/60 mt-1">
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
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-lg text-sm font-medium">
                    Privacy Comparison
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                        <div className="font-medium">Inbox AI</div>
                      </div>
                      <div className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                        100% Local Processing
                      </div>
                    </div>
                    
                    <div className="h-8 w-full bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden relative">
                      <div className="absolute inset-0 flex items-center ps-4 text-sm font-medium">
                        Your data stays on your device
                      </div>
                      <div className="h-full w-full bg-gradient-to-r from-emerald-500/80 to-blue-500/80 rounded-lg"></div>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-black/70 dark:text-white/70">Data stays on device</span>
                        <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                          <CheckSquare className="w-4 h-4" />
                          Always
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-black/70 dark:text-white/70">Server processing</span>
                        <span className="text-red-600 dark:text-red-400 flex items-center gap-1">
                          <X className="w-4 h-4" />
                          Never
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-black/70 dark:text-white/70">Data collection</span>
                        <span className="text-red-600 dark:text-red-400 flex items-center gap-1">
                          <X className="w-4 h-4" />
                          Never
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="font-medium">Other Email Tools</div>
                      </div>
                      <div className="text-sm text-red-600 dark:text-red-400 font-medium">
                        Cloud Processing
                      </div>
                    </div>
                    
                    <div className="h-8 w-full bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden relative">
                      <div className="absolute inset-0 flex items-center ps-4 text-sm font-medium">
                        Your data goes to third-party servers
                      </div>
                      <div className="h-full w-[25%] bg-red-500/80 rounded-lg"></div>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-black/70 dark:text-white/70">Data stays on device</span>
                        <span className="text-red-600 dark:text-red-400 flex items-center gap-1">
                          <X className="w-4 h-4" />
                          Never
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-black/70 dark:text-white/70">Server processing</span>
                        <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                          <CheckSquare className="w-4 h-4" />
                          Always
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-black/70 dark:text-white/70">Data collection</span>
                        <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                          <CheckSquare className="w-4 h-4" />
                          Usually
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                    </div>
                    <div className="text-sm text-black/40 dark:text-white/40 italic">
                      "Your privacy is our priority."
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;