'use client';

import SectionWrapper from './SectionWrapper';
import Image from 'next/image';
import { Coffee } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function MannheimCoffee() {
    const containerRef = useRef<HTMLDivElement>(null);
    const leftImageRef = useRef<HTMLDivElement>(null);
    const rightImageRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 75%',
                once: true,
            }
        });

        // Diagonal Image Reveal
        tl.from(leftImageRef.current,
            { x: -100, y: 100, opacity: 0, rotate: -10, duration: 1.2, ease: 'power3.out' },
            'start'
        );

        tl.from(rightImageRef.current,
            { x: 100, y: -100, opacity: 0, rotate: 10, duration: 1.2, ease: 'power3.out' },
            'start'
        );

        // Logo Scale Up
        tl.from(logoRef.current,
            { scale: 0.5, opacity: 0, duration: 1, ease: 'back.out(1.7)' },
            'start+=0.2'
        );

        // Card Slide Up
        tl.from(cardRef.current,
            { y: 100, opacity: 0, duration: 1, ease: 'power2.out' },
            '-=0.5'
        );

        // Content Stagger inside Card
        const cardElements = cardRef.current?.children;
        if (cardElements) {
            tl.fromTo(Array.from(cardElements),
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out', clearProps: 'all' },
                '-=0.5'
            );
        }

    }, { scope: containerRef });

    return (
        <SectionWrapper
            id="mannheim-coffee"
            title="Mannheim Coffee"
            hideTitle={true}
            noCard={true}
            bgImage="/section-backgrounds/mannheim-coffee.png?v=1"
            className="px-10 py-[20px]"
        >
            <div ref={containerRef} className="max-w-[1400px] mx-auto relative min-h-[600px] flex items-center justify-center">
                {/* Left Side Image */}
                <div ref={leftImageRef} className="hidden xl:block absolute left-0 top-1/2 -translate-y-[30%] w-[250px] h-[350px] rounded-none border-4 border-white/20 shadow-2xl overflow-hidden rotate-2">
                    <Image
                        src="/section-images/mannheim-coffee/specialty-roast-1.png"
                        alt="Mannheim Specialty Roast"
                        fill
                        className="object-cover object-right"
                    />
                </div>

                {/* Main Content */}
                <div className="max-w-[1200px] mx-auto text-center -mt-12 z-10">
                    {/* Logo Container */}
                    <div ref={logoRef} className="mb-8">
                        <Image
                            src="/headings/mannheim-coffee.png?v=2"
                            alt="Mannheim Coffee"
                            width={800}
                            height={120}
                            className="h-[50px] lg:h-[100px] w-auto object-contain mx-auto"
                            unoptimized
                        />
                    </div>

                    {/* Glassmorphic Content Wrapper */}
                    <div ref={cardRef} className="max-w-[650px] mx-auto backdrop-blur-md bg-black/20 p-8 md:p-12 rounded-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
                        <p className="text-lg lg:text-xl leading-[1.7] mb-[24px] font-normal text-white/95">
                            <span className="font-semibold text-[#D4AF37]">Mannheim Specialty Roasts</span> takes our love for craft beyond beer —
                            celebrating India's coffee heritage through single-origin beans from Chikmagalur.
                        </p>

                        <div className="w-12 h-[1px] bg-[#D4AF37]/30 mx-auto mb-[24px]"></div>

                        <p className="text-[16px] lg:text-[18px] leading-[1.8] mb-[32px] text-white/85 tracking-[0.3px] font-light italic">
                            &quot;Roasted in small batches for depth and character.&quot;
                        </p>

                        <button className="group relative px-12 py-4 bg-[#EAB308] border border-[#EAB308] text-black font-bold tracking-[0.2em] uppercase text-xs transition-all duration-300 overflow-hidden rounded-sm">
                            {/* Glare/Shimmer Effect */}
                            <span className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-all duration-1000 group-hover:left-[100%] z-10"></span>

                            <span className="flex items-center justify-center gap-3 relative z-20">
                                Brew the Experience
                                <Coffee className="w-5 h-5 transition-transform duration-700 group-hover:rotate-[360deg] group-hover:scale-125" />
                            </span>
                        </button>
                    </div>
                </div>

                {/* Right Side Image */}
                <div ref={rightImageRef} className="hidden xl:block absolute right-0 top-1/2 -translate-y-[60%] w-[250px] h-[350px] rounded-none border-4 border-white/20 shadow-2xl overflow-hidden -rotate-2">
                    <Image
                        src="/section-images/mannheim-coffee/specialtyroast-2.png"
                        alt="Mannheim Coffee Roasting"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </SectionWrapper>
    );
}
