"use client";

import { useState, useEffect } from "react";
import { getDomains, type Domain } from "@/lib/api";

const domainIcons: Record<string, string> = {
  "Product & Innovation Hub": "🛠️",
  "Gen-AI Mastery": "🤖",
  "Leadership Elevation": "👔",
  "Tech & Data Insights": "📊",
  "Operations Excellence": "⚡",
  "Digital Enterprise": "🌐",
  "Fintech Innovation Lab": "💰",
};

export default function DomainExpertise() {
  const [domains, setDomains] = useState<Domain[]>([]);

  useEffect(() => {
    getDomains().then(setDomains);
  }, []);

  if (domains.length === 0) return null;

  return (
    <section id="domains" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our Domain Expertise
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Specialized Programs Designed to Fuel Innovation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {domains.map((domain) => (
            <div
              key={domain.title}
              className="relative p-6 rounded-xl bg-white border border-gray-200 hover:border-universal/30 hover:shadow-lg transition-all overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-8 -mt-8 group-hover:bg-blue-100 transition-colors" />
              <div className="relative">
                <div className="text-3xl mb-3">
                  {domainIcons[domain.title] || "📘"}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {domain.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {domain.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
