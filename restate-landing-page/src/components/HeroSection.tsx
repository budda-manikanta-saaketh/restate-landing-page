import React from "react";
import {
  Hammer,
  Wrench,
  HardHat,
  Truck,
  Drill,
  Settings,
  BoxSelect,
  Pickaxe,
  ArrowRight,
  Play,
  Sparkles,
} from "lucide-react";

const HeroSection = () => {
  const handleDownloadClick = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=in.restateapp.restate",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-amber-50 via-white to-amber-100">
      {/* Floating machinery icons */}
      <div className="absolute top-20 left-10 opacity-10 animate-float-slow">
        <HardHat className="w-20 h-20 text-amber-600" strokeWidth={1.5} />
      </div>
      <div className="absolute top-40 right-20 opacity-8 animate-float-medium">
        <Truck className="w-16 h-16 text-amber-700" strokeWidth={1.5} />
      </div>
      <div className="absolute bottom-32 left-20 opacity-12 animate-float-fast">
        <Settings className="w-24 h-24 text-amber-600" strokeWidth={1.5} />
      </div>
      <div className="absolute top-60 left-1/4 opacity-8 animate-float-slow animation-delay-2000">
        <BoxSelect className="w-14 h-14 text-amber-700" strokeWidth={1.5} />
      </div>
      <div className="absolute bottom-20 right-32 opacity-10 animate-float-medium animation-delay-3000">
        <Hammer className="w-18 h-18 text-amber-600" strokeWidth={1.5} />
      </div>
      <div className="absolute top-32 right-1/4 opacity-12 animate-float-fast animation-delay-1000">
        <Drill className="w-16 h-16 text-amber-700" strokeWidth={1.5} />
      </div>
      <div className="absolute bottom-40 left-1/2 opacity-8 animate-float-slow animation-delay-4000">
        <Pickaxe className="w-16 h-16 text-amber-600" strokeWidth={1.5} />
      </div>
      <div className="absolute top-3/4 right-10 opacity-10 animate-float-medium animation-delay-2500">
        <Wrench className="w-14 h-14 text-amber-700" strokeWidth={1.5} />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#fbbf2420_1px,transparent_1px),linear-gradient(to_bottom,#fbbf2420_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 animate-grid-slide"></div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-300 to-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-amber-400 to-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow animation-delay-3000"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto text-center relative z-10 py-20">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-400/20 backdrop-blur-sm border border-amber-400/30 rounded-full px-6 py-2 mb-8 animate-bounce-subtle">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-semibold text-amber-900">
              Revolutionizing Construction
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-extrabold text-gray-900 mb-8 leading-tight tracking-tight">
            <span className="inline-block animate-slide-in-left">A Shared</span>{" "}
            <span className="inline-block animate-slide-in-right">Economy</span>
            <br />
            <span className="block relative mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 animate-gradient-shift drop-shadow-lg">
                Construction Platform
              </span>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay font-light">
            Connect with nearby machinery and materials instantly.
            <span className="font-semibold text-amber-700">
              {" "}
              Save time, reduce costs
            </span>
            , and scale your projects effortlessly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up-delay">
            <button
              onClick={handleDownloadClick}
              className="group relative bg-gradient-to-r from-amber-400 to-amber-500 text-black px-10 py-5 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Download App
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>

            <button className="group flex items-center gap-3 border-2 border-gray-900 text-gray-900 px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-900 hover:text-white transition-all hover:gap-4">
              <Play className="w-5 h-5 fill-current" />
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>

      {/* Animations (unchanged) */}
      <style>{`/* (keep your full animation CSS here as is) */`}</style>
    </section>
  );
};

export default HeroSection;
