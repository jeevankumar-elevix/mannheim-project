"use client";
import { useRef } from 'react';
import SectionWrapper from './SectionWrapper';
import { Mail, Phone, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactUs() {
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

        tl.from('.contact-form-container', {
            opacity: 0,
            x: -50,
            duration: 0.8,
            ease: 'power3.out'
        })
            .from('.contact-info-container', {
                opacity: 0,
                x: 50,
                duration: 0.8,
                ease: 'power3.out'
            }, "-=0.6");

    }, { scope: containerRef });

    return (
        <SectionWrapper
            id="contact-us"
            title="Contact Us"
            titleImage="/headings/contact-us.png"
            titleImageClassName="h-16 md:h-20 lg:h-22"
            hideTitle={false}
            noCard={true}
            className="py-12 bg-black"
            style={{
                backgroundImage: 'radial-gradient(circle at top right, rgba(80,80,80,0.5), transparent 40%), radial-gradient(circle at bottom left, rgba(80,80,80,0.5), transparent 40%)'
            }}
        >
            <div ref={containerRef} className="w-full max-w-7xl mx-auto px-4 md:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-stretch mt-4">

                    {/* Left Side: Contact Form (White styling) */}
                    <div className="contact-form-container w-full">
                        <div className="mb-8">
                            <h3 className="text-3xl font-display font-bold text-white mb-4">Get in Touch</h3>
                            <p className="text-gray-400 font-light">Have a question or feedback? We'd love to hear from you.</p>
                        </div>

                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="contact-name" className="text-sm font-medium text-white uppercase tracking-wide ml-1">Name</label>
                                <input
                                    type="text"
                                    id="contact-name"
                                    placeholder="Enter your name"
                                    className="w-full bg-white/5 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white focus:bg-white/10 transition-all duration-300"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="contact-email" className="text-sm font-medium text-white uppercase tracking-wide ml-1">Email</label>
                                    <input
                                        type="email"
                                        id="contact-email"
                                        placeholder="your@email.com"
                                        className="w-full bg-white/5 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white focus:bg-white/10 transition-all duration-300"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="contact-phone" className="text-sm font-medium text-white uppercase tracking-wide ml-1">Phone</label>
                                    <input
                                        type="tel"
                                        id="contact-phone"
                                        placeholder="+91 00000 00000"
                                        className="w-full bg-white/5 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white focus:bg-white/10 transition-all duration-300"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="contact-message" className="text-sm font-medium text-white uppercase tracking-wide ml-1">Message</label>
                                <textarea
                                    id="contact-message"
                                    rows={4}
                                    placeholder="How can we help you?"
                                    className="w-full bg-white/5 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white focus:bg-white/10 transition-all duration-300 resize-none"
                                />
                            </div>

                            <button
                                type="button"
                                className="w-full md:w-auto min-w-[200px] mt-4 bg-white hover:bg-gray-200 text-black font-bold py-4 px-8 rounded-xl uppercase tracking-widest transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right Side: Contact Info & Image Card */}
                    <div className="contact-info-container flex flex-col h-full space-y-6 lg:pt-0">
                        {/* Image Card Placeholder */}
                        <div className="relative group overflow-hidden rounded-3xl bg-white/5 border border-white/10 aspect-[16/9] lg:aspect-auto lg:flex-1 min-h-[250px] max-h-[340px]">
                            <img
                                src="/section-images/contact-us/contact-us-img.jpg"
                                alt="Mannheim Brewery"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60"
                                key={Date.now()}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <h4 className="text-2xl font-display font-bold text-white mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Crafting Memories</h4>
                                <p className="text-gray-400 text-sm max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    Step into Mannheim and experience the perfect blend of tradition and innovation.
                                </p>
                            </div>
                        </div>

                        {/* Compact Contact Info Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Visit Us */}
                            <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 group/item">
                                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 text-white group-hover/item:scale-110 transition-transform duration-300">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Visit</p>
                                    <p className="text-sm text-white font-medium">Bengaluru, KA, India</p>
                                </div>
                            </div>

                            {/* Call Us */}
                            <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 group/item">
                                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 text-white group-hover/item:scale-110 transition-transform duration-300">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Call</p>
                                    <p className="text-sm text-white font-medium">+91 98765 43210</p>
                                </div>
                            </div>

                            {/* Email Us */}
                            <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 sm:col-span-2 group/item">
                                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 text-white group-hover/item:scale-110 transition-transform duration-300">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Email</p>
                                    <p className="text-sm text-white font-medium">hello@mannheimbrewery.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </SectionWrapper>
    );
}
