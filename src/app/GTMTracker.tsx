'use client';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default function GTMTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'pageview',
        page: pathname + (searchParams ? '?' + searchParams.toString() : ''),
      });
    }
  }, [pathname, searchParams]);

  return null;
}
