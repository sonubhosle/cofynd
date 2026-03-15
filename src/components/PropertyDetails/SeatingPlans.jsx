"use client";

import { UserRound } from 'lucide-react';
import React from 'react';
import Image from 'next/image';

const SeatingPlans = ({ onEnquire }) => {
  const plans = [
    {
      title: "Dedicated Desk",
      desc: "Fixed desk space in a shared area with lockable storage.",
      price: "₹8,000*",
      unit: "month",
      seating: "1 - 100+ Seats",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=300"
    },
    {
      title: "Private Cabin",
      desc: "Enclosed, lockable office space for one or more people.",
      price: "₹12,000*",
      unit: "month",
      seating: "4, 6, 8, 10+ (Customization Available)",
      image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=300"
    },
    {
      title: "Virtual Office",
      desc: "Business address, GST registration and mailing services.",
      price: "₹1,500*",
      unit: "month",
      seating: "No Seating",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=869&auto=format&fit=crop"
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-xl  text-slate-950 mb-8">Seating Plans</h2>
      <div className="space-y-3">
        {plans.map((plan, i) => (
          <div key={i} className="flex flex-col sm:flex-row items-center gap-6 overflow-hidden bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
            <div className="w-full sm:w-40 aspect-video sm:aspect-square overflow-hidden shrink-0 relative">
              <Image 
                src={plan.image} 
                alt={plan.title} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-500" 
                sizes="(max-width: 640px) 100vw, 160px"
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-lg font-semibold text-slate-900 mb-1">{plan.title}</h3>
              <p className="text-slate-800 text-sm max-w-sm mb-1">{plan.desc}</p>
              <p className='flex gap-2 text-slate-800 text-sm items-center  max-w-sm'><UserRound className='w-4 h-4' />Seating:- {plan.seating}</p>
            </div>
            <div className="flex flex-col items-center sm:items-end gap-3 shrink-0 pr-4">
              <div className="text-right">
                <span className="text-2xl font-black text-slate-900">{plan.price}</span>
                <span className="text-slate-500 text-[14px] font-medium"> / {plan.unit}</span>
              </div>
              <button
                onClick={onEnquire}
                className="bg-[#0084FF] text-white font-bold px-8 py-3 rounded-xl shadow-lg shadow-blue-50 hover:bg-blue-600 transition-all active:scale-95 text-sm"
              >
                Enquire Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default SeatingPlans;
