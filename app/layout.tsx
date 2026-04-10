import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ON1 // IMAGES — Bold Portrait, Sports & Event Photography | Connecticut',
  description:
    'ON1 Images — Capturing confidence, connection & energy in Connecticut. Weddings, sports, prom, portraits & corporate events. Book your session today.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
