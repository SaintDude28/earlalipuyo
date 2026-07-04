"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Software", href: "#software" },
    { name: "Certifications", href: "#certifications" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-200 bg-white/90 shadow-md backdrop-blur-xl"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <a
          href="#home"
          className="text-3xl font-bold tracking-tight text-blue-600 transition hover:text-blue-700"
        >
          Hope Earl
        </a>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-gray-600 transition duration-200 hover:text-blue-600"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Resume Button */}

        <a
          href="/Hope_Earl_Alipuyo_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-blue-700 hover:shadow-lg"
        >
          Resume
        </a>
      </div>
    </header>
  );
}