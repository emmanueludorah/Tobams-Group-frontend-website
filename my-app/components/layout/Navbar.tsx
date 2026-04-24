"use client"; //
import Image from 'next/image'; // 
import { useState } from 'react';

export default function Navbar() {
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', icon: true },
    { name: 'What We Do', icon: true },
    { name: 'Jobs', icon: true },
    { name: 'Projects', icon: false },
    { name: 'TG Academy', icon: false },
    { name: 'Strategic Partnership', icon: false },
    { name: 'Pricing', icon: false },
    { name: 'Book a Consultation', icon: false }
  ];

  return (
    <header className="w-full">
      {/* Top header with logo and buttons */}
      <div className="bg-white px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center border-b">
        {/* Logo */}
        <div className="relative" style={{ width: 'clamp(120px, 20vw, 165.71px)', height: 'auto', aspectRatio: '165.71/64' }}> 
          <Image 
            src="/images/logo.png"
            alt="Tobams Logo" 
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-2 md:gap-3">
          <button 
            onClick={() => setIsAccountDropdownOpen(!isAccountDropdownOpen)}
            className="bg-[#6B1D57] text-white px-4 md:px-6 py-2 rounded-md text-xs sm:text-sm md:text-sm hover:bg-[#5a1848] transition flex items-center gap-2 whitespace-nowrap"
          >
            <div className="relative w-3 h-3 md:w-4 md:h-4">
              <Image 
                src="/images/Frame 1000002758.png"
                alt="Account Icon"
                fill
                className="object-contain"
              />
            </div>
            Account 
            <div className="relative w-3 h-3 md:w-4 md:h-4">
              <Image 
                src="/images/iconamoon_arrow-left-2-light.png"
                alt="Dropdown Icon"
                fill
                className="object-contain"
              />
            </div>
          </button>
          <button className="bg-[#E33B6B] text-white px-4 md:px-6 py-2 rounded-md text-xs sm:text-sm md:text-sm hover:bg-[#d1246a] transition whitespace-nowrap">
            Take Assessment
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col gap-1"
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-[#151515]"></span>
          <span className="block w-5 h-0.5 bg-[#151515]"></span>
          <span className="block w-5 h-0.5 bg-[#151515]"></span>
        </button>
      </div>

      {/* Desktop Navigation menu */}
      <nav className="hidden md:block bg-white px-4 md:px-6 lg:px-8 border-b">
        <ul className="flex gap-4 md:gap-6 text-xs sm:text-sm md:text-sm justify-center py-3 flex-wrap text-[#151515]">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href="#" className="hover:underline flex items-center gap-1 md:gap-2 whitespace-nowrap text-[#151515]">
                {link.name}
                {link.icon && (
                  <div className="relative w-3 h-3 md:w-4 md:h-4">
                    <Image 
                      src="/images/iconamoon_arrow-left-2-light.png"
                      alt={`${link.name} Icon`}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white border-b">
          <ul className="flex flex-col gap-0 text-sm px-3 sm:px-4 py-3 text-[#151515]">
            {navLinks.map((link, index) => (
              <li key={index} className={index < navLinks.length - 1 ? 'border-b py-3' : 'py-3'}>
                <a href="#" className="block hover:text-gray-600 flex items-center gap-2 text-[#151515]">
                  {link.name}
                  {link.icon && (
                    <div className="relative w-4 h-4">
                      <Image 
                        src="/images/iconamoon_arrow-left-2-light.png"
                        alt={`${link.name} Icon`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                </a>
              </li>
            ))}
          </ul>
          {/* Mobile Buttons */}
          <div className="flex flex-col gap-2 px-3 sm:px-4 pb-3">
            <button className="bg-[#6B1D57] text-white px-4 sm:px-6 py-2 rounded-md text-xs sm:text-sm hover:bg-[#5a1848] transition w-full flex items-center justify-center gap-2">
              <div className="relative w-3 h-3 sm:w-4 sm:h-4">
                <Image 
                  src="/images/Frame 1000002758.png"
                  alt="Account Icon"
                  fill
                  className="object-contain"
                />
              </div>
              Account
              <div className="relative w-3 h-3 sm:w-4 sm:h-4">
                <Image 
                  src="/images/iconamoon_arrow-left-2-light.png"
                  alt="Dropdown Icon"
                  fill
                  className="object-contain"
                />
              </div>
            </button>
            <button className="bg-[#E33B6B] text-white px-4 sm:px-6 py-2 rounded-md text-xs sm:text-sm hover:bg-[#d1246a] transition w-full">
              Take Assessment
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}