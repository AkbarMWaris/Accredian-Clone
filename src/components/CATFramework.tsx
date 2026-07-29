"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getCATSteps, type CATStep } from "@/lib/api";

export default function CATFramework() {
  const [steps, setSteps] = useState<CATStep[]>([]);

  useEffect(() => {
    getCATSteps().then(setSteps);
  }, []);

  if (steps.length === 0) return null;

  return (
    <section id="cat" className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            The <span className="text-universal">CAT Framework</span>
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Our Proven Approach to <span className="text-universal">Learning Excellence</span>
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <Image
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/catV2.svg"
            alt="CAT Framework"
            width={900}
            height={400}
            className="w-full max-w-4xl h-auto"
          />
        </div>
      </div>
    </section>
  );
}
