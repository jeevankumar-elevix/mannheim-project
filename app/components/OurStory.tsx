import SectionWrapper from './SectionWrapper';
import Image from 'next/image';

export default function OurStory() {
    return (
        <SectionWrapper
            id="our-story"
            title="Our Story"
            hideTitle={true}
            noCard={true}
            bgImage="/section-backgrounds/our-story.png?v=1"
            className="px-10"
        >
            <div className="grid lg:grid-cols-2 gap-[60px] items-center w-full max-w-[1400px] mx-auto">
                {/* Left Side: Overlapping Images */}
                <div className="relative w-full max-w-[500px] aspect-square mx-auto lg:mx-0">
                    {/* Back Image (Frame 1) */}
                    <div className="absolute top-0 left-0 w-[70%] aspect-square -rotate-[2deg] border-4 border-white/20 shadow-2xl overflow-hidden rounded-sm z-10">
                        <Image
                            src="/section-images/our-story/1.jpg"
                            alt="Mannheim Brewery Interior"
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Front Image (Frame 2) */}
                    <div className="absolute bottom-0 right-0 w-[70%] aspect-square rotate-[3deg] border-4 border-white/20 shadow-2xl overflow-hidden rounded-sm z-20">
                        <Image
                            src="/section-images/our-story/2.jpg"
                            alt="Mannheim Brewery Exterior"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="flex flex-col items-start text-left max-w-[600px]">
                    {/* Heading Image Container */}
                    <div className="mb-8">
                        <Image
                            src="/headings/our-story.png?v=2"
                            alt="Our Story"
                            width={400}
                            height={60}
                            className="h-[50px] lg:h-[90px] w-auto object-contain"
                            unoptimized
                        />
                    </div>

                    {/* Subtitle Container */}
                    <div className="mb-6">
                        <h3 className="text-xl lg:text-2xl font-medium text-white leading-[1.5] tracking-wide">
                            At Mannheim Craft Brewery, brewing isn't just science — <span className="text-[#D4AF37] italic">it's soul.</span>
                        </h3>
                        <p className="text-lg text-white/90 mt-2 font-light">
                            Every beer begins with intention and ends with connection.
                        </p>
                    </div>

                    <div className="space-y-6 text-white/80 text-base leading-[1.8] font-light">
                        <p>
                            Rooted in <strong className="text-white font-medium">German precision</strong> yet inspired by <strong className="text-white font-medium">India's evolving palate</strong>, our beers are crafted with clarity, balance, and purpose. We don't chase trends — we chase <strong className="text-white font-medium">truth in taste</strong>.
                        </p>
                        <p>
                            Every batch reflects honesty, craftsmanship, and creativity, honouring the discipline of traditional brewing while embracing the freedom of innovation. <span className="text-white block mt-2 font-normal">No shortcuts. No gimmicks. Just honest beer, made with patience and poured with pride.</span>
                        </p>
                    </div>

                    <button className="mt-10 px-8 py-3 border border-white/30 text-white hover:bg-white hover:text-black text-xs lg:text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-sm flex items-center gap-3 group">
                        KNOW MORE
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                </div>
            </div>
        </SectionWrapper>
    );
}
