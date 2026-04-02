import React from "react";
import { FiShield } from "react-icons/fi";

function DisclaimerHero() {
  return (
    <div className="w-full h-full  pt-28 pb-10 bg-linear-to-l from-orange-600 to-orange-400 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center  max-w-7xl mx-auto">
        <FiShield
          className="text-white mb-3 mx-auto  bg-orange-400 rounded-full p-2"
          size={60}
        />

        <h1 className="font-bold text-3xl sm:text-4xl lg:text-4xl text-white mb-4 sm:mb-6">
          Disclaimer & Legal Information
        </h1>

        <p className="text-md sm:text-lg text-orange-100 max-w-4xl mx-auto leading-relaxed">
          Important information about our services and your rights
        </p>
      </div>
    </div>
  );
}

export default DisclaimerHero;
