import React from 'react';
import PropertyForm from '@/components/PropertyForm';

export const metadata = {
  title: "List Your Property | Partner with CoFynd",
  description: "Monetize your space by listing it on CoFynd. Join India's #1 platform for Coworking, Coliving, and Office Spaces.",
};

export default function ListPropertyPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
              Turn your space into a <span className="text-blue-600">Revenue Stream</span>
            </h1>
            <p className="text-xl text-slate-500 mb-10 leading-relaxed">
              Join 500+ property owners and workspace operators who trust CoFynd to fill their inventory with high-quality leads.
            </p>

            <div className="space-y-6">
              {[
                { title: "Pan-India Presence", desc: "Get exposure in 25+ cities across India." },
                { title: "Verified Leads", desc: "Our tech-enabled pre-screening ensures high conversion rates." },
                { title: "Expert Support", desc: "Dedicated relationship managers to help manage your listings." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                    <span className="text-blue-600 font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-100 shadow-2xl shadow-blue-50/50">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">List Your Space Today</h2>
            <PropertyForm hideImage={true} />
          </div>
        </div>
      </section>
    </div>
  );
}
