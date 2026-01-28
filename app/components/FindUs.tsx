'use client';

import SectionWrapper from './SectionWrapper';
import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function FindUs() {
    const containerRef = useRef<HTMLDivElement>(null);
    const leftContentRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 75%',
                once: true,
            }
        });

        // Left Content Stagger (Heading, Text, Button)
        const leftElements = leftContentRef.current?.children;
        if (leftElements) {
            tl.fromTo(Array.from(leftElements),
                { x: -30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out', clearProps: 'all' }
            );
        }

        // Right Side: Logo Drop & Rotate
        tl.fromTo(logoRef.current,
            { y: -100, opacity: 0, rotate: -180 },
            { y: 0, opacity: 1, rotate: 0, duration: 1, ease: 'back.out(1.5)', clearProps: 'all' },
            '-=0.6'
        );

        // Map Card 3D Flip Up
        tl.fromTo(mapRef.current,
            { y: 100, opacity: 0, rotateX: 20, transformPerspective: 1000 },
            { y: 0, opacity: 1, rotateX: 0, duration: 1, ease: 'power3.out', clearProps: 'all' },
            '-=0.8'
        );

    }, { scope: containerRef });

    return (
        <SectionWrapper
            id="find-us"
            title="Find Mannheim Craft Beers"
            hideTitle={true}
            noCard={true}
            bgImage="/section-backgrounds/find-us.png"
            bgSize="cover"
            bgPosition="center"
            className="px-10 py-[60px]"
        >
            <div ref={containerRef} className="grid lg:grid-cols-2 gap-[60px] items-start w-full max-w-[1400px] mx-auto">
                {/* Left Side: Content */}
                <div ref={leftContentRef} className="flex flex-col items-start text-left max-w-[600px]">
                    {/* Heading Image Container */}
                    <div className="mb-10 ml-7">
                        <Image
                            src="/headings/find-mannheim-craft-beers.png"
                            alt="Find Mannheim Craft Beers"
                            width={800}
                            height={100}
                            className="h-[100px] md:h-[130px] w-auto object-contain"
                        />
                    </div>

                    {/* Content Body */}
                    <div className="space-y-4 text-[15px] leading-[1.8] text-white/85 tracking-[0.3px] font-light">
                        <p>
                            You don't have to come to the brewery to enjoy a <span className="text-white font-semibold">Mannheim pour</span>.
                        </p>
                        <p>
                            Find our beers on tap across select bars, restaurants, and taprooms that share our love for <span className="text-white font-semibold">quality craft</span>.
                        </p>
                        <p className="text-lg lg:text-xl text-white font-bold italic pt-2">
                            "Wherever you spot us, you'll know — it's fresh, it's flavourful, and it's unmistakably Mannheim."
                        </p>
                    </div>

                    {/* Stylish 'View Locations' Box */}
                    <div className="mt-10 ml-20">
                        <div className="inline-flex items-center gap-4 px-10 py-4 border border-white/40 bg-white/5 backdrop-blur-sm text-white text-xl font-bold tracking-[0.2em] uppercase font-sans relative group">
                            {/* Decorative corner accents */}
                            <div className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-2 border-l-2 border-white" />
                            <div className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-2 border-r-2 border-white" />

                            View Locations
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="opacity-80"
                            >
                                <path
                                    d="M5 12H19M19 12L13 6M19 12L13 18"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Right Side: Tap Map */}
                <div className="w-full flex flex-col items-center">
                    {/* Place Logo - Circular */}
                    <div ref={logoRef} className="mb-6">
                        <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
                            <Image
                                src="/logo/mannheim-place-logo-circular.jpg"
                                alt="Location Partner"
                                width={120}
                                height={120}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Tap Map Card */}
                    <div ref={mapRef} className="w-full h-[500px] rounded-2xl bg-gradient-to-br from-[#1e1e1e] via-[#252525] to-[#121212] border border-white/10 shadow-2xl overflow-hidden">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: `<script src="https://cdn.jsdelivr.net/npm/@kegshoe/tap-map" auth="MzI2Mg%3D%3D" crossorigin="anonymous" height="500px" color="#e59510" defer></script>`
                            }}
                        />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
