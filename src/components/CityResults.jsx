"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown, Search, MapPin, SlidersHorizontal, LayoutGrid, List, ChevronLeft, ChevronRight, X, Star, Crown } from 'lucide-react';
import QuoteModal from './QuoteModal';
import SkeletonCard from './SkeletonCard';
import PropertyCard from './PropertyCard';
import Breadcrumbs from './Breadcrumbs';
import Link from 'next/link';

const locations = [
  "Udyog Vihar", "Sector 44", "Sohna Road", "MG Road Gurugram", "Golf Course Road",
  "DLF Cyber City", "Unitech Cyber Park", "Cyber Hub", "Golf Course Extension Road",
  "Cyber City", "Huda City Centre", "Sector 18", "Sector 29", "Sushant Lok", "Sector 39"
];

const prices = [
  "Below ₹5,000", "₹5,000 - ₹10,000", "₹10,000 - ₹15,000", "₹15,000 - ₹20,000", "Above ₹20,000"
];

const sortOptions = [
  "Popularity", "Price: Low to High", "Price: High to Low"
];

const workspaceImages = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c",
  "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2",
  "https://images.unsplash.com/photo-1497215842964-22244f7752e5",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
  "https://images.unsplash.com/photo-1504384308090-c89bfaaa538d",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
  "https://images.unsplash.com/photo-1531973576160-7125cd663d86",
  "https://images.unsplash.com/photo-1497215784101-39700393076b",
  "https://images.unsplash.com/photo-1431540015161-0bf868a2d407"
];

const mockSpaces = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  name: i % 3 === 0 ? "IndiQube Vatika" : i % 2 === 0 ? "Innov8 Cyber" : "WeWork Blue",
  location: locations[i % locations.length] + ", Gurgaon",
  price: (5000 + (i * 200)).toLocaleString(),
  rating: (4 + (i % 10) / 10).toFixed(1),
  badge: i % 2 === 0 ? "Premium" : "Popular",
  image: `${workspaceImages[i % workspaceImages.length]}?auto=format&fit=crop&q=80&w=800`,
}));

const featuredSpaces = [
  {
    id: 101,
    name: "Urban Vault",
    location: "HSR Layout, Bangalore",
    price: "8,000",
    rating: 4.7,
    badge: "Premium",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 102,
    name: "Hustlehub",
    location: "Koramangala, Bangalore",
    price: "7,500",
    rating: 4.6,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 103,
    name: "IndiQube",
    location: "Whitefield, Bangalore",
    price: "9,500",
    rating: 4.8,
    badge: "Premium",
    image: "https://images.unsplash.com/photo-1497215842964-22244f7752e5?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 104,
    name: "BHive",
    location: "Indiranagar, Bangalore",
    price: "10,000",
    rating: 4.9,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
  }
];

