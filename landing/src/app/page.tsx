/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import {
  Lock,
  Brain,
  CheckCircle,
  ClipboardList,
  Flame,
  MailCheck,
  AtSign,
  Info, // Newly imported for editing tasks
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
        src="https://app.youform.com/widgets/widget.js"
        strategy="beforeInteractive"
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
          <div className="w-[35%] p-8 flex flex-col justify-between border-r border-black/5 dark:border-white/5">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-sm text-blue-700 dark:text-blue-300">
                <Brain className="w-4 h-4" />
                <span>AI-Powered Email Intelligence</span>
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                  Transform Your Inbox into Actionable Tasks
                </h1>
                <p className="text-base md:text-lg text-black/70 dark:text-white/70">
                  Ithena’s AI scans your incoming emails, analyzes the urgency,
                  and extracts tasks for you to export your favorite task
                  manager.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <ClipboardList className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span>
                    Stop missing hidden tasks buried in email threads—stay
                    organized effortlessly
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Flame className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                  <span>
                    Know at a glance which tasks truly need your attention first
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Lock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <span>
                    100% private—all processing happens on your device
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span>
                    One-click export to Todoist, Asana, and other task managers
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <AtSign className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span>
                    Ithena plugs into your existing Gmail account(s). No
                    complicated setup required.
                  </span>
                </div>
              </div>
            </div>
            <div>
              <a
                href="https://app.youform.com/forms/thxq4irm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:opacity-90 transition-opacity"
              >
                <MailCheck className="w-5 h-5" />
                <span>Register for Beta</span>
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
            <div className="h-200 rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-black/40 overflow-hidden flex">
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
