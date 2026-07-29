"use client";

import { Headset, ChevronRight } from "lucide-react";
import { useEnquire } from "@/context/EnquireContext";

export default function CTA() {
  const { setOpen } = useEnquire();

  return (
    <section className="bg-white pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1A73E8] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
              <Headset className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-white text-xl font-bold">
                Want to Learn More About Our Training Solutions?
              </h3>
              <p className="text-blue-100 text-sm mt-1">
                Get Expert Guidance for Your Team&apos;s Success!
              </p>
            </div>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-1 px-6 py-3 bg-white text-[#1A73E8] rounded-lg font-semibold hover:bg-gray-50 transition-colors shrink-0"
          >
            Contact Us
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
