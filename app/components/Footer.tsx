'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { name: 'Our Story', href: '#our-story' },
        { name: 'Mannheim Beers', href: '#mannheim-beers' },
        { name: 'Find Us', href: '#find-us' },
        { name: 'Mannheim Coffee', href: '#mannheim-coffee' },
    ];

    const experienceLinks = [
        { name: 'Our Outlets', href: '#our-outlets' },
        { name: 'Host Parties', href: '#host-parties' },
        { name: 'Partner With Us', href: '#partner-with-us' },
        { name: 'Contact Us', href: '#contact-us' },
    ];

    return (
        <footer className="w-full bg-[#0a0a0a] text-white pt-20 pb-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Logo & About */}
                    <div className="flex flex-col items-start">
                        <Link href="/" className="mb-8">
                            <Image
                                src="/logo/mannheim-logo.png"
                                alt="Mannheim Logo"
                                width={180}
                                height={60}
                                className="h-12 w-auto brightness-110"
                            />
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-xs">
                            Rooted in German precision yet inspired by India's evolving palate, our beers are crafted with clarity, balance, and purpose.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#EAB308] hover:text-black transition-all duration-300 group">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#EAB308] hover:text-black transition-all duration-300 group">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#EAB308] hover:text-black transition-all duration-300 group">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[#EAB308] font-bold uppercase tracking-widest text-xs mb-8">Quick Links</h4>
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/60 hover:text-[#EAB308] text-sm transition-colors duration-300 flex items-center group"
                                    >
                                        <span className="w-0 h-[1px] bg-[#EAB308] mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Experience */}
                    <div>
                        <h4 className="text-[#EAB308] font-bold uppercase tracking-widest text-xs mb-8">Experience</h4>
                        <ul className="space-y-4">
                            {experienceLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/60 hover:text-[#EAB308] text-sm transition-colors duration-300 flex items-center group"
                                    >
                                        <span className="w-0 h-[1px] bg-[#EAB308] mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-[#EAB308] font-bold uppercase tracking-widest text-xs mb-8">Get in Touch</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 text-white/60 text-sm">
                                <MapPin className="w-5 h-5 text-[#EAB308] shrink-0" />
                                <span>Visit our brewery for the freshest pour on tap.</span>
                            </li>
                            <li className="flex items-center gap-4 text-white/60 text-sm">
                                <Phone className="w-5 h-5 text-[#EAB308] shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-4 text-white/60 text-sm">
                                <Mail className="w-5 h-5 text-[#EAB308] shrink-0" />
                                <span>hello@mannheimbrewery.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/40 text-xs tracking-widest uppercase">
                        © {currentYear} Mannheim Craft Brewery. All Rights Reserved.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-white/40 hover:text-white text-[10px] tracking-widest uppercase transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-white/40 hover:text-white text-[10px] tracking-widest uppercase transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
