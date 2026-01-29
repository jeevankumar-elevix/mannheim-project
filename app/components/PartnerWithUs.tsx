"use client";
import { useRef } from 'react';
import SectionWrapper from './SectionWrapper';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PartnerWithUs() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });

        tl.from('.partner-intro', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out'
        })
            .from('.partner-image-container', {
                opacity: 0,
                x: -50,
                duration: 0.8,
                ease: 'power3.out'
            }, "-=0.4")
            .from('.partner-form-container', {
                opacity: 0,
                x: 50,
                duration: 0.8,
                ease: 'power3.out'
            }, "-=0.6");

    }, { scope: containerRef });

    return (
        <SectionWrapper
            id="partner-with-us"
            title="Partner With Us"
            titleImage="/headings/partner-with-us.png"
            titleImageClassName="h-16 md:h-20 lg:h-22"
            hideTitle={false}
            noCard={true}
            className="py-24 bg-black"
            style={{
                backgroundImage: 'radial-gradient(circle at top left, rgba(80,80,80,0.5), transparent 45%), radial-gradient(circle at bottom right, rgba(80,80,80,0.5), transparent 45%)'
            }}
        >
            <div ref={containerRef} className="w-full max-w-7xl mx-auto px-4 md:px-0">
                {/* Intro Content */}
                <div className="partner-intro max-w-4xl mx-auto text-center mb-16 space-y-6">
                    <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                        Whether you’re curating a tap list for your restaurant or planning an event that deserves something special, we’re here to collaborate. Partner with Mannheim Craft Brewery and pour authenticity, quality, and craft into every experience.
                    </p>
                    <p className="text-[#e59510] font-medium text-lg tracking-wide uppercase">
                        Contact us to bring Mannheim Craft Brewery to your space.
                    </p>
                </div>

                {/* Main Grid: Image Mockup & Form */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

                    {/* Left Side: Image Card with Hover Reveal */}
                    <div className="partner-image-container flex flex-col">
                        <div className="relative group overflow-hidden rounded-3xl bg-white/5 border border-white/10 h-[580px] max-h-[580px]">
                            <img
                                src="/section-images/partner-with-us/grow-together.jpg"
                                alt="Partner With Mannheim"
                                className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110 opacity-60"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                            {/* Content Reveal */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    <h4 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Grow Together</h4>
                                    <div className="w-12 h-1 bg-[#e59510] mb-6 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-200" />
                                    <p className="text-gray-300 text-lg max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300 leading-relaxed">
                                        Join our network of premium partners and bring the award-winning taste of Mannheim to your establishment.
                                    </p>
                                </div>
                            </div>

                            {/* Top Badge */}
                            <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="text-[10px] text-white uppercase tracking-[0.2em] font-bold">Partnership Program</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Partner Form */}
                    <div className="partner-form-container w-full">
                        <form className="space-y-6 bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-md">

                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-[#e59510] uppercase tracking-wide ml-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your full name"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#e59510] focus:bg-white/10 transition-all duration-300"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-[#e59510] uppercase tracking-wide ml-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="your@email.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#e59510] focus:bg-white/10 transition-all duration-300"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-[#e59510] uppercase tracking-wide ml-1">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        placeholder="+91 00000 00000"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#e59510] focus:bg-white/10 transition-all duration-300"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="city" className="text-sm font-medium text-[#e59510] uppercase tracking-wide ml-1">City</label>
                                    <input
                                        type="text"
                                        id="city"
                                        placeholder="Your City"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#e59510] focus:bg-white/10 transition-all duration-300"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="establishment" className="text-sm font-medium text-[#e59510] uppercase tracking-wide ml-1">Establishment Name</label>
                                    <input
                                        type="text"
                                        id="establishment"
                                        placeholder="Restaurant / Bar Name"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#e59510] focus:bg-white/10 transition-all duration-300"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="occasion" className="text-sm font-medium text-[#e59510] uppercase tracking-wide ml-1">For Pouring At</label>
                                <div className="relative">
                                    <select
                                        id="occasion"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white appearance-none focus:outline-none focus:border-[#e59510] focus:bg-white/10 transition-all duration-300 cursor-pointer"
                                        defaultValue=""
                                    >
                                        <option value="" disabled className="bg-gray-900 text-gray-500">Select an option</option>
                                        <option value="taproom" className="bg-gray-900 text-white">Taproom</option>
                                        <option value="event" className="bg-gray-900 text-white">Event</option>
                                        <option value="private" className="bg-gray-900 text-white">Private Occasion</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#e59510]">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="button"
                                className="w-full mt-4 bg-gradient-to-r from-[#e59510] to-[#b87608] hover:from-[#d68410] hover:to-[#a66a07] text-white font-bold py-4 px-8 rounded-xl uppercase tracking-widest transition-all duration-300 transform hover:scale-[1.02] shadow-[0_4px_14px_0_rgba(229,149,16,0.39)] hover:shadow-[0_6px_20px_rgba(229,149,16,0.23)]"
                            >
                                Submit Request
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </SectionWrapper>
    );
}
