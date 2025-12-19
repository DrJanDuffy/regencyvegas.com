import Link from "next/link";
import { AGENT, COMMUNITY, PHONE } from "@/lib/constants";
import TrackedPhoneLink from "@/components/ui/TrackedPhoneLink";
import TrackedEmailLink from "@/components/ui/TrackedEmailLink";

export default function Footer() {
  return (
    <footer className="w-full border-t border-stone-700 bg-luxury-black">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 text-base text-gray-200 md:grid-cols-3 md:gap-12 md:py-16">
        <div>
          <h2 className="mb-4 font-playfair text-xl font-semibold text-white">
            {COMMUNITY.name}
          </h2>
          <p className="mb-3">
            55+ guard-gated community Built by Toll Brothers in The Cliffs village of Summerlin,
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
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            Contact
          </h3>
          <div className="space-y-1">
            <p className="font-semibold text-white">{AGENT.name}</p>
            <p>{AGENT.title}</p>
            <p className="text-sm">{AGENT.brokerage}</p>
            <p className="text-sm">Lic: {AGENT.license}</p>
            <div className="pt-2">
              <TrackedPhoneLink
                phone={PHONE.marketing}
                location="footer"
                className="font-semibold text-amber-600 hover:text-amber-700"
              >
                {PHONE.marketing}
              </TrackedPhoneLink>
            </div>
            <div>
              <TrackedEmailLink
                email={AGENT.email}
                location="footer"
                className="text-amber-600 hover:text-amber-700"
              >
                {AGENT.email}
              </TrackedEmailLink>
            </div>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
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
                  className="text-gray-200 transition-colors hover:text-amber-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-stone-700 bg-luxury-900 py-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} RegencyVegas.com · All Rights Reserved.
      </div>
    </footer>
  );
}


