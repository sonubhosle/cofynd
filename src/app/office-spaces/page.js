import React from 'react';
import CityResults from '@/components/CityResults';


export const metadata = {
  title: "Premium Office Spaces for Rent | Managed & Serviced Offices | CoFynd",
  description: "Find the best office spaces for rent. From private offices to managed floor plates, discover verified office solutions with CoFynd.",
};

export default function OfficeSpacesPage({ params }) {
  return (
    <div className="min-h-screen bg-white">
      <CityResults params={{ slug: 'gurgaon' }} type="Office" />
    </div>
  );
}
