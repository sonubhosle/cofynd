"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown, Mail } from 'lucide-react';

const CustomDropdown = ({ options, placeholder, value, onChange }) => {
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
    <div className="relative flex-1" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-400 text-[14px] hover:border-blue-400 transition-all"
      >
        <span className={value ? "text-slate-900" : ""}>{value || placeholder}</span>
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-100 rounded-xl shadow-xl z-50 py-1 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-200">
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                onChange(opt);
                setIsOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-[14px] text-slate-700 hover:bg-slate-50 transition-colors"
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const InquiryForm = ({ shouldShake, onShakeReset }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    seats: ''
  });

  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (shouldShake) {
      setShake(true);
      const timer = setTimeout(() => {
        setShake(false);
        if (onShakeReset) onShakeReset();
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [shouldShake, onShakeReset]);

  return (
    <div className={`bg-[#ebf5ff] rounded-[32px] p-8 sticky top-32 transition-transform duration-300 ${shake ? 'animate-shake' : ''}`}>
      <h3 className="text-[22px] font-bold text-slate-900 mb-1 leading-tight">Interested in this Property</h3>
      <p className="text-slate-500 text-[14px] mb-8">Fill your details for a customized quote</p>

      <form className="space-y-4 mb-8" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Name*"
          className="w-full px-5 py-3.5 bg-white border border-slate-100 rounded-xl text-[14px] focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100 transition-all font-medium"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email*"
          className="w-full px-5 py-3.5 bg-white border border-slate-100 rounded-xl text-[14px] focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100 transition-all font-medium"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <div className="flex bg-white border border-slate-100 rounded-xl overflow-hidden focus-within:border-blue-400 focus-within:ring-1 focus-within:ring-blue-100 transition-all">
          <div className="flex items-center px-4 py-3.5 text-[14px] text-slate-500 border-r border-slate-50">
            +91 <ChevronDown className="w-3 h-3 ml-1" />
          </div>
          <input
            type="tel"
            placeholder="Phone*"
            className="flex-1 px-4 py-3.5 text-[14px] focus:outline-none font-medium"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        <div className="flex gap-4">
          <CustomDropdown
            placeholder="Type"
            options={["Coworking", "Private Office", "Virtual Office"]}
            value={formData.type}
            onChange={(val) => setFormData({ ...formData, type: val })}
          />
          <CustomDropdown
            placeholder="No. Of Seats"
            options={["1-5", "6-15", "16-50", "50+"]}
            value={formData.seats}
            onChange={(val) => setFormData({ ...formData, seats: val })}
          />
        </div>

        <button className="w-full bg-[#0084FF] text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-100 hover:bg-blue-600 transition-all active:scale-95 text-[16px]">
          Enquire Now
        </button>
      </form>

      {/* Account Manager Profile */}
      <div className="flex items-center gap-4 mt-12">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm relative">
          <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" alt="Specialist" fill className="object-cover" sizes="64px" />
        </div>
        <div>
          <p className="text-[14px] text-slate-600 font-medium leading-tight">Connect with our space expert</p>
          <div className="flex items-center gap-2 text-slate-900 font-bold mt-1">
            <Mail className="w-4 h-4 text-blue-500 fill-blue-500/10" strokeWidth={2.5} />
            <span className="text-[15px]">hello@cofynd.com</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          50% { transform: translateX(8px); }
          75% { transform: translateX(-8px); }
        }
        .animate-shake {
          animation: shake 0.6s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default InquiryForm;

