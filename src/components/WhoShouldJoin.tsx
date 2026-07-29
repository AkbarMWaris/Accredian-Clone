"use client";

import { useState, useEffect } from "react";
import { getTargetAudiences, type TargetAudience } from "@/lib/api";

export default function WhoShouldJoin() {
  const [audiences, setAudiences] = useState<TargetAudience[]>([]);

  useEffect(() => {
    getTargetAudiences().then(setAudiences);
  }, []);

  if (audiences.length === 0) return null;

  return (
    <section id="audience" className="py-16 bg-[#1A73E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Who Should Join?
          </h2>
          <p className="mt-3 text-lg text-blue-200">
            Strategic Skill Enhancement
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-blue-200 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
