import Link from "next/link";
import { AGENT, COMMUNITY, PHONE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="w-full border-t border-stone-200 bg-stone-100">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 text-sm text-gray-600 md:grid-cols-3 md:gap-12 md:py-16">
        <div>
          <h2 className="mb-4 font-playfair text-xl font-semibold text-navy-800">
            {COMMUNITY.name}
          </h2>
          <p className="mb-3">
            Toll Brothers luxury 55+ guard-gated community in The Cliffs village of Summerlin,
            Las Vegas, NV.
          </p>
          <p>
            Homes from{" "}
            <span className="font-semibold">
              ${COMMUNITY.price.min.toLocaleString()} to ${COMMUNITY.price.max.toLocaleString()}+
            </span>
            .
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-navy-800">
            Contact
          </h3>
          <div className="space-y-1">
            <p className="font-semibold text-navy-800">{AGENT.name}</p>
            <p>{AGENT.title}</p>
            <p className="text-xs">{AGENT.brokerage}</p>
            <p className="text-xs">Lic: {AGENT.license}</p>
            <div className="pt-2">
              <a
                href={`tel:${PHONE.marketing}`}
                className="font-semibold text-amber-600 hover:text-amber-700"
              >
                {PHONE.marketing}
              </a>
            </div>
            <div>
              <a
                href={`mailto:${AGENT.email}`}
                className="text-amber-600 hover:text-amber-700"
              >
                {AGENT.email}
              </a>
            </div>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-navy-800">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {[
              { label: "Homes for Sale", href: "/homes-for-sale" },
              { label: "Floor Plans", href: "/floor-plans" },
              { label: "Amenities", href: "/amenities" },
              { label: "Location", href: "/location" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-600 transition-colors hover:text-amber-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-stone-200 bg-stone-50 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} RegencyVegas.com · All Rights Reserved.
      </div>
    </footer>
  );
}


