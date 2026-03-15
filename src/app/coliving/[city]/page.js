import CityResults from '@/components/CityResults';

export async function generateMetadata({ params }) {
  const { city } = await params;
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);
  return {
    title: `Best Coliving Spaces in ${cityName} | Verified PGs & Shared Living`,
    description: `Find top-rated coliving spaces and PGs in ${cityName}. Fully furnished rooms, high-speed WiFi, laundry, and community living with CoFynd.`,
  };
}

const Page = async () => {
  return (
    <>
      <CityResults type="Coliving" />
    </>
  );
};

export default Page;
