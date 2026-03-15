"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    title: 'Coworking',
    subtitle: 'Spaces',
    image: 'https://img.cofynd.com/images/latest_images_2024/256f09d287b6dad491a876a3adc750b01e99a212.webp',
    link: '/coworking',
    bgColor: 'bg-white',
    textColor: 'text-slate-800'
  },
  {
    title: 'Coliving',
    subtitle: 'Spaces',
    image: 'https://img.cofynd.com/images/latest_images_2024/122367e3361d9ea7af229f55af8283d0c1d7bca2.webp',
    link: '/coliving',
    bgColor: 'bg-white',
    textColor: 'text-slate-800'
  },
  {
    title: 'Virtual',
    subtitle: 'Offices',
    image: 'https://img.cofynd.com/images/latest_images_2024/7c09526b77b0c16a7fe89846d5878e2249ac7ed8.webp',
    link: '/virtual-office',
    bgColor: 'bg-white',
    textColor: 'text-slate-800'
  },
  {
    title: 'Business',
    subtitle: 'Plans',
    image: 'https://img.cofynd.com/images/latest_images_2024/755f68c2216601395f9c69ac9b51af035aad1c94.webp', // Sticker-like placeholder
    link: '/business-plans',
    bgColor: '',
    textColor: 'text-[#483d8b]',
    isCustom: true
  },
  {
    title: 'List',
    subtitle: 'Property',
    image: 'https://i0.wp.com/adi4u.in/wp-content/uploads/2023/10/happy-young-woman-sitting-floor-using-laptop-gray-wall-scaled.jpg', // Person on beanbag placeholder
    link: '/list-property',
    bgColor: '',
    textColor: 'text-yellow-900',
    isCustom: true
  },
  {
    title: 'Office',
    subtitle: 'Spaces',
    image: 'https://img.cofynd.com/images/original/26901a7ae2e2eb8b246e5f7a7469eb4007d60239.jpg',
    link: '/office-spaces',
    bgColor: 'bg-white/10',
    textColor: 'text-slate-800'
  }
];

const CategoryGrid = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <Link
              key={index}
              href={cat.link}
              className={`group relative h-40 overflow-hidden rounded-2xl transition-all duration-300  border border-slate-50 ${cat.bgColor}`}
            >
              {/* Image Side (Left) */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.subtitle}
                  fill
                  className="object-cover transition-transform duration-500 opacity-90 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index < 3}
                />
              </div>

              {/* Text Side (Right) */}
              <div className="bg-linear-to-l from-white/90 to-white/10 absolute inset-y-0 right-0 w-2/3 flex flex-col justify-center items-end pr-6 text-right z-10">
                <span className={`text-xl md:text-2xl font-normal tracking-wider text-slate-950`}>
                  {cat.title}
                </span>
                <span className={`text-2xl font-semibold tracking-wider text-slate-950`}>
                  {cat.subtitle}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
