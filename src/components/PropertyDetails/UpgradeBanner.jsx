"use client";

import React from 'react';
import Image from 'next/image';

const UpgradeBanner = ({ onEnquire }) => {
  const cards = [
    {
      title: "Managed Office Space",
      desc: "Managed Office Space An end-to-end office space solution customized to your needs including sourcing, design, building and operations.",
      link: "Enquire Now",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Enterprise Solutions",
      desc: "Fully equipped offices for larger teams with flexibility to scale and customize your office in prime locations & LEED certified buildings",
      link: "Enquire Now",
      image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <div className="mb-16">
      <h3 className="text-xl font-bold text-slate-900 mb-8">Upgrade your office with CoFynd</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, i) => (
          <div key={i} className="relative rounded-3xl overflow-hidden group border border-slate-100 shadow-sm">
            <div className="relative h-60 overflow-hidden">
              <Image 
                src={card.image} 
                alt={card.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-4 flex flex-col justify-center">
              <h4 className="text-xl  text-slate-900 mb-3">{card.title}</h4>
              <p className="text-sm text-slate-700 font-light mb-3 max-w-[250px]">{card.desc}</p>
              <button 
                onClick={onEnquire}
                className="text-blue-600  text-sm self-start uppercase tracking-wider hover:underline"
              >
                {card.link}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default UpgradeBanner;
