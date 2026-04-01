import React from "react";

function SubscriptionHero() {
  return (
    <div className="w-full h-full  pt-28 pb-10 bg-linear-to-l from-orange-600 to-orange-400 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-7xl mx-auto">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-4xl text-white mb-4 sm:mb-6">
          Choose Your Subscription Plan
        </h1>
        <p className="text-md sm:text-lg text-orange-100 max-w-4xl mx-auto leading-relaxed">
          Select the perfect plan that aligns with your investment strategy and
          financial goals
        </p>
      </div>
    </div>
  );
}

export default SubscriptionHero;
