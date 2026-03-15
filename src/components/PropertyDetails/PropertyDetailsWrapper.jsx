"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Star, Share2, Heart, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import Breadcrumbs from '../Breadcrumbs';
import Gallery from './Gallery';
import SeatingPlans from './SeatingPlans';
import InquiryForm from './InquiryForm';
import Amenities from './Amenities';
import OfficeTiming from './OfficeTiming';
import UpgradeBanner from './UpgradeBanner';
import WhyBook from './WhyBook';
import PropertyCard from '../PropertyCard';
import { SectionHeader } from '../SectionHeader';
import QuoteModal from '../QuoteModal';

const PropertyDetailsWrapper = ({ slug }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [shouldShakeForm, setShouldShakeForm] = useState(false);

  const formRef = useRef(null);
  const sliderRef = useRef(null);

  const handleEnquireClick = () => {
    setShouldShakeForm(true);
  };
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const scrollSlider = (direction) => {
    if (!sliderRef.current) return;
    const scrollAmount = direction === 'left' ? -sliderRef.current.offsetWidth : sliderRef.current.offsetWidth;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // Mock data for Canyon Workspace
  const property = {
    name: "Canyon Workspace",
    rating: 4.6,
    location: "Thorapakkam, Chennai",
    type: "Coworking",
    price: "5,999"
  };

  const nearbySpaces = Array.from({ length: 8 }, (_, i) => ({
    id: 200 + i,
    name: i % 2 === 0 ? "Work Ez" : i % 3 === 0 ? "IndiQube Alpine" : "Cofynd Hub",
    location: "Thorapakkam, Chennai",
    price: (6000 + i * 500).toLocaleString(),
    rating: (4.5 + (i % 5) / 10).toFixed(1),
    badge: i % 2 === 0 ? "Premium" : "Popular",
    image: [
      `https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800`,
      `https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=800`
    ][i % 2]
  }));

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 py-6">
        {/* Breadcrumbs */}
        <Breadcrumbs cityName={property.name} type={property.type} />

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
          <div>
            <h1 className="text-xl font-semibold text-slate-800 mb-2 leading-tight">{property.name}</h1>
            <div className="flex items-center gap-2 text-slate-600 font-medium">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-bold">{property.rating}</span>
              </div>
              <span className="text-slate-300">|</span>
              <span className="text-sm font-light">{property.location}</span>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <span className="text-[13px] font-bold text-[#2d2e2e]">Starting</span>
            <div className="flex items-baseline gap-1">
              <span className="text-[28px] font-black text-[#0070f3]">₹{property.price}/*</span>
              <span className="text-[15px] font-bold text-[#2d2e2e]">month</span>
            </div>
          </div>
        </div>


        {/* Gallery */}
        <Gallery />

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <SeatingPlans onEnquire={handleEnquireClick} />
            <UpgradeBanner onEnquire={handleEnquireClick} />
            <WhyBook onEnquire={handleEnquireClick} />

            <div className="mb-16 border-t border-slate-100 pt-12">
              <h2 className="text-xl  text-slate-950 mb-8">{property.name}</h2>
              <div className="prose prose-slate max-w-none text-slate-600 font-light leading-relaxed space-y-4">
                <p>Canyon Workspace is a premium coworking space located in the heart of Thorapakkam, Chennai. Designed for modern professionals, it offers a blend of productivity-focused environments and community-oriented spaces.
                  With high-speed internet, ergonomic furniture, and a host of premium amenities, Canyon Workspace provides everything a startup or enterprise needs to succeed.
                </p>

              </div>
            </div>

            <OfficeTiming />
            <Amenities />

            {/* Location Section */}
            <div className="mb-16 border-t border-slate-100 pt-12">
              <h2 className="text-xl  text-slate-950 mb-8">{property.name} Location</h2>
              <p className="text-slate-500 font-medium mb-8 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-500" />
                Thorapakkam, Chennai
              </p>
              <div className="w-full h-[300px] bg-slate-100 rounded-[40px] border-4 border-white shadow-xl overflow-hidden transition-all duration-700">
                {/* Static Placeholder for Map */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31108.40152306081!2d80.217346130117!3d12.936606318814126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525cfbde1d0251%3A0xcafd9a078a3c9270!2sThoraipakkam%2C%20Tamil%20Nadu%20600097!5e0!3m2!1sen!2sin!4v1773585361271!5m2!1sen!2sin" className='w-full' height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
            {/* Nearby Metro Station */}
            <div className="mb-16 border-t border-slate-100 pt-12">
              <h2 className="text-xl  text-slate-900 mb-6">Nearby Metro Station</h2>
              <div className="flex items-center ">
                <div className="flex items-center gap-4">
                  <Image src="https://cofynd.com/assets/images/icons/metro-icon.svg" alt="Google Maps" width={24} height={24} className="w-6 h-6" />
                  <span className="text-slate-800 ">Thorapakkam Metro Station </span>
                </div>
              </div>
            </div>

            {/* Bottom CTA Banner */}
            <div className="mb-16 border-t border-slate-100 pt-6">
              <div className="flex flex-col md:flex-row items-center justify-between p-5 rounded-xl bg-slate-50">
                <div className="flex items-center gap-6">
                  <Image src="https://cofynd.com/assets/images/icons/explore.svg" alt="" width={40} height={40} />
                  <div>
                    <h3 className="text-base  mb-1">Explore flexible workspace solutions just for you in {property.location}</h3>
                    <p className="text-slate-600 text-[13px] font-light">Zero pressure advice, recommendations and negotiations at no extra cost  </p>
                  </div>
                </div>
                <button
                  onClick={handleEnquireClick}
                  className="bg-blue-600 text-white  px-4 py-2 rounded-xl shadow-2xl   text-sm"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="relative" ref={formRef}>
            <InquiryForm
              shouldShake={shouldShakeForm}
              onShakeReset={() => setShouldShakeForm(false)}
            />
          </div>
        </div>

        {/* Nearby Spaces Section */}
        <div className="mt-6 border-t border-slate-100  py-15 group/nearby relative">
          <SectionHeader highlight="Top" rest={`Coworking Spaces in Chennai`} />

          <div className="relative mt-10">
            {/* Arrows */}
            <button
              onClick={() => scrollSlider('left')}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-2xl flex items-center justify-center text-slate-800 hover:bg-slate-50 transition-all opacity-0 group-hover/nearby:opacity-100 z-30 border border-slate-100 active:scale-90"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
            <button
              onClick={() => scrollSlider('right')}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-2xl flex items-center justify-center text-slate-800 hover:bg-slate-50 transition-all opacity-0 group-hover/nearby:opacity-100 z-30 border border-slate-100 active:scale-90"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            <div
              ref={sliderRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              className={`flex overflow-x-auto gap-8 pb-10 scrollbar-hide snap-x transition-all ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
            >
              {nearbySpaces.map((space) => (
                <div key={space.id} className="min-w-[320px] max-w-[320px] snap-start">
                  <PropertyCard
                    space={space}
                    onGetQuote={() => setIsQuoteModalOpen(true)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Explore Top Coworking Locations in Chennai */}
        <div className="border-t border-slate-100 py-15">
          <SectionHeader highlight="Explore" rest={`Top Coworking Locations in Chennai`} />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-10">
            {["Guindy", "OMR", "Adyar", "Perungudi", "T. Nagar", "Velachery", "Ambattur", "Nungambakkam", "Porur", "Mount Road"].map((loc) => (
              <div key={loc} className="relative aspect-video rounded-[32px] overflow-hidden group cursor-pointer border border-slate-100 shadow-sm">
                <Image 
                  src={`https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400`} 
                  alt={loc} 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" 
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                  <h4 className="text-white font-black text-center text-sm uppercase tracking-widest">{loc}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </div>
  );
};

export default PropertyDetailsWrapper;
