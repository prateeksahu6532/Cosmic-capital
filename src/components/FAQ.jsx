import React from "react";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
const faqData = [
  {
    question: "What services do you provide?",
    answer:
      "We provide equity research, intraday trading calls, and option strategies with proper risk management.",
  },
  {
    question: "Are your trading calls accurate?",
    answer:
      "We focus on high-probability setups based on technical and fundamental analysis.",
  },
  {
    question: "How can I subscribe to your services?",
    answer:
      "You can subscribe through our subscription page by selecting your preferred plan.",
  },
  {
    question: "Do you provide customer support?",
    answer:
      "Yes, we offer dedicated customer support to assist you with all your queries.",
  },
  {
    question: "Do you provide customer support?",
    answer:
      "Yes, we offer dedicated customer support to assist you with all your queries.",
  },
  {
    question: "How can I subscribe to your services?",
    answer:
      "You can subscribe through our subscription page by selecting your preferred plan.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <section className="pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className=" text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 mt-4">
              Find answers to common questions about our services.
            </p>
          </div>
          {/* FAQ List */}
          <div className="space-y-4 gap-8  grid md:grid-cols-2 mt-8">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="rounded-lg bg-amber-100 shadow-lg px-4 py-2 overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className="font-medium text-gray-900">
                    {item.question}
                  </span>
                  <span className="text-amber-800">
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>
                {/* Answer */}
                <div
                  className={`px-5 transition-all duration-300
               ${openIndex === index ? "max-h-40 py-3" : "max-h-0 overflow-hidden"}`}
                >
                  <p className="text-gray-700 text-sm leading-6">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQ;
