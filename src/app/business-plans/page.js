import React from 'react';
import CategoryGrid from '@/components/CategoryGrid';

export const metadata = {
  title: "Managed Business Plans | Enterprise & Startup Solutions | CoFynd",
  description: "Explore flexible business plans for teams of all sizes. Managed offices, shared spaces, and custom solutions with CoFynd.",
};

export default function BusinessPlansLanding() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            Everything you need for <span className="text-blue-600">Enterprise Growth</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto">
            Choose from our specialized plans designed for startups, SMEs, and large global enterprises.
          </p>
        </div>

        <CategoryGrid />
      </div>
    </div>
  );
}
