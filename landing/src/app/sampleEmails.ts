import { EmailPreviewProps } from "./types";

export const sampleEmails: EmailPreviewProps[] = [
    {
      sender: "Engineering Team",
      subject: "Build Pipeline Optimization Request",
      preview:
        "We need to improve our build times. The current pipeline is taking too long and it's affecting our deployment frequency...",
      time: "10:30 AM",
      isUnread: true,
      aiOutput: {
        "Urgency Level": 4,
        "Tasks Extracted": [
          "Look into running the test suite in parallel",
          "Target 50% reduction in build time",
          "Schedule follow-up meeting with engineering team",
        ],
      },
      showTasks: true,
      folder: "Inbox",
      // Include a thread property to indicate multiple messages.
      thread: {
        id: "1",
        subject: "Build Pipeline Optimization Request",
        aiOutput: {
          "Urgency Level": 4,
          "Tasks Extracted": [
            "Look into running the test suite in parallel",
            "Target 50% reduction in build time",
            "Schedule follow-up meeting with engineering team",
          ],
        },
        messages: [
          {
            id: "1",
            sender: "Engineering Team",
            senderEmail: "engineering@company.com",
            recipients: ["you@company.com"],
            timestamp: "10:30 AM",
            content:
              "We need to improve our build times. The current pipeline is taking too long and it's affecting our deployment frequency. Can you help investigate options for parallel testing?\n\nSpecifically:\n- Current build time: 45 minutes\n- Target build time: 20-25 minutes\n- The integration tests are the bottleneck.",
            aiOutput: {
              "Urgency Level": 4,
              "Tasks Extracted": [
                "Investigate parallel test execution",
                "Identify slow test suites",
              ],
            },
          },
          {
            id: "2",
            sender: "You",
            senderEmail: "you@company.com",
            recipients: ["engineering@company.com"],
            timestamp: "11:15 AM",
            content:
              "I'll take a look at the pipeline configuration. Have you already identified which test suites are taking the longest?",
            isOutbound: true,
          },
          {
            id: "3",
            sender: "Engineering Team",
            senderEmail: "engineering@company.com",
            recipients: ["you@company.com"],
            timestamp: "11:45 AM",
            content:
              "Yes, the integration tests are the main bottleneck. They are running sequentially and take about 25 minutes.",
            aiOutput: {
              "Urgency Level": 3,
              "Tasks Extracted": ["Review integration test sequence"],
            },
          },
        ],
      },
    },
    {
      sender: "Product Manager",
      subject: "Q2 Feature Planning",
      preview: "Here's the overview of our Q2 roadmap and key deliverables...",
      time: "9:15 AM",
      isUnread: true,
      aiOutput: {
        "Urgency Level": 3,
        "Tasks Extracted": [
          "Review Q2 roadmap document",
          "Provide feedback on timeline",
        ],
      },
      folder: "Inbox",
    },
    {
      sender: "Design Team",
      subject: "New Icon Set Ready for Review",
      preview: "The updated icon set is ready for your review. Please check...",
      time: "Yesterday",
      aiOutput: {
        "Urgency Level": 2,
        "Tasks Extracted": [
          "Review new icon designs",
          "Approve final selections",
        ],
      },
      folder: "Starred",
    },
  ];