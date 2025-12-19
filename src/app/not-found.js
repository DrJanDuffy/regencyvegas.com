import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';

export const metadata = {
  title: '404 - Page Not Found | Regency at Summerlin',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center px-4 py-16 bg-luxury-black">
      <div className="text-center">
        <h1 className="mb-4 font-playfair text-6xl font-bold text-white md:text-8xl">
          404
        </h1>
        <h2 className="mb-4 font-playfair text-3xl font-semibold text-white md:text-4xl">
          Page Not Found
        </h2>
        <p className="mb-8 text-lg text-gray-300 md:text-xl">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded-lg bg-amber-500 px-8 py-4 text-base font-semibold text-navy-900 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-xl"
          >
            Return Home
          </Link>
          <Link
            href="/homes-for-sale"
            className="rounded-lg border-2 border-white/80 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
          >
            Browse Homes
          </Link>
        </div>

        <div className="mt-12 border-t border-stone-700 pt-8">
          <p className="mb-4 text-base font-semibold text-white">Popular Pages:</p>
          <nav className="flex flex-wrap justify-center gap-4">
            {NAV_LINKS.slice(0, 6).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-amber-400 hover:text-amber-500 underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </main>
  );
}

