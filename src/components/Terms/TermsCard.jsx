import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const terms = [
  "Users must be 18 years or older to use our services.",
  "Accounts are personal and non-transferable.",
  "Do not share login credentials with any third party.",
  "All content provided is for informational purposes only.",
  "Respect intellectual property and copyright laws.",
  "Unauthorized access or scraping is strictly prohibited.",
  "We reserve the right to suspend or terminate accounts.",
  "Service availability may be affected by maintenance windows.",
  "Your data is processed in accordance with our privacy policy.",
  "Payment terms and refund policies are governed by agreement.",
  "You agree to receive transactional emails and notifications.",
  "Violation of these terms may result in legal action.",
];

function TermsCard() {
  return (
    <div className="mx-auto w-full  my-10 max-w-4xl p-6 sm:p-8 bg-orange-50 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Terms & Conditions
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-500">
          Please read the following 12 points carefully before using the
          service.
        </p>
      </div>

      <ul className="space-y-3">
        {terms.map((term, index) => (
          <li
            key={index}
            className="flex gap-3 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
          >
            <FiCheckCircle
              className="text-green-500 mt-1 flex-shrink-0"
              size={18}
            />
            <span className="text-sm sm:text-base text-gray-700">{term}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TermsCard;
