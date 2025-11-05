import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <span
            className={`text-2xl font-bold ${
              scrolled ? "text-amber-400" : "text-black"
            }`}
          >
            Restate
          </span>

          <div className="hidden md:flex space-x-8">
            {["Features", "Services", "How It Works", "Contact"].map(
              (item, i) => (
                <a
                  key={i}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`${
                    scrolled ? "text-white" : "text-black"
                  } hover:text-amber-400 transition`}
                >
                  {item}
                </a>
              )
            )}
          </div>

          <div className="hidden md:block">
            <button className="bg-amber-400 text-black px-6 py-2 rounded-full hover:bg-amber-500 hover:shadow-lg transition transform hover:scale-105 font-semibold">
              Get Started
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden ${scrolled ? "text-white" : "text-black"}`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-amber-400">
          <div className="px-4 py-4 space-y-3">
            {["Features", "Services", "How It Works", "Contact"].map(
              (item, i) => (
                <a
                  key={i}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block text-white hover:text-amber-400"
                >
                  {item}
                </a>
              )
            )}
            <button className="w-full bg-amber-400 text-black px-6 py-2 rounded-full font-semibold">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
