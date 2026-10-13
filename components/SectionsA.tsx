"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ---------- Animated counter ---------- */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !done.current) {
          done.current = true;
          const start = performance.now();
          const dur = 1600;
          const tick = (t: number) => {
            const p = Math.min((t - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(target * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

/* ---------- Stats band ---------- */
export function Stats() {
  const stats = [
    { n: 12, suffix: "+", label: "Years of professional practice" },
    { n: 400, suffix: "+", label: "Clients coached & transformed" },
    { n: 1500, suffix: "+", label: "Hours of community service" },
    { n: 98, suffix: "%", label: "Clients who stay past 6 months" },
  ];
  return (
    <section className="bg-ink border-t border-ivory/10">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20 grid grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((s) => (
          <div key={s.label} className="text-center lg:text-left">
            <p className="font-serif text-5xl md:text-6xl font-light text-gold">
              <Counter target={s.n} suffix={s.suffix} />
            </p>
            <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-ivory/55 max-w-[180px] mx-auto lg:mx-0">
              {s.label}
            </p>
          </div>
        ))}
      </div>
      <p className="pb-8 text-center text-[11px] text-ivory/30 uppercase tracking-[0.25em]">
        Figures are illustrative placeholders
      </p>
    </section>
  );
}

/* ---------- Marquee ---------- */
export function Marquee() {
  const words = ["Strength", "Discipline", "Compassion", "Service", "Resilience", "Faith", "Excellence"];
  const row = [...words, ...words];
  return (
    <div className="bg-gold overflow-hidden py-5 select-none" aria-hidden="true">
      <div className="animate-marquee flex w-max items-center gap-10 pr-10">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-serif italic text-2xl md:text-3xl text-ink whitespace-nowrap">{w}</span>
            <span className="w-2 h-2 rotate-45 bg-ink/70 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Mission ---------- */
export function Mission() {
  return (
    <section id="mission" className="bg-ivory py-24 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-forest/60 mb-7">The Mission</p>
            <h2 className="font-serif text-4xl md:text-6xl font-light leading-[1.08] text-ink">
              Fitness is the <span className="italic text-forest">vehicle.</span>
              <br />
              Service is the <span className="italic text-gold">destination.</span>
            </h2>
            <div className="mt-8 space-y-5 font-light leading-relaxed text-ink/70 text-base md:text-lg">
              <p>
                ServeWell exists for a simple conviction: a strong, healthy body is not an end in
                itself — it is a gift to be used. To serve family, community, and a purpose greater
                than ourselves.
              </p>
              <p>
                Every programme here is built on professional expertise and delivered with a
                missionary heart: personal attention, honest guidance, and genuine care for who you
                are becoming — not just how you look.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { t: "Professional", d: "Evidence-based training, nutrition and recovery methods." },
                { t: "Personal", d: "One-to-one coaching tailored to your body and your life." },
                { t: "Purposeful", d: "A share of every programme supports community wellness." },
                { t: "Principled", d: "Honest advice. No gimmicks, no quick fixes, no pressure." },
              ].map((v) => (
                <div key={v.t} className="border-l-2 border-gold pl-5">
                  <p className="font-serif text-xl font-semibold text-ink">{v.t}</p>
                  <p className="mt-2 text-sm font-light text-ink/60 leading-relaxed">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Image renders directly */}
          <div className="relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:ml-auto overflow-hidden shadow-2xl">
              <Image
                src="/images/mission-community.jpg"
                alt="A diverse group doing outdoor morning exercise together in a park at sunrise"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-4 lg:left-10 bg-ink text-ivory px-7 py-5 shadow-xl max-w-[260px]">
              <p className="font-serif italic text-xl leading-snug">
                &ldquo;To serve the Lord through serving people.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Philosophy: body / mind / spirit ---------- */
export function Philosophy() {
  const pillars = [
    {
      n: "01",
      t: "Body",
      d: "Strength, conditioning and nutrition built on sound exercise science — programmes that respect your starting point and progress you safely.",
    },
    {
      n: "02",
      t: "Mind",
      d: "Discipline, consistency and mindset coaching. Real change is built between sessions, in the choices you make every day.",
    },
    {
      n: "03",
      t: "Spirit",
      d: "Purpose beyond the mirror. Train with intention, serve with your strength, and become someone others can lean on.",
    },
  ];
  return (
    <section className="bg-forest-deep text-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-7">Philosophy</p>
          <h2 className="font-serif text-4xl md:text-6xl font-light leading-[1.08]">
            Whole-person <span className="italic text-gold-light">wellness.</span>
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-ivory/10">
          {pillars.map((p) => (
            <div key={p.n} className="bg-forest-deep p-10 md:p-12 group hover:bg-forest transition-colors duration-500">
              <p className="font-serif italic text-6xl text-gold/50 group-hover:text-gold transition-colors duration-500">
                {p.n}
              </p>
              <h3 className="mt-6 font-serif text-3xl font-medium">{p.t}</h3>
              <p className="mt-4 font-light leading-relaxed text-ivory/65">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
