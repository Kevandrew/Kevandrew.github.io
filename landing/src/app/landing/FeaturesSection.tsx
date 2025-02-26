// ./landing/FeaturesSection.tsx
import React from "react";
import { MailCheck, CheckSquare, Lock, Star, Plus } from "lucide-react";

interface FeaturesSectionProps {
  featuresRef: React.RefObject<HTMLDivElement | null>;
  isVisible: boolean;
  sampleTasks: string[];
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  featuresRef,
  isVisible,
  sampleTasks,
}) => {
  return (
    <section 
      ref={featuresRef} 
      id="features-section"
      className="py-20 bg-white dark:bg-black/40 relative"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-20 dark:opacity-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px">
          {Array.from({length: 16}).map((_, i) => (
            <div key={i} className="h-40 border-b border-r border-black/5 dark:border-white/5"></div>
          ))}
        </div>
      </div>
      
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black dark:text-white">
            Features That <span className="text-blue-600 dark:text-blue-400">Multiply</span> Your Productivity
          </h2>
          <p className="text-lg text-black/70 dark:text-white/70 max-w-2xl mx-auto">
            Stop wasting time sorting through emails and manually extracting tasks. 
            Our AI-powered tools help you focus on what truly matters.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative group">
            <div className="absolute -inset-px bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rounded-xl blur opacity-0 group-hover:opacity-70 transition duration-300"></div>
            <div className="relative bg-gradient-to-br from-blue-50/80 to-transparent dark:from-blue-900/20 dark:to-transparent border border-blue-100/50 dark:border-blue-500/10 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="p-2 rounded-lg bg-blue-100/50 dark:bg-blue-900/30 w-fit mb-4">
                <MailCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">Intelligent Prioritization</h3>
              <p className="text-black/70 dark:text-white/70">
                Our AI analyzes your incoming emails and assigns urgency levels so you&apos;ll never miss critical messages again.
              </p>
              
              <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <MailCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Focus on what matters</div>
                    <div className="text-xs text-black/50 dark:text-white/50">Skip the noise</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-px bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-xl blur opacity-0 group-hover:opacity-70 transition duration-300"></div>
            <div className="relative bg-gradient-to-br from-purple-50/80 to-transparent dark:from-purple-900/20 dark:to-transparent border border-purple-100/50 dark:border-purple-500/10 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="p-2 rounded-lg bg-purple-100/50 dark:bg-purple-900/30 w-fit mb-4">
                <CheckSquare className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">Automated Task Extraction</h3>
              <p className="text-black/70 dark:text-white/70">
                Automatically identify and extract actionable tasks from emails, turning conversations into organized to-dos.
              </p>
              
              <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <CheckSquare className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">No more copy-paste</div>
                    <div className="text-xs text-black/50 dark:text-white/50">Tasks auto-extracted</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-px bg-gradient-to-r from-emerald-500/30 to-blue-500/30 rounded-xl blur opacity-0 group-hover:opacity-70 transition duration-300"></div>
            <div className="relative bg-gradient-to-br from-emerald-50/80 to-transparent dark:from-emerald-900/20 dark:to-transparent border border-emerald-100/50 dark:border-emerald-500/10 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="p-2 rounded-lg bg-emerald-100/50 dark:bg-emerald-900/30 w-fit mb-4">
                <Lock className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">100% Private & Local</h3>
              <p className="text-black/70 dark:text-white/70">
                All processing happens on your device. Your emails never leave your computer, ensuring complete privacy.
              </p>
              
              <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                    <Lock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Your data stays yours</div>
                    <div className="text-xs text-black/50 dark:text-white/50">No cloud processing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-black/5 dark:border-white/5 pt-12">
          <div className={`flex flex-col lg:flex-row gap-12 items-center transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="lg:w-1/2">
              <div className="bg-white dark:bg-slate-800 rounded-xl border border-black/10 dark:border-white/10 shadow-xl overflow-hidden">
                <div className="p-4 border-b border-black/5 dark:border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <h4 className="text-lg font-medium">Tasks Extracted From Your Inbox</h4>
                  </div>
                  <div className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded text-xs font-medium">Auto-extracted</div>
                </div>
                
                <div className="p-4 space-y-2">
                  {sampleTasks.map((task, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-700/30 rounded-lg group hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-transparent hover:border-blue-200 dark:hover:border-blue-900/50 transition">
                      <CheckSquare className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm text-black/80 dark:text-white/80">{task}</p>
                        <div className="mt-1.5 flex items-center gap-2">
                          <div className="px-2 py-0.5 text-[10px] bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded">From: Product Update</div>
                        </div>
                      </div>
                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition">
                        <button className="p-1 rounded hover:bg-blue-100 dark:hover:bg-blue-900/50">
                          <Star className="w-3.5 h-3.5 text-black/60 dark:text-white/60" />
                        </button>
                        <button className="p-1 rounded hover:bg-blue-100 dark:hover:bg-blue-900/50">
                          <CheckSquare className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 border-t border-black/5 dark:border-white/5 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
                  <div className="text-xs text-black/50 dark:text-white/50">Drag tasks to your task manager or calendar</div>
                  <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg flex items-center gap-1.5">
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Task</span>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 text-sm font-medium text-blue-700 dark:text-blue-300">
                <CheckSquare className="w-3.5 h-3.5" />
                <span>Save hours each week</span>
              </div>
              
              <h3 className="text-2xl font-bold text-black dark:text-white">
                Convert Emails to Actionable Tasks <span className="text-blue-600 dark:text-blue-400">Automatically</span>
              </h3>
              
              <p className="text-lg text-black/70 dark:text-white/70">
                No more copying and pasting or manually creating tasks. Our AI automatically identifies action items in your emails and converts them into editable tasks.
              </p>
              
              <div className="space-y-4 mt-2">
                <div className="flex items-start gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition">
                    <Star className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h5 className="font-medium">Edit & Customize</h5>
                    <p className="text-sm text-black/60 dark:text-white/60 mt-1">
                      Easily edit, delete, or add tasks directly from your inbox
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition">
                    <Star className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h5 className="font-medium">Export Anywhere</h5>
                    <p className="text-sm text-black/60 dark:text-white/60 mt-1">
                      Send tasks to your favorite productivity tools with a single click
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition">
                    <Star className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h5 className="font-medium">Smart Deadlines</h5>
                    <p className="text-sm text-black/60 dark:text-white/60 mt-1">
                      AI detects deadlines mentioned in emails and adds them to your tasks automatically
                    </p>
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

export default FeaturesSection;