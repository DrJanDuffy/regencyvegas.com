import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

export default function Navigation() {
  return (
    <nav className="hidden md:flex items-center gap-4 text-sm text-navy-800">
      {NAV_LINKS.map((item) => (
        <div key={item.href} className="relative group">
          <Link href={item.href} className="hover:text-amber-500 transition">
            {item.label}
          </Link>
          {item.children && (
            <div className="absolute left-0 top-full mt-2 hidden min-w-[220px] rounded-md border border-stone-200 bg-white shadow-lg group-hover:block">
              <ul className="py-2 text-sm text-gray-700">
                {item.children.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      className="block px-4 py-2 hover:bg-stone-100"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}


