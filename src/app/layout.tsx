import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aroma Chai Franchise | Start Tea Café Business from ₹8 Lakhs',
  description: 'Start your own Aroma Chai franchise with a low-investment, high-ROI business model. Chef-less operations, full support & scalable growth. Apply now.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

