/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";

const Footer: React.FC = () => {
  const [modalContent, setModalContent] = useState<string | null>(null);

  const openModal = (content: string) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <>
      <footer className="py-8 border-t border-black/5 dark:border-white/5 bg-white dark:bg-black/40">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">

              <span className="font-semibold text-black dark:text-white">Ithena Mail</span>
            </div>
            <div className="text-sm text-black/40 dark:text-white/40">
              © 2025 Ithena. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <button
                onClick={() => openModal("terms")}
                className="text-sm text-black/60 dark:text-white/60 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Terms
              </button>
              <button
                onClick={() => openModal("privacy")}
                className="text-sm text-black/60 dark:text-white/60 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Privacy
              </button>
              <button
                onClick={() => openModal("refund")}
                className="text-sm text-black/60 dark:text-white/60 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Refund Policy
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {modalContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <button onClick={closeModal} className="absolute top-2 right-2 text-xl">
              ×
            </button>
            <h2 className="text-xl font-bold mb-4 text-black dark:text-white">
              {modalContent === "terms"
                ? "Terms of Service"
                : modalContent === "privacy"
                ? "Privacy Policy"
                : "Refund Policy"}
            </h2>
            <div className="text-sm text-black dark:text-white overflow-y-auto max-h-80">
              {modalContent === "terms" && (
                <>
                  <div className="mb-2">
                    <strong>1. Introduction</strong>
                    <br />
                    Welcome to Ithena. These Terms of Service ("Terms") govern your use of Ithena's email triage application. By accessing or using our services, you agree to be bound by these Terms. If you do not agree, you may not use Ithena.

Ithena is operated by Van Andell Ocay as a sole proprietor, pending formal incorporation. References to "Ithena," "we," "us," or "our" refer to the current owner and future legal entity once incorporated.
                  </div>
                  <div className="mb-2">
                    <strong>2. Eligibility</strong>
                    <br />
                    You must be at least 18 years old to use Ithena. By using Ithena, you
                    confirm that you meet this age requirement.
                  </div>
                  <div className="mb-2">
                    <strong>3. License and Acceptable Use</strong>
                    <br />
                    We grant you a limited, non-transferable, non-exclusive license to use
                    Ithena. You agree not to:
                    <div className="ml-4">Resell, sublicense, or commercially exploit Ithena.</div>
                    <div className="ml-4">
                      Use Ithena for illegal activities, spam, or abusive behavior.
                    </div>
                    <div className="ml-4">
                      Reverse-engineer, decompile, or attempt to access Ithena's source code.
                    </div>
                    <div className="ml-4">
                      Use Ithena in a manner that violates any applicable laws or regulations.
                    </div>
                  </div>
                  <div className="mb-2">
                    <strong>4. Payment and Billing</strong>
                    <br />
                    All payments for Ithena are processed through Paddle.net, our Merchant of
                    Record. By purchasing a subscription, you agree to Paddle’s Terms of
                    Service and Refund Policy. Paddle handles billing, taxes, and
                    chargebacks. Any disputes regarding payments should be directed to
                    Paddle.
                  </div>
                  <div className="mb-2">
                    <strong>5. Account Termination</strong>
                    <br />
                    We reserve the right to suspend or terminate accounts that violate these
                    Terms. Termination may result in the loss of access to your account and
                    data.
                  </div>
                  <div className="mb-2">
                    <strong>6. Service Availability</strong>
                    <br />
                    While we strive for high uptime, Ithena is provided "as is" without
                    guarantees of uninterrupted service. We reserve the right to modify or
                    discontinue the service at any time.
                  </div>
                  <div className="mb-2">
                    <strong>7. Limitation of Liability</strong>
                    <br />
                    To the extent permitted by law, Ithena is not liable for any damages
                    resulting from service interruptions or errors. Our liability is limited
                    to the amount you paid for the service in the past 12 months.
                  </div>
                  <div className="mb-2">
                    <strong>8. Dispute Resolution</strong>
                    <br />
                    Any disputes arising from these Terms shall be resolved in accordance
                    with the laws of the Philippines. If necessary, disputes will be settled
                    through binding arbitration.
                  </div>
                  <div className="mb-2">
                    <strong>9. Governing Law</strong>
                    <br />
                    These Terms are governed by the laws of the Philippines.
                  </div>
                </>
              )}
              {modalContent === "privacy" && (
                <>
                  <div className="mb-2">
                    <strong>1. Introduction</strong>
                    <br />
                    Ithena values your privacy. This Privacy Policy explains how we collect,
                    use, and protect your information in compliance with global privacy
                    regulations, including GDPR and CCPA.
                  </div>
                  <div className="mb-2">
                    <strong>2. Information We Collect</strong>
                    <br />
                    We collect minimal information necessary to provide our services,
                    including:
                    <div className="ml-4">Email and name (for account setup and login)</div>
                    <div className="ml-4">
                      General usage analytics (aggregated and hashed, without PII tracking)
                    </div>
                  </div>
                  <div className="mb-2">
                    <strong>3. How We Use Your Information</strong>
                    <br />
                    We use the collected data to:
                    <div className="ml-4">Provide and improve Ithena services.</div>
                    <div className="ml-4">Process transactions via Paddle.net.</div>
                    <div className="ml-4">
                      Analyze aggregate user behavior (without tracking individuals).
                    </div>
                  </div>
                  <div className="mb-2">
                    <strong>4. Third-Party Services</strong>
                    <br />
                    We use Paddle.net as our payment processor. We do not share personally
                    identifiable information with analytics providers, and all usage data is
                    hashed and anonymized.
                  </div>
                  <div className="mb-2">
                    <strong>5. Data Retention and Deletion</strong>
                    <br />
                    We retain user data only as long as necessary for service operation.
                    Users may request account deletion by contacting support. Upon request,
                    all stored personal data will be deleted, except for transaction records
                    required by law.
                  </div>
                  <div className="mb-2">
                    <strong>6. Your Rights</strong>
                    <br />
                    Depending on your location, you may have rights under GDPR or CCPA,
                    including:
                    <div className="ml-4">The right to access your data.</div>
                    <div className="ml-4">The right to request deletion of your data.</div>
                    <div className="ml-4">The right to object to data processing.</div>
                  </div>
                  <div className="mb-2">
                    <strong>7. No Data Selling</strong>
                    <br />
                    We do not sell or trade user data.
                  </div>
                  <div className="mb-2">
                    <strong>8. Security Measures</strong>
                    <br />
                    We use encryption and secure hashing to protect user data.
                  </div>
                  <div className="mb-2">
                    <strong>9. Governing Law</strong>
                    <br />
                    This Privacy Policy is governed by the laws of the Philippines.
                  </div>
                </>
              )}
              {modalContent === "refund" && (
                <>
                  <div className="mb-2">
                    <strong>1. Refund Eligibility</strong>
                    <br />
                    If you are not satisfied with Ithena, you may request a full refund
                    within 14 days of your purchase. Refunds are available only for
                    first-time purchases and will not be granted for renewals.
                  </div>
                  <div className="mb-2">
                    <strong>2. How to Request a Refund</strong>
                    <br />
                    To request a refund, contact our support team with your order details.
                    Refunds will be processed through Paddle.net, our Merchant of Record.
                  </div>
                  <div className="mb-2">
                    <strong>3. Processing Time</strong>
                    <br />
                    Refunds are typically processed within 5-10 business days. The exact
                    time depends on your bank or payment provider.
                  </div>
                  <div className="mb-2">
                    <strong>4. Exceptions</strong>
                    <br />
                    Refunds are not provided for:
                    <div className="ml-4">Accounts found in violation of our Terms of Service.</div>
                    <div className="ml-4">Requests made beyond the 14-day window.</div>
                    <div className="ml-4">Users who have previously received a refund.</div>
                  </div>
                  <div className="mb-2">
                    <strong>5. Changes to This Policy</strong>
                    <br />
                    We reserve the right to update this Refund Policy at any time. Changes
                    will be posted on our website.
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;