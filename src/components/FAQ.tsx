"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useEnquire } from "@/context/EnquireContext";

const categories = ["About the Course", "About the Delivery", "Miscellaneous"];

const faqData: Record<string, { question: string; answer: string }[]> = {
  "About the Course": [
    {
      question: "What types of corporate training programs does Accredian offer?",
      answer:
        "We offer certificate, executive, and post-graduate style programs across Data Science, AI, Product Management, Leadership, and more — all co-designed with academic partners.",
    },
    {
      question: "What domain specializations are available?",
      answer:
        "Specializations include Product & Innovation, Gen-AI Mastery, Leadership Elevation, Tech & Data Insights, Operations Excellence, Digital Enterprise, and Fintech Innovation.",
    },
  ],
  "About the Delivery": [
    {
      question: "Are the certifications recognized by the industry?",
      answer:
        "Yes. Certifications are issued in partnership with recognized academic and industry bodies and are verifiable and shareable on professional profiles.",
    },
    {
      question: "Can programs be customized for our organization's specific needs?",
      answer:
        "Absolutely — every engagement starts with a skill-gap analysis so the curriculum is mapped directly to your team's goals and industry context.",
    },
  ],
  "Miscellaneous": [
    {
      question: "How do you measure training ROI?",
      answer:
        "We provide real-time analytics dashboards, completion rates, skill assessments, and quarterly business reviews to track progress and measure ROI.",
    },
    {
      question: "How long does it take to onboard?",
      answer:
        "We can onboard your entire team in under a week. Our dedicated success managers handle everything end-to-end.",
    },
  ],
};

export default function FAQSection() {
  const { setOpen } = useEnquire();
  const [activeTab, setActiveTab] = useState("About the Course");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = faqData[activeTab] || [];

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Frequently Asked <span className="text-universal">Questions</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-[220px_1fr] gap-10 max-w-5xl mx-auto">
          <div className="flex md:flex-col gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveTab(cat); setOpenIndex(0); }}
                className={`border rounded-lg px-5 py-4 text-left font-semibold transition-colors ${
                  activeTab === cat
                    ? "border-universal text-universal"
                    : "border-gray-200 text-gray-500 hover:border-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between text-left gap-4"
                >
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-universal shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === index ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={() => setOpen(true)}
            className="inline-block bg-universal hover:bg-[#1557B0] text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors cursor-pointer"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
}
