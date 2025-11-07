import React from "react";

const stats = [
  { value: "100+", label: "Active Users" },
  { value: "70+", label: "Equipment Listed" },
  { value: "50+", label: "Cities" },
];

const StatsSection: React.FC = () => (
  <section className="py-16 bg-black">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
      {stats.map((stat, i) => (
        <div key={i}>
          <div className="text-4xl md:text-5xl font-bold mb-2 text-amber-400">
            {stat.value}
          </div>
          <div className="text-gray-300">{stat.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default StatsSection;
