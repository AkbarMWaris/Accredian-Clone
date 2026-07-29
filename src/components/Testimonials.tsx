"use client";

import { useState, useEffect } from "react";
import { getTestimonials, type Testimonial } from "@/lib/api";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    getTestimonials().then(setTestimonials);
  }, []);

  if (testimonials.length === 0) return null;

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            What Our Partners Say
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Real results from real enterprise partnerships
          </p>
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 sm:p-12 border border-blue-100">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-lg sm:text-xl text-gray-700 italic leading-relaxed">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-6">
              <p className="font-semibold text-gray-900">{t.author}</p>
              <p className="text-sm text-gray-500">
                {t.role}, {t.company}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === current ? "bg-universal" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
