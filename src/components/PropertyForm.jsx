"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown, Check } from 'lucide-react';

const countryCodes = [
  { code: '+91', name: 'India', flag: '🇮🇳' },
  { code: '+1', name: 'USA', flag: '🇺🇸' },
  { code: '+44', name: 'UK', flag: '🇬🇧' },
  { code: '+971', name: 'UAE', flag: '🇦🇪' },
  { code: '+65', name: 'Singapore', flag: '🇸🇬' },
  { code: '+61', name: 'Australia', flag: '🇦🇺' },
  { code: '+1', name: 'Canada', flag: '🇨🇦' },
  { code: '+49', name: 'Germany', flag: '🇩🇪' },
  { code: '+33', name: 'France', flag: '🇫🇷' },
  { code: '+81', name: 'Japan', flag: '🇯🇵' },
];

const spaceTypes = [
  { id: 'coworking', name: 'Coworking' },
  { id: 'private-office', name: 'Private Office' },
  { id: 'virtual-office', name: 'Virtual Office' },
  { id: 'enterprise', name: 'Enterprise Suite' },
  { id: 'meeting-room', name: 'Meeting Room' },
];

const cities = [
  { id: 'gurugram', name: 'Gurugram' },
  { id: 'noida', name: 'Noida' },
  { id: 'delhi', name: 'Delhi' },
  { id: 'mumbai', name: 'Mumbai' },
  { id: 'bangalore', name: 'Bangalore' },
  { id: 'hyderabad', name: 'Hyderabad' },
  { id: 'pune', name: 'Pune' },
  { id: 'chennai', name: 'Chennai' },
];

const CustomDropdown = ({ options, value, onChange, placeholder, type = 'default' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => (type === 'country' ? opt.code === value : opt.id === value));

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full h-14 bg-white border rounded-2xl shadow-sm px-6 flex items-center justify-between cursor-pointer transition-all duration-300
          ${isOpen ? 'border-amber-400 ring-2 ring-amber-100' : 'border-slate-100 hover:border-slate-200'}
          ${type === 'country' ? 'h-full border-none shadow-none px-0' : ''}
        `}
      >
        <span className={`${!selectedOption ? 'text-slate-400' : 'text-slate-900'} truncate select-none`}>
          {type === 'country' ? (
            <span className="flex items-center gap-2">
              <span className="text-lg">{selectedOption?.flag}</span>
              <span className="text-slate-700 font-medium">{selectedOption?.code}</span>
            </span>
          ) : (
            selectedOption ? selectedOption.name : placeholder
          )}
        </span>
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      {isOpen && (
        <div className={`
          absolute z-100 mt-2 bg-white border border-slate-100 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200
          ${type === 'country' ? 'w-64 left-0' : 'w-full left-0'}
        `}>
          <div className="max-h-60 overflow-y-auto py-2">
            {options.map((option) => (
              <div
                key={type === 'country' ? `${option.code}-${option.name}` : option.id}
                onClick={() => {
                  onChange(type === 'country' ? option.code : option.id);
                  setIsOpen(false);
                }}
                className="px-5 py-3 flex items-center justify-between hover:bg-slate-50 cursor-pointer transition-colors group"
              >
                <span className="flex items-center gap-3">
                  {type === 'country' && <span className="text-xl">{option.flag}</span>}
                  <span className="text-slate-700 group-hover:text-slate-900">
                    {type === 'country' ? `${option.name} (${option.code})` : option.name}
                  </span>
                </span>
                {((type === 'country' && value === option.code) || (type !== 'country' && value === option.id)) && (
                  <Check className="w-4 h-4 text-amber-500" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const PropertyForm = ({ hideImage = false, hideTitle = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+91',
    spaceType: '',
    city: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <section className="w-full bg-white">
      <div className={`w-full relative bg-white rounded-4xl border border-slate-50 ${!hideImage ? 'p-8' : 'p-0'}`}>

        <div className="relative z-20 flex flex-col lg:flex-row items-center gap-16">

          {/* Form Side */}
          <div className="flex-1 w-full">
            {!hideTitle && (
              <>
                <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-3 tracking-tight">
                  Let us find your perfect Property
                </h2>
                <p className="text-slate-500 mb-10 text-lg">
                  Connect to a CoFynd Space Expert now
                </p>
              </>
            )}

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-14 px-6 bg-white border border-slate-100 rounded-2xl shadow-sm focus:outline-none focus:border-amber-300 focus:ring-4 focus:ring-amber-50 transition-all duration-300"
                  required
                />
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-14 px-6 bg-white border border-slate-100 rounded-2xl shadow-sm focus:outline-none focus:border-amber-300 focus:ring-4 focus:ring-amber-50 transition-all duration-300"
                  required
                />
              </div>

              {/* Phone with Custom Country Selector */}
              <div className="relative flex items-center bg-white border border-slate-100 rounded-2xl shadow-sm focus-within:border-amber-300 focus-within:ring-4 focus-within:ring-amber-50 transition-all duration-300 overflow-visible">
                <div className="w-32 border-r border-slate-100 px-4">
                  <CustomDropdown
                    options={countryCodes}
                    value={formData.countryCode}
                    onChange={(val) => setFormData({ ...formData, countryCode: val })}
                    type="country"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone*"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="flex-1 h-14 px-6 bg-transparent focus:outline-none"
                  required
                />
              </div>

              {/* Type Of Space */}
              <CustomDropdown
                options={spaceTypes}
                value={formData.spaceType}
                onChange={(val) => setFormData({ ...formData, spaceType: val })}
                placeholder="Type Of Space"
              />

              {/* Select City */}
              <CustomDropdown
                options={cities}
                value={formData.city}
                onChange={(val) => setFormData({ ...formData, city: val })}
                placeholder="Select City*"
              />

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full h-14 bg-[#FFE566] hover:bg-[#FFD700] text-slate-900 font-semibold rounded-2xl transition-all duration-300 shadow-lg shadow-amber-100 hover:shadow-amber-200 active:scale-[0.98] active:shadow-inner"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Image Side */}
          {!hideImage && (
            <div className="hidden lg:block w-[350px]">
              <div className="relative p-4">
                <div className="relative aspect-square rounded-full overflow-hidden border-6 border-slate-200 z-10 ">
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                    alt="Interior"
                    fill
                    className="object-cover"
                    sizes="350px"
                  />
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default PropertyForm;
