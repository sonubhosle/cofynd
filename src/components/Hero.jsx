"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronDown, PhoneCall, Building2, MapPin, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

const categories = [
  { id: 'coworking', name: 'Co-Working' },
  { id: 'virtual-office', name: 'Virtual Office' },
];

const cityData = {
  'coworking': [
    { name: 'Gurugram', logo: 'https://cofynd.com/assets/images/city-icons/Gurugram.svg' },
    { name: 'Mumbai', logo: 'https://cofynd.com/assets/images/city-icons/Mumbai.svg' },
    { name: 'Bangalore', logo: 'https://cofynd.com/assets/images/city-icons/Bangalore.svg' },
    { name: 'Hyderabad', logo: 'https://cofynd.com/assets/images/city-icons/Hyderabad.svg' },
    { name: 'Chennai', logo: 'https://cofynd.com/assets/images/city-icons/Chennai.svg' },
    { name: 'Lucknow', logo: 'https://cofynd.com/assets/images/city-icons/Lucknow.svg' },
    { name: 'Pune', logo: 'https://cofynd.com/assets/images/city-icons/Pune.svg' },
    { name: 'Noida', logo: 'https://cofynd.com/assets/images/city-icons/Noida.svg' },
    { name: 'Delhi', logo: 'https://cofynd.com/assets/images/city-icons/Delhi.svg' },
    { name: 'Indore', logo: 'https://cofynd.com/assets/images/city-icons/Indore.svg' },
    { name: 'Ahmedabad', logo: 'https://cofynd.com/assets/images/city-icons/Ahemdabad.svg' },
    { name: 'Jaipur', logo: 'https://cofynd.com/assets/images/city-icons/Jaipur.svg' },
    { name: 'Kochi', logo: 'https://cofynd.com/assets/images/city-icons/Kochi.svg' },
    { name: 'Chandigarh', logo: 'https://cofynd.com/assets/images/city-icons/Chandigarh.svg' },
    { name: 'Kolkata', logo: 'https://cofynd.com/assets/images/city-icons/Kolkata.svg' },
    { name: 'Coimbatore', logo: 'https://cofynd.com/assets/images/city-icons/Coimbatore.svg' },
    { name: 'Goa', logo: 'https://cofynd.com/assets/images/city-icons/Goa.svg' },
    { name: 'Bhubaneswar', logo: 'https://cofynd.com/assets/images/city-icons/Bhubaneswar.svg' }
  ],
  'virtual-office': [
    { name: 'Gurugram', logo: 'https://cofynd.com/assets/images/city-icons/Gurugram.svg' },
    { name: 'Mumbai', logo: 'https://cofynd.com/assets/images/city-icons/Mumbai.svg' },
    { name: 'Bangalore', logo: 'https://cofynd.com/assets/images/city-icons/Bangalore.svg' },
    { name: 'Hyderabad', logo: 'https://cofynd.com/assets/images/city-icons/Hyderabad.svg' },
    { name: 'Chennai', logo: 'https://cofynd.com/assets/images/city-icons/Chennai.svg' },
    { name: 'Lucknow', logo: 'https://cofynd.com/assets/images/city-icons/Lucknow.svg' },
    { name: 'Pune', logo: 'https://cofynd.com/assets/images/city-icons/Pune.svg' },
    { name: 'Noida', logo: 'https://cofynd.com/assets/images/city-icons/Noida.svg' },
    { name: 'Delhi', logo: 'https://cofynd.com/assets/images/city-icons/Delhi.svg' },
    { name: 'Indore', logo: 'https://cofynd.com/assets/images/city-icons/Indore.svg' },
    { name: 'Ahmedabad', logo: 'https://cofynd.com/assets/images/city-icons/Ahemdabad.svg' },
    { name: 'Jaipur', logo: 'https://cofynd.com/assets/images/city-icons/Jaipur.svg' },
    { name: 'Kochi', logo: 'https://cofynd.com/assets/images/city-icons/Kochi.svg' },
    { name: 'Chandigarh', logo: 'https://cofynd.com/assets/images/city-icons/Chandigarh.svg' },
    { name: 'Kolkata', logo: 'https://cofynd.com/assets/images/city-icons/Kolkata.svg' },
    { name: 'Coimbatore', logo: 'https://cofynd.com/assets/images/city-icons/Coimbatore.svg' },
    { name: 'Goa', logo: 'https://cofynd.com/assets/images/city-icons/Goa.svg' },
    { name: 'Bhubaneswar', logo: 'https://cofynd.com/assets/images/city-icons/Bhubaneswar.svg' }

  ]
};

