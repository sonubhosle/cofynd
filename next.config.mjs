/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.cofynd.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cofynd.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "i0.wp.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;