"use client";

import { useState, useEffect } from "react";
import { getStats, type Stat } from "@/lib/api";

export default function Stats() {
  const [stats, setStats] = useState<Stat[]>([]);

  useEffect(() => {
    getStats().then(setStats);
  }, []);

  return (
    <section id="stats" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our <span className="text-universal">Track Record</span>
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            The Numbers Behind <span className="text-universal">Our Success</span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-stretch">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex-1 text-center py-8 px-6 ${
                index < stats.length - 1 ? "md:border-r border-gray-200" : ""
              }`}
            >
              <span className="inline-block text-3xl md:text-5xl font-bold text-universal bg-blue-50 px-4 py-2 rounded-lg">
                {stat.value}
              </span>
              <p className="mt-4 text-gray-700 font-medium leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
