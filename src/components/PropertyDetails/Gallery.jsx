"use client";

import React from 'react';
import Image from 'next/image';
import { Crown, Share2, Grid } from 'lucide-react';

const Gallery = ({ images = [] }) => {
  // Mock images based on the screenshot vibe
  const displayImages = images.length >= 4 ? images : [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200", // Main left
    "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=600",  // Top middle
    "https://images.unsplash.com/photo-1631193816258-28b44b21e78b?q=80&w=870&auto=format&fit=crop",  // Bottom middle
    "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=600"   // Right tall
  ];

  return (
    <div className="relative mb-12">
      <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[550px]">
        {/* Left Side - Large Image */}
        <div className="flex-2 relative rounded-[28px] overflow-hidden aspect-video md:aspect-auto">
          <Image
            src={displayImages[0]}
            alt="Main Office View"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />

          {/* Premium Badge */}
          <div className="absolute top-6 left-6 flex items-center gap-2 bg-white px-5 py-2.5 rounded-2xl shadow-sm border border-slate-100">
            <Crown className="w-5 h-5 text-amber-500 fill-amber-500" />
            <span className="text-[15px] font-bold text-slate-800">Premium</span>
          </div>
        </div>

        {/* Middle Side - Two Stacked Images */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex-1 rounded-[28px] overflow-hidden aspect-video md:aspect-auto relative">
            <Image
              src={displayImages[1]}
              alt="Conference Room"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>
          <div className="flex-1 rounded-[28px] overflow-hidden aspect-video md:aspect-auto relative">
            <Image
              src={displayImages[2]}
              alt="Office View 2"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>
        </div>

        {/* Right Side - One Tall Image */}
        <div className="flex-1 relative rounded-[28px] overflow-hidden aspect-3/4 md:aspect-auto">
          <Image
            src={displayImages[3]}
            alt="Office View 3"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 25vw"
          />

          {/* Share Button */}
          <button className="absolute top-6 right-6 p-2.5 bg-white/90 backdrop-blur-md rounded-full shadow-sm hover:bg-white transition-all transform hover:scale-110">
            <Share2 className="w-5 h-5 text-slate-800" />
          </button>

          {/* View All Photos Button */}
          <button className="absolute bottom-6 right-6 flex items-center gap-2 bg-white/95 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg hover:bg-white transition-all transform hover:-translate-y-1">
            <Grid className="w-5 h-5 text-slate-800" />
            <span className="text-[14px] font-semibold text-slate-900">View All Photos</span>
          </button>
        </div>
      </div>
    </div>

  );
};

export default Gallery;

