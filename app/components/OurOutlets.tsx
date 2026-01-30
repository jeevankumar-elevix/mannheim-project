"use client";
import { useRef } from 'react';
import SectionWrapper from './SectionWrapper';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function OurOutlets() {
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

        // Title Animation
        tl.from('.outlet-title', {
            opacity: 0,
            y: -30,
            duration: 0.8,
            ease: 'power3.out'
        });

        // Whitefield Section
        gsap.from('.whitefield-image', {
            scrollTrigger: {
                trigger: '.whitefield-section',
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            x: -50,
            duration: 1,
            ease: 'power3.out'
        });

        gsap.from('.whitefield-content', {
            scrollTrigger: {
                trigger: '.whitefield-section',
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            x: 50,
            duration: 1,
            delay: 0.2,
            ease: 'power3.out'
        });

        // Ecoworld Section
        gsap.from('.ecoworld-image', {
            scrollTrigger: {
                trigger: '.ecoworld-section',
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            x: 50,
            duration: 1,
            ease: 'power3.out'
        });

        gsap.from('.ecoworld-content', {
            scrollTrigger: {
                trigger: '.ecoworld-section',
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            x: -50,
            duration: 1,
            delay: 0.2,
            ease: 'power3.out'
        });

    }, { scope: containerRef });

    return (
        <SectionWrapper
            id="our-outlets"
            title="Our Outlets"
            hideTitle={true}
            noCard={true}
            bgImage="/section-backgrounds/our-outlets-background.png"
            bgSize="cover"
            bgPosition="center"
            overlayOpacity="bg-black/85"
            className="pb-20 min-h-0"
        >
            <div ref={containerRef} className="w-full max-w-6xl mx-auto flex flex-col gap-24 px-4 md:px-0">

                {/* Whitefield Section - Image Left, Content Right */}
                <div className="whitefield-section flex flex-col md:flex-row items-start gap-12 group">
                    {/* Image Side */}
                    <div className="whitefield-image w-full md:w-1/3 relative pt-4 flex flex-col gap-6">
                        <div className="flex flex-col items-center px-6 py-4 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm shadow-xl">
                            <h3 className="text-white font-display text-2xl tracking-widest uppercase font-bold">Whitefield</h3>
                        </div>
                        <div className="relative z-10 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02]">
                            <Image
                                src="/section-images/our-outlets/mannheim-whitefield.jpg"
                                alt="Mannheim Whitefield"
                                fill
                                className="object-cover"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                        </div>
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-orange-500/60 rounded-bl-3xl z-0" />
                    </div>

                    {/* Content Side */}
                    <div className="whitefield-content w-full md:w-2/3 flex flex-col items-end text-right space-y-8">
                        {/* Custom Title Placement */}
                        <div className="outlet-title mb-4 self-center">
                            <Image
                                src="/headings/our-outlets.png"
                                alt="Our Outlets"
                                width={500}
                                height={120}
                                className="h-20 md:h-23 w-auto object-contain"
                                unoptimized
                            />
                        </div>

                        <div className="space-y-4 w-full">
                            <p className="text-gray-300 leading-relaxed text-lg font-light text-justify">
                                <span className="text-white font-medium">Mannheim Craft Brewery</span> calls two vibrant corners of Bengaluru home — <span className="text-white">Whitefield</span> and <span className="text-white">Ecoworld Bay</span>.
                                Each taproom captures the city’s rhythm in its own way: one lush and expansive, the other intimate and energetic.
                            </p>
                            <p className="text-gray-400 leading-relaxed font-light text-justify">
                                Together, they reflect what Mannheim Craft Brewery stands for — honest craft, great food, and a sense of belonging that lingers long after the last sip.
                            </p>
                        </div>

                        {/* Know More Button - Aligned to the left of the content column (nearby the image) */}
                        <button className="relative z-20 self-start px-10 py-3 text-sm tracking-[0.15em] uppercase bg-gradient-to-r from-[#e59510] to-[#b87608] text-white font-bold hover:from-[#d68410] hover:to-[#a66a07] transition-all duration-300 rounded-sm shadow-[0_4px_14px_0_rgba(229,149,16,0.39)] hover:shadow-[0_6px_20px_rgba(229,149,16,0.23)] hover:scale-105 group/btn">
                            KNOW MORE
                            <span className="inline-block ml-2 group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                        </button>
                    </div>
                </div>

                {/* Ecoworld Bay Section - Content Left, Image Right */}
                <div className="ecoworld-section flex flex-col md:flex-row-reverse items-start gap-12 group">
                    {/* Image Side */}
                    <div className="ecoworld-image w-full md:w-1/3 relative flex flex-col gap-6 -mt-20">
                        <div className="flex flex-col items-center px-6 py-4 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm shadow-xl">
                            <h3 className="text-white font-display text-2xl tracking-widest uppercase font-bold">Ecoworld Bay</h3>
                        </div>
                        <div className="relative z-10 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02]">
                            <Image
                                src="/section-images/our-outlets/mannheim-eco-world.jpg"
                                alt="Mannheim Ecoworld Bay"
                                fill
                                className="object-cover"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-orange-500/60 rounded-br-3xl z-0" />
                    </div>

                    {/* Content Side */}
                    <div className="ecoworld-content w-full md:w-2/3 flex flex-col space-y-8 text-left pt-12">
                        <div className="space-y-4">
                            <p className="text-gray-300 leading-relaxed text-lg font-light text-justify">
                                Designed for everyone — from families and friends to music lovers, coffee enthusiasts, and even your pets — our <span className="text-white font-medium">pet-friendly taprooms</span> are where good beer meets good company.
                            </p>
                            <p className="text-gray-400 leading-relaxed font-light text-justify">
                                Whether it’s a lazy Sunday afternoon or a lively evening with friends, Mannheim Craft Brewery welcomes you to unwind, connect, and make memories over pints poured with passion.
                            </p>
                        </div>

                        {/* Know More Button - Aligned to the left */}
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
