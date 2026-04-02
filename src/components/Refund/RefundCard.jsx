import React from "react";
import { FiRefreshCcw } from "react-icons/fi";

const refundPoints = [
  {
    title: "Eligibility Window",
    description:
      "Refund requests must be submitted within 30 days from the date of purchase for eligible products and services.",
  },
  {
    title: "Proof of Purchase",
    description:
      "A valid order number or receipt is required when requesting a refund to verify the transaction.",
  },
  {
    title: "Non-refundable Items",
    description:
      "Digital downloads, gift cards, and services already rendered are typically non-refundable unless otherwise noted.",
  },
  {
    title: "Condition of Goods",
    description:
      "Returned physical products must be unused, in original packaging, and include all accessories to qualify for a refund.",
  },
  {
    title: "Processing Time",
    description:
      "Refund approvals usually take 5-10 business days after receiving the return and verifying eligibility.",
  },
  {
    title: "Refund Method",
    description:
      "Refunds are issued using the original payment method. Alternative methods are evaluated case-by-case.",
  },
  {
    title: "Partial Refunds",
    description:
      "In some cases, partial refunds apply if items are damaged, incomplete, or used beyond acceptable limits.",
  },
  {
    title: "Shipping Costs",
    description:
      "Original shipping costs are non-refundable, except where the return is due to our error or defective products.",
  },
  {
    title: "Exchange Option",
    description:
      "Customers may choose an exchange instead of a refund when product availability permits.",
  },
  {
    title: "Claim Disputes",
    description:
      "Disputes over refund decisions can be escalated to our support team for review and resolution.",
  },
  {
    title: "Account Holds",
    description:
      "Pending refund requests may place account restrictions on orders until resolution is complete.",
  },
  {
    title: "Policy Updates",
    description:
      "Refund policies may change; we recommend reviewing this page before each purchase for latest terms.",
  },
];

function RefundCard() {
  return (
    <div className="mx-auto w-full my-10 max-w-4xl p-6 sm:p-8 bg-emerald-50 border border-emerald-200 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="mb-6 flex items-center gap-3">
        <FiRefreshCcw className="text-emerald-600 text-3xl" />
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-emerald-900">
            Refund Policy
          </h2>
          <p className="text-sm sm:text-base text-emerald-700">
            All refund procedures, timing details, and eligibility rules are
            outlined below.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {refundPoints.map((item, index) => (
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

export default RefundCard;
