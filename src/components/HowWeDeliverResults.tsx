"use client";

const steps = [
  {
    number: "01",
    icon: "🔍",
    title: "Skill Gap Analysis",
    description:
      "We conduct a thorough assessment of your team's current capabilities and identify critical skill gaps through surveys, interviews, and benchmarking.",
    deliverables: [
      "Skills assessment report",
      "Gap analysis matrix",
      "Priority recommendations",
    ],
  },
  {
    number: "02",
    icon: "🗺️",
    title: "Customized Training Plan",
    description:
      "Our experts design a bespoke learning roadmap aligned with your business goals, team structure, and industry context.",
    deliverables: [
      "Learning roadmap",
      "Content curriculum",
      "Timeline & milestones",
    ],
  },
  {
    number: "03",
    icon: "🚀",
    title: "Flexible Program Delivery",
    description:
      "Deliver training through live instructor-led sessions, self-paced modules, or a blended approach — online or on-site at your premises.",
    deliverables: [
      "Live sessions",
      "Self-paced modules",
      "ROI measurement",
    ],
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
              className="relative bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-all group flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-2xl group-hover:bg-blue-100 transition-colors shrink-0">
                  <span>{step.icon}</span>
                </div>
                <span className="text-5xl font-bold text-gray-100 select-none">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                {step.description}
              </p>
              <div className="border-t border-gray-100 pt-4 mt-auto">
                <div className="space-y-2">
                  {step.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-gray-500"
                    >
                      <svg
                        className="w-4 h-4 text-universal shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
