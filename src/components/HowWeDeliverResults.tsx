"use client";

import { TrendingUp, Presentation, CirclePlay } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Skill Gap Analysis",
    description: "Assess team skill gaps and developmental needs.",
    Icon: TrendingUp,
  },
  {
    number: 2,
    title: "Customized Training Plan",
    description: "Create a tailored roadmap addressing organizational goals.",
    Icon: Presentation,
  },
  {
    number: 3,
    title: "Flexible Program Delivery",
    description: "Deliver adaptable programs aligned with industry and organizational needs.",
    Icon: CirclePlay,
  },
];

export default function HowWeDeliverResults() {
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            How We <span className="text-universal">Deliver Results</span> That Matter?
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            A Structured Three-Step Approach to <span className="text-universal">Skill Development</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-blue-50 rounded-xl p-8 pt-6 border-l-4 border-universal flex flex-col items-center text-center"
            >
              <span className="absolute -top-3 left-6 w-7 h-7 rounded-full bg-white border-2 border-universal text-universal text-sm font-bold flex items-center justify-center">
                {step.number}
              </span>
              <div className="w-14 h-14 rounded-full bg-universal text-white flex items-center justify-center mb-5">
                <step.Icon size={26} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