const Hero = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isCityOpen, setIsCityOpen] = useState(false);

  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isDragged, setIsDragged] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsDragged(false);
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
    if (Math.abs(walk) > 10) setIsDragged(true);
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const currentCities = selectedCategory ? cityData[selectedCategory] : [];

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setSelectedCity('');
    setIsCategoryOpen(false);
  };

  const handleCitySelect = (cityName) => {
    setSelectedCity(cityName);
    setIsCityOpen(false);
    const categoryPath = selectedCategory === 'coworking' ? 'coworking' : 'virtual-office';
    router.push(`/${categoryPath}/${cityName.toLowerCase()}`);
  };

  return (
    <section className="relative w-full h-auto lg:h-[600px] bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row h-full ">
        {/* Left Content Area */}
        <div className="flex-1 flex items-center justify-center py-6 px-6">
          <div className="max-w-[650px] w-full">
            {/* Headline with Decorative Circle */}
            <div className="relative mb-8 pt-4 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:-left-4 w-12 h-12 bg-amber-200 rounded-full opacity-60"></div>
              <h1 className="text-3xl font-semibold text-slate-900 tracking-wider relative">
                Choose from 100,000+ <br /> spaces to <span className="text-blue-600">Work & Live</span>
              </h1>
            </div>

            {/* Two-step selectors */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="relative flex-1">
                <button
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  className="w-full h-10 bg-white border border-slate-200 rounded-lg px-4 flex items-center justify-between text-slate-600 hover:border-blue-400 transition-all "
                  onBlur={() => setTimeout(() => setIsCategoryOpen(false), 200)}
                >
                  <span className={selectedCategory ? "text-slate-900" : ""}>
                    {selectedCategory ? categories.find(c => c.id === selectedCategory).name : 'Looking For'}
                  </span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
                </button>
                {isCategoryOpen && (
                  <div className="absolute top-9 left-0 right-0 mt-2 bg-white border border-slate-100 rounded-xl shadow-2xl z-30 overflow-hidden">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => handleCategorySelect(category.id)}
                        className="w-full text-left px-5 py-3 hover:bg-slate-50 text-slate-700 "
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative flex-1">
                <button
                  onClick={() => setIsCityOpen(!isCityOpen)}
                  disabled={!selectedCategory}
                  className={`w-full h-10 bg-white border border-slate-200 rounded-lg px-4 flex items-center justify-between text-slate-600 hover:border-blue-400 transition-all  ${!selectedCategory && 'opacity-60 bg-slate-50 cursor-not-allowed'}`}
                  onBlur={() => setTimeout(() => setIsCityOpen(false), 200)}
                >
                  <span className={selectedCity ? "text-slate-900" : ""}>{selectedCity || 'Select City'}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${isCityOpen ? 'rotate-180' : ''}`} />
                </button>
                {isCityOpen && (
                  <div className="absolute top-9 left-0 right-0 mt-2 bg-white border border-slate-100 rounded-xl shadow-2xl z-30 max-h-60 overflow-y-auto ">
                    {currentCities.map((city) => (
                      <button
                        key={city.name}
                        onClick={() => handleCitySelect(city.name)}
                        className="w-full text-left px-5 py-3 hover:bg-slate-50 text-slate-700 "
                      >
                        {city.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* City Icon Grid (Circles) */}
            <div
              ref={sliderRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              className={`
                flex overflow-x-auto gap-4 
                sm:grid sm:grid-cols-7 sm:place-items-center sm:gap-4  
                scrollbar-hide
                ${isDragging ? 'cursor-grabbing' : 'cursor-grab sm:cursor-auto'}
              `}
            >
              {(selectedCategory ? cityData[selectedCategory] : cityData.coworking)
                .slice(0, 18)
                .map((city) => (
                  <div
                    key={city.name}
                    className="shrink-0 w-20 h-20 flex flex-col items-center justify-center bg-slate-50 rounded-full group cursor-pointer transition-transform hover:scale-105"
                    onClick={() => {
                      if (!isDragged) {
                        handleCitySelect(city.name);
                      }
                    }}
                  >
                    <div className="text-yellow-600 pointer-events-none">
                      <Image className="w-8 h-8 pointer-events-none select-none" draggable="false" src={city.logo} alt={city.name} width={32} height={32} />
                    </div>

                    <span className="text-[11px] text-slate-600 text-center whitespace-nowrap select-none pointer-events-none">
                      {city.name}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Right Side Image (Rounded-BL only) */}
        <div className="flex-1 relative h-[300px] lg:h-full">
          <div className="absolute inset-0 bg-white">
            <div className="h-full w-full overflow-hidden lg:rounded-bl-[150px] ">
              <Image
                src="https://img.cofynd.com/images/latest_images_2024/7043727d270469477b624187849d62fee92b336b.webp"
                alt="Workspace"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />


            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Hero;
