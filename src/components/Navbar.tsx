"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "Stats", href: "#stats" },
  { label: "Clients", href: "#partnerships" },
  { label: "Accredian Edge", href: "#edge" },
  { label: "CAT", href: "#cat" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQs", href: "#faq" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-88px 0px -50% 0px", threshold: 0 }
    );

    NAV_ITEMS.forEach(({ href }) => {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md py-6 px-6 md:px-14">
      <div className="flex justify-between items-center">
        <a href="#hero" onClick={(e) => handleNavClick(e, "hero")}>
          <Image
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp"
            alt="Accredian"
            width={124}
            height={32}
            className="w-31 h-8"
          />
        </a>

        <div className="hidden md:flex justify-end items-center flex-1 space-x-8">
          {NAV_ITEMS.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, id)}
                className={`text-[16px] font-normal cursor-pointer ${
                  isActive
                    ? "text-universal font-semibold border-b-[3px] border-universal"
                    : "text-black"
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-22 right-5 bg-white shadow-lg p-6 rounded-xl md:hidden">
          {NAV_ITEMS.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => { setMenuOpen(false); handleNavClick(e, id); }}
                className={`block py-2 text-[16px] ${
                  isActive ? "text-universal font-semibold" : "text-black"
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
