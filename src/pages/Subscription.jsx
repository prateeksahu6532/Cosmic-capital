import React from "react";
import SubscriptionHero from "../components/Subscription/SubscriptionHero";
import SubscriptionCard from "../components/Subscription/SubscriptionCard";

function Subscription() {
  return (
    <div className="bg-amber-50">
      <SubscriptionHero />
      <SubscriptionCard />
    </div>
  );
}

export default Subscription;
