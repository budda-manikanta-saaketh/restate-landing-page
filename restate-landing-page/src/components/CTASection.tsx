import React from "react";

const CTASection: React.FC = () => (
  <section className="py-20 px-4 bg-black">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
        Ready to Transform Your Construction Business?
      </h2>
      <p className="text-xl mb-8 text-gray-300">
        Join the shared economy revolution in construction today
      </p>
      <button className="bg-amber-400 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-500 hover:shadow-2xl transition transform hover:scale-105">
        Download Restate App
      </button>
    </div>
  </section>
);

export default CTASection;
