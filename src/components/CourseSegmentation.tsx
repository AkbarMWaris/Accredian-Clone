"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getSegmentations, type Segmentation } from "@/lib/api";

const segImages: Record<string, string> = {
  "Program Specific": "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/project-management-v2.webp",
  "Industry Specific": "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/digital-transformation-v2.webp",
  "Topic Specific": "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/data-science-v2.webp",
  "Level Specific": "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/senior-management-v2.webp",
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
            Tailored <span className="text-universal">Course Segmentation</span>
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Explore <span className="text-universal">Custom-fit Courses </span>Designed to Address Every Professional Focus
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((seg) => (
            <div
              key={seg.title}
              className="rounded-xl overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={segImages[seg.title]}
                  alt={seg.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {seg.title}
                </h3>
                <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">
                  {seg.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
