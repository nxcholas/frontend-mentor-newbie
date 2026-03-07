"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NavLinks = [
  { pageName: "Home" },
  { pageName: "New" },
  { pageName: "Popular" },
  { pageName: "Trending" },
  { pageName: "Categories" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  // Optional: lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className="w-full max-w-278 flex justify-between items-center mt-8 lg:pb-16">
        <Image
          src="/news-homepage/logo.svg"
          width={64}
          height={40}
          alt="Logo"
        />

        {/* desktop */}
        <div className="hidden lg:block">
          <ul className="flex gap-8 text-news-homepage-dark-grayish-blue text-sm/6.5">
            {NavLinks.map((link, index) => (
              <li key={index} className="hover:text-news-homepage-orange-500">
                <Link href="/">
                  <p>{link.pageName}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* mobile */}
        <button
          type="button"
          aria-label="Open menu"
          className="block lg:hidden"
          onClick={() => setOpen(true)}
        >
          <Image
            src="/news-homepage/icon-menu.svg"
            width={40}
            height={40}
            alt="Menu Icon"
          />
        </button>
      </nav>

      {/* Mobile overlay + drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-200 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* blurred/dim background */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* drawer */}
        <aside
          className={`absolute right-0 top-0 h-full w-72 bg-news-homepage-off-white p-6 transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex justify-end">
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <Image
                src="/news-homepage/icon-menu-close.svg"
                width={32}
                height={32}
                alt="Close Menu"
              />
            </button>
          </div>

          <ul className="mt-10 flex flex-col gap-5 text-news-homepage-very-dark-blue text-lg">
            {NavLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="hover:text-news-homepage-orange-500"
                >
                  {link.pageName}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </>
  );
}

export default Navbar;