const topLocations = [
  { name: "Gachibowli", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
  { name: "Hitech City", image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=800" },
  { name: "Madhapur", image: "https://images.unsplash.com/photo-1497215842964-22244f7752e5?auto=format&fit=crop&q=80&w=800" },
  { name: "Kondapur", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" },
  { name: "Begumpet", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800" },
  { name: "Banjara Hills", image: "https://images.unsplash.com/photo-1504384308090-c89bfaaa538d?auto=format&fit=crop&q=80&w=800" },
  { name: "Kukatpally", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
  { name: "Secunderabad", image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=800" },
  { name: "Financial District", image: "https://images.unsplash.com/photo-1497215842964-22244f7752e5?auto=format&fit=crop&q=80&w=800" },
  { name: "Ameerpet", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" }
];

const CityResults = ({ params, type }) => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedSort, setSelectedSort] = useState('Popularity');
  const [tempLocation, setTempLocation] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const dropdownRef = useRef(null);
  const sliderRef = useRef(null);
  const scrollRefLocs = useRef(null);
  const scrollRefFeatured = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const [isDraggingFeatured, setIsDraggingFeatured] = useState(false);
  const [startXFeatured, setStartXFeatured] = useState(0);
  const [scrollLeftFeatured, setScrollLeftFeatured] = useState(0);

  const params_data = params;
  const city = params_data?.slug || params_data?.city;
  const cityName = city ? city.charAt(0).toUpperCase() + city.slice(1) : "Gurgaon";

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFilterApply = () => {
    setIsLoading(true);
    setSelectedLocation(tempLocation);
    setActiveDropdown(null);
    setIsMobileFilterOpen(false);
    setCurrentPage(1);
    setTimeout(() => setIsLoading(false), 800);
  };

  const handleReset = () => {
    setTempLocation('');
    setSelectedLocation('');
    setSelectedPrice('');
    setSelectedSort('Popularity');
    setIsMobileFilterOpen(false);
    setIsLoading(true);
    setCurrentPage(1);
    setTimeout(() => setIsLoading(false), 800);
  };

  const filteredSpaces = mockSpaces.filter(space => {
    const locationMatch = !selectedLocation || space.location.toLowerCase().includes(selectedLocation.toLowerCase());

    let priceMatch = true;
    if (selectedPrice) {
      const priceNum = parseInt(space.price.replace(/,/g, ''));
      if (selectedPrice === "Below ₹5,000") priceMatch = priceNum < 5000;
      else if (selectedPrice === "₹5,000 - ₹10,000") priceMatch = priceNum >= 5000 && priceNum <= 10000;
      else if (selectedPrice === "₹10,000 - ₹15,000") priceMatch = priceNum > 10000 && priceNum <= 15000;
      else if (selectedPrice === "₹15,000 - ₹20,000") priceMatch = priceNum > 15000 && priceNum <= 20000;
      else if (selectedPrice === "Above ₹20,000") priceMatch = priceNum > 20000;
    }

    return locationMatch && priceMatch;
  }).sort((a, b) => {
    if (selectedSort === "Price: Low to High") {
      return parseInt(a.price.replace(/,/g, '')) - parseInt(b.price.replace(/,/g, ''));
    }
    if (selectedSort === "Price: High to Low") {
      return parseInt(b.price.replace(/,/g, '')) - parseInt(a.price.replace(/,/g, ''));
    }
    if (selectedSort === "Ratings") {
      return b.rating - a.rating;
    }
    return 0;
  });

  const totalPages = Math.ceil(filteredSpaces.length / itemsPerPage);
  const currentItems = filteredSpaces.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setIsLoading(true);
    setCurrentPage(page);
    window.scrollTo({ top: sliderRef.current ? sliderRef.current.offsetTop - 100 : 0, behavior: 'smooth' });
    setTimeout(() => setIsLoading(false), 800);
  };

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

  const handleMouseDownFeatured = (e) => {
    setIsDraggingFeatured(true);
    setStartXFeatured(e.pageX - scrollRefFeatured.current.offsetLeft);
    setScrollLeftFeatured(scrollRefFeatured.current.scrollLeft);
  };

  const handleMouseMoveFeatured = (e) => {
    if (!isDraggingFeatured) return;
    e.preventDefault();
    const x = e.pageX - scrollRefFeatured.current.offsetLeft;
    const walk = (x - startXFeatured) * 2;
    scrollRefFeatured.current.scrollLeft = scrollLeftFeatured - walk;
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="max-w-[1400px] mx-auto px-6 pt-10 pb-6">
        <Breadcrumbs cityName={cityName} type={type} />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            {type} Space In {cityName}
          </h1>

          <div className="hidden md:flex items-center gap-4" ref={dropdownRef}>
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'location' ? null : 'location')}
                className={`flex items-center gap-2 px-5 py-2.5 bg-white border rounded-xl text-slate-700 font-semibold transition-all hover:bg-slate-50 ${activeDropdown === 'location' ? 'border-blue-500 ring-2 ring-blue-50' : 'border-slate-200'}`}
              >
                <span>{selectedLocation || 'Popular Locations'}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'location' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'location' && (
                <div className="absolute top-full left-0 mt-2 w-[450px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex flex-wrap gap-2 mb-6 max-h-[300px] overflow-y-auto scrollbar-hide">
                    {locations.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => setTempLocation(loc)}
                        className={`px-4 py-2 rounded-lg border text-[13px] font-semibold transition-all ${tempLocation === loc ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'}`}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center justify-end gap-4 pt-4 border-t border-slate-50">
                    <button
                      onClick={() => { setTempLocation(''); setSelectedLocation(''); setActiveDropdown(null); }}
                      className="text-slate-400 font-bold hover:text-slate-700 transition-colors"
                    >
                      Reset
                    </button>
                    <button
                      onClick={handleFilterApply}
                      className="bg-blue-600 text-white px-8 py-2.5 rounded-xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'price' ? null : 'price')}
                className={`flex items-center gap-2 px-5 py-2.5 bg-white border rounded-xl text-slate-700 font-semibold transition-all hover:bg-slate-50 ${activeDropdown === 'price' ? 'border-blue-500 ring-2 ring-blue-50' : 'border-slate-200'}`}
              >
                <span>{selectedPrice || 'Select Price'}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'price' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'price' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {prices.map((price) => (
                    <button
                      key={price}
                      onClick={() => { setSelectedPrice(price); setActiveDropdown(null); setIsLoading(true); setTimeout(() => setIsLoading(false), 800); }}
                      className={`w-full px-6 py-2.5 text-left text-sm font-semibold transition-colors hover:bg-slate-50 ${selectedPrice === price ? 'text-blue-600 bg-blue-50' : 'text-slate-700'}`}
                    >
                      {price}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'sort' ? null : 'sort')}
                className={`flex items-center gap-2 px-5 py-2.5 bg-white border rounded-xl text-slate-700 font-semibold transition-all hover:bg-slate-50 ${activeDropdown === 'sort' ? 'border-blue-500 ring-2 ring-blue-50' : 'border-slate-200'}`}
              >
                <span>{selectedSort}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'sort' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'sort' && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => { setSelectedSort(opt); setActiveDropdown(null); setIsLoading(true); setTimeout(() => setIsLoading(false), 800); }}
                      className={`w-full px-6 py-2.5 text-left text-sm font-semibold transition-colors hover:bg-slate-50 ${selectedSort === opt ? 'text-blue-600 bg-blue-50' : 'text-slate-700'}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="md:hidden flex items-center justify-center gap-2 w-full bg-white border border-slate-200 rounded-xl py-3 text-slate-700 font-bold shadow-sm active:scale-95 transition-all"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
        </div>

        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide mb-10 cursor-grab active:cursor-grabbing select-none touch-pan-x"
        >
          {locations.map((loc) => (
            <button
              key={loc}
              onMouseDown={(e) => e.stopPropagation()}
              onClick={() => {
                if (selectedLocation === loc) {
                  setSelectedLocation('');
                } else {
                  setIsLoading(true);
                  setSelectedLocation(loc);
                  setTempLocation(loc);
                  setTimeout(() => setIsLoading(false), 800);
                }
              }}
              className={`shrink-0 px-6 py-2 rounded-xl border text-[13px] font-bold transition-all ${selectedLocation === loc ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-100' : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'}`}
            >
              {loc}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-6">
          {isLoading ? (
            Array(8).fill(0).map((_, i) => <SkeletonCard key={i} />)
          ) : currentItems.length > 0 ? (
            <>
              {currentItems.slice(0, 8).map((space) => (
                <PropertyCard
                  key={space.id}
                  space={space}
                  onGetQuote={() => setIsModalOpen(true)}
                />
              ))}

              {/* Featured Spaces Carousel within Grid */}
              {currentItems.length >= 8 && (
                <div className="col-span-full py-12">
                  <div className="bg-[#FFF9EA] rounded-[40px] p-8 md:p-12 relative group/featured">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-2xl font-bold text-slate-900 px-1">Featured Spaces</h3>
                      <button className="text-[#0084FF] font-bold hover:underline px-1">View All</button>
                    </div>

                    <div className="relative">
                      <div
                        ref={scrollRefFeatured}
                        onMouseDown={handleMouseDownFeatured}
                        onMouseMove={handleMouseMoveFeatured}
                        onMouseUp={() => setIsDraggingFeatured(false)}
                        onMouseLeave={() => setIsDraggingFeatured(false)}
                        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none scroll-smooth"
                      >
                        {featuredSpaces.map((space) => (
                          <div key={space.id} className="min-w-[280px] md:min-w-[320px] lg:min-w-[330px] snap-center">
                            <PropertyCard
                              space={space}
                              onGetQuote={() => setIsModalOpen(true)}
                            />
                          </div>
                        ))}
                      </div>

                      {/* Carousel Arrows */}
                      <button
                        onClick={() => {
                          const container = scrollRefFeatured.current;
                          if (container) container.scrollBy({ left: -container.offsetWidth, behavior: 'smooth' });
                        }}
                        className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-slate-800 hover:bg-slate-50 transition-all opacity-0 group-hover/featured:opacity-100 z-10 md:flex border border-slate-100 active:scale-90"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={() => {
                          const container = scrollRefFeatured.current;
                          if (container) container.scrollBy({ left: container.offsetWidth, behavior: 'smooth' });
                        }}
                        className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-slate-800 hover:bg-slate-50 transition-all opacity-0 group-hover/featured:opacity-100 z-10 md:flex border border-slate-100 active:scale-90"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {currentItems.slice(8).map((space) => (
                <PropertyCard
                  key={space.id}
                  space={space}
                  onGetQuote={() => setIsModalOpen(true)}
                />
              ))}
            </>
          ) : (
            <div className="col-span-full py-20 text-center">
              <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-10 h-10 text-slate-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No results found</h3>
              <p className="text-slate-500 mb-8">Try adjusting your filters to find what you're looking for.</p>
              <button
                onClick={handleReset}
                className="bg-blue-600 text-white px-8 py-2.5 rounded-xl font-bold shadow-lg shadow-blue-100"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>

        {/* CTA Banner & Pagination */}
        {filteredSpaces.length > 0 && !isLoading && (
          <div className="mt-20">
            {/* CTA Banner */}
            <div className="relative w-full rounded-[32px] overflow-hidden mb-12 bg-linear-to-r from-[#E3F2FF] via-[#E3F2FF] to-transparent">
              <div className="px-8 md:px-12 py-10 md:py-14 max-w-[600px] relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  Still not able to find coworking space?
                </h2>
                <p className="text-slate-700 font-medium mb-8 text-lg">
                  Our space experts will help you find the perfect coworking space in prime locations
                </p>
                <button className="bg-[#0084FF] text-white font-bold px-10 py-4 rounded-2xl shadow-lg shadow-blue-100 hover:bg-[#0073e6] transition-all active:scale-95">
                  Enquire Now
                </button>
              </div>

              {/* Optional Background Illustration/Image */}
              <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                  alt="CTA Background"
                  fill
                  className="object-cover opacity-80"
                  style={{ maskImage: 'linear-gradient(to left, black 60%, transparent)' }}
                  sizes="50vw"
                />
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center">
              <div className="flex items-center border border-slate-200 rounded-xl bg-white overflow-hidden ">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-6 py-2 text-sm  text-slate-700 hover:bg-slate-50 disabled:opacity-30 disabled:hover:bg-transparent transition-all border-r border-slate-100"
                >
                  Prev
                </button>

                <div className="flex">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`
                        w-12 h-10 flex items-center justify-center text-sm  transition-all
                        ${currentPage === page
                          ? 'bg-[#0084FF] text-white shadow-lg shadow-blue-100'
                          : 'text-slate-700 hover:bg-slate-50'}
                      `}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-6 py-2 text-sm  text-slate-700 hover:bg-slate-50 disabled:opacity-30 disabled:hover:bg-transparent transition-all border-l border-slate-100"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Explore Top Locations Section */}

      </div>

      <div className="mt-24 bg-[#FFF9EA] px-6 py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 md:mb-12 px-1 text-center md:text-left">
            Explore Top Coworking Locations in {cityName}
          </h2>

          {/* Desktop Grid / Mobile Carousel */}
          <div className="relative group/locs">
            <div
              ref={scrollRefLocs}
              className="flex md:grid md:grid-cols-5 gap-6 overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory scroll-smooth scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0"
            >
              {topLocations.map((loc, idx) => (
                <div
                  key={idx}
                  className="shrink-0 w-full md:w-full snap-center md:snap-align-none"
                >
                  <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all group/card h-full">
                    <div className="aspect-16/10 overflow-hidden relative">
                      <Image
                        src={loc.image}
                        alt={loc.name}
                        fill
                        className="object-cover group-hover/card:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 20vw"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-[15px] font-bold text-slate-800 mb-1">
                        Coworking Space in {loc.name}
                      </h3>
                      <button className="text-[#0084FF] text-sm font-bold hover:underline">
                        Explore Spaces
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Navigation Arrows (Mobile Only) */}
            <button
              onClick={() => {
                const container = scrollRefLocs.current;
                if (container) container.scrollBy({ left: -container.offsetWidth, behavior: 'smooth' });
              }}
              className="flex md:hidden absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-slate-100 items-center justify-center text-slate-700 active:scale-95 z-10 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => {
                const container = scrollRefLocs.current;
                if (container) container.scrollBy({ left: container.offsetWidth, behavior: 'smooth' });
              }}
              className="flex md:hidden absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-slate-100 items-center justify-center text-slate-700 active:scale-95 z-10 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {isMobileFilterOpen && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-100 md:hidden animate-in fade-in duration-300">
            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[32px] p-6 animate-in slide-in-from-bottom duration-500">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-slate-900">Filters</h2>
                <button onClick={() => setIsMobileFilterOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                  <X className="w-6 h-6 text-slate-400" />
                </button>
              </div>

              <div className="space-y-8 max-h-[70vh] overflow-y-auto pb-6 scrollbar-hide">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-4 px-1">Popular Locations</h3>
                  <div className="flex flex-wrap gap-2">
                    {locations.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => setTempLocation(loc)}
                        className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${tempLocation === loc ? 'bg-blue-600 border-blue-600 text-white shadow-lg' : 'bg-white border-slate-200 text-slate-700'}`}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-4 px-1">Select Price</h3>
                  <div className="flex flex-wrap gap-2">
                    {prices.map((price) => (
                      <button
                        key={price}
                        onClick={() => setSelectedPrice(price)}
                        className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${selectedPrice === price ? 'bg-blue-600 border-blue-600 text-white shadow-lg' : 'bg-white border-slate-200 text-slate-700'}`}
                      >
                        {price}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-4 px-1">Sort By</h3>
                  <div className="flex flex-wrap gap-2">
                    {sortOptions.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setSelectedSort(opt)}
                        className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${selectedSort === opt ? 'bg-blue-600 border-blue-600 text-white shadow-lg' : 'bg-white border-slate-200 text-slate-700'}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <button
                  onClick={handleReset}
                  className="flex-[0.4] py-3.5 border border-blue-600 text-blue-600 rounded-2xl font-bold active:scale-95 transition-all"
                >
                  Reset
                </button>
                <button
                  onClick={handleFilterApply}
                  className="flex-1 py-3.5 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-100 active:scale-95 transition-all"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}





      </div>

      {/* Detailed SEO Content Section - Image Based Information */}
      <div className="px-6 py-8">

        {/* 1. Intro Heading & Paragraphs */}
        <h2 className="text-lg font-semibold text-slate-900 mb-3">
          Coworking Space in {cityName} | Shared Office Space in {cityName}
        </h2>
        <div className="prose prose-slate max-w-none text-sm text-slate-700 font-light space-y-3 leading-relaxed mb-12">
          <p>Are you looking for a decent coworking space in Hyderabad? CoFynd it without a doubt!</p>
          <p>
            CoFynd is an online space discovery platform where you can search, compare, and book from more than 100,000 spaces. Our tech-enabled platform allows you to book a shared workspace for various sizes in all the popular locations of Hyderabad      </p>
          <p>
            Even If you are looking for coworking spaces in cities like {""}
            <Link href='/coworking/delhi' className="text-blue-600">Delhi</Link>,{""}
            <Link href='/coworking/gurgaon' className="text-blue-600">Gurgaon</Link>,{""}
            <Link href='/coworking/noida' className="text-blue-600">Noida</Link>,{""}
            <Link href='/coworking/mumbai' className="text-blue-600">Mumbai</Link>,{""}
            <Link href='/coworking/bangalore' className="text-blue-600">Bangalore</Link>,{""} and more, Cofynd has all the options available at zero brokerage.
          </p>
          <p>
            Hyderabad is one of the best cities in India for business purposes. It is brimming with several high-end shopping complexes, five-star restaurants, healthcare facilities, prestigious educational institutions, and other modern amenities. This city shows the perfect blend of both North Indian and South Indian cultures at its best. This is why people from all over the country are connected to Hyderabad for business requirements.
          </p>
          <p>
            This city offers convenient, well-designed, and fully-furnished shared workplaces equipped with high-speed internet, a pantry, 24x7 electricity, parking facilities, and a lot more. There are sophisticated and spacious event halls, conference rooms, training halls meeting rooms, etc. for diverse business needs.
          </p>
          <p>
            Top coworking brands in Hyderabad such as {""}
            <Link href='/brand/' className="text-blue-600">WeWork </Link>,{""}
            <Link href='/coworking/gurgaon' className="text-blue-600">Innov8</Link>,{""}
            <Link href='/coworking/noida' className="text-blue-600">AWFIS</Link>,{""}
            <Link href='/coworking/mumbai' className="text-blue-600">Mumbai</Link>,{""}
            and a lot more. You can book hot desks, dedicated desks, private cabins and day pass as per your budget and business needs. Hyderabad houses so many incubators, startups, and SMEs promising growth & development in the business world. That’s what increases the demand for coworking space in Hyderabad.
          </p>
        </div>

        {/* 2. Top Coworking Spaces in City */}
        <h3 className="text-xl font-semibold text-slate-900 mb-1">Top Coworking Spaces in {cityName}</h3>
        <p className='text-base font-semibold text-slate-900 mb-3'>Below is the list of some of the top coworking spaces in Hyderabad:-</p>
        <div className="prose prose-slate max-w-none text-sm text-slate-700 font-light space-y-1 leading-relaxed mb-12">
          <p>1. Awfis Lorven Tiara, Hyderabad</p>
          <p>2. 91springboard HITEC City, Hyderabad</p>
          <p>3. Cowrks Skyview, Hyderabad</p>
          <p>4. iKeva Madhapur, Hyderabad</p>
          <p>5. 91springboard Kondapur, Hyderabad</p>
          <p>6. The Hive Collaborative Gachibowli, Hyderabad</p>
          <p>7. WeWork Rajpushpa Summit, Hyderabad</p>
          <p>8. Lemon Tree Premier HITEC City, Hyderabad</p>
          <p>9. WeWork Krishe Emerald, Hyderabad</p>
          <p>10. DevX Hitec City, Hyderabad</p>
        </div>
        <div className="space-y-3">

          <div className='prose prose-slate max-w-none text-sm text-slate-700 font-light leading-relaxed'>
            1. <Link href="/coworking/awfis-lorven-tiara" className='text-blue-600 font-medium'>Awfis Lorven Tiara</Link> - Awfis Lorven Tiara is one of the most popular and premium coworking spaces in Hyderabad. It is strategically situated in the heart of Hyderabad with well-connected transport links. This is a stunning shared work premise that provides a workspace for working professionals of numerous sectors. Here you will get a decent working environment along with the latest furnishings, modern equipment, and a vibrant community of like-minded people.
          </div>
          <div className='prose prose-slate max-w-none text-sm text-slate-700 font-light leading-relaxed'>
            2. <Link href="/coworking/91springboard-hitec-city" className='text-blue-600 font-medium'>91Springboard HITEC City</Link> - A modern coworking space with bright lighting, high ceilings, and an innovative layout. 91Springboard HITEC City is one of the best-shared work premises which is incredibly painted with white colour to provide you creative and innovative work environment. It provides you with top-notch facilities and amenities along with spacious and comfortable workstations, equipped meeting rooms, wide conference areas, a communal kitchen with a beverage vending machine, and many more.
          </div>
          <div className='prose prose-slate max-w-none text-sm text-slate-700 font-light leading-relaxed'>
            3. <Link href="/coworking/cowrks-skyview" className='text-blue-600 font-medium'>CoWrks Skyview</Link> - CoWrks Skyview is an incredible workspace with astonishing green surroundings. CoWrks Skyview always stays filled with an airy environment, Biodiversity Park of Hyderabad is just adjacent to the premises which makes it a perfect shared work premises. It is in the central area of the city with easy access to transport and lifestyle areas like; PVR Cinemas, Lumbini Avenue, and many more. It is an ideal coworking space that helps you to maintain a balance between your life and work.
          </div>
          <div className='prose prose-slate max-w-none text-sm text-slate-700 font-light leading-relaxed'>
            4. <Link href="/coworking/ikeva-madhapur" className='text-blue-600 font-medium'>iKeva Madhapur</Link> - If you are thinking that you can only be productive in the traditional workspace, you must try the iKeva Madhapur. It is an incredible shared work premise that provides you with almost everything to make you more productive. In terms of the offering of these premises, here you will get a comfy workplace along with a fuss-free internet connection, printing facility, pantry, communal kitchen, reception desk, super housekeeping service, and many more in subscription of work desk.
          </div>
          <div className='prose prose-slate max-w-none text-sm text-slate-700 font-light leading-relaxed'>
            5. <Link href="/coworking/91springboard-kondapur" className='text-blue-600 font-medium'>91Springboard Kondapur</Link> - 91Springboard Kondapur is one of the largest coworking spaces which hosts more than 1,000 working professionals at the same time. This building is newly renovated and perfectly nestled in the City Mall of Myytri Square at Miyapur Road. It is one of the prime locations of the city which also hosts space for multiple retail stores, shopping brands, traditional restaurants, rooftop bars, and many more. If you want to celebrate team victory or any other special occasion, you will be just a short walk away from the incredible destinations.
          </div>
          <div className='prose prose-slate max-w-none text-sm text-slate-700 font-light leading-relaxed'>
            6. <Link href="/coworking/the-hive-collaborative-gachibowli" className='text-blue-600 font-medium'>The Hive Collaborative Gachibowli</Link> - Imagine a shared work premise in the financial district of Hyderabad, yes it is The Hive Collaborative Gachibowli. This coworking space is not less than a modern cafe, it is perfectly arranged with a hot desk, a dedicated desk, and separate private cabins in a quiet workspace. It is an ideal place to offer you a premium business address along with world-class facilities and amenities. Here you can work flawlessly without any interruption at an affordable price range.
          </div>
          <div className='prose prose-slate max-w-none text-sm text-slate-700 font-light leading-relaxed'>
            7. <Link href="/coworking/we-work-rajapushpa-summit" className='text-blue-600 font-medium'>WeWork Rajapushpa Summit</Link> - We guess there are no or very few working professionals who are not aware of the offering of WeWork, the best and most modern brand for coworking space. It provides so many stunning and prestigious coworking spaces, one of its exceptional offerings in Hyderabad is the WeWork Rajapushpa Summit. This workplace is strategically situated at Nanakramguda Rd, in the heart of the financial district of the city. It is ideal to provide you with top-notch provisions at incredible premises.
          </div>
          <div className='prose prose-slate max-w-none text-sm text-slate-700 font-light leading-relaxed'>
            8. <Link href="/coworking/lemon-tree-premier-hitec-city" className='text-blue-600 font-medium'>Lemon Tree Premier HITEC City</Link> - Lemon Tree Premier is a world-class hotel that provides accommodation to business travelers and visitors of Hyderabad. This incredible destination also provides shared work premises in its stunning space. Here you will get home-like comfort along with peaceful vibes and a modern working culture. It is incredibly designed with all the latest furnishings, glass facade windows, shiny floorings, comfy chairs, dedicated staff support, a reception desk, and many more.
          </div>
          <div className='prose prose-slate max-w-none text-sm text-slate-700 font-light leading-relaxed'>
            9. <Link href="/coworking/we-work-krishe-emerald" className='text-blue-600 font-medium'>WeWork Krishe Emerald</Link> - It is a perfect coworking space, it is ideal to provide you best in the best-in-class services at an affordable price. This coworking space is perfectly located in Laxmi Cyber City at Kondapur Main Road with incredible public transport connectivity. From here you will get easy and quick access to lifestyle centers like; Snort Pub, Sri Kanya, Manchi Bape, & Kings Drive-In. In addition, it is on the fringe of Whitefield which presents incredible business centres with many other astonishing destinations.
          </div>
          <div className='prose prose-slate max-w-none text-sm text-slate-700 font-light leading-relaxed'>
            10. <Link href="/coworking/devx-hitec-city" className='text-blue-600 font-medium'>DevX Hitec City</Link> - DevX Hitec City is a completely managed coworking space, it is an ideal shared work premise to present you hassle-free work environment. These premises present stunning hot desks beautiful meeting rooms, and wide conference areas with a mic, projector, board, notepad, and many more. Here you can reserve custom-built as well as ready-to-customize work premises at an incredible price.
          </div>
        </div>
      </div>
      
      <QuoteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};


export default CityResults;
