import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative bg-ink overflow-hidden min-h-[100svh] flex items-center">
      {/* Background image — renders directly, never hidden */}
      <div className="absolute inset-0">
        <div className="animate-kenburns absolute inset-0">
          <Image
            src="/images/hero-training.jpg"
            alt="A professional personal trainer guiding a client with dumbbells in an elegant gym"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-36 pb-24 w-full">
        <div className="max-w-3xl">
          <p className="animate-fade-up text-[11px] md:text-xs uppercase tracking-[0.45em] text-gold mb-8">
            Health & Fitness — London & Online
          </p>
          <h1 className="animate-fade-up delay-100 font-serif text-6xl md:text-8xl lg:text-[6.5rem] font-light leading-[0.98] text-ivory">
            Strength
            <br />
            to <span className="italic text-gold-light">serve.</span>
          </h1>
          <p className="animate-fade-up delay-200 mt-8 max-w-xl text-base md:text-xl font-light leading-relaxed text-ivory/75">
            Professional personal training, nutrition and recovery coaching — delivered with a
            servant&rsquo;s heart. Build the body, steady the mind, and use your strength for
            something greater.
          </p>
          <div className="animate-fade-up delay-300 mt-11 flex flex-wrap items-center gap-5">
            <Link
              href="#contact"
              className="bg-gold text-ink px-9 py-4.5 text-[13px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-gold-light hover:shadow-[0_10px_40px_rgba(201,169,106,0.4)]"
            >
              Start Your Journey
            </Link>
            <Link
              href="#mission"
              className="link-underline text-ivory/85 text-[13px] uppercase tracking-[0.2em] hover:text-ivory"
            >
              Discover the mission
            </Link>
          </div>
          <div className="animate-fade-up delay-400 mt-14 flex items-center gap-8 text-ivory/50">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-gold" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" stroke="currentColor" strokeWidth="1.4" />
              </svg>
              <span className="text-xs uppercase tracking-[0.2em]">Professional</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-gold" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 21s-7.5-4.7-9.5-9C1 8.5 3 5 6.5 5c2 0 3.5 1 4.5 2.5C12 6 13.5 5 15.5 5 19 5 21 8.5 20.5 12c-2 4.3-8.5 9-8.5 9z" stroke="currentColor" strokeWidth="1.4" />
              </svg>
              <span className="text-xs uppercase tracking-[0.2em]">Mission-driven</span>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <svg className="w-5 h-5 text-gold" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
                <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              <span className="text-xs uppercase tracking-[0.2em]">Nationwide online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ivory/40">
        <span className="text-[10px] uppercase tracking-[0.35em]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
