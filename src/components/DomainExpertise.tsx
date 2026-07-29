"use client";

import { useState, useEffect } from "react";
import { Lightbulb, Brain, UserCog, BarChart3, Zap, Globe, Banknote } from "lucide-react";
import { getDomains, type Domain } from "@/lib/api";

const domainIcons: Record<string, React.ReactNode> = {
  "Product & Innovation Hub": <Lightbulb className="w-10 h-10" />,
  "Gen-AI Mastery": <Brain className="w-10 h-10" />,
  "Leadership Elevation": <UserCog className="w-10 h-10" />,
  "Tech & Data Insights": <BarChart3 className="w-10 h-10" />,
  "Operations Excellence": <Zap className="w-10 h-10" />,
  "Digital Enterprise": <Globe className="w-10 h-10" />,
  "Fintech Innovation Lab": <Banknote className="w-10 h-10" />,
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
            Our <span className="text-universal">Domain Expertise</span>
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            <span className="text-universal">Specialized Programs</span> Designed to Fuel Innovation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {domains.slice(0, 6).map((domain) => (
            <div
              key={domain.title}
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-white border border-gray-200 hover:border-universal/30 hover:shadow-lg transition-all group"
            >
              <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center text-universal mb-4 group-hover:bg-blue-100 transition-colors">
                {domainIcons[domain.title] || <Lightbulb className="w-10 h-10" />}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center">
                {domain.title}
              </h3>
            </div>
          ))}
        </div>

        {domains.length > 6 && (
          <div className="flex justify-center mt-6">
            <div className="w-full max-w-xs flex flex-col items-center justify-center p-6 rounded-xl bg-white border border-gray-200 hover:border-universal/30 hover:shadow-lg transition-all group">
              <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center text-universal mb-4 group-hover:bg-blue-100 transition-colors">
                {domainIcons[domains[6].title] || <Lightbulb className="w-10 h-10" />}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center">
                {domains[6].title}
              </h3>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
