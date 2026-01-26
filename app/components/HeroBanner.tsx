'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

/**
 * ADD YOUR BANNER IMAGES HERE
 * Simply add the path to your image in the public folder.
 */
const bannerImages = [
    '/bannerimages/bannerimage1.png',
    // '/bannerimages/bannerimage2.png',
    // '/bannerimages/bannerimage3.png',
];

export default function HeroBanner() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (bannerImages.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    if (bannerImages.length === 0) return null;

    return (
        <section className="relative w-full h-screen overflow-hidden bg-black">
            {/* Sliding Container */}
            <div
                className="flex h-full transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {bannerImages.map((imagePath, i) => (
                    <div
                        key={i}
                        className="relative min-w-full h-full bg-black"
                    >
                        {/* Full Screen Banner Image */}
                        <div className="absolute inset-0">
                            <Image
                                src={imagePath}
                                alt={`Banner ${i + 1}`}
                                fill
                                className="object-cover"
                                priority={i === 0}
                            />
                            {/* Subtle dark overlay to maintain depth */}
                            <div className="absolute inset-0 bg-black/20" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Slide Indicators (only show if more than 1 image) */}
            {bannerImages.length > 1 && (
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                    {bannerImages.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`w-12 h-1 rounded-full transition-all duration-500 ${i === currentIndex ? 'bg-white w-20' : 'bg-white/20'
                                }`}
                        />
                    ))}
                </div>
            )}

            {/* Bottom fade to content */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#121212] to-transparent z-10" />
        </section>
    );
}
