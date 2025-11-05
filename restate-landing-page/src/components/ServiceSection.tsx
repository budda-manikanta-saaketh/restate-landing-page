import React from "react";
import { Truck, Package, CheckCircle } from "lucide-react";

const ServicesSection: React.FC = () => (
  <section
    id="services"
    className="py-24 px-6 bg-white relative overflow-hidden"
  >
    <div className="max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-extrabold text-black mb-4">
          Our Services
        </h2>
        <p className="text-xl text-gray-700">
          Everything you need for your construction project
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Machinery Card */}
        <div className="group relative bg-black text-white rounded-3xl overflow-hidden shadow-2xl transition transform hover:scale-[1.02]">
          {/* Amber glow overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

          <div className="p-10 md:p-12 relative z-10">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-amber-400/20 rounded-full flex items-center justify-center border border-amber-400/40">
                <Truck size={60} className="text-amber-400" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-center group-hover:text-amber-400 transition">
              Construction Machinery
            </h3>
            <p className="text-gray-300 mt-4 mb-8 text-center leading-relaxed">
              Access a wide range of construction equipment including
              excavators, cranes, loaders, and more — all maintained to the
              highest standards.
            </p>
            <ul className="space-y-3 text-gray-200">
              {[
                "Well-maintained equipment",
                "Flexible rental periods",
                "Operator services available",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-amber-400" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Materials Card */}
        <div className="group relative bg-black text-white rounded-3xl overflow-hidden shadow-2xl transition transform hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

          <div className="p-10 md:p-12 relative z-10">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-amber-400/20 rounded-full flex items-center justify-center border border-amber-400/40">
                <Package size={60} className="text-amber-400" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-center group-hover:text-amber-400 transition">
              Construction Materials
            </h3>
            <p className="text-gray-300 mt-4 mb-8 text-center leading-relaxed">
              Premium-quality construction materials delivered directly to your
              site. From cement to steel — we ensure timely, reliable, and
              efficient service.
            </p>
            <ul className="space-y-3 text-gray-200">
              {[
                "Premium quality materials",
                "Direct from manufacturers",
                "Timely delivery guaranteed",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-amber-400" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
