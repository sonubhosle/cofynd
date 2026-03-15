import React from 'react';
import PropertyForm from '@/components/PropertyForm';

export async function generateMetadata({ params }) {
  const { plan } = await params;
  const planName = plan.charAt(0).toUpperCase() + plan.slice(1).replace('-', ' ');
  return {
    title: `${planName} Solutions | CoFynd Business Plans`,
    description: `Customized ${planName} office solutions by CoFynd. Scalable, flexible, and fully managed spaces designed for your business growth.`,
  };
}

export default async function BusinessPlanPage({ params }) {
  const { plan } = await params;
  const planName = plan.charAt(0).toUpperCase() + plan.slice(1).replace('-', ' ');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 px-6 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {planName} <span className="text-blue-500">Business Solutions</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
          Everything You Need to Scale your {planName} Workspace. Fully managed, Zero capital expenditure, and 100% customisable.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all">
            Get a Quote
          </button>
          <button className="bg-white/10 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/20 transition-all">
            Download Brochure
          </button>
        </div>
      </section>

      {/* Basic Content info */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Why Choose Our {planName} Plan?
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                Move into office spaces that are as dynamic as your business. Whether you are looking for a single desk or a customized office for a team of 500, we have the perfect space for you.
              </p>
              <ul className="space-y-4">
                {[
                  "No Lock-in period",
                  "Single point of contact",
                  "Customized office branding",
                  "Access to premium amenities"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-800 font-medium">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-100 rounded-[40px] aspect-video flex items-center justify-center overflow-hidden">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" alt={planName} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <PropertyForm />
    </div>
  );
}
