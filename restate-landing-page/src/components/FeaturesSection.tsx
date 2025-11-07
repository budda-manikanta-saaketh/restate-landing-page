import React from "react";
import { TrendingUp, Clock, Users } from "lucide-react";

const features = [
  {
    icon: <TrendingUp size={40} />,
    title: "Cost Efficient",
    text: "Save up to 40% on equipment costs through our shared economy model. Pay only for what you use.",
  },
  {
    icon: <Clock size={40} />,
    title: "24/7 Availability",
    text: "Access machinery and materials anytime. Quick delivery and flexible scheduling for your projects.",
  },
  {
    icon: <Users size={40} />,
    title: "Trusted Network",
    text: "Connect with verified suppliers and contractors. Build lasting partnerships in the industry.",
  },
];

const FeaturesSection: React.FC = () => (
  <section
    id="features"
    className="relative py-24 px-4 bg-gradient-to-br from-white via-amber-50 to-amber-100 overflow-hidden"
  >
    {/* Animated glowing blobs */}
    <div className="absolute -top-20 -left-20 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
    <div className="absolute top-40 right-0 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

    <div className="max-w-7xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-extrabold text-black mb-6 tracking-tight">
          Why Choose <span className="text-amber-500">Restate?</span>
        </h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          The smart way to manage construction resources modern, efficient, and
          connected.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-10">
        {features.map((feature, i) => (
          <div
            key={i}
            className="group relative bg-white p-10 rounded-3xl border border-gray-200 shadow-xl hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-500 overflow-hidden"
          >
            {/* Gradient Glow Background */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-amber-300/40 via-amber-200/20 to-transparent blur-2xl"></div>

            {/* Icon with Animation */}
            <div className="relative z-10 w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-300 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition duration-500">
              <div className="text-black">{feature.icon}</div>
            </div>

            {/* Title + Text */}
            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-amber-500 transition duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{feature.text}</p>
            </div>

            {/* Floating glow ring */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-amber-300 opacity-20 rounded-full blur-2xl group-hover:animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>

    {/* Animations */}
    <style>{`
      @keyframes blob {
        0%, 100% { transform: translate(0, 0) scale(1); }
        33% { transform: translate(30px, -20px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
      }
      .animate-blob {
        animation: blob 10s infinite;
      }
      .animation-delay-2000 {
        animation-delay: 2s;
      }
    `}</style>
  </section>
);

export default FeaturesSection;
