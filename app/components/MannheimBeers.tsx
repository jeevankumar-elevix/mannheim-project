import SectionWrapper from './SectionWrapper';
import Image from 'next/image';

export default function MannheimBeers() {
    return (
        <SectionWrapper
            id="mannheim-beers"
            title="Mannheim Beers"
            hideTitle={true}
            noCard={true}
            bgImage="/section-backgrounds/mannheim-beers.png?v=1"
            bgSize="cover"
            bgPosition="center 20%"
            className="px-10 py-[20px]"
        >
            <div className="max-w-[1400px] mx-auto relative min-h-[600px] flex items-center justify-center">
                {/* Left Side Image */}
                <div className="hidden xl:block absolute left-0 top-1/2 -translate-y-[60%] w-[250px] h-[350px] rounded-none border-4 border-white/20 shadow-2xl overflow-hidden -rotate-2">
                    <Image
                        src="/section-images/mannheim-beers/imageleft.jpeg"
                        alt="Mannheim Beer Craft"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Main Content */}
                <div className="max-w-[1200px] mx-auto text-center -mt-12 z-10">
                    {/* Logo Container */}
                    <div className="mb-8">
                        <Image
                            src="/headings/mannheim-beers.png?v=2"
                            alt="Mannheim Beers"
                            width={800}
                            height={120}
                            className="h-[50px] lg:h-[140px] w-auto object-contain mx-auto"
                            unoptimized
                        />
                    </div>

                    {/* Content Wrapper */}
                    <div className="max-w-[750px] mx-auto">
                        <p className="text-lg leading-[1.7] mb-[16px] font-normal text-white/95">
                            At <span className="font-semibold text-white">Mannheim Craft Brewery</span>, brewing isn't just science — it's soul.
                            Every beer begins with intention and ends with connection.
                        </p>

                        <div className="w-12 h-[1px] bg-white/20 mx-auto mb-[16px]"></div>

                        <p className="text-[15px] leading-[1.8] mb-[12px] text-white/85 tracking-[0.3px]">
                            Rooted in <span className="font-semibold text-white">German precision</span> yet inspired by
                            <span className="font-semibold text-white"> India's evolving palate</span>, our beers are crafted with
                            <span className="font-semibold text-white"> clarity, balance, and purpose</span>. We don't chase trends —
                            we chase <span className="font-semibold text-white">truth in taste</span>.
                        </p>

                        <p className="text-[15px] leading-[1.8] mb-2 text-white/85 tracking-[0.3px]">
                            Every batch reflects <span className="font-semibold text-white">honesty, craftsmanship, and creativity</span>,
                            honouring the discipline of traditional brewing while embracing the freedom of innovation.
                            No shortcuts. No gimmicks. Just honest beer, made with patience and poured with pride.
                        </p>

                        <div>
                            <p className="text-xl leading-[1.6] mt-2 mb-4 font-medium text-white italic relative inline-block">
                                <span className="absolute -left-4 -top-2 text-4xl text-white/10">"</span>
                                Because at Mannheim Craft Brewery,
                                <span className="font-bold italic text-[#e59510]"> "No Crap on Tap" </span>
                                isn't a slogan — it's our promise.
                                <span className="absolute -right-4 -bottom-4 text-4xl text-white/10">"</span>
                            </p>
                        </div>

                        <button className="mt-2 inline-block px-[40px] py-[10px] text-[14px] tracking-[1.5px] uppercase bg-gradient-to-r from-[#e59510] to-[#d68410] text-white font-bold hover:from-[#d68410] hover:to-[#c77310] transition-all duration-300 rounded-sm shadow-lg hover:shadow-xl hover:scale-105 group">
                            KNOW MORE
                            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </button>
                    </div>
                </div>

                {/* Right Side Image */}
                <div className="hidden xl:block absolute right-0 top-1/2 -translate-y-[40%] w-[250px] h-[350px] rounded-none border-4 border-white/20 shadow-2xl overflow-hidden rotate-2">
                    <Image
                        src="/section-images/mannheim-beers/imageright.jpg"
                        alt="Mannheim Beer Experience"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </SectionWrapper>
    );
}
