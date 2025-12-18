import Link from "next/link";
import { AGENT, COMMUNITY, PHONE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="w-full border-t border-stone-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3 text-sm text-gray-600">
        <div>
          <h2 className="font-playfair text-lg font-semibold text-navy-800 mb-2">
            {COMMUNITY.name}
          </h2>
          <p className="mb-2">
            Toll Brothers luxury 55+ guard-gated community in The Cliffs village
            of Summerlin, Las Vegas, NV.
          </p>
          <p>
            Homes from ${COMMUNITY.price.min.toLocaleString()} to $
            {COMMUNITY.price.max.toLocaleString()}+.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-navy-800 mb-2">Contact</h3>
          <p className="mb-1">
            {AGENT.name}, {AGENT.title}
          </p>
          <p className="mb-1">{AGENT.brokerage}</p>
          <p className="mb-1">Lic: {AGENT.license}</p>
          <p className="mb-1">
            Phone:{" "}
            <a href={`tel:${PHONE.marketing}`} className="text-amber-600">
              {PHONE.marketing}
            </a>
          </p>
          <p>
            Email:{" "}
            <a href={`mailto:${AGENT.email}`} className="text-amber-600">
              {AGENT.email}
            </a>
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-navy-800 mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/homes-for-sale" className="hover:text-amber-600">
                Homes for Sale
              </Link>
            </li>
            <li>
              <Link href="/floor-plans" className="hover:text-amber-600">
                Floor Plans
              </Link>
            </li>
            <li>
              <Link href="/amenities" className="hover:text-amber-600">
                Amenities
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-amber-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-stone-200 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} RegencyVegas.com · All Rights Reserved.
      </div>
    </footer>
  );
}


