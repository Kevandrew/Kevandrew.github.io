import { EmailPreviewProps } from "./types";

export const sampleEmails: EmailPreviewProps[] = [
  {
    sender: "Client Relations",
    subject: "Client Feedback on Proposal",
    preview:
      "Our client has provided detailed feedback on the recent proposal. Please review...",
    time: "2:00 PM",
    isUnread: true,
    aiOutput: {
      "Urgency Level": 3,
      "Tasks Extracted": [
        "Review client feedback",
        "Schedule call with client",
      ],
    },
    folder: "Inbox",
    thread: {
      id: "6",
      subject: "Client Feedback on Proposal",
      aiOutput: {
        "Urgency Level": 3,
        "Tasks Extracted": [
          "Review client feedback",
          "Schedule call with client",
        ],
      },
      messages: [
        {
          id: "1",
          sender: "Client Relations",
          senderEmail: "clientrelations@company.com",
          // Include multiple recipients to indicate other parties are in the loop
          recipients: ["you@company.com", "accountmanager@company.com"],
          timestamp: "2:00 PM",
          content:
            "The client has concerns regarding the timeline and budget. Please see the attached feedback.\n\nSincerely,\nClient Relations Team",
          aiOutput: {
            "Urgency Level": 3,
            "Tasks Extracted": [
              "Review client feedback",
              "Schedule call with client",
            ],
          },
        },
        {
          id: "2",
          sender: "You",
          senderEmail: "you@company.com",
          recipients: ["clientrelations@company.com", "accountmanager@company.com"],
          timestamp: "2:30 PM",
          content:
            "I'll review the feedback and propose a call to discuss next steps.",
          isOutbound: true,
        },
        {
          id: "3",
          sender: "Account Manager",
          senderEmail: "accountmanager@company.com",
          recipients: ["you@company.com", "clientrelations@company.com"],
          timestamp: "3:00 PM",
          content:
            "I've scheduled a call with the client for tomorrow at 10 AM to go over the feedback. Let me know if you need any further details.",
          aiOutput: {
            "Urgency Level": 3,
            "Tasks Extracted": ["Attend scheduled call"],
          },
        },
      ],
    },
  },
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
    folder: "Inbox",
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
    thread: {
      id: "2",
      subject: "Q2 Feature Planning",
      aiOutput: {
        "Urgency Level": 3,
        "Tasks Extracted": [
          "Review Q2 roadmap document",
          "Provide feedback on timeline",
        ],
      },
      messages: [
        {
          id: "1",
          sender: "Product Manager",
          senderEmail: "pm@company.com",
          recipients: ["you@company.com"],
          timestamp: "9:15 AM",
          content:
            "Please review the attached Q2 roadmap and provide your feedback by EOD.",
          aiOutput: {
            "Urgency Level": 3,
            "Tasks Extracted": [
              "Review Q2 roadmap document",
              "Provide feedback on timeline",
            ],
          },
        },
        {
          id: "2",
          sender: "You",
          senderEmail: "you@company.com",
          recipients: ["pm@company.com"],
          timestamp: "10:00 AM",
          content:
            "I've reviewed the roadmap and have some suggestions. Let's schedule a meeting to discuss further.",
          isOutbound: true,
        },
      ],
    },
  },
  {
    sender: "Design Team",
    subject: "New Icon Set Ready for Review",
    preview: "The updated icon set is ready for your review. Please check...",
    time: "Yesterday",
    isUnread: false,
    aiOutput: {
      "Urgency Level": 2,
      "Tasks Extracted": [
        "Review new icon designs",
        "Approve final selections",
      ],
    },
    folder: "Starred",
    thread: {
      id: "3",
      subject: "New Icon Set Ready for Review",
      aiOutput: {
        "Urgency Level": 2,
        "Tasks Extracted": [
          "Review new icon designs",
          "Approve final selections",
        ],
      },
      messages: [
        {
          id: "1",
          sender: "Design Team",
          senderEmail: "design@company.com",
          recipients: ["you@company.com"],
          timestamp: "Yesterday",
          content:
            "Please review the new icon set attached. Let me know if any adjustments are needed.",
          aiOutput: {
            "Urgency Level": 2,
            "Tasks Extracted": [
              "Review new icon designs",
              "Approve final selections",
            ],
          },
        },
      ],
    },
  },
  {
    sender: "IT Support",
    subject: "Server Downtime Notification",
    preview:
      "There will be scheduled server maintenance tonight. Please save your work...",
    time: "8:00 AM",
    isUnread: true,
    aiOutput: {
      "Urgency Level": 5,
      "Tasks Extracted": [
        "Prepare for downtime",
        "Save work",
        "Inform your team",
      ],
    },
    folder: "Inbox",
    thread: {
      id: "4",
      subject: "Server Downtime Notification",
      aiOutput: {
        "Urgency Level": 5,
        "Tasks Extracted": [
          "Prepare for downtime",
          "Save work",
          "Inform your team",
        ],
      },
      messages: [
        {
          id: "1",
          sender: "IT Support",
          senderEmail: "it@company.com",
          recipients: ["you@company.com"],
          timestamp: "8:00 AM",
          content:
            "Attention: Scheduled maintenance tonight from 11 PM to 2 AM. Please ensure you save all work before then.",
          aiOutput: {
            "Urgency Level": 5,
            "Tasks Extracted": [
              "Prepare for downtime",
              "Save work",
              "Inform your team",
            ],
          },
        },
        {
          id: "2",
          sender: "You",
          senderEmail: "you@company.com",
          recipients: ["it@company.com"],
          timestamp: "8:30 AM",
          content:
            "Noted, I'll make sure to wrap up my work before downtime.",
          isOutbound: true,
        },
      ],
    },
  },
  {
    sender: "Sales Team",
    subject: "Weekly Sales Report",
    preview:
      "Attached is the weekly sales report with key performance indicators...",
    time: "Monday",
    isUnread: false,
    aiOutput: {
      "Urgency Level": 1,
      "Tasks Extracted": [],
    },
    folder: "Inbox",
    thread: {
      id: "5",
      subject: "Weekly Sales Report",
      aiOutput: {
        "Urgency Level": 1,
        "Tasks Extracted": [],
      },
      messages: [
        {
          id: "1",
          sender: "Sales Team",
          senderEmail: "sales@company.com",
          recipients: ["you@company.com"],
          timestamp: "Monday",
          content:
            "Please find attached the weekly sales report for your review.",
          aiOutput: {
            "Urgency Level": 1,
            "Tasks Extracted": [],
          },
        },
      ],
    },
  },
  {
    sender: "Client Relations",
    subject: "Client Feedback on Proposal",
    preview:
      "Our client has provided detailed feedback on the recent proposal. Please review...",
    time: "2:00 PM",
    isUnread: true,
    aiOutput: {
      "Urgency Level": 3,
      "Tasks Extracted": [
        "Review client feedback",
        "Schedule call with client",
      ],
    },
    folder: "Inbox",
    thread: {
      id: "6",
      subject: "Client Feedback on Proposal",
      aiOutput: {
        "Urgency Level": 3,
        "Tasks Extracted": [
          "Review client feedback",
          "Schedule call with client",
        ],
      },
      messages: [
        {
          id: "1",
          sender: "Client Relations",
          senderEmail: "clientrelations@company.com",
          recipients: ["you@company.com"],
          timestamp: "2:00 PM",
          content:
            "The client has concerns regarding the timeline and budget. See the attached feedback.",
          aiOutput: {
            "Urgency Level": 3,
            "Tasks Extracted": [
              "Review client feedback",
              "Schedule call with client",
            ],
          },
        },
        {
          id: "2",
          sender: "You",
          senderEmail: "you@company.com",
          recipients: ["clientrelations@company.com"],
          timestamp: "2:30 PM",
          content:
            "I'll review the feedback and propose a call to discuss next steps.",
          isOutbound: true,
        },
      ],
    },
  },
  {
    sender: "IT Department",
    subject: "System Update Completed",
    preview:
      "The scheduled system update has been successfully completed...",
    time: "Yesterday",
    isUnread: false,
    aiOutput: {
      "Urgency Level": 1,
      "Tasks Extracted": [],
    },
    folder: "Inbox",
    thread: {
      id: "7",
      subject: "System Update Completed",
      aiOutput: {
        "Urgency Level": 1,
        "Tasks Extracted": [],
      },
      messages: [
        {
          id: "1",
          sender: "IT Department",
          senderEmail: "it@company.com",
          recipients: ["you@company.com"],
          timestamp: "Yesterday",
          content:
            "The system update has been completed without any issues.",
          aiOutput: {
            "Urgency Level": 1,
            "Tasks Extracted": [],
          },
        },
      ],
    },
  },
  {
    sender: "HR Team",
    subject: "Holiday Party Invitation",
    preview: "Join us for the annual holiday party! Details inside...",
    time: "Today",
    isUnread: true,
    aiOutput: {
      "Urgency Level": 2,
      "Tasks Extracted": ["RSVP by Friday"],
    },
    folder: "Starred",
    thread: {
      id: "8",
      subject: "Holiday Party Invitation",
      aiOutput: {
        "Urgency Level": 2,
        "Tasks Extracted": ["RSVP by Friday"],
      },
      messages: [
        {
          id: "1",
          sender: "HR Team",
          senderEmail: "hr@company.com",
          recipients: ["you@company.com"],
          timestamp: "Today",
          content:
            "We are excited to invite you to our annual holiday party. Please RSVP by Friday.",
          aiOutput: {
            "Urgency Level": 2,
            "Tasks Extracted": ["RSVP by Friday"],
          },
        },
      ],
    },
  },
  {
    sender: "Finance Department",
    subject: "Budget Approval Request",
    preview:
      "Please review and approve the budget for Q3 expenditures...",
    time: "3:45 PM",
    isUnread: true,
    aiOutput: {
      "Urgency Level": 4,
      "Tasks Extracted": [
        "Review budget details",
        "Approve or request revisions",
      ],
    },
    folder: "Inbox",
    thread: {
      id: "9",
      subject: "Budget Approval Request",
      aiOutput: {
        "Urgency Level": 4,
        "Tasks Extracted": [
          "Review budget details",
          "Approve or request revisions",
        ],
      },
      messages: [
        {
          id: "1",
          sender: "Finance Department",
          senderEmail: "finance@company.com",
          recipients: ["you@company.com"],
          timestamp: "3:45 PM",
          content:
            "Attached is the proposed budget for Q3. Your approval is needed.",
          aiOutput: {
            "Urgency Level": 4,
            "Tasks Extracted": [
              "Review budget details",
              "Approve or request revisions",
            ],
          },
        },
        {
          id: "2",
          sender: "You",
          senderEmail: "you@company.com",
          recipients: ["finance@company.com"],
          timestamp: "4:15 PM",
          content:
            "I've reviewed the budget. Could we schedule a call to discuss some line items?",
          isOutbound: true,
        },
        {
          id: "3",
          sender: "Finance Department",
          senderEmail: "finance@company.com",
          recipients: ["you@company.com"],
          timestamp: "4:45 PM",
          content:
            "Sure, let's set up a meeting for tomorrow at 10 AM.",
          aiOutput: {
            "Urgency Level": 4,
            "Tasks Extracted": ["Schedule meeting"],
          },
        },
      ],
    },
  },
  {
    sender: "HR Team",
    subject: "New Hire Onboarding Schedule",
    preview:
      "Please find the onboarding schedule for our new hires attached...",
    time: "Today",
    isUnread: false,
    aiOutput: {
      "Urgency Level": 2,
      "Tasks Extracted": ["Review onboarding schedule"],
    },
    folder: "Inbox",
    thread: {
      id: "10",
      subject: "New Hire Onboarding Schedule",
      aiOutput: {
        "Urgency Level": 2,
        "Tasks Extracted": ["Review onboarding schedule"],
      },
      messages: [
        {
          id: "1",
          sender: "HR Team",
          senderEmail: "hr@company.com",
          recipients: ["you@company.com"],
          timestamp: "Today",
          content:
            "Attached is the schedule for onboarding our new team members.",
          aiOutput: {
            "Urgency Level": 2,
            "Tasks Extracted": ["Review onboarding schedule"],
          },
        },
      ],
    },
  },
  {
    sender: "Marketing Team",
    subject: "Marketing Campaign Ideas",
    preview:
      "We've brainstormed some ideas for the upcoming campaign. Let's discuss...",
    time: "Yesterday",
    isUnread: true,
    aiOutput: {
      "Urgency Level": 3,
      "Tasks Extracted": [
        "Review campaign ideas",
        "Provide creative feedback",
      ],
    },
    folder: "Inbox",
    thread: {
      id: "11",
      subject: "Marketing Campaign Ideas",
      aiOutput: {
        "Urgency Level": 3,
        "Tasks Extracted": [
          "Review campaign ideas",
          "Provide creative feedback",
        ],
      },
      messages: [
        {
          id: "1",
          sender: "Marketing Team",
          senderEmail: "marketing@company.com",
          recipients: ["you@company.com"],
          timestamp: "Yesterday",
          content:
            "Here are the initial ideas for the new marketing campaign. Your input is valuable.",
          aiOutput: {
            "Urgency Level": 3,
            "Tasks Extracted": [
              "Review campaign ideas",
              "Provide creative feedback",
            ],
          },
        },
        {
          id: "2",
          sender: "You",
          senderEmail: "you@company.com",
          recipients: ["marketing@company.com"],
          timestamp: "Today",
          content:
            "Thanks for sharing. I'll review these and get back with my suggestions.",
          isOutbound: true,
        },
      ],
    },
  },
  {
    sender: "Security Team",
    subject: "Security Alert: Suspicious Login Attempt",
    preview:
      "We detected a suspicious login attempt on your account. Please verify...",
    time: "11:00 AM",
    isUnread: true,
    aiOutput: {
      "Urgency Level": 5,
      "Tasks Extracted": [
        "Verify account activity",
        "Change password if necessary",
      ],
    },
    folder: "Inbox",
    thread: {
      id: "12",
      subject: "Security Alert: Suspicious Login Attempt",
      aiOutput: {
        "Urgency Level": 5,
        "Tasks Extracted": [
          "Verify account activity",
          "Change password if necessary",
        ],
      },
      messages: [
        {
          id: "1",
          sender: "Security Team",
          senderEmail: "security@company.com",
          recipients: ["you@company.com"],
          timestamp: "11:00 AM",
          content:
            "A suspicious login attempt was detected from an unknown device. Please confirm if this was you.",
          aiOutput: {
            "Urgency Level": 5,
            "Tasks Extracted": [
              "Verify account activity",
              "Change password if necessary",
            ],
          },
        },
        {
          id: "2",
          sender: "You",
          senderEmail: "you@company.com",
          recipients: ["security@company.com"],
          timestamp: "11:30 AM",
          content:
            "I did not authorize any login. Please secure my account immediately.",
          isOutbound: true,
        },
      ],
    },
  },
  {
    sender: "Procurement Team",
    subject: "Request for Information: Supplier Contract",
    preview:
      "Could you provide the latest supplier contract details for review?",
    time: "4:00 PM",
    isUnread: false,
    aiOutput: {
      "Urgency Level": 3,
      "Tasks Extracted": ["Send supplier contract details"],
    },
    folder: "Inbox",
    thread: {
      id: "13",
      subject: "Request for Information: Supplier Contract",
      aiOutput: {
        "Urgency Level": 3,
        "Tasks Extracted": ["Send supplier contract details"],
      },
      messages: [
        {
          id: "1",
          sender: "Procurement Team",
          senderEmail: "procurement@company.com",
          recipients: ["you@company.com"],
          timestamp: "4:00 PM",
          content:
            "Please send over the latest supplier contract details for review.",
          aiOutput: {
            "Urgency Level": 3,
            "Tasks Extracted": ["Send supplier contract details"],
          },
        },
      ],
    },
  },
  {
    sender: "QA Team",
    subject: "Bug Report: Mobile App Crash",
    preview:
      "We've encountered a critical bug causing the mobile app to crash under specific conditions...",
    time: "Yesterday",
    isUnread: true,
    aiOutput: {
      "Urgency Level": 4,
      "Tasks Extracted": [
        "Investigate crash logs",
        "Replicate issue",
        "Deploy hotfix",
      ],
    },
    folder: "Inbox",
    thread: {
      id: "14",
      subject: "Bug Report: Mobile App Crash",
      aiOutput: {
        "Urgency Level": 4,
        "Tasks Extracted": [
          "Investigate crash logs",
          "Replicate issue",
          "Deploy hotfix",
        ],
      },
      messages: [
        {
          id: "1",
          sender: "QA Team",
          senderEmail: "qa@company.com",
          recipients: ["you@company.com"],
          timestamp: "Yesterday",
          content:
            "The mobile app crashes when attempting to load the dashboard. Please investigate.",
          aiOutput: {
            "Urgency Level": 4,
            "Tasks Extracted": [
              "Investigate crash logs",
              "Replicate issue",
              "Deploy hotfix",
            ],
          },
        },
        {
          id: "2",
          sender: "You",
          senderEmail: "you@company.com",
          recipients: ["qa@company.com"],
          timestamp: "Today",
          content:
            "I'm looking into the issue. Can you provide the crash logs?",
          isOutbound: true,
        },
        {
          id: "3",
          sender: "QA Team",
          senderEmail: "qa@company.com",
          recipients: ["you@company.com"],
          timestamp: "Today",
          content:
            "Attached are the crash logs. Please prioritize a fix.",
          aiOutput: {
            "Urgency Level": 4,
            "Tasks Extracted": [
              "Investigate crash logs",
              "Replicate issue",
              "Deploy hotfix",
            ],
          },
        },
      ],
    },
  },
  {
    sender: "Team Manager",
    subject: "Team Outing This Friday",
    preview:
      "We're planning a team outing this Friday. Details to follow...",
    time: "Today",
    isUnread: false,
    aiOutput: {
      "Urgency Level": 1,
      "Tasks Extracted": [],
    },
    folder: "Starred",
    thread: {
      id: "15",
      subject: "Team Outing This Friday",
      aiOutput: {
        "Urgency Level": 1,
        "Tasks Extracted": [],
      },
      messages: [
        {
          id: "1",
          sender: "Team Manager",
          senderEmail: "manager@company.com",
          recipients: ["you@company.com"],
          timestamp: "Today",
          content:
            "Reminder: Team outing scheduled for this Friday. Further details will be shared soon.",
          aiOutput: {
            "Urgency Level": 1,
            "Tasks Extracted": [],
          },
        },
      ],
    },
  },
];
