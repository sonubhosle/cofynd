"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Mail, Menu, Phone, X } from 'lucide-react';

const navigationData = [
  {
    name: 'Coworking',
    locations: [
      { name: 'Gurugram', img: 'https://images.unsplash.com/photo-1595658658428-10029b908985?auto=format&fit=crop&q=80&w=100' },
      { name: 'Mumbai', img: 'https://images.unsplash.com/photo-1570160234661-801a308b460d?auto=format&fit=crop&q=80&w=100' },
      { name: 'Bangalore', img: 'https://images.unsplash.com/photo-1596402184320-41717db9112a?auto=format&fit=crop&q=80&w=100' },
      { name: 'Hyderabad', img: 'https://images.unsplash.com/photo-1576675466200-354dd6feba9a?auto=format&fit=crop&q=80&w=100' },
      { name: 'Chennai', img: 'https://images.unsplash.com/photo-1582512390231-318e24fd2649?auto=format&fit=crop&q=80&w=100' },
      { name: 'Lucknow', img: 'https://images.unsplash.com/photo-1623863777553-76472f77e384?auto=format&fit=crop&q=80&w=100' },
      { name: 'Pune', img: 'https://images.unsplash.com/photo-1562673005-7693bd6d6e54?auto=format&fit=crop&q=80&w=100' },
      { name: 'Noida', img: 'https://images.unsplash.com/photo-1623492701902-47dc207df5dc?auto=format&fit=crop&q=80&w=100' },
      { name: 'Delhi', img: 'https://images.unsplash.com/photo-1587474260584-1f20d404ef74?auto=format&fit=crop&q=80&w=100' },
      { name: 'Indore', img: 'https://images.unsplash.com/photo-1629161726716-419b6748281b?auto=format&fit=crop&q=80&w=100' },
      { name: 'Ahmedabad', img: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&q=80&w=100' }
    ]
  },
  {
    name: 'Coliving',
    locations: [
      { name: 'Gurgaon', img: 'https://images.unsplash.com/photo-1595658658428-10029b908985?auto=format&fit=crop&q=80&w=100' },
      { name: 'Bangalore', img: 'https://images.unsplash.com/photo-1596402184320-41717db9112a?auto=format&fit=crop&q=80&w=100' },
      { name: 'Pune', img: 'https://images.unsplash.com/photo-1562673005-7693bd6d6e54?auto=format&fit=crop&q=80&w=100' },
      { name: 'Hyderabad', img: 'https://images.unsplash.com/photo-1576675466200-354dd6feba9a?auto=format&fit=crop&q=80&w=100' },
      { name: 'Noida', img: 'https://images.unsplash.com/photo-1623492701902-47dc207df5dc?auto=format&fit=crop&q=80&w=100' },
      { name: 'Delhi', img: 'https://images.unsplash.com/photo-1587474260584-1f20d404ef74?auto=format&fit=crop&q=80&w=100' },
      { name: 'Mumbai', img: 'https://images.unsplash.com/photo-1570160234661-801a308b460d?auto=format&fit=crop&q=80&w=100' },
      { name: 'Chennai', img: 'https://images.unsplash.com/photo-1582512390231-318e24fd2649?auto=format&fit=crop&q=80&w=100' },
      { name: 'Kolkata', img: 'https://images.unsplash.com/photo-1558431382-27e30560946b?auto=format&fit=crop&q=80&w=100' },
      { name: 'Ahmedabad', img: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&q=80&w=100' },
      { name: 'Lucknow', img: 'https://images.unsplash.com/photo-1623863777553-76472f77e384?auto=format&fit=crop&q=80&w=100' }
    ]
  },
  {
    name: 'Virtual Office',
    locations: [
      { name: 'Delhi', img: 'https://images.unsplash.com/photo-1587474260584-1f20d404ef74?auto=format&fit=crop&q=80&w=100' },
      { name: 'Gurgaon', img: 'https://images.unsplash.com/photo-1595658658428-10029b908985?auto=format&fit=crop&q=80&w=100' },
      { name: 'Noida', img: 'https://images.unsplash.com/photo-1623492701902-47dc207df5dc?auto=format&fit=crop&q=80&w=100' },
      { name: 'Bangalore', img: 'https://images.unsplash.com/photo-1596402184320-41717db9112a?auto=format&fit=crop&q=80&w=100' },
      { name: 'Pune', img: 'https://images.unsplash.com/photo-1562673005-7693bd6d6e54?auto=format&fit=crop&q=80&w=100' },
      { name: 'Hyderabad', img: 'https://images.unsplash.com/photo-1576675466200-354dd6feba9a?auto=format&fit=crop&q=80&w=100' },
      { name: 'Mumbai', img: 'https://images.unsplash.com/photo-1570160234661-801a308b460d?auto=format&fit=crop&q=80&w=100' },
      { name: 'Chennai', img: 'https://images.unsplash.com/photo-1582512390231-318e24fd2649?auto=format&fit=crop&q=80&w=100' },
      { name: 'Ahmedabad', img: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&q=80&w=100' },
      { name: 'Kolkata', img: 'https://images.unsplash.com/photo-1558431382-27e30560946b?auto=format&fit=crop&q=80&w=100' },
      { name: 'Indore', img: 'https://images.unsplash.com/photo-1629161726716-419b6748281b?auto=format&fit=crop&q=80&w=100' }
    ]
  },
  {
    name: 'Business Plans',
    locations: [
      { name: 'Coworking Plans', link: '/business-plans/coworking' },
      { name: 'Coliving Plans', link: '/business-plans/coliving' },
      { name: 'Coworking Consultation Plan', link: '/business-plans/coworking-consultation' },
      { name: 'Coliving Consultation Plan', link: '/business-plans/coliving-consultation' },
      { name: 'List Your Space', link: '/list-your-space' }
    ]
  }
];

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.nav-item')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className=" px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            <div className="relative w-8 h-8">
              <div className="absolute left-0 w-4 h-8 bg-yellow-500 rounded-l-full"></div>
              <div className="absolute right-0 w-2.5 h-2.5 bg-yellow-500 rounded-full top-2"></div>
              <div className="absolute left-[17px] w-[2px] h-6 bg-black bottom-1"></div>
            </div>
            <span className="text-2xl font-black tracking-tighter text-black">COFYND</span>
          </Link>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Contact Box */}
            <div className="flex items-center border border-blue-600/40 rounded-lg px-4 py-2 bg-slate-100/40 gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-600" />
                <span className="text-[14px] font-semibold text-gray-800">9355689999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600" />
                <span className="text-[14px] font-semibold text-gray-800">hello@cofynd.com</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="flex items-center">
              {navigationData.map((item) => (
                <div key={item.name} className="relative nav-item">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`flex items-center gap-1.5 px-2  py-2 text-[15px]  transition-all duration-200 rounded-md ${activeDropdown === item.name ? 'text-blue-600' : 'text-slate-800 hover:text-blue-600'
                      }`}
                  >
                    {item.name}

                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180 text-blue-600' : ''}`}
                    />
                  </button>

                  {/* Desktop Dropdown with smooth transition */}
                  <div className={`absolute top-full right-0 mt-3 w-[460px] bg-white rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.12)] border border-gray-100 p-1 transition-all duration-300 transform origin-top-right ${activeDropdown === item.name
                    ? 'opacity-100 scale-100 pointer-events-auto translate-y-0'
                    : 'opacity-0 scale-95 pointer-events-none -translate-y-2'
                    }`}>
                    <div className="grid grid-cols-2">
                      {item.locations.map((loc) => (
                        <Link
                          key={loc.name}
                          href={loc.link || `/${item.name.toLowerCase().replace(' ', '-')}/${loc.name.toLowerCase()}`}
                          className="px-2 py-2.5 flex items-center gap-3 transition-colors group border-b border-slate-100 font-medium"
                        >
                          {loc.img && (
                            <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-gray-200 shadow-sm relative">
                              <Image src={loc.img} alt={loc.name} fill className="object-cover group-hover:scale-110 transition-transform duration-300" sizes="32px" />
                            </div>
                          )}
                          {!loc.img && (
                             <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                               <span className="text-[10px] font-bold text-blue-600">{loc.name.substring(0, 2).toUpperCase()}</span>
                             </div>
                          )}
                          <span className="text-[14px] text-gray-600 group-hover:text-blue-600 transition ease-in duration-300">{loc.name}</span>
                        </Link>
                      ))}
                      {/* 12th Block: View All matches screenshot link style */}
                      <Link
                        href={`/${item.name.toLowerCase().replace(' ', '-')}`}
                        className="flex items-center  pl-[52px]"
                      >
                        <span className="text-[15px]  text-blue-600 hover:underline ">View All</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </nav>

            {/* Contact Button */}
            <button className="bg-blue-600 hover:bg-[#0069d9] text-white px-6 py-2.5 rounded-lg font-bold text-[14px] transition-all shadow-md active:scale-95">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-gray-600 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X />
            ) : (
              <Menu />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu with smooth sliding */}
      <div className={`lg:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-100 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <div className="p-4 space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto">
          {/* Mobile Contact Box */}
          <div className="flex flex-col gap-3 p-4 bg-[#f0f7ff]/50 rounded-xl border border-[#007bff]/20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Phone className="w-4 h-4 text-blue-600" />
              </div>
              <span className="font-bold text-gray-800">9355689999</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Mail className="w-4 h-4 text-blue-600" />
              </div>
              <span className="font-bold text-gray-800">hello@cofynd.com</span>
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav className="space-y-1">
            {navigationData.map((item) => (
              <div key={item.name} className="border-b border-gray-50 last:border-0">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex justify-between items-center w-full py-4 text-[16px] font-bold text-gray-800"
                >
                  {item.name}
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180 text-blue-600' : ''}`} />
                </button>

                <div className={`grid grid-cols-2 gap-2 overflow-hidden transition-all duration-300 ${activeDropdown === item.name ? 'max-h-96 pb-4' : 'max-h-0'
                  }`}>
                  {item.locations.map((loc) => (
                    <Link
                      key={loc.name}
                      href={loc.link || `/${item.name.toLowerCase().replace(' ', '-')}/${loc.name.toLowerCase()}`}
                      className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg group"
                    >
                      {loc.img ? (
                        <div className="w-7 h-7 rounded-full overflow-hidden border border-gray-200 relative">
                          <Image src={loc.img} alt={loc.name} fill className="object-cover" sizes="28px" />
                        </div>
                      ) : (
                        <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                          <span className="text-[9px] font-bold text-blue-600">{loc.name.substring(0, 2).toUpperCase()}</span>
                        </div>
                      )}
                      <span className="text-[13px] font-medium text-gray-700">{loc.name}</span>
                    </Link>
                  ))}
                  <Link
                    href={`/${item.name.toLowerCase().replace(' ', '-')}`}
                    className="flex items-center p-2 rounded-lg"
                  >
                    <span className="text-[13px] font-bold text-blue-600 pl-9">View All</span>
                  </Link>
                </div>
              </div>
            ))}
          </nav>

          <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-[16px] shadow-lg shadow-[#007bff]/20">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
