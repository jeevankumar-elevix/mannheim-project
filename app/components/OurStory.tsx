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
                    <div className="mb-6 ml-8 lg:ml-28">
                        <Image
                            src="/headings/our-story.png"
                            alt="Our Story"
                            width={400}
                            height={60}
                            className="h-[60px] w-auto object-contain"
                        />
                    </div>

                    {/* Subtitle Container */}
                    <div className="mb-6 ml-8 lg:ml-10">
                        <h3 className="text-2xl font-bold text-white leading-[1.4]">
                            Crafted with Intention. Shared with Purpose.
                        </h3>
                    </div>

                    <div className="space-y-6 text-white/85 text-base leading-[1.8]">
                        <p>
                            Because at <strong className="text-white font-bold">Mannheim Craft Brewery</strong>, we don’t just brew beer — we <strong className="text-white font-bold">craft purpose</strong>.
                        </p>
                        <p>
                            Rooted in <strong className="text-white font-bold">German precision</strong> and driven by <strong className="text-white font-bold">Indian curiosity</strong>, our beers celebrate <strong className="text-white font-bold">quality, creativity, and community</strong>. From our flagship lagers to seasonal experiments, <strong className="text-white font-bold">every pour is brewed with intention</strong>. Because for us, it’s not just about what’s in the glass — it’s about who you share it with.
                        </p>
                    </div>

                    <button className="mt-8 px-8 py-3 border-2 border-white/20 text-white hover:bg-white hover:text-black text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-sm flex items-center gap-2 group">
                        KNOW MORE
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                </div>
            </div>
        </SectionWrapper>
    );
}
