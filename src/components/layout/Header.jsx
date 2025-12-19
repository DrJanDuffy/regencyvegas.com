import Link from "next/link";
import Navigation from "./Navigation";
import { PHONE } from "@/lib/constants";

export default function Header() {
  return (
    <header className="w-full border-b border-stone-200 bg-cream-50/95 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-playfair text-xl md:text-2xl font-bold text-navy-800">
            Regency at Summerlin
          </span>
          <span className="text-xs md:text-sm text-gray-600">
            by Dr. Jan Duffy, Las Vegas Real Estate Expert
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Navigation />
          <a
            href={`tel:${PHONE.marketing}`}
            className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-navy-900 hover:bg-amber-600 transition"
          >
            Call/Text {PHONE.marketing}
          </a>
        </div>
      </div>
    </header>
  );
}


