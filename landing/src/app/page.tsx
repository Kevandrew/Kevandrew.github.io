/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import {
  MailCheck,
  Info,
  Zap, // Newly imported for editing tasks
} from "lucide-react";
import Script from "next/script";
import { EmailPreviewProps } from "./types";
import { sampleEmails } from "./sampleEmails";
import Sidebar from "./sidebar";
import { EmailDetailThreaded, EmailDetail, EmailPreview } from "./emails";
import MobileHeroScreen from "./mobilehero";

const HeroScreen: React.FC = () => {
  // State for the currently selected folder and email.
  const [selectedFolder, setSelectedFolder] = useState("Inbox");
  // The selected email can be either a simple email (EmailPreviewProps) or include a thread.
  const [selectedEmail, setSelectedEmail] = useState<EmailPreviewProps | null>(
    null
  );
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  // Filter emails based on the selected folder.
  const filteredEmails = sampleEmails.filter(
    (email: { folder: string }) => email.folder === selectedFolder
  );

  // Helper to change folders and close any open email.
  const handleFolderClick = (folder: string) => {
    setSelectedFolder(folder);
    setSelectedEmail(null);
  };

  return (
    <>
      <Script
        defer
        data-website-id="67acc69653c7643ac65edd51"
        data-domain="ithena.one"
        src="https://datafa.st/js/script.js"
      />

      {/* Desktop view: visible on md screens and up */}
      <div className="hidden md:flex w-full min-h-screen bg-slate-50 dark:bg-slate-950 flex-col overflow-hidden">
        {/* Title Bar */}
        <div
          className="h-[35px] flex-shrink-0"
          style={{ WebkitAppRegion: "drag" } as React.CSSProperties}
        />
        {/* Main Content */}
        <div className="flex flex-col-reverse md:flex-row flex-1">
          {/* Left Column - Marketing Content */}
          <div className="w-[35%] flex flex-col justify-between p-12 border-r border-black/5 dark:border-white/5">
            <div className="space-y-10">
              {/* Header */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-sm font-medium text-blue-700 dark:text-blue-300">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Your Inbox, Smarter</span>
                </div>

                <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-white">
                  Inbox Zero,
                  <span className="block text-lg mt-2 font-normal text-black/60 dark:text-white/60">
                    without compromising your data
                  </span>
                </h1>
              </div>

              {/* Core Features */}
              <div className="space-y-6">
                <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-50/50 dark:from-blue-900/20 dark:to-blue-900/10">
                  <div className="font-medium text-black dark:text-white mb-2">
                    Smart AI Prioritization
                  </div>
                  <div className="text-sm text-black/60 dark:text-white/60">
                    Automatically identifies email priority (Level 1-5) so you
                    know exactly what needs attention first.
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-gradient-to-br from-purple-50 to-purple-50/50 dark:from-purple-900/20 dark:to-purple-900/10">
                  <div className="font-medium text-black dark:text-white mb-2">
                    Automated Task Extraction{" "}
                  </div>
                  <div className="text-sm text-black/60 dark:text-white/60">
                    Transforms lengthy email threads into clear, actionable
                    tasks you can easily track and complete.
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-50/50 dark:from-emerald-900/20 dark:to-emerald-900/10">
                  <div className="font-medium text-black dark:text-white mb-2">
                    Your Data, Your Device
                  </div>
                  <div className="text-sm text-black/60 dark:text-white/60">
                    All processing happens locally—get AI-powered insights while
                    keeping your data private.
                  </div>
                </div>
              </div>

              {/* Quick Benefits */}
              <div className="space-y-3 text-sm">
                <div className="text-black/60 dark:text-white/60">
                  ✓ Export tasks to Todoist, Asana & more
                </div>
                <div className="text-black/60 dark:text-white/60">
                  ✓ Setup in minutes, no complex configuration
                </div>
                <div className="text-black/60 dark:text-white/60">
                  ✓ Works with your existing email workflow
                </div>
              </div>
            </div>

            {/* CTA */}
            <div>
              <a
                href="https://app.youform.com/forms/thxq4irm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:opacity-90 transition-opacity"
              >
                <MailCheck className="w-4 h-4" />
                <span className="text-sm font-medium">Get Early Access</span>
              </a>
              <p className="mt-3 text-xs text-black/40 dark:text-white/40">
                No credit card required. Limited beta slots available.
              </p>
            </div>
          </div>

          {/* Right Column - App Preview */}
          <div className="flex-1 p-8">
            <div className="mb-4 text-sm text-blue-500 dark:text-blue-400 flex items-center gap-2">
              <Info className="w-4 h-4" />
              <span>
                This is an interactive preview. Feel free to click emails and
                try out the features!
              </span>
            </div>
            <div className="h-[85vh] rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-black/40 overflow-hidden flex">
              {/* Sidebar Component */}
              <Sidebar
                selectedFolder={selectedFolder}
                onFolderClick={handleFolderClick}
                expanded={sidebarExpanded}
                onToggle={() => setSidebarExpanded(!sidebarExpanded)}
              />

              {/* Email List or Detail View */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-4 border-b border-black/5 dark:border-white/5"></div>
                {selectedEmail ? (
                  // If the selected email has a thread, show the threaded detail view.
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
                  // Otherwise, show the list of emails for the selected folder.
                  filteredEmails.map((email: any, index: any) => (
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

      {/* Mobile view: visible on screens smaller than md */}
      <div className="flex md:hidden">
        <MobileHeroScreen />
      </div>
    </>
  );
};

export default HeroScreen;
