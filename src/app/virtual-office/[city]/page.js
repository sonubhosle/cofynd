import CityResults from '@/components/CityResults';

export async function generateMetadata({ params }) {
  const { city } = await params;
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);
  return {
    title: `Virtual Office in ${cityName} for GST & Business Registration`,
    description: `Get a prestigious business address in ${cityName} with CoFynd's virtual office solutions. Includes GST registration, mail handling, and meeting room access.`,
  };
}

const Page = async () => {
  return (
    <>
      <CityResults type="Virtual Office" />
    </>
  );
};

export default Page;
