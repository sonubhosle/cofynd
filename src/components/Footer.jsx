import React from 'react';
import { Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const coworkingCities = [
    "Gurgaon", "Bangalore", "Mumbai", "Delhi", "Noida", "Hyderabad", "Pune", "Ahmedabad", "Indore", "Chennai", "Jaipur", "Kochi", "Chandigarh", "Lucknow", "Kolkata", "Coimbatore", "Goa", "Bhubaneswar", "Faridabad", "Guwahati", "Dehradun", "Jodhpur", "Ludhiana", "Patna", "Raipur", "Surat", "Trivandrum", "Vadodara"
  ];

  const colivingCities = [
    "Gurgaon", "Bangalore", "Mumbai", "Delhi", "Noida", "Hyderabad", "Pune", "Ahmedabad", "Indore", "Chennai", "Lucknow"
  ];

  const virtualOfficeCities = [
    "Gurgaon", "Bangalore", "Mumbai", "Delhi", "Noida", "Hyderabad", "Pune", "Ahmedabad", "Indore", "Chennai", "Jaipur", "Kochi", "Bhubaneswar", "Coimbatore", "Chandigarh", "Goa", "Kolkata", "Guwahati", "Dehradun", "Calicut", "Mohali", "Visakhapatnam", "Faridabad", "Bhopal", "Ernakulam", "Ludhiana", "Nagpur", "Patna", "Raipur", "Surat", "Trivandrum", "Vadodara"
  ];

  const officeSpaceCities = [
    "Gurgaon", "Bangalore", "Mumbai", "Delhi", "Noida", "Hyderabad", "Pune"
  ];

  return (
    <footer className="w-full font-sans text-slate-800">
      {/* Upper Yellow Section */}
      <div className="bg-yellow-500 py-12 px-6  relative overflow-hidden">
        {/* Subtle geometric background pattern matching the screenshot */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="black" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" transform="rotate(15)" />
          </svg>
        </div>

        <div className="w-full flex flex-col lg:flex-row justify-between gap-12 relative z-10">
          {/* Left Column: Branding & Links */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">COFYND</h2>
              </div>
            </div>
            <p className="text-sm font-semibold mb-6 text-slate-800">Fynd the right space, Globally</p>

            <p className="max-w-2xl text-[14px] leading-relaxed mb-10 text-slate-800 font-medium opacity-90">
              CoFynd is India's #1 online platform for searching and booking Coworking, Coliving, Private Offices & Virtual Offices across India. Choose from 100,000+ verified fully furnished spaces to Work & Live.<br />
              Space Search Made Simple with CoFynd
            </p>

            <div className="">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[14px] font-semibold text-slate-900">
                <a href="#" className="hover:opacity-70">Coworking Space</a>
                <span className="text-lg">•</span>
                <a href="#" className="hover:opacity-70">Coliving Space</a>
                <span className="text-lg">•</span>
                <a href="#" className="hover:opacity-70">Virtual Space</a>
                <span className="text-lg">•</span>
                <a href="#" className="hover:opacity-70">Enterprise Solutions</a>
                <span className="text-lg">•</span>
                <a href="#" className="hover:opacity-70">List Your Space</a>
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[14px] font-semibold text-slate-900">
                <a href="#" className="hover:opacity-70">About us</a>
                <span className="text-lg">•</span>
                <a href="#" className="hover:opacity-70">Contact us</a>
                <span className="text-lg">•</span>
                <a href="#" className="hover:opacity-70">Engineering Services</a>
                <span className="text-lg">•</span>
                <a href="#" className="hover:opacity-70">Refund</a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Social */}
          <div className="lg:w-1/3 flex flex-col gap-10">
            <div>
              <h3 className="font-bold text-[15px] mb-3 text-slate-900">Business Plans</h3>
              <ul className="space-y-2 text-[14px] font-medium text-slate-800">
                <li><a href="#" className="hover:underline">Coworking Space Business Plans</a></li>
                <li><a href="#" className="hover:underline">Coliving Space Business Plans</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[15px] mb-3 text-slate-900">Feel free connect with us</h3>
              <div className="space-y-3 text-[14px] font-medium text-slate-800">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-slate-800" />
                  <span>+91 9355 28 9999</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-slate-800" />
                  <a href="mailto:hello@cofynd.com" className="hover:underline">hello@cofynd.com</a>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-slate-400 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Middle White Section: City Links */}
      <div className="bg-white py-12 px-6 ">
        <div className="max-w-[1400px] mx-auto space-y-5">

          {/* Coworking */}
          <div>
            <h1 className="text-slate-950 text-xl font-semibold mb-3">Coworking Spaces in India</h1>
            <div className="flex flex-wrap gap-x-1  text-[16px] font-light text-slate-800 leading-relaxed">
              {coworkingCities.map((city, i) => (
                <React.Fragment key={city}>
                  <a href="#" className=" hover:text-blue-600">Coworking Space in {city}</a>
                  {i < coworkingCities.length - 1 && <span className="text-slate-400">•</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Coliving */}
          <div>
            <h1 className="text-slate-950 text-xl font-semibold mb-3">Coliving Spaces in India</h1>
            <div className="flex flex-wrap gap-x-1  text-[16px] font-light text-slate-800 leading-relaxed">
              {colivingCities.map((city, i) => (
                <React.Fragment key={city}>
                  <a href="#" className="hover:text-blue-600">Coliving Space in {city}</a>
                  {i < colivingCities.length - 1 && <span className="text-slate-400">•</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Virtual Office */}
          <div>
            <h1 className="text-slate-950 text-xl font-semibold mb-3">Virtual Offices in India</h1>
            <div className="flex flex-wrap gap-x-1  text-[16px] font-light text-slate-800 leading-relaxed">
              {virtualOfficeCities.map((city, i) => (
                <React.Fragment key={city}>
                  <a href="#" className="hover:text-blue-600">Virtual office in {city}</a>
                  {i < virtualOfficeCities.length - 1 && <span className="text-slate-400">•</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Office Spaces */}
          <div>
            <h1 className="text-slate-950 text-xl font-semibold mb-3">Office Spaces in India</h1>
            <div className="flex flex-wrap gap-x-1 text-[16px] font-light text-slate-800 leading-relaxed">
              {officeSpaceCities.map((city, i) => (
                <React.Fragment key={city}>
                  <a href="#" className="hover:text-blue-600">Office Space in {city}</a>
                  {i < officeSpaceCities.length - 1 && <span className="text-slate-400">•</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-100 py-6 px-6 lg:px-16 bg-white">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-slate-500">
          <p>Copyright © 2023 Cofynd All rights reserved</p>
          <p className="text-center md:text-right">
            Cofynd and the Cofyndcom logo are registered trademarks of Cofynd Infotech Pvt Ltd | <a href="#" className="hover:underline font-bold text-slate-800">T&C</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
