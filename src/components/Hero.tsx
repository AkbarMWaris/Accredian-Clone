import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[calc(100vh-88px)] flex items-center pt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-blue-50 rounded-2xl md:rounded-[32px] p-8 md:p-12 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Next-Gen <span className="text-universal">Expertise</span> for{" "}
              Your <span className="text-universal">Enterprise</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              Cultivate high-performance teams through expert learning.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Tailored Solutions", "Industry Insights", "Expert Guidance"].map(
                (item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 text-sm text-gray-600"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                    {item}
                  </span>
                )
              )}
            </div>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block bg-universal hover:bg-[#1557B0] text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                Enquire Now
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/corporate-big-hero-v4.webp"
              alt="Enterprise"
              width={600}
              height={500}
              className="w-full h-auto max-w-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
