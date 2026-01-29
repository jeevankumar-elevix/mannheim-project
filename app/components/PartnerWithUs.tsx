import SectionWrapper from './SectionWrapper';
import { Handshake, TrendingUp, Users } from 'lucide-react';

export default function PartnerWithUs() {
    return (
        <SectionWrapper
            id="partner-with-us"
            title="Partner With Us"
            titleImage="/headings/partner-with-us.png"
            titleImageClassName="h-16 md:h-20 lg:h-16"
            hideTitle={false}
            noCard={true}
            className="py-24"
        >
            <div className="w-full max-w-7xl mx-auto px-4 md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
                    {/* Distribution */}
                    <div className="flex flex-col items-center text-center space-y-4 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-500">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500/20 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <h3 className="text-white font-display text-xl font-bold uppercase tracking-widest">Distribution</h3>
                        <p className="text-gray-400 font-light leading-relaxed">
                            Bring Mannheim's craft excellence to your establishment.
                        </p>
                    </div>

                    {/* Collaboration */}
                    <div className="flex flex-col items-center text-center space-y-4 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-500">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500/20 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                            <Handshake className="w-6 h-6" />
                        </div>
                        <h3 className="text-white font-display text-xl font-bold uppercase tracking-widest">Collaboration</h3>
                        <p className="text-gray-400 font-light leading-relaxed">
                            Let's create something unique together.
                        </p>
                    </div>

                    {/* Community */}
                    <div className="flex flex-col items-center text-center space-y-4 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-500">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500/20 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                            <Users className="w-6 h-6" />
                        </div>
                        <h3 className="text-white font-display text-xl font-bold uppercase tracking-widest">Community</h3>
                        <p className="text-gray-400 font-light leading-relaxed">
                            Join our network of craft enthusiasts and partners.
                        </p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
