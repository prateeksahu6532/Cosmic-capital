import React from "react";
import PrivacyHero from "../components/PrivacyPolicy/PrivacyHero";
import PrivacyCard from "../components/PrivacyPolicy/PrivacyCard";

function Privacy() {
  return (
    <div className="bg-gray-50">
      <PrivacyHero />
      <PrivacyCard />
    </div>
  );
}

export default Privacy;
