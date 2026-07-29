"use client";

import { useState, useEffect } from "react";
import { getPartners, type Partner } from "@/lib/api";

export default function Partnerships() {
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    getPartners().then(setPartners);
  }, []);

  if (partners.length === 0) return null;

  return (
    <section id="partnerships" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our Proven Partnerships
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Successful Collaborations With the Industry&apos;s Best
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
            >
              <span className="text-sm font-semibold text-gray-500 text-center">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-gray-500 text-sm">
          + 192 more companies across 12 industries
        </p>
      </div>
    </section>
  );
}
