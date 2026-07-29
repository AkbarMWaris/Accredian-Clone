import Image from "next/image";

export default function Footer() {
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
                { name: "Facebook", href: "https://facebook.com/accredianlearn" },
                { name: "LinkedIn", href: "https://www.linkedin.com/company/accredianedu/" },
                { name: "Twitter", href: "https://twitter.com/accredianedu" },
                { name: "Instagram", href: "https://www.instagram.com/accredian_edu" },
                { name: "YouTube", href: "https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA" },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 sm:text-gray-600 hover:text-[#1A73E8] transition-colors text-sm"
                >
                  {s.name[0]}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-6 md:mt-0">
            <a
              href="#contact"
              className="inline-block bg-[#1A73E8] hover:bg-[#1557B0] text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              Enquire Now
            </a>
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
