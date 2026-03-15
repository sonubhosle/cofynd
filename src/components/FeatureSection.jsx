"use client";

import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

const FeatureSection = () => {
  const logos = [
    { name: 'CredAble', src: 'https://img.cofynd.com/images/latest_images_2024/2d079ea9be17a895f4b55989ebf49e49d7a0ca26.webp' },

  ];

  return (
    <section className="relative bg-blue-600 overflow-hidden flex flex-col pt-16">
      <div className="w-full px-4  flex flex-col lg:flex-row gap-8 lg:gap-12 relative z-10 grow">

        {/* Left Side: Overlapping Cards */}
        <div className="w-full lg:flex-1 relative h-[380px] sm:min-h-[500px] mx-auto max-w-[500px] lg:max-w-none">
          {/* Card 1: Coworking */}
          <div className="absolute top-0 left-0 sm:left-4 w-[260px] sm:w-[300px] bg-white rounded-3xl shadow-2xl overflow-hidden transform z-10">
            <div className="relative h-40 sm:h-48 p-2 ">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400"
                alt="WeWork"
                fill
                className="object-cover rounded-3xl"
              />
              <span className="absolute top-5 left-5 bg-white/90 px-3 py-1 rounded-full text-[10px] font-bold text-slate-800">Coworking</span>
            </div>
            <div className="p-4 sm:p-5">
              <h3 className="font-bold text-base sm:text-lg text-slate-800">WeWork Forum</h3>
              <p className="text-slate-400 text-xs sm:text-sm">DLF Cyber City, Gurugram</p>
              <p className="mt-2 font-bold text-slate-800 text-base sm:text-lg">₹ 28,000/<span className="text-xs sm:text-sm font-normal text-slate-400 ml-1">month</span></p>
            </div>
          </div>

          {/* Card 2: Coliving */}
          <div className="absolute top-20 sm:top-23 right-0 lg:left-32 xl:left-48 lg:right-auto w-[260px] sm:w-[300px] bg-white rounded-3xl shadow-2xl overflow-hidden transform z-20">
            <div className="relative h-40 sm:h-48 p-2">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400"
                alt="Stanza Living"
                fill
                className="object-cover rounded-3xl"
              />
              <span className="absolute top-5 left-5 bg-white/90 px-3 py-1 rounded-full text-[10px] font-bold text-slate-800">Coliving</span>
            </div>
            <div className="p-4 sm:p-5">
              <h3 className="font-bold text-base sm:text-lg text-slate-800">Stanza Living Dunkirk House</h3>
              <p className="text-slate-400 text-xs sm:text-sm">sector 48, Gurgaon</p>
              <p className="mt-2 font-bold text-slate-800 text-base sm:text-lg">₹ 11,799/<span className="text-xs sm:text-sm font-normal text-slate-400 ml-1">month</span></p>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:flex-1 text-white lg:pt-10 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-light tracking-wide mb-4">
            Boost your
            <span className="font-medium "> Revenue, Visibility & Leads </span>
            with <br className="hidden sm:block" /> Cofynd Plans
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-light mb-8">
            India's <span className="font-bold">#1 online platform</span> for Coworking & <br className="hidden sm:block" /> Coliving Spaces
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-20 lg:mb-0">
            <button className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base border border-white rounded-lg font-light hover:bg-white hover:text-blue-600 transition-colors">
              List Your Space
            </button>
            <button className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base border border-white rounded-lg font-light hover:bg-white hover:text-blue-600 transition-colors">
              Business Plans
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Wave-like bottom element */}
      <div className="w-full flex lg:h-[300px] flex-col lg:flex-row items-center lg:items-end mt-12 lg:mt-0">
        {/* Left Side: Statistics in blue area */}
        <div className="w-full lg:flex-1 pb-8 lg:pb-10 px-4 md:px-8">
          <div className="max-w-[1400px] mx-auto flex justify-center lg:justify-start gap-6 sm:gap-12 text-white">
            <div className="text-center lg:text-left">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold">100,000+</p>
              <p className="text-xs sm:text-sm md:text-base opacity-90">Live Spaces</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold">1,000+</p>
              <p className="text-xs sm:text-sm md:text-base opacity-90">Locations</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold">25+</p>
              <p className="text-xs sm:text-sm md:text-base opacity-90">Cities</p>
            </div>
          </div>
        </div>

        {/* Right Side: White curved container with Carousel */}
        <div className="flex bg-white lg:rounded-tl-[100px] px-6 sm:px-12 py-6 w-full lg:w-[45%] flex-col justify-center items-center lg:items-start">
          <div className="flex items-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-sm font-bold text-slate-800 mb-4 text-center lg:text-left">Trusted by more than 500+ Companies</p>

          {/* Infinite Carousel using simple CSS animation */}
          <div className="overflow-hidden relative group mt-3 sm:mt-5 w-full">
            <div className="flex gap-8 sm:gap-12 animate-scroll w-max">
              {[...logos, ...logos].map((logo, index) => (
                <div key={index} className="shrink-0 transition-all relative h-8 sm:h-10 w-32">
                  <Image src={logo.src} alt={logo.name} fill className="object-contain" sizes="128px" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default FeatureSection;
