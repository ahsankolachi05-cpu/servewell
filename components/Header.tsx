"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#mission", label: "Mission" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#stories", label: "Stories" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "bg-ink/95 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.08)]"
            : "bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5"
          aria-label="Main navigation"
        >
          <Link
            href="#home"
            onClick={() => setOpen(false)}
            className="flex items-baseline gap-2"
          >
            <span className="font-serif text-2xl md:text-3xl font-semibold tracking-wide text-ivory">
              Serve<span className="text-gold">Well</span>
            </span>
            <span className="hidden sm:inline text-[10px] uppercase tracking-[0.3em] text-ivory/50">
              by Dr San
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="link-underline text-[12px] uppercase tracking-[0.2em] text-ivory/75 hover:text-ivory transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-gold text-ink px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-gold-light hover:shadow-[0_8px_30px_rgba(201,169,106,0.35)]"
            >
              Book a Session
            </Link>
          </div>

          <button
            className="lg:hidden flex h-11 w-11 flex-col items-center justify-center gap-[7px] text-ivory"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className={`block h-[2px] w-7 bg-current transition-transform duration-300 ${open ? "rotate-45 translate-y-[9px]" : ""}`} />
            <span className={`block h-[2px] w-7 bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-[2px] w-7 bg-current transition-transform duration-300 ${open ? "-rotate-45 -translate-y-[9px]" : ""}`} />
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-ink transition-all duration-500 lg:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex h-full flex-col justify-center px-10 gap-1" aria-label="Mobile navigation">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
              className={`font-serif text-4xl text-ivory py-2.5 transition-all duration-500 hover:text-gold ${
                open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? "500ms" : "0ms" }}
            className={`mt-8 inline-block bg-gold text-ink px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-center transition-all duration-500 ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Book a Session
          </Link>
        </nav>
      </div>
    </>
  );
}
