// ./landing/MetricsSection.tsx
import React from "react";
import { Clock, Star, CheckSquare, Zap, X } from "lucide-react";

interface MetricsSectionProps {
  metricsRef: React.RefObject<HTMLDivElement | null>;
  isVisible: boolean;
}

const MetricsSection: React.FC<MetricsSectionProps> = ({ metricsRef, isVisible }) => {
  return (
    <section 
      ref={metricsRef}
      id="metrics-section" 
      className="py-20 bg-slate-50 dark:bg-slate-950 relative"
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric pattern background */}
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] dark:opacity-[0.03]" width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16 relative z-10">
        <div className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold mb-6 text-center text-black dark:text-white">
            <span className="text-blue-600 dark:text-blue-400">Measurable</span> Results
          </h2>
          <p className="text-lg text-black/70 dark:text-white/70 max-w-2xl mx-auto text-center mb-12">
            Our users report meaningful improvements to their workflow and focus
          </p>
          
          {/* Metrics in distinctive cards with visualization elements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-black/40 rounded-xl border border-black/10 dark:border-white/10 p-8 overflow-hidden relative">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-xl"></div>
              
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="h-12 flex items-center">
                  <div className="flex items-end h-full gap-0.5">
                    {[0.3, 0.5, 0.7, 0.9, 1].map((h, i) => (
                      <div key={i} className="w-1.5 bg-blue-500/70 rounded-t" style={{ height: `${h * 100}%` }}></div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-1">
                <div className="text-4xl font-bold text-black dark:text-white">2 hours</div>
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
            
            <div className="bg-white dark:bg-black/40 rounded-xl border border-black/10 dark:border-white/10 p-8 overflow-hidden relative">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-xl"></div>
              
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="h-12 w-12 rounded-full bg-white dark:bg-slate-800 border border-purple-200 dark:border-purple-900 flex items-center justify-center relative">
                  <div className="absolute inset-0.5 rounded-full border-4 border-purple-500"></div>
                  <span className="text-sm font-bold">95%</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-1">
                <div className="text-4xl font-bold text-black dark:text-white">95%</div>
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
            
            <div className="bg-white dark:bg-black/40 rounded-xl border border-black/10 dark:border-white/10 p-8 overflow-hidden relative">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-xl"></div>
              
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                  <CheckSquare className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="h-12 flex items-center">
                  <div className="flex items-end gap-1">
                    <div className="w-4 h-10 bg-slate-100 dark:bg-slate-700 rounded-t flex items-end justify-center pb-1">
                      <div className="w-1 h-3 bg-slate-300 dark:bg-slate-500 rounded-t"></div>
                    </div>
                    <div className="w-4 h-10 bg-slate-100 dark:bg-slate-700 rounded-t flex items-end justify-center pb-1">
                      <div className="w-1 h-5 bg-slate-300 dark:bg-slate-500 rounded-t"></div>
                    </div>
                    <div className="w-4 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-t flex items-end justify-center pb-1">
                      <div className="w-1 h-7 bg-emerald-500 rounded-t"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-1">
                <div className="text-4xl font-bold text-black dark:text-white">28%</div>
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
            <div className="p-4 border-b border-black/5 dark:border-white/5 bg-slate-50 dark:bg-slate-800/50">
              <h3 className="text-lg font-semibold">From Overwhelmed to In Control</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Before panel */}
              <div className="relative">
                <div className="absolute -right-1 top-4 w-10 h-10 rounded-full bg-white dark:bg-black flex items-center justify-center shadow-lg z-10">
                  <div className="text-lg font-medium">→</div>
                </div>
                
                <div className="p-6 border-b lg:border-b-0 lg:border-r border-black/5 dark:border-white/5">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                      <X className="w-5 h-5 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <div className="text-lg font-medium">Before</div>
                      <div className="text-xs text-black/40 dark:text-white/40">The current email experience</div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded w-full"></div>
                      <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded w-3/4"></div>
                      <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded w-5/6"></div>
                    </div>
                    
                    <div className="pl-6 space-y-3">
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 flex-shrink-0 mt-0.5">
                          <span className="text-black/40 dark:text-white/40 text-[10px]">1</span>
                        </div>
                        <p className="text-sm text-black/80 dark:text-white/80">
                          Starting your day with an overwhelming inbox full of mixed-priority messages
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 flex-shrink-0 mt-0.5">
                          <span className="text-black/40 dark:text-white/40 text-[10px]">2</span>
                        </div>
                        <p className="text-sm text-black/80 dark:text-white/80">
                          Missing important action items buried within long email threads
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 flex-shrink-0 mt-0.5">
                          <span className="text-black/40 dark:text-white/40 text-[10px]">3</span>
                        </div>
                        <p className="text-sm text-black/80 dark:text-white/80">
                          Constantly switching between email and task management tools
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* After panel */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <CheckSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="text-lg font-medium">After</div>
                      <div className="text-xs text-black/40 dark:text-white/40">With our intelligent email assistant</div>
                    </div>
                  </div>
                  <div className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    Optimized
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="h-4 flex-1 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded"></div>
                      <div className="px-2 py-0.5 bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 rounded-full text-xs whitespace-nowrap">
                        Urgent
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-4 flex-1 bg-gradient-to-r from-slate-100 to-blue-50 dark:from-slate-800 dark:to-blue-900/10 rounded"></div>
                      <div className="px-2 py-0.5 bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400 rounded-full text-xs whitespace-nowrap">
                        Important
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-4 flex-1 bg-slate-50 dark:bg-slate-900 rounded"></div>
                      <div className="px-2 py-0.5 bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 rounded-full text-xs whitespace-nowrap">
                        Low priority
                      </div>
                    </div>
                  </div>
                  
                  <div className="pl-6 space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 flex-shrink-0 mt-0.5">
                        <CheckSquare className="w-2.5 h-2.5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <p className="text-sm text-black/80 dark:text-white/80">
                        Opening your inbox to see important emails clearly flagged and prioritized
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 flex-shrink-0 mt-0.5">
                        <CheckSquare className="w-2.5 h-2.5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <p className="text-sm text-black/80 dark:text-white/80">
                        Tasks automatically extracted from emails and organized for you
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 flex-shrink-0 mt-0.5">
                        <CheckSquare className="w-2.5 h-2.5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <p className="text-sm text-black/80 dark:text-white/80">
                        Working confidently, knowing you won&apos;t miss critical communications
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA styled like email compose area */}
            <div className="border-t border-black/5 dark:border-white/5 p-4 bg-slate-50 dark:bg-slate-800/50">
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
                  <Zap className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;