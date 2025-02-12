/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import {
  Brain,
  MailCheck,
  Info,
  ClipboardList,
  Flame,
  Lock,
  CheckCircle,
  AtSign,
} from "lucide-react";
import Script from "next/script";
import { EmailPreviewProps } from "./types";
import { sampleEmails } from "./sampleEmails";
import Sidebar from "./sidebar";
import { EmailDetailThreaded, EmailDetail, EmailPreview } from "./emails";

const MobileHeroScreen: React.FC = () => {
  // State for the interactive preview on mobile
  const [selectedEmail, setSelectedEmail] = useState<EmailPreviewProps | null>(null);

  // For mobile, we assume only the Inbox folder is available.
  const filteredEmails = sampleEmails.filter(
    (email: { folder: string }) => email.folder === "Inbox"
  );

  return (
    <>
      <Script
        src="https://app.youform.com/widgets/widget.js"
        strategy="beforeInteractive"
      />
      <div className="min-h-screen dark:bg-slate-950 flex flex-col">
        {/* Landing Page Header */}
        <header className="bg-white dark:bg-black py-8 px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2">
              <Brain className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm text-blue-700 dark:text-blue-300">
                AI-Powered Email Intelligence
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight">
              Transform Your Inbox into Actionable Tasks
            </h1>
            <p className="text-base text-gray-700 dark:text-gray-300">
              Ithena’s AI scans your incoming emails, analyzes urgency, and extracts tasks for you to export to your favorite task manager.
            </p>
            <a
              href="https://app.youform.com/forms/thxq4irm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:opacity-90 transition-opacity"
            >
              <MailCheck className="w-5 h-5" />
              <span>Register for Beta</span>
            </a>
            <p className="text-xs text-gray-500">
              No credit card required. Limited beta slots available.
            </p>
          </div>
        </header>

        {/* Interactive Preview Section */}
        <section className="p-4 flex-1">
          <div className="mb-4 text-sm text-blue-500 dark:text-blue-400 flex items-center gap-2">
            <Info className="w-4 h-4" />
            <span>
              This is an interactive preview. Feel free to click emails and try out the features!
            </span>
          </div>
          <div className="rounded-xl h-[75vh] border border-black/5 dark:border-white/10 bg-white dark:bg-black/40 overflow-hidden flex">
            {/* Collapsed Sidebar */}
            <Sidebar
              selectedFolder="Inbox"
              onFolderClick={() => {}}
              expanded={false}
              onToggle={() => {}}
            />
            {/* Email List / Detail Area */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-4 border-b border-black/5 dark:border-white/5"></div>
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
                filteredEmails.map((email: any, index: number) => (
                  <EmailPreview
                    key={index}
                    {...email}
                    onClick={() => setSelectedEmail(email)}
                  />
                ))
              )}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-8 dark:bg-black">
          <div className="max-w-3xl mx-auto px-4">
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start gap-3">
                <ClipboardList className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <p className="text-gray-700 dark:text-gray-300">
                  Stop missing hidden tasks buried in email threads—stay organized effortlessly.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Flame className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                <p className="text-gray-700 dark:text-gray-300">
                  Know at a glance which tasks truly need your attention first.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <p className="text-gray-700 dark:text-gray-300">
                  100% private—all processing happens on your device.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                <p className="text-gray-700 dark:text-gray-300">
                  One-click export to Todoist, Asana, and other task managers.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <AtSign className="w-5 h-5 text-green-600 dark:text-green-400" />
                <p className="text-gray-700 dark:text-gray-300">
                No complicated setup required.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MobileHeroScreen;
