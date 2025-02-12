/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { Zap, MailCheck } from "lucide-react";
import Script from "next/script";
import { EmailPreviewProps } from "./types";
import { sampleEmails } from "./sampleEmails";
import Sidebar from "./sidebar";
import { EmailDetailThreaded, EmailDetail, EmailPreview } from "./emails";

// Define features with custom tab titles
const features = [
  {
    id: "prioritization",
    tabTitle: "Priority Insights",
    title: "Smart AI Prioritization",
    description:
      "Automatically identifies email priority (Level 1-5) so you know exactly what needs attention first.",
  },
  {
    id: "taskExtraction",
    tabTitle: "Actionable Tasks",
    title: "Automated Task Extraction",
    description:
      "Transforms lengthy email threads into clear, actionable tasks you can easily track and complete.",
  },
  {
    id: "dataDevice",
    tabTitle: "Privacy & Control",
    title: "Your Data, Your Device",
    description:
      "All processing happens locally—get AI-powered insights while keeping your data private.",
  },
];

const MobileHeroScreen: React.FC = () => {
  const [selectedEmail, setSelectedEmail] = useState<EmailPreviewProps | null>(null);
  const [selectedFeature, setSelectedFeature] = useState(features[0].id);

  // For mobile, assume only the Inbox folder is available.
  const filteredEmails = sampleEmails.filter(
    (email: { folder: string }) => email.folder === "Inbox"
  );

  const currentFeature = features.find((f) => f.id === selectedFeature);

  return (
    <>
      <Script
        defer
        data-website-id="67acc69653c7643ac65edd51"
        data-domain="ithena.one"
        src="https://datafa.st/js/script.js"
      />
      <div className="min-h-screen dark:bg-slate-950 flex flex-col">
        {/* Marketing Hero Section */}
        <section className="bg-white dark:bg-black py-8 px-4">
          <div className="max-w-3xl mx-auto space-y-10 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-sm font-medium text-blue-700 dark:text-blue-300 justify-center">
              <Zap className="w-3.5 h-3.5" />
              <span>Your Inbox, Smarter</span>
            </div>
            {/* Headline */}
            <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-white">
              Inbox Zero,
              <span className="block text-lg mt-2 font-normal text-black/60 dark:text-white/60">
                without compromising your data
              </span>
            </h1>
            {/* Call to Action */}
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
        </section>

        {/* Features as Tabs */}
        <section className="py-8 px-4 bg-white dark:bg-black">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-medium text-black dark:text-white mb-4 text-center">
              Core Features
            </h3>
            <div className="flex justify-center space-x-4 mb-6">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setSelectedFeature(feature.id)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedFeature === feature.id
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                  }`}
                >
                  {feature.tabTitle}
                </button>
              ))}
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-50/50 dark:from-blue-900/20 dark:to-blue-900/10">
              <h4 className="font-medium text-black dark:text-white mb-2">
                {currentFeature?.title}
              </h4>
              <p className="text-sm text-black/60 dark:text-white/60">
                {currentFeature?.description}
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Preview Section */}
        <section className="p-4">
          <h2 className="text-xl font-semibold text-black dark:text-white text-center mb-4">
            See It In Action
          </h2>
          <div className="h-[85vh] rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-black/40 overflow-hidden flex">
            <Sidebar
              selectedFolder="Inbox"
              onFolderClick={() => {}}
              expanded={false}
              onToggle={() => {}}
            />
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
      </div>
    </>
  );
};

export default MobileHeroScreen;
