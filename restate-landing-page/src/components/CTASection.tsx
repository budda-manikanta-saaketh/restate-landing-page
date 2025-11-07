import React from "react";

const CTASection: React.FC = () => {
  const handleDownloadClick = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=in.restateapp.restate",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Ready to Transform Your Construction Business?
        </h2>
        <p className="text-xl mb-8 text-gray-300">
          Join the shared economy revolution in construction today.
        </p>

        <button
          onClick={handleDownloadClick}
          className="group relative bg-amber-400 text-black px-8 py-4 rounded-full text-lg font-semibold 
          hover:bg-amber-500 hover:shadow-2xl transition transform hover:scale-105 overflow-hidden"
        >
          <span className="relative z-10">Download Restate App</span>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </button>
      </div>
    </section>
  );
};

export default CTASection;
