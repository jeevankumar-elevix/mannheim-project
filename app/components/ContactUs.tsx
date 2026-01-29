import SectionWrapper from './SectionWrapper';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactUs() {
    return (
        <SectionWrapper
            id="contact-us"
            title="Contact Us"
            titleImage="/headings/contact-us.png"
            titleImageClassName="h-16 md:h-20 lg:h-16"
            hideTitle={false}
            noCard={true}
            className="py-24"
        >
            <div className="w-full max-w-7xl mx-auto px-4 md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
                    {/* Visit Us */}
                    <div className="flex flex-col items-center text-center space-y-4 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-500">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500/20 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <h3 className="text-white font-display text-xl font-bold uppercase tracking-widest">Visit Us</h3>
                        <p className="text-gray-400 font-light leading-relaxed">
                            Bengaluru, Karnataka<br />India
                        </p>
                    </div>

                    {/* Call Us */}
                    <div className="flex flex-col items-center text-center space-y-4 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-500">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500/20 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                            <Phone className="w-6 h-6" />
                        </div>
                        <h3 className="text-white font-display text-xl font-bold uppercase tracking-widest">Call Us</h3>
                        <p className="text-gray-400 font-light leading-relaxed">
                            +91 98765 43210
                        </p>
                    </div>

                    {/* Email Us */}
                    <div className="flex flex-col items-center text-center space-y-4 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-500">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500/20 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                            <Mail className="w-6 h-6" />
                        </div>
                        <h3 className="text-white font-display text-xl font-bold uppercase tracking-widest">Email Us</h3>
                        <p className="text-gray-400 font-light leading-relaxed">
                            hello@mannheimbrewery.com
                        </p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
