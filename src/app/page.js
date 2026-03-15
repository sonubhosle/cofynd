import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import FeatureSection from "@/components/FeatureSection";
import TopCoworking from "@/components/TopCoworking";
import { FeaturedCoworking } from "@/components/FeaturedCoworkings";
import { Phone, PhoneCall } from "lucide-react";
import TopColiving from "@/components/TopColiving";
import { WhatYouGet } from "@/components/WhatYouGet";
import PropertyForm from "@/components/PropertyForm";
import { TrustComponies } from "@/components/TrustedComponies";
import { NewsMedia } from "@/components/NewsMedia";
import { About } from "@/components/About";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="grow">
        <Hero />
        <CategoryGrid />
        <FeatureSection />
        <TopCoworking />
        <div className="hidden sm:block">
          <FeaturedCoworking />
        </div>
        <TopColiving />

        <WhatYouGet />
        <PropertyForm />
        <TrustComponies />
        <NewsMedia />
        <About />
        <button className="fixed right-6 bottom-6  bg-white w-14 h-14 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex items-center justify-center z-50 hover:scale-105 transition-transform">
          <PhoneCall className="w-6 h-6 text-blue-500 fill-blue-500" />
        </button>
      </main>
    </div>
  );
}
