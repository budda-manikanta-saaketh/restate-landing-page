import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => (
  <footer
    id="contact"
    className="bg-black text-white py-16 px-4 border-t-2 border-amber-400"
  >
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-amber-400">Restate</h3>
          <p className="text-gray-400">
            Building the future of construction, one shared resource at a time.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-amber-400">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            {["Features", "Services", "How It Works"].map((link, i) => (
              <li key={i}>
                <a
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:text-amber-400 transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-amber-400">Company</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="#" className="hover:text-amber-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/privacyandpolicy"
                className="hover:text-amber-400 transition"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-amber-400">Contact</h4>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center">
              <Mail size={18} className="mr-2 text-amber-400" />{" "}
              info@restateapp.in
            </li>
            <li className="flex items-center">
              <Phone size={18} className="mr-2 text-amber-400" /> +91 9494741081
            </li>
            <li className="flex items-center">
              <MapPin size={18} className="mr-2 text-amber-400" /> India
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
        <p>&copy; 2025 Restate. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
