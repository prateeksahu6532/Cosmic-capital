import React from "react";
import { FiShield } from "react-icons/fi";

const policyPoints = [
  {
    title: "Information Collection",
    description:
      "We collect information you provide directly, such as account details, contact information, and preferences when you interact with our service.",
  },
  {
    title: "Use of Personal Data",
    description:
      "Personal data is used to personalize your experience, respond to requests, and improve features. It is never sold to third parties.",
  },
  {
    title: "Automatic Data",
    description:
      "Usage data, device information, and cookies are captured automatically to enhance performance and deliver relevant content.",
  },
  {
    title: "Data Security",
    description:
      "We implement encryption, secure servers, and access controls to protect your data from unauthorized access.",
  },
  {
    title: "Data Retention",
    description:
      "Data is retained only as long as necessary for service operation, legal requirements, or user preferences.",
  },
  {
    title: "Your Rights",
    description:
      "You can access, update, or delete your personal data via account settings or by contacting support.",
  },
  {
    title: "Third-party Services",
    description:
      "We may share anonymized or necessary data with trusted providers, subject to strict confidentiality agreements.",
  },
  {
    title: "Children’s Privacy",
    description:
      "We do not knowingly collect data from children under 13. If detected, we delete such records promptly.",
  },
  {
    title: "Cookie Policy",
    description:
      "Cookies and local storage are used for session handling, analytics, and preference storage. You can manage settings in your browser.",
  },
  {
    title: "Policy Updates",
    description:
      "We may update this privacy policy from time to time. Significant changes are communicated via email or notification.",
  },
  {
    title: "Data Portability",
    description:
      "Users can request an export of their personal data for portability and backup purposes.",
  },
  {
    title: "Contact Information",
    description:
      "For questions regarding data handling or privacy concerns, reach out to our privacy team through support channels.",
  },
];

function PrivacyCard() {
  return (
    <div className="mx-auto w-full my-10 max-w-4xl p-6 sm:p-8 bg-indigo-50 border border-indigo-200 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="mb-6 flex items-center gap-3">
        <FiShield className="text-indigo-600 text-3xl" />
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-indigo-900">
            Privacy Policy
          </h2>
          <p className="text-sm sm:text-base text-indigo-700">
            How we collect, use, and safeguard your data.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {policyPoints.map((item, index) => (
          <article
            key={index}
            className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              {index + 1}. {item.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600">{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default PrivacyCard;
