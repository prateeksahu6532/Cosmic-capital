import React from "react";
import DisclaimerHero from "../components/Disclaimer/DisclaimerHero";
import DisclaimerCard from "../components/Disclaimer/DisclaimerCard";
function Disclaimer() {
  return (
    <div className="bg-gray-50">
      <DisclaimerHero />
      <DisclaimerCard />
    </div>
  );
}

export default Disclaimer;
