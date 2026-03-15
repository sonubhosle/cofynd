import React from 'react';
import CoworkingClient from './CoworkingClient';

const knownCities = [
  'gurugram', 'gurgaon', 'hyderabad', 'bangalore', 'bengaluru', 
  'mumbai', 'pune', 'delhi', 'noida', 'lucknow', 'chennai', 'kolkata'
];

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const isCityPage = knownCities.includes(slug.toLowerCase());
  
  const cityName = slug.charAt(0).toUpperCase() + slug.slice(1).replace('-', ' ');

  if (isCityPage) {
    return {
      title: `Coworking Space in ${cityName} | Verified Shared Offices`,
      description: `Find and book the best coworking spaces in ${cityName}. Choose from 100+ verified locations with premium amenities and zero booking fee.`,
      openGraph: {
        title: `Best Coworking Spaces in ${cityName} | CoFynd`,
        description: `Explore top-rated shared office spaces in ${cityName}. Guided tours and expert support available.`,
      }
    };
  }

  // For property details, ideally you'd fetch property data here
  const propertyName = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return {
    title: `${propertyName} Coworking Space | Book via CoFynd`,
    description: `Book your seat at ${propertyName}. Premium coworking space with modern amenities, high-speed internet, and a professional community.`,
  };
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const isCityPage = knownCities.includes(resolvedParams.slug.toLowerCase());

  return <CoworkingClient params={resolvedParams} isCityPage={isCityPage} />;
}
