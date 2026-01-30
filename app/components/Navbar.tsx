"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const navItems = [
  { name: 'Our Story', href: '#our-story' },
  { name: 'Mannheim Beers', href: '#mannheim-beers' },
  { name: 'Find Us', href: '#find-us' },
  { name: 'Mannheim Coffee', href: '#mannheim-coffee' },
  { name: 'Our Outlets', href: '#our-outlets' },
  { name: 'Host Parties', href: '#host-parties' },
  { name: 'Partner With Us', href: '#partner-with-us' },
  { name: 'Contact Us', href: '#contact-us' },
];

const getNavStyles = () => ({
  fontSize: "text-[10px] lg:text-[11px]",
  tracking: "tracking-[0.12em]",
  spacing: "space-x-4 lg:space-x-6",
  containerMargin: "ml-4 lg:ml-8"
});

export default function Navbar() {
  const styles = getNavStyles();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({ paused: true })
        .to(menuRef.current, {
          clipPath: "circle(150% at 100% 0%)",
          duration: 1.2,
          ease: "power2.inOut",
          pointerEvents: "auto"
        })
        .from(".mobile-nav-item", {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out"
        }, "-=0.8");
    }, containerRef);

    return () => ctx.revert();
  }, { scope: containerRef });

  useEffect(() => {
    if (isOpen) {
      tl.current?.play();
      document.body.style.overflow = "hidden";
    } else {
      tl.current?.reverse();
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav ref={containerRef} className="fixed top-0 left-0 right-0 z-50 bg-[#111111] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex-shrink-0 z-50 relative">
            <Link href="/" className="flex items-center" onClick={closeMenu}>
              <Image
                src="/logo/mannheim-logo.png"
                alt="Mannheim Logo"
                width={150}
                height={50}
                className="h-10 lg:h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className={`${styles.containerMargin} flex items-baseline ${styles.spacing}`}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative group px-1 py-2"
                >
                  <span className={`relative z-10 text-white/80 group-hover:text-[#EAB308] ${styles.fontSize} font-bold ${styles.tracking} uppercase transition-colors duration-300 whitespace-nowrap`}>
                    {item.name}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#EAB308] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Toggle Button */}
          <div className="lg:hidden z-50 relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 focus:outline-none transition-transform active:scale-95"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} className="text-[#EAB308]" /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className="fixed inset-0 h-screen w-screen bg-[#111111] z-40 flex flex-col justify-center items-center pointer-events-none"
        style={{ clipPath: "circle(0% at 100% 0%)" }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[url('/section-backgrounds/our-outlets-background.png')] bg-cover bg-center opacity-10"></div>

        <div className="flex flex-col space-y-8 items-center z-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className="mobile-nav-item group relative overflow-hidden"
            >
              <span className="block text-3xl font-display font-medium text-white/90 group-hover:text-[#EAB308] transition-colors duration-300 tracking-wider">
                {item.name}
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#EAB308] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
