"use client";

import React from 'react';
import Image from 'next/image';
import { Clock, Calendar } from 'lucide-react';

const OfficeTiming = () => {
  const officeTiming = [
    {
      day: "Mon - Fri",
      time: "09:00 AM to 09:00 PM",
      icon: "https://cofynd.com/assets/images/icons/rest-zone.svg"
    },
    {
      day: "Sat",
      time: "09:00 AM to 06:00 PM",
      icon: "https://cofynd.com/assets/images/icons/rest-zone.svg"
    },
    {
      day: "Sun",
      time: "Closed",
      icon: "https://cofynd.com/assets/images/icons/rest-zone.svg"
    },

  ]
  return (
    <div className="mb-16 border-t border-slate-100 pt-12">
      <h2 className="text-xl  text-slate-950 mb-8">Office Timing</h2>
      <div className="flex flex-wrap gap-6">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 ">
          {officeTiming.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <Image src={item.icon} alt={item.day} width={32} height={32} className="w-8 h-8" />
              <div>
                <p className="text-[15px] text-slate-800 ">{item.day}</p>
                <p className="text-[12px]  text-slate-600">{item.time}</p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default OfficeTiming;
