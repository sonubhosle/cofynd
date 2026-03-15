"use client";

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

const locations = [
    {
        city: 'Gurugram',
        subtitle: 'Millennium City',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    },
    {
        city: 'Hyderabad',
        subtitle: 'A City of Pearls',
        image: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&q=80&w=800',
    },
    {
        city: 'Bangalore',
        subtitle: "India's Silicon Valley",
        image: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=800',
    },
    {
        city: 'Mumbai',
        subtitle: 'A City of Dreams',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800',
    },
    {
        city: 'Pune',
        subtitle: 'Queen of the Deccan',
        image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800',
    },
    {
        city: 'Delhi',
        subtitle: 'The Nation Capital',
        image: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80&w=800',
    },
    {
        city: 'Noida',
        subtitle: 'The Hitech City',
        image: 'https://images.unsplash.com/photo-1572025442646-866d16c84a54?auto=format&fit=crop&q=80&w=800',
    },
    {
        city: 'Lucknow',
        subtitle: 'The City of Nawabs',
        image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800',
    },
];

export default function TopColiving() {
    const sliderRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

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

    return (
        <div className="bg-white py-8 px-6 relative overflow-hidden ">
            <div className="w-full">
                {/* Header */}
                <SectionHeader highlight={'Top'} rest={'Colivings in India'} />

                {/* Grid */}
                <div
                    ref={sliderRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    className={`
                        flex overflow-x-auto gap-4 pb-4 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6
                        [&::-webkit-scrollbar]:hidden 
                        ${isDragging ? 'cursor-grabbing' : 'cursor-grab sm:cursor-auto'}
                    `}
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {locations.map((location, index) => (
                        <div
                            key={index}
                            className={`
                                    relative rounded-2xl overflow-hidden group 
                                    aspect-[1.4/1] shadow-sm hover:shadow-xl transition-all duration-300
                                    shrink-0 w-[280px] sm:w-auto
                                `}
                        >
                            <Image
                                draggable="false"
                                src={location.image}
                                alt={location.city}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110 select-none pointer-events-none"
                                sizes="(max-width: 768px) 280px, (max-width: 1024px) 50vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
                                <h3 className="text-white font-bold text-lg mb-0.5">{location.city}</h3>
                                <p className="text-gray-200 text-xs font-medium">{location.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
}
