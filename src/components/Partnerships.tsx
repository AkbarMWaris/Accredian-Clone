"use client";

import Image from "next/image";

const clients = [
  { name: "Reliance", src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png" },
  { name: "HCL", src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/hcl.png" },
  { name: "IBM", src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/ibm.png" },
  { name: "CRIF", src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/crif.png" },
  { name: "ADP", src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg" },
  { name: "Bayer", src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg" },
];

export default function Partnerships() {
  return (
    <section id="partnerships" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our Proven <span className="text-universal">Partnerships</span>
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Successful Collaborations With the <span className="text-universal">Industry&apos;s Best</span>
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee gap-16 md:gap-24" style={{ width: "max-content" }}>
          {[...clients, ...clients].map((client, i) => (
            <div key={`${client.name}-${i}`} className="flex items-center justify-center h-14 w-36 shrink-0">
              <Image
                src={client.src}
                alt={client.name}
                width={130}
                height={44}
                className="h-20 w-auto object-contain "
              />
            </div>
          ))}
        </div>
      </div>


    </section>
  );
}
