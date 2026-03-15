"use client";

import React from 'react';
import Image from 'next/image';
import { Wifi, Coffee, Smartphone, Shield, Zap, Car, Clock } from 'lucide-react';

const Amenities = () => {
  const amenities = [
    { icon: "https://i.postimg.cc/nV3Khgvh/antenna.png", label: "High Speed WiFi" },
    { icon: "https://i.postimg.cc/K8xg757p/printer.png", label: "Printer" },
    { icon: "https://i.postimg.cc/SsMsbX7M/house-4.png", label: "Housekeeping" },
    { icon: "https://i.postimg.cc/1tw9YksZ/coffee-mug.png", label: "Tea/Coffee" },
    { icon: "https://i.postimg.cc/wMwnW2yQ/meeting-remote.png", label: "Meeting Rooms" },
    { icon: "https://i.postimg.cc/W40CRTqL/car-2.png", label: "Car / Bike Parking" },
    { icon: "https://i.postimg.cc/5tWKST7L/user.png", label: "Reception" },
    { icon: "https://i.postimg.cc/FsfP5Nw2/booth.png", label: "Phone Booth" },
    { icon: "https://i.postimg.cc/02pV2c2c/business-work-station-1.png", label: "Ergo Workstations" },
    { icon: "https://i.postimg.cc/zD4QfyC7/food-kitchenware-no-food-allowed-fork-spoon-food-dine-cook-utensils-eat-restaurant-not-allowed.png", label: "Pantry" },
    { icon: "https://i.postimg.cc/FsfP5Nw2/booth.png", label: "Air Conditioning" },
    { icon: "https://i.postimg.cc/SQYZHmBY/lounge.png", label: "Lounge" },
  ];

  return (
    <div className="mb-16">
      <h2 className="text-xl  text-slate-950 mb-8">Amenities</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {amenities.map((item, i) => (
          <div key={i} className="flex items-center gap-2  ">
            <Image src={item.icon} alt={item.label} width={20} height={20} className='w-5 h-5' />
            <span className="text-[13px] font-light text-slate-700">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
