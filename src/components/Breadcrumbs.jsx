"use client";

import React from 'react';
import Link from 'next/link';

const Breadcrumbs = ({ cityName, type }) => {
  return (
    <nav className="flex items-center gap-2 text-[15px] font-medium text-slate-500 mb-8 px-1">
      <Link href="/" className="hover:text-slate-900 transition-colors">
        Home
      </Link>
      
      <span className="text-slate-300">/</span>
      
      <Link 
        href={`/${type?.toLowerCase().replace(' ', '-')}`} 
        className="hover:text-slate-900 transition-colors capitalize"
      >
        {type || 'Coworking'}
      </Link>
      
      <span className="text-slate-300">/</span>
      
      <span className="text-slate-400">{cityName}</span>
    </nav>
  );
};

export default Breadcrumbs;

