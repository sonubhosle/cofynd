"use client";

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, UserCheck, Zap, Tag } from 'lucide-react';

const WhyBook = ({ onEnquire }) => {
  const features = [
    { icon: "https://cofynd.com/assets/images/icons/verified-icon-blue.svg", title: "Exclusive Pricing & Zero Booking fee" },
    { icon: "https://cofynd.com/assets/images/icons/verified-icon-blue.svg", title: "Guided Office Space Tours" },
    { icon: "https://cofynd.com/assets/images/icons/verified-icon-blue.svg", title: "Verified Spaces and Trusted Operators" },
    { icon: "https://cofynd.com/assets/images/icons/verified-icon-blue.svg", title: "Dedicated Relationship Manager" }
  ];

  return (
    <div className="bg-slate-50 rounded-[40px] p-5 mb-5 border border-slate-100">
      <h3 className="text-xl  text-slate-900 mb-4">Why book coworking space with CoFynd?</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-2">
            <Image src={f.icon} alt={f.title} width={28} height={28} className='w-7 h-7' />
            <h4 className="text-[15px] font-light text-slate-800 mb-1">{f.title}</h4>
          </div>
        ))}

      </div>
      <div className="flex justify-end">
        <button
          onClick={onEnquire}
          className="mt-5 text-right  bg-blue-600 shadow-xl  text-white  px-4 py-2 rounded-xl    text-sm"
        >
          Enquire Now
        </button>
      </div>
    </div>
  );
};

export default WhyBook;
