import React from "react";

function AboutRegulatory() {
  return (
    <div
      className="max-w-4xl mx-auto bg-white border 
    border-yellow-200  shadow-lg hover:shadow-2xl rounded-xl p-6 mb-10"
    >
      {/* Title with icon */}
      <div className="text-center mb-6">
        <div className="flex justify-center items-center mb-2">
          <svg
            className="w-8 h-8 text-yellow-600 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          <h2 className="text-2xl font-bold text-gray-800">
            Regulatory Compliance
          </h2>
        </div>
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Section 1: SEBI Registration Number */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            SEBI Registration
          </h3>
          <p className="text-gray-600 text-sm">
            Research Analyst Registration Number: INH000021924
          </p>
        </div>

        {/* Section 2: BSE Enlistment ID */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            BSE Enlistment
          </h3>
          <p className="text-gray-600 text-sm">BSE Enlistment ID: 6661</p>
        </div>
      </div>

      {/* Muted disclaimer text */}
      <div className="mt-6 text-center bg-yellow-50 p-4 rounded-lg">
        <p className="text-sm text-gray-500">
          All research reports are prepared in compliance with SEBI regulations.
          Past performance is not indicative of future results. Please read all
          risk disclosures carefully.
        </p>
      </div>
    </div>
  );
}

export default AboutRegulatory;
