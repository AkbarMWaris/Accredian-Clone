"use client";

import Image from "next/image";

export default function AccredianEdge() {
  return (
    <section id="edge" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            The <span className="text-universal">Accredian Edge</span>
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Key Aspects of{" "}
            <span className="text-universal">Our Strategic Training</span>
          </p>
        </div>

        <div className="hidden sm:flex justify-center mb-8">
          <Image
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/accredian-edge-usp-v3.svg"
            alt="Accredian Edge"
            width={1000}
            height={400}
            className="w-full h-auto"
          />
        </div>

        <div className="flex sm:hidden justify-center mb-8">
          <Image
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/accredian-edge-usp-mobile.svg"
            alt="Accredian Edge"
            width={400}
            height={600}
            className="w-full h-auto"
          />
        </div>

      </div>
    </section>
  );
}
