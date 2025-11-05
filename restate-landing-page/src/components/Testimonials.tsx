import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Rajesh Kumar",
    role: "Construction Manager",
    content:
      "Restate has transformed how we manage our projects. Getting equipment on demand has saved us thousands in rental costs.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Project Director",
    content:
      "The quality of machinery and materials is excellent. Quick delivery and professional service every time.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Site Engineer",
    content:
      "Finally, a platform that understands construction needs. The shared economy model is brilliant for our industry.",
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  const t = testimonials[current];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
          What Our Users Say
        </h2>
        <p className="text-xl text-gray-700 mb-16">
          Join thousands of satisfied customers
        </p>

        <div className="bg-white rounded-2xl border-2 border-black p-8 md:p-12 relative">
          <div className="flex justify-center mb-6">
            {[...Array(t.rating)].map((_, i) => (
              <Star key={i} className="text-amber-400 fill-current" size={24} />
            ))}
          </div>
          <p className="text-xl text-gray-800 text-center mb-8 italic">
            "{t.content}"
          </p>
          <div className="text-center">
            <div className="font-bold text-black text-lg">{t.name}</div>
            <div className="text-gray-600">{t.role}</div>
          </div>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-amber-400 rounded-full p-2 shadow-lg hover:bg-amber-500 transition"
          >
            <ChevronLeft className="text-black" size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-amber-400 rounded-full p-2 shadow-lg hover:bg-amber-500 transition"
          >
            <ChevronRight className="text-black" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
