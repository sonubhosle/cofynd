"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { X, CheckCircle2, ChevronDown, Mail } from 'lucide-react';

const companies = [
  { name: 'Inox', logo: 'https://img.cofynd.com/images/latest_images_2024/d4d6213847e3f0ce93f7ab1baa36d2ad3372c623.webp' },
  { name: 'Kotak', logo: 'https://img.cofynd.com/images/latest_images_2024/5d26d7d9d23f90f97c7dfd3d144fd1f4f16cc6dc.webp' },
  { name: 'Razorpay', logo: 'https://img.cofynd.com/images/latest_images_2024/e3d2cad2030bb11c2afe3f0a2bccd98678971fdf.webp' },
  { name: 'Doubtnut', logo: 'https://img.cofynd.com/images/latest_images_2024/67720a1323eb8a3ba31b94fb422ca5c73c7373a9.webp' },
  { name: 'Credable', logo: 'https://img.cofynd.com/images/latest_images_2024/e42a29e6a367611cc8885368141f345017b4fbf7.webp' },
  { name: 'Acciojob', logo: 'https://img.cofynd.com/images/latest_images_2024/937bc8b42de27ccffc63498e9025c107e90aeb70.webp' },
  { name: 'Purple', logo: 'https://img.cofynd.com/images/latest_images_2024/e037cfebd61c9704c2b598a6858fa36f35c3989b.webp' },
  { name: 'Classplus', logo: 'https://img.cofynd.com/images/latest_images_2024/846c09df44eda0f0342972e34e1217047f383aa9.webp' },
  { name: 'Hector', logo: 'https://img.cofynd.com/images/latest_images_2024/6b740d1de90277f8f3eaba5cef2d2f0891a081cd.webp' },
];

const features = [
  "Customized Workspaces",
  "Prime Locations",
  "Free Guided Tours",
  "Flexible Terms"
];

const CustomDropdown = ({ options, value, onChange, placeholder, error }) => {
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

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full h-12 bg-[#FFF7F7] border rounded-xl px-4 flex items-center justify-between cursor-pointer transition-all duration-300
          ${isOpen ? 'border-blue-400' : 'border-slate-100'}
          ${error ? 'border-red-300' : ''}
        `}
      >
        <span className={`text-[14px] ${!value ? 'text-slate-400' : 'text-slate-700'}`}>
          {value || placeholder}
        </span>
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      {isOpen && (
        <div className="absolute z-50 mt-1 w-full bg-white border border-slate-100 rounded-xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-1 duration-200">
          <div className="max-h-48 overflow-y-auto py-1">
            {options.map((opt) => (
              <div
                key={opt}
                onClick={() => {
                  onChange(opt);
                  setIsOpen(false);
                }}
                className="px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 cursor-pointer transition-colors"
              >
                {opt}
              </div>
            ))}
          </div>
        </div>
      )}
      {error && <p className="text-[11px] text-red-500 mt-1 ml-1">{error}</p>}
    </div>
  );
};

const QuoteModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    seats: ''
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setTimeout(() => setIsVisible(false), 300);
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;

  return (
    <div className={`
      fixed inset-0 z-1000 flex items-center justify-center p-4 py-12 transition-all duration-300
      ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
    `}>
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className={`
        relative w-full h-[550px]  max-w-[950px] bg-white rounded-[24px] overflow-hidden flex flex-col md:flex-row shadow-2xl transition-all duration-500 transform
        ${isOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-8 opacity-0'}
      `}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-1 hover:bg-slate-100 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-slate-400" />
        </button>

        {/* Left Column (Branding) */}
        <div className="w-full md:w-[45%] bg-[#E8F1FF] p-8 ">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 leading-tight">
            Find Your Perfect Office Now !
          </h2>
          <p className="text-slate-600 text-sm lg:text-base mb-8">
            Our space experts will provide customized quote with detailed inventory as per your needs
          </p>

          <div className="grid grid-cols-2 gap-y-4 mb-12">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-[10px] text-white">✓</span>
                </div>
                <span className="text-[13px] font-semibold text-slate-700">{f}</span>
              </div>
            ))}
          </div>

          <div>
            <h4 className="text-[15px] font-bold text-slate-900 mb-6 tracking-tight">Trusted by top companies</h4>
            <div className="grid grid-cols-3 gap-x-6 gap-y-8">
              {companies.map((c) => (
                <div key={c.name} className="h-6 relative overflow-hidden">
                  <Image src={c.logo} alt={c.name} fill className="object-contain opacity-80" sizes="100px" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (Form) */}
        <div className="w-full md:w-[55%] bg-white p-8  flex flex-col justify-center">
          <div className="mb-8">
            <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-1">Interested in this Property</h3>
            <p className="text-slate-500 text-sm">Fill your details for a customized quote</p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Name*"
              className="w-full h-12 px-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100 transition-all text-sm"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full h-12 px-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100 transition-all text-sm"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />

            <div className="flex gap-2">
              <div className="w-20 group relative">
                <div className="h-12 border border-slate-200 rounded-xl flex items-center justify-center gap-1 text-sm text-slate-600 cursor-pointer hover:bg-slate-50">
                  +91 <ChevronDown className="w-3 h-3" />
                </div>
              </div>
              <input
                type="tel"
                placeholder="Phone*"
                className="flex-1 h-12 px-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100 transition-all text-sm"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <CustomDropdown
                options={["Coworking", "Private Office", "Virtual Office"]}
                placeholder="Type"
                value={formData.type}
                onChange={(v) => setFormData({ ...formData, type: v })}
                error="This field can not be blank."
              />
              <CustomDropdown
                options={["1-5", "6-15", "16-50", "50+"]}
                placeholder="No. Of Seats"
                value={formData.seats}
                onChange={(v) => setFormData({ ...formData, seats: v })}
                error="This field can not be blank."
              />
            </div>

            <button className="w-full h-12 bg-[#0084FF] hover:bg-[#0073e6] text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-100 active:scale-[0.98] mt-4">
              Submit
            </button>
          </form>

          <div className="mt-10 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-slate-200 relative">
              <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" alt="Specialist" fill className="object-cover" sizes="56px" />
            </div>
            <div>
              <p className="text-[13px] text-slate-500 font-medium">Connect with our space expert</p>
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <Mail className="w-4 h-4 text-blue-600" />
                <span>hello@cofynd.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
