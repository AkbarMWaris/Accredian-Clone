"use client";

import { Cpu, Users, Rocket, Briefcase } from "lucide-react";
import Image from "next/image";

const audiences = [
  {
    title: "Tech Professionals",
    description: "Enhance expertise, embrace tech, drive innovation.",
    icon: Cpu,
  },
  {
    title: "Non-Tech Professionals",
    description: "Adapt digitally, collaborate in tech environments.",
    icon: Users,
  },
  {
    title: "Emerging Professionals",
    description: "Develop powerful skills for rapid career growth.",
    icon: Rocket,
  },
  {
    title: "Senior Professionals",
    description: "Strengthen leadership, enhance strategic decisions.",
    icon: Briefcase,
  },
];

export default function WhoShouldJoin() {
  return (
    <section id="audience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-[#1A73E8] rounded-3xl p-8 md:p-14 grid md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col items-start">
            <p className="text-blue-100 mb-1">Who Should Join?</p>
            <h3 className="text-3xl font-bold text-white mb-6">
              Strategic Skill Enhancement
            </h3>
            <div className="relative w-full h-64">
              <Image
                src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/imagehuman.png"
                alt="Professionals learning"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain rounded-xl"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {audiences.map((item) => (
              <div key={item.title} className="text-white">
                <div className="w-11 h-11 rounded-lg border border-white/40 flex items-center justify-center mb-3">
                  <item.icon size={22} />
                </div>
                <h4 className="font-semibold mb-1">{item.title}</h4>
                <p className="text-sm text-blue-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
