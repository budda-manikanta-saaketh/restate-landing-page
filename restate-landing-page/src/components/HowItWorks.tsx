import {
  Hammer,
  Wrench,
  HardHat,
  Truck,
  Drill,
  Settings,
  BoxSelect,
  Pickaxe,
} from "lucide-react";

const steps = [
  {
    num: 1,
    title: "Browse & Connect",
    desc: "Find verified equipment owners and suppliers nearby. Compare and connect instantly through the app.",
  },
  {
    num: 2,
    title: "Collaborate Seamlessly",
    desc: "Book directly with providers. Track deliveries or work progress in real-time — all within the app.",
  },
  {
    num: 3,
    title: "Pay Directly",
    desc: "Once work is done, pay the provider directly. No commissions, no hidden fees — just fair deals.",
  },
];

const HowItWorksSection = () => (
  <section
    id="how-it-works"
    className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-amber-50 via-white to-amber-100"
  >
    {/* Floating Icons */}
    <div className="absolute top-20 left-10 opacity-20 animate-float-slow">
      <HardHat className="w-16 h-16 text-amber-600" strokeWidth={1.5} />
    </div>
    <div className="absolute top-40 right-20 opacity-15 animate-float-medium">
      <Truck className="w-14 h-14 text-amber-700" strokeWidth={1.5} />
    </div>
    <div className="absolute bottom-32 left-20 opacity-20 animate-float-fast">
      <Settings className="w-20 h-20 text-amber-600" strokeWidth={1.5} />
    </div>
    <div className="absolute top-60 left-1/3 opacity-10 animate-float-slow animation-delay-2000">
      <BoxSelect className="w-14 h-14 text-amber-700" strokeWidth={1.5} />
    </div>
    <div className="absolute bottom-20 right-32 opacity-15 animate-float-medium animation-delay-3000">
      <Hammer className="w-16 h-16 text-amber-600" strokeWidth={1.5} />
    </div>
    <div className="absolute top-32 right-1/4 opacity-20 animate-float-fast animation-delay-1000">
      <Drill className="w-14 h-14 text-amber-700" strokeWidth={1.5} />
    </div>
    <div className="absolute bottom-40 left-1/2 opacity-10 animate-float-slow animation-delay-4000">
      <Pickaxe className="w-16 h-16 text-amber-600" strokeWidth={1.5} />
    </div>
    <div className="absolute top-80 right-10 opacity-15 animate-float-medium animation-delay-2500">
      <Wrench className="w-14 h-14 text-amber-700" strokeWidth={1.5} />
    </div>

    <div className="max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
          How It Works
        </h2>
        <p className="text-xl text-gray-700">
          Simple, direct, and transparent built for the construction community
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 items-center relative">
        {/* Left Steps */}
        <div className="space-y-12 text-center md:text-right">
          {steps.slice(0, 2).map((step) => (
            <div key={step.num}>
              <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center text-black text-2xl font-bold mx-auto md:ml-auto md:mr-0 mb-4 shadow-lg">
                {step.num}
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">
                {step.title}
              </h3>
              <p className="text-gray-700">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Phone Mockup */}
        <div className="flex justify-center">
          <div className="relative w-[280px] h-[560px] bg-black rounded-[40px] shadow-2xl border-[10px] border-gray-900 overflow-hidden animate-float">
            <img
              src="https://cdn.dribbble.com/users/1187278/screenshots/16742855/media/4f8b6cb828bff2bff3bdfb5ff5f745b7.png?resize=400x0"
              alt="App preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-800 rounded-full"></div>
          </div>
        </div>

        {/* Right Step */}
        <div className="text-center md:text-left mt-12 md:mt-0">
          <div>
            <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center text-black text-2xl font-bold mx-auto md:mr-auto md:ml-0 mb-4 shadow-lg">
              {steps[2].num}
            </div>
            <h3 className="text-2xl font-bold text-black mb-2">
              {steps[2].title}
            </h3>
            <p className="text-gray-700">{steps[2].desc}</p>
          </div>
        </div>
      </div>
    </div>

    {/* Animations */}
    <style>{`
      @keyframes float-slow {
        0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
        25% { transform: translate(10px, -15px) rotate(5deg); }
        50% { transform: translate(-5px, -25px) rotate(-3deg); }
        75% { transform: translate(-10px, -10px) rotate(4deg); }
      }
      @keyframes float-medium {
        0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
        33% { transform: translate(-15px, -20px) rotate(-5deg); }
        66% { transform: translate(15px, -15px) rotate(5deg); }
      }
      @keyframes float-fast {
        0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
        50% { transform: translate(10px, -30px) rotate(-7deg); }
      }
      .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
      .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
      .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
      .animation-delay-1000 { animation-delay: 1s; }
      .animation-delay-2000 { animation-delay: 2s; }
      .animation-delay-2500 { animation-delay: 2.5s; }
      .animation-delay-3000 { animation-delay: 3s; }
      .animation-delay-4000 { animation-delay: 4s; }
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-12px); }
      }
      .animate-float { animation: float 4s ease-in-out infinite; }
    `}</style>
  </section>
);

export default HowItWorksSection;
