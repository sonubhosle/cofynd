import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const inter = Inter({
  variable: "--font-inter",

});

export const metadata = {
  metadataBase: new URL('https://cofynd.com'),
  title: {
    default: "CoFynd - #1 Platform for Coworking, Coliving & Office Spaces",
    template: "%s | CoFynd"
  },
  description: "Discover 100,000+ verified coworking spaces, coliving spaces, virtual offices, and managed office spaces across India. Zero booking fee, guided tours, and expert support.",
  keywords: ["coworking space", "coliving space", "virtual office", "office space for rent", "shared office", "managed office", "India", "Gurgaon", "Bangalore", "Mumbai"],
  authors: [{ name: "CoFynd Team" }],
  creator: "CoFynd",
  publisher: "CoFynd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "CoFynd - Coworking & Coliving Spaces in India",
    description: "Find your perfect workspace or living space with CoFynd. India's largest discovery and booking platform.",
    url: 'https://cofynd.com',
    siteName: 'CoFynd',
    images: [
      {
        url: '/favicon.png', // Fallback to icon if no OG image
        width: 800,
        height: 600,
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CoFynd - Work & Live Anywhere',
    description: '100,000+ verified spaces for modern professionals.',
    creator: '@cofynd',
    images: ['/favicon.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
