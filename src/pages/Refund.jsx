import React from "react";
import RefundHero from "../components/Refund/RefundHero";
import RefundCard from "../components/Refund/RefundCard";

function Refund() {
  return (
    <div className="bg-gray-50">
      <RefundHero />
      <RefundCard />
    </div>
  );
}

export default Refund;
