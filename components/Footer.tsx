import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-ivory/10">
          <div className="md:col-span-2">
            <p className="font-serif text-3xl font-semibold">
              Serve<span className="text-gold">Well</span>
            </p>
            <p className="mt-3 text-sm font-light text-ivory/55 max-w-sm leading-relaxed">
              Professional health & fitness with a servant&rsquo;s heart. Strength to serve —
              London & online nationwide.
            </p>
          </div>
          <nav className="flex flex-col gap-3" aria-label="Footer navigation">
            {[
              ["#home", "Home"], ["#mission", "Mission"], ["#services", "Services"],
              ["#about", "About"], ["#stories", "Stories"], ["#contact", "Contact"],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="text-sm text-ivory/60 hover:text-gold transition-colors w-fit">
                {label}
              </Link>
            ))}
          </nav>
          <div className="text-sm font-light text-ivory/55 space-y-2.5">
            <p>
              <a href="mailto:hello@servewell.co.uk" className="hover:text-gold transition-colors">
                hello@servewell.co.uk
              </a>{" "}
              <span className="text-ivory/30">(placeholder)</span>
            </p>
            <p>London, NW6 — & nationwide online</p>
            <p className="flex gap-5 pt-1">
              <Link href="#contact" className="hover:text-gold transition-colors">Privacy</Link>
              <Link href="#contact" className="hover:text-gold transition-colors">Terms</Link>
            </p>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row justify-between gap-3 text-xs text-ivory/35 font-light">
          <p>© 2026 ServeWell by Dr San. All rights reserved. (Concept — name TBC)</p>
          <p className="font-serif italic text-sm text-ivory/45">Strength to serve.</p>
        </div>
      </div>
    </footer>
  );
}
