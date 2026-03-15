export default function sitemap() {
  const baseUrl = 'https://cofynd.com';

  // Basic routes
  const routes = [
    '',
    '/coworking',
    '/coliving',
    '/virtual-office',
    '/office-spaces',
    '/list-property',
    '/list-your-space',
    '/business-plans',
    '/about',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: route === '' ? 1 : 0.8,
  }));

  // In a real app, you'd fetch all city and property slugs here
  const cities = ['hyderabad', 'gurgaon', 'bangalore', 'mumbai', 'delhi', 'noida', 'chennai', 'pune', 'lucknow', 'kolkata'];
  
  const cityRoutes = cities.flatMap((city) => [
    {
      url: `${baseUrl}/coworking/${city}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/coliving/${city}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/virtual-office/${city}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    }
  ]);

  return [...routes, ...cityRoutes];
}
