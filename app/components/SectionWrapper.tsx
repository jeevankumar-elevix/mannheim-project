import React from 'react';
import Image from 'next/image';

interface SectionWrapperProps {
    id: string;
    title: string;
    titleImage?: string;
    titleImageClassName?: string;
    hideTitle?: boolean;
    noCard?: boolean;
    bgImage?: string;
    children?: React.ReactNode;
    className?: string;
}

export default function SectionWrapper({
    id,
    title,
    titleImage,
    titleImageClassName = "h-24 md:h-40 lg:h-40",
    hideTitle = false,
    noCard = false,
    bgImage,
    children,
    className = ""
}: SectionWrapperProps) {
    return (
        <section id={id} className={`min-h-screen flex flex-col justify-center items-center py-20 px-4 relative overflow-hidden ${className}`}>
            {bgImage && (
                <div className="absolute inset-0 z-0">
                    <img
                        src={bgImage}
                        alt=""
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
            )}
            <div className="max-w-7xl w-full flex flex-col items-center relative z-10">
                {!hideTitle && (
                    titleImage ? (
                        <div className="mb-12">
                            <Image
                                src={titleImage}
                                alt={title}
                                width={800}
                                height={200}
                                className={`${titleImageClassName} w-auto object-contain`}
                            />
                        </div>
                    ) : (
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center tracking-tight uppercase font-display">
                            {title}
                        </h2>
                    )
                )}

                {noCard ? (
                    <div className="w-full relative z-10">
                        {children || <span className="text-gray-500 text-lg font-light tracking-widest">CONTENT COMING SOON</span>}
                    </div>
                ) : (
                    <div className="w-full min-h-[500px] h-auto p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#1e1e1e] via-[#252525] to-[#121212] border border-white/5 shadow-2xl flex flex-col items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-orange-500/10 opacity-50" />
                        {children || <span className="text-gray-500 text-lg font-light tracking-widest">CONTENT COMING SOON</span>}
                    </div>
                )}
            </div>
        </section>
    );
}
