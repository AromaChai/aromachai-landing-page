import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';
import GTMTracker from "@/app/GTMTracker";
import { Suspense } from 'react';

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
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T86MT3CZ');`}} />
      </head>
      <body>
        <Suspense fallback={null}>
          <GTMTracker />
        </Suspense>
        {children}
      </body>
    </html>
  );
}

