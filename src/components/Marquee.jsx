function Marquee() {
  return (
    <div className=" pt-20 bg-white py-2 overflow-hidden">
      <div className="flex w-max animate-marquee gap-10">
        {/* ORIGINAL CONTENT */}
        <span className="text-red-700 font-semibold">
          🚀 Get Premium Stock Tips
        </span>
        <span className="text-green-500 font-semibold">
          📈 High Accuracy Signals
        </span>
        <span className="text-blue-500 font-semibold">
          💼 Trusted by 1000+ Clients
        </span>
        <span className="text-yellow-500 font-semibold">
          📊 Grow Your Wealth
        </span>

        {/* DUPLICATE CONTENT (IMPORTANT 🔥) */}
        <span className="text-purple-500 font-semibold">
          🚀 Get Premium Stock Tips
        </span>
        <span className="text-orange-500 font-semibold">
          📈 High Accuracy Signals
        </span>
        <span className="text-emerald-700-500 font-semibold">
          💼 Trusted by 1000+ Clients
        </span>
        <span className="text-rose-700 font-semibold">📊 Grow Your Wealth</span>
        <span className="text-mauve-600 font-semibold">
          🚀 Get Premium Stock Tips
        </span>
        <span className="text-shadow-yellow-800 font-semibold">
          📈 High Accuracy Signals
        </span>
        <span className="text-red-700 font-semibold">
          💼 Trusted by 1000+ Clients
        </span>
        <span className="text-blue-500 font-semibold">📊 Grow Your Wealth</span>
        <span className="text-green-500 font-semibold">
          💼 Trusted by 1000+ Clients
        </span>
        <span className="text-amber-500 font-semibold">
          📊 Grow Your Wealth
        </span>
      </div>
    </div>
  );
}

export default Marquee;
