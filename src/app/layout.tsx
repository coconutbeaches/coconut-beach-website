import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Coconut Beach Bungalows',
    default:
      'Coconut Beach Bungalows - Eco-Friendly Beachfront Accommodation in Koh Phangan',
  },
  description:
    'Discover paradise at Coconut Beach Bungalows - eco-friendly beachfront accommodation on Salad Beach, Koh Phangan, Thailand. Book your tropical getaway today!',
  keywords:
    'Koh Phangan, beachfront bungalows, eco-friendly accommodation, Thailand, Salad Beach, tropical vacation',
  authors: [{ name: 'Coconut Beach Bungalows' }],
  creator: 'Coconut Beach Bungalows',
  openGraph: {
    title: 'Coconut Beach Bungalows - Eco-Friendly Beachfront Accommodation',
    description:
      'Discover paradise at Coconut Beach Bungalows on Salad Beach, Koh Phangan, Thailand',
    url: 'https://coconutbeachkohphangan.com',
    siteName: 'Coconut Beach Bungalows',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coconut Beach Bungalows - Eco-Friendly Beachfront Accommodation',
    description:
      'Discover paradise at Coconut Beach Bungalows on Salad Beach, Koh Phangan, Thailand',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts for script font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Preload above-the-fold hero images */}
        <link
          rel="preload"
          href="/images/hero-beach.jpg"
          as="image"
          type="image/jpeg"
        />
        {/* Preload responsive versions */}
        <link
          rel="preload"
          href="/_next/image?url=%2Fimages%2Fhero-beach.jpg&w=1920&q=75"
          as="image"
          type="image/webp"
          media="(min-width: 1200px)"
        />
        <link
          rel="preload"
          href="/_next/image?url=%2Fimages%2Fhero-beach.jpg&w=1080&q=75"
          as="image"
          type="image/webp"
          media="(min-width: 768px) and (max-width: 1199px)"
        />
        <link
          rel="preload"
          href="/_next/image?url=%2Fimages%2Fhero-beach.jpg&w=750&q=75"
          as="image"
          type="image/webp"
          media="(max-width: 767px)"
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
