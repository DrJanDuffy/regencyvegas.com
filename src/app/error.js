'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { PHONE } from '@/lib/constants';
import TrackedPhoneLink from '@/components/ui/TrackedPhoneLink';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log error to console or error tracking service
    console.error('Application error:', error);
  }, [error]);

  return (
    <main className="mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center px-4 py-16 bg-luxury-black">
      <div className="text-center">
        <h1 className="mb-4 font-playfair text-6xl font-bold text-white md:text-8xl">
          500
        </h1>
        <h2 className="mb-4 font-playfair text-3xl font-semibold text-white md:text-4xl">
          Something Went Wrong
        </h2>
        <p className="mb-8 text-lg text-gray-300 md:text-xl">
          We're sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.
        </p>

        <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={reset}
            className="rounded-lg bg-amber-500 px-8 py-4 text-base font-semibold text-navy-900 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-xl"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="rounded-lg border-2 border-white/80 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
          >
            Return Home
          </Link>
        </div>

        <div className="mt-8 rounded-lg border border-stone-700 bg-luxury-900 p-6">
          <p className="mb-2 text-base font-semibold text-white">Need immediate assistance?</p>
          <p className="text-base text-gray-300">
            Call or text:{' '}
            <TrackedPhoneLink
              phone={PHONE.marketing}
              location="error_page"
              className="text-amber-400 hover:text-amber-500 underline"
            >
              {PHONE.marketing}
            </TrackedPhoneLink>
          </p>
        </div>
      </div>
    </main>
  );
}

