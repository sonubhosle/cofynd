import React from 'react';
import Image from 'next/image';
import { UserCheck, ShieldCheck, Ban, Headset, Tag } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

const FeatureItem = ({ icon, text }) => (
    <div className="flex items-center mb-8">
        <div className="relative flex items-center justify-center w-10 h-10 mr-6 shrink-0">
            <div className="absolute bottom-0 right-0 w-5 h-5 bg-[#FFEA75] rounded-full z-0"></div>
            <div className="relative z-10 text-slate-700">
                {icon}
            </div>
        </div>
        <span className="text-slate-600 text-[17px]">{text}</span>
    </div>
);

export const WhatYouGet = () => {
    return (
        <section className="hidden sm:block w-full overflow-hidden py-16 bg-white">
            <SectionHeader highlight={'Featured'} rest={'Coliving'} />
            <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center">

                {/* Left Side - Image */}
                <div className="w-full lg:w-1/2 relative h-[400px] sm:h-[500px] lg:h-[700px] mb-12 lg:mb-0 flex items-center z-0">
                    {/* Pale yellow semi-circle on the left */}
                    <div className="absolute left-[5%] lg:left-[10%] top-1/2 -translate-y-1/2 h-[50%] aspect-1/2 bg-[#FFF2B2] rounded-l-full z-0"></div>

                    {/* The Image Container */}
                    <div className="absolute left-[35%] lg:left-[40%] top-1/2 -translate-y-1/2 h-[90%] aspect-1/2 rounded-r-full overflow-hidden shadow-sm z-10">
                        <Image
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                            alt="Coworking Space"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-[5%] left-[80%] w-1.5 h-16 bg-[#FFE87A] rotate-30 rounded-full z-0"></div>
                    <div className="absolute bottom-[5%] right-[20%] w-20 h-20 bg-[#FFF2B2] rounded-full z-0"></div>
                </div>

                {/* Right Side - Content */}
                <div className="w-full lg:w-1/2 px-6 sm:px-12 lg:px-24 flex flex-col items-center lg:items-start">
                    <SectionHeader highlight={'What'} rest={'You Get From Us'} />

                    <div className="flex flex-col w-full max-w-md">
                        <FeatureItem icon={<UserCheck className="w-6 h-6" strokeWidth={1.5} />} text="Exclusive pricing for CoFynd members" />
                        <FeatureItem icon={<ShieldCheck className="w-6 h-6" strokeWidth={1.5} />} text="Verified Spaces and Trusted Partners" />
                        <FeatureItem icon={<Ban className="w-6 h-6" strokeWidth={1.5} />} text="No booking service fee" />
                        <FeatureItem icon={<Headset className="w-6 h-6" strokeWidth={1.5} />} text="100% offline support" />
                        <FeatureItem icon={<Tag className="w-6 h-6" strokeWidth={1.5} />} text="Exclusive Brand Coupon Codes" />
                    </div>
                </div>

            </div>
        </section>
    );
};
