"use client";
import { useRef } from 'react';
import SectionWrapper from './SectionWrapper';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HostParties() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none none'
            }
        });

        tl.from('.host-title', {
            opacity: 0,
            y: -30,
            duration: 0.8,
            ease: 'power3.out'
        })
            .from('.bento-item', {
                opacity: 0,
                scale: 0.9,
                duration: 0.8,
                stagger: 0.2,
                ease: 'back.out(1.7)'
            }, "-=0.4")
            .from('.host-content', {
                opacity: 0,
                x: 50,
                duration: 0.8,
                ease: 'power3.out'
            }, "-=0.6");

    }, { scope: containerRef });

    return (
        <SectionWrapper
            id="host-parties"
            title="Host Your Parties"
            hideTitle={true}
            noCard={true}
            bgImage="/section-backgrounds/host-your-parties.png"
            overlayOpacity="bg-black/85"
            className="pt-12 pb-24 min-h-0"
        >
            <div ref={containerRef} className="w-full max-w-7xl mx-auto px-4 md:px-0 flex flex-col gap-12">

                {/* Header Image */}
                <div className="host-title flex justify-center">
                    <Image
                        src="/headings/host-your-parties.png"
                        alt="Host Your Parties"
                        width={800}
                        height={160}
                        className="h-24 md:h-32 lg:h-20 w-auto object-contain"
                        unoptimized
                        key={Date.now()}
                    />
                </div>

                {/* Main Section: Bento Grid Left, Content Right */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Bento Grid Left */}
                    <div className="lg:col-span-7 grid grid-cols-2 grid-rows-2 gap-4 h-[500px] md:h-[600px]">
                        <div className="bento-item col-span-1 row-span-2 relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl group">
                            <Image
                                src="/section-images/host-your-parties/host-your-party1.jpg"
                                alt="Brewery Party"
                                fill
                                className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        <div className="bento-item col-span-1 row-span-1 relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl group">
                            <Image
                                src="/section-images/host-your-parties/host-your-party-2.jpg"
                                alt="Curated Food"
                                fill
                                className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        <div className="bento-item col-span-1 row-span-1 relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl group">
                            <Image
                                src="/section-images/host-your-parties/host-your-party-3.jpg"
                                alt="Corporate Mixer"
                                fill
                                className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    </div>

                    {/* Content Right */}
                    <div className="host-content lg:col-span-5 flex flex-col gap-8">
                        <div className="space-y-6">
                            <p className="text-gray-300 text-lg leading-relaxed font-light text-justify">
                                Make your next celebration <span className="text-white font-medium">effortless and unforgettable</span> at Mannheim Craft Brewery.
                                Our taprooms offer beautiful, thoughtfully designed spaces paired with craft beer, curated menus, and warm hospitality.
                                Whether it’s a small gathering or a large-format event, we bring people together with experiences that feel both <span className="text-white">seamless and special</span> — every time.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed font-light text-justify">
                                From corporate mixers and birthdays to brunches, soirées, and family celebrations, <span className="text-white font-medium">Mannheim</span> has a package for every mood and moment.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 self-start">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-[1px] bg-orange-500/50" />
                                <span className="text-white/50 uppercase tracking-[0.4em] text-[14px] font-bold">Direct Line</span>
                            </div>

                            <div className="relative">
                                <div className="px-8 py-5 border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent rounded-sm flex items-center gap-6">
                                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white shadow-[0_0_20px_rgba(234,149,16,0.2)]">
                                        <Phone className="w-5 h-5 fill-white" />
                                    </div>
                                    <a href="tel:+919876543210" className="text-white text-xl md:text-2xl font-light tracking-[0.2em] block">
                                        +91 98765 43210
                                    </a>
                                </div>
                                {/* Corner Accents */}
                                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-orange-500/30" />
                                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-orange-500/30" />
                            </div>

                            <div className="mt-4">
                                <p className="text-white/50 text-[10px] uppercase tracking-[0.2em] pl-1">
                                    Exclusive for party bookings & events
                                </p>
                            </div>
                        </div>

                        <button className="relative z-20 self-start px-10 py-3 text-sm tracking-[0.15em] uppercase bg-gradient-to-r from-[#e59510] to-[#b87608] text-white font-bold hover:from-[#d68410] hover:to-[#a66a07] transition-all duration-300 rounded-sm shadow-[0_4px_14px_0_rgba(229,149,16,0.39)] hover:shadow-[0_6px_20px_rgba(229,149,16,0.23)] hover:scale-105 group/btn">
                            KNOW MORE
                            <span className="inline-block ml-2 group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                        </button>
                    </div>
                </div>

            </div>
        </SectionWrapper>
    );
}
