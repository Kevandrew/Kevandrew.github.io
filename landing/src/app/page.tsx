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
          <div className="w-[40%] max-w-[500px] flex flex-col justify-between p-8 lg:p-10 border-r border-black/5 dark:border-white/5">
            <div className="space-y-8 lg:space-y-10">
              {/* Pain Point + Promise */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-sm font-medium text-blue-700 dark:text-blue-300">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Stop drowning in email</span>
                </div>

                <div className="space-y-2">
                  <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight text-black dark:text-white">
                    Instantly Prioritize Your Inbox
                    <span className="block text-base lg:text-lg mt-3 font-normal text-black/60 dark:text-white/60">
                      Set up in 2 minutes and let AI sort what matters – so you
                      never miss a critical email.
                    </span>
                  </h1>
                </div>
              </div>

              {/* Value Proposition Cards */}
              <div className="grid gap-3">
                <div className="p-4 lg:p-5 rounded-xl bg-gradient-to-br from-blue-50/80 to-transparent dark:from-blue-900/20 dark:to-transparent border border-blue-100/50 dark:border-blue-500/10">
                  <h3 className="flex items-center gap-3 text-base lg:text-lg font-medium text-black dark:text-white mb-2">
                    <div className="p-1.5 rounded-lg bg-blue-100/50 dark:bg-blue-900/30">
                      <MailCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    Never Miss Critical Emails
                  </h3>
                  <p className="text-sm lg:text-base text-black/60 dark:text-white/60">
                    AI instantly flags urgent messages so that your most
                    important emails always rise to the top.
                  </p>
                </div>

                <div className="p-4 lg:p-5 rounded-xl bg-gradient-to-br from-purple-50/80 to-transparent dark:from-purple-900/20 dark:to-transparent border border-purple-100/50 dark:border-purple-500/10">
                  <h3 className="flex items-center gap-3 text-base lg:text-lg font-medium text-black dark:text-white mb-2">
                    <div className="p-1.5 rounded-lg bg-purple-100/50 dark:bg-purple-900/30">
                      <Info className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    Auto-Extract Tasks
                  </h3>
                  <p className="text-sm lg:text-base text-black/60 dark:text-white/60">
                    Convert emails into actionable tasks effortlessly, syncing
                    with your favorite tools.
                  </p>
                </div>
              </div>

              {/* Risk Reversal + Clear Benefits */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm lg:text-base text-black/60 dark:text-white/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  2-minute setup with your Gmail account
                </div>
                <div className="flex items-center gap-3 text-sm lg:text-base text-black/60 dark:text-white/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  100% private – all processing on your device
                </div>
                <div className="flex items-center gap-3 text-sm lg:text-base text-black/60 dark:text-white/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Seamless integration with Google Workspace
                </div>
              </div>
            </div>

            {/* CTA with Urgency */}
            <div className="space-y-3 mt-6">
              <a
                href="https://app.youform.com/forms/thxq4irm"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-5 py-2.5 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:opacity-90 transition-all"
              >
                <MailCheck className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-sm lg:text-base">
                  Join Our Limited Beta – Fix Your Inbox Now
                </span>
              </a>
              <p className="text-center text-xs text-black/40 dark:text-white/40">
                Works with Gmail & Google Workspace • Limited beta spots
              </p>
            </div>
          </div>

          {/* Right Column - App Preview */}
          <div className="flex-1 p-6 lg:p-8">
            <div className="mb-3 text-sm text-blue-500 dark:text-blue-400 flex items-center gap-2">
              <Info className="w-4 h-4" />
              <span>
                This is an interactive preview. Feel free to click emails and
                try out the features!
              </span>
            </div>
            <div className="h-[80vh] rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-black/40 overflow-hidden flex">
              {/* Sidebar and Email components remain the same */}
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

      {/* Mobile view remains the same */}
      <div className="flex md:hidden">
        <MobileHeroScreen />
      </div>
    </>
  );
};


export default HeroScreen;
