import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Coconut Beach Bungalows',
    default: 'Coconut Beach Bungalows - Eco-Friendly Beachfront Accommodation in Koh Phangan',
  },
  description: 'Discover paradise at Coconut Beach Bungalows - eco-friendly beachfront accommodation on Salad Beach, Koh Phangan, Thailand. Book your tropical getaway today!',
  keywords: 'Koh Phangan, beachfront bungalows, eco-friendly accommodation, Thailand, Salad Beach, tropical vacation',
  authors: [{ name: 'Coconut Beach Bungalows' }],
  creator: 'Coconut Beach Bungalows',
  openGraph: {
    title: 'Coconut Beach Bungalows - Eco-Friendly Beachfront Accommodation',
    description: 'Discover paradise at Coconut Beach Bungalows on Salad Beach, Koh Phangan, Thailand',
    url: 'https://coconutbeachkohphangan.com',
    siteName: 'Coconut Beach Bungalows',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coconut Beach Bungalows - Eco-Friendly Beachfront Accommodation',
    description: 'Discover paradise at Coconut Beach Bungalows on Salad Beach, Koh Phangan, Thailand',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Swanky+and+Moo+Moo&display=swap"
          rel="stylesheet"
        />
        {/* Preload above-the-fold hero images */}
        <link
          rel="preload"
          href="/images/hero-beach.jpg"
          as="image"
          type="image/jpeg"
          priority="high"
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
