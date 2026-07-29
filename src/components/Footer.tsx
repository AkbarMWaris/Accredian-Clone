"use client";

import Image from "next/image";
import { useEnquire } from "@/context/EnquireContext";

export default function Footer() {
  const { setOpen } = useEnquire();

  return (
    <footer className="bg-[#1d1d1d] sm:bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-700 sm:border-gray-300 pb-6">
          <div>
            <Image
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp"
              alt="Accredian"
              width={144}
              height={36}
              className="hidden sm:block w-36"
            />
            <Image
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/logo/accredainnew.webp"
              alt="Accredian"
              width={144}
              height={36}
              className="block sm:hidden w-36"
            />
            <div className="flex gap-4 mt-4">
              {[
                { name: "Facebook", href: "https://facebook.com/accredianlearn", icon: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" },
                { name: "LinkedIn", href: "https://www.linkedin.com/company/accredianedu/", icon: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" },
                { name: "X", href: "https://twitter.com/accredianedu", icon: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" },
                { name: "Instagram", href: "https://www.instagram.com/accredian_edu", icon: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" },
                { name: "YouTube", href: "https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA", icon: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-900 sm:bg-gray-200 text-white sm:text-gray-600 flex items-center justify-center hover:bg-[#1A73E8] hover:text-white transition-colors"
                >
                  <svg viewBox="0 0 448 512" className="w-4 h-4" fill="currentColor">
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div className="mt-6 md:mt-0">
            <button
              onClick={() => setOpen(true)}
              className="inline-block bg-[#1A73E8] hover:bg-[#1557B0] text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
            >
              Enquire Now
            </button>
            <p className="text-gray-400 sm:text-gray-600 text-xs mt-2">Speak with our Advisor</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 pb-6 border-b border-gray-700 sm:border-gray-300">
          <div>
            <h3 className="font-semibold text-white sm:text-gray-900 text-lg">Accredian</h3>
            <ul className="mt-2 text-gray-400 sm:text-gray-600 space-y-2 text-sm">
              <li><a href="https://accredian.com/About" className="hover:text-[#1A73E8]">About</a></li>
              <li><a href="https://blog.accredian.com/" className="hover:text-[#1A73E8]">Blog</a></li>
              <li><a href="https://accredian.com/whyaccredian" className="hover:text-[#1A73E8]">Why Accredian</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white sm:text-gray-900 text-lg">Contact Us</h3>
            <p className="text-gray-400 sm:text-gray-600 mt-2 text-sm">
              Email us:{" "}
              <a href="mailto:enterprise@accredian.com" className="text-[#1A73E8] hover:underline">
                enterprise@accredian.com
              </a>
            </p>
            <p className="text-gray-400 sm:text-gray-600 mt-2 text-sm max-w-lg">
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
            </p>
          </div>
        </div>

        <p className="text-center text-gray-400 sm:text-gray-600 text-sm pt-3">
          &copy; {new Date().getFullYear()} Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
