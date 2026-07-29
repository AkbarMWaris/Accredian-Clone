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
            Our Track Record
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            The Numbers Behind Our Success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-xl bg-blue-50 border border-blue-100"
            >
              <div className="text-4xl sm:text-5xl font-bold text-universal">
                {stat.value}
              </div>
              <p className="mt-3 text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
