import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-16 pb-16 md:pt-24 md:pb-0 overflow-hidden bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight text-center lg:text-left">
              Next-Gen <span className="text-universal">Expertise</span> for{" "}
              Your <span className="text-universal">Enterprise</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-600 max-w-xl text-center lg:text-left">
              Cultivate high-performance teams through expert learning.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
              {["Tailored Solutions", "Industry Insights", "Expert Guidance"].map(
                (item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 text-sm text-gray-600"
                  >
                    <svg className="w-5 h-5 text-green-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </span>
                )
              )}
            </div>
            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href="#contact"
                className="bg-universal hover:bg-[#1557B0] text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
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
