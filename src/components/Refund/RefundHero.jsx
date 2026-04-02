import React from "react";
import { FiShield } from "react-icons/fi";
function RefundHero() {
  return (
    <div className="w-full h-full  pt-28 pb-10 bg-linear-to-l from-orange-600 to-orange-400 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center  max-w-7xl mx-auto">
        <FiShield
          className="text-white mb-3 mx-auto  bg-orange-400 rounded-full p-2"
          size={60}
        />

        <h1 className="font-bold text-3xl sm:text-4xl lg:text-4xl text-white mb-4 sm:mb-6">
          Refund Policy
        </h1>

        <p className="text-md sm:text-lg text-orange-100 max-w-4xl mx-auto leading-relaxed">
          SEBI Registered Research Analyst
        </p>
        <p className="text-sm sm:text-lg text-orange-100 max-w-4xl mx-auto leading-relaxed">
          Registration No. INH000021924
        </p>
        <p className="text-sm sm:text-lg text-orange-100 max-w-4xl mx-auto leading-relaxed">
          BSE Enlistment No. 6661
        </p>
      </div>
    </div>
  );
}

export default RefundHero;
