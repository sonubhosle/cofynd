"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Star, Crown, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const PropertyCard = ({ space, onGetQuote }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mocking 5 images for the carousel if not provided
  const images = space.images || [
    space.image,
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1497215784101-39700393076b?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=800"
  ];

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const index = Math.round(scrollRef.current.scrollLeft / scrollRef.current.offsetWidth);
    setCurrentImageIndex(index);
  };

  const scrollToImage = (index) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({
      left: index * scrollRef.current.offsetWidth,
      behavior: 'smooth'
    });
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const propertySlug = space.slug || space.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

  return (
    <div
      className="group bg-white border border-slate-50 p-2 rounded-[32px] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsDragging(false);
      }}
    >
      <Link href={`/coworking/${propertySlug}`} className="block">
        {/* Image Container with Carousel */}
        <div className="relative aspect-4/3 rounded-[32px] overflow-hidden mb-4  bg-slate-50 group">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            className="flex h-full w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing touch-pan-x"
          >
            {images.map((img, idx) => (
              <div key={idx} className="shrink-0 w-full h-full snap-center select-none relative">
                <Image
                  src={img}
                  alt={`${space.name} - ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 pointer-events-none"
                  sizes="(max-width: 768px) 100vw, 320px"
                  priority={idx === 0}
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className={`absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between items-center pointer-events-none transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                scrollToImage(currentImageIndex - 1);
              }}
              disabled={currentImageIndex === 0}
              className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md pointer-events-auto hover:bg-white transition-all active:scale-90 disabled:opacity-0"
            >
              <ChevronLeft className="w-5 h-5 text-slate-800" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                scrollToImage(currentImageIndex + 1);
              }}
              disabled={currentImageIndex === images.length - 1}
              className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md pointer-events-auto hover:bg-white transition-all active:scale-90 disabled:opacity-0"
            >
              <ChevronRight className="w-5 h-5 text-slate-800" />
            </button>
          </div>

          {/* Indicators Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${currentImageIndex === idx ? 'w-4 bg-white shadow-sm' : 'w-1.5 bg-white/50'}`}
              />
            ))}
          </div>

          {/* Badge */}
          {space.badge && (
            <div className={`absolute top-4 left-4 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm border border-white z-10 ${space.badge === 'Premium' ? 'bg-amber-50/95 text-amber-600' : 'bg-blue-50/95 text-blue-600'
              }`}>
              <div className={`w-4 h-4 rounded-sm flex items-center justify-center ${space.badge === 'Premium' ? 'bg-amber-500' : 'bg-blue-500'
                }`}>
                {space.badge === 'Premium' ? (
                  <Crown className="w-3 h-3 text-white fill-white" />
                ) : (
                  <Star className="w-3 h-3 text-white fill-white" />
                )}
              </div>
              <span className="text-[11px] font-extrabold tracking-wider uppercase">{space.badge}</span>
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="px-1">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="text-[17px] font-bold text-slate-900 leading-snug line-clamp-1 flex-1">
              {space.name}
            </h3>
            <div className="flex items-center gap-1 shrink-0 mt-0.5">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-sm font-bold text-slate-800">{space.rating}</span>
            </div>
          </div>

          <p className="text-slate-500 text-[14px] font-medium mb-3 line-clamp-1">
            {space.location}
          </p>
        </div>
      </Link>

      {/* Price and CTA - Outside of Link */}
      <div className="px-1 flex items-center justify-between mt-1">
        <div className="flex flex-col">
          <span className="text-[18px] font-bold text-slate-900 tracking-tight">
            ₹{space.price} <span className="text-[14px] text-slate-500 font-normal">/ month</span>
          </span>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onGetQuote();
          }}
          className="bg-[#0084FF] hover:bg-[#0073e6] text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all shadow-lg shadow-blue-100 active:scale-95 z-20"
        >
          Get Quote
        </button>
      </div>
    </div>

  );
};

export default PropertyCard;
