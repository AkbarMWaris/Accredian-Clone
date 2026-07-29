"use client";

import { useState, useEffect } from "react";
import { getSegmentations, type Segmentation } from "@/lib/api";

const segIcons: Record<string, string> = {
  "Program Specific": "🎓",
  "Industry Specific": "🏭",
  "Topic Specific": "📖",
  "Level Specific": "📈",
};

export default function CourseSegmentation() {
  const [segments, setSegments] = useState<Segmentation[]>([]);

  useEffect(() => {
    getSegmentations().then(setSegments);
  }, []);

  if (segments.length === 0) return null;

  return (
    <section id="segmentation" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Tailored Course Segmentation
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Explore Custom-fit Courses Designed to Address Every Professional Focus
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((seg) => (
            <div
              key={seg.title}
              className="p-6 rounded-xl bg-blue-50 border border-blue-100 hover:shadow-md transition-all text-center"
            >
              <div className="text-4xl mb-3">{segIcons[seg.title] || "📋"}</div>
              <h3 className="text-lg font-semibold text-gray-900">
                {seg.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{seg.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
