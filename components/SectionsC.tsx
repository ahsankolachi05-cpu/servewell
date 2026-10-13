"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

/* ---------- Testimonials slider ---------- */
const testimonials = [
  {
    quote: "Training with Dr San changed more than my body. For the first time, fitness feels purposeful — I train so I can give more to my family.",
    name: "Client A",
    detail: "Personal Training — London",
  },
  {
    quote: "Honest, knowledgeable and genuinely caring. No gimmicks, no pressure — just steady progress and someone who truly believes in you.",
    name: "Client B",
    detail: "Online Coaching — Manchester",
  },
  {
    quote: "I came for the workouts and stayed for the mindset. My energy, my discipline, my outlook — everything shifted.",
    name: "Client C",
    detail: "Nutrition & Lifestyle — Birmingham",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setI((v) => (v + 1) % testimonials.length), []);
  const prev = () => setI((v) => (v - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next, paused]);

  const cur = testimonials[i];

  return (
    <section id="stories" className="bg-ink text-ivory py-24 md:py-36">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-7">Client Stories</p>
        <h2 className="font-serif text-4xl md:text-6xl font-light">
          Lives <span className="italic text-gold-light">changed.</span>
        </h2>

        <div
          className="mt-14 relative min-h-[300px] md:min-h-[260px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
        >
          <div className="overflow-hidden">
            <div
              className="slider-track flex"
              style={{ transform: `translateX(-${i * 100}%)` }}
            >
              {testimonials.map((t, k) => (
                <div
                  key={k}
                  className="w-full shrink-0 px-2 md:px-10"
                  aria-hidden={k !== i}
                >
                  <p className="font-serif italic text-2xl md:text-4xl font-light leading-snug text-ivory/90">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="mt-8 text-[12px] uppercase tracking-[0.3em] text-gold">{t.name}</p>
                  <p className="mt-2 text-sm font-light text-ivory/50">{t.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-12 h-12 border border-ivory/25 flex items-center justify-center hover:bg-gold hover:text-ink hover:border-gold transition-all duration-300"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M12 3L6 9l6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
            <div className="flex gap-2.5">
              {testimonials.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  aria-label={`Go to testimonial ${k + 1}`}
                  className={`h-1.5 transition-all duration-300 ${k === i ? "w-10 bg-gold" : "w-4 bg-ivory/25 hover:bg-ivory/50"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-12 h-12 border border-ivory/25 flex items-center justify-center hover:bg-gold hover:text-ink hover:border-gold transition-all duration-300"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M6 3l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
        <p className="mt-10 text-[11px] uppercase tracking-[0.25em] text-ivory/30">
          Testimonials are placeholders
        </p>
      </div>
    </section>
  );
}

/* ---------- Process ---------- */
const steps = [
  { n: "01", t: "Reach Out", d: "Tell me where you are and where you want to be. A friendly, no-pressure conversation." },
  { n: "02", t: "Assess & Plan", d: "Movement screening, lifestyle review and goal-setting. Your programme is built around your life." },
  { n: "03", t: "Train & Build", d: "Coached sessions, clear programming and ongoing support as you build strength week by week." },
  { n: "04", t: "Sustain & Serve", d: "Lock in lasting habits — and discover what your new strength lets you give back." },
];

export function Process() {
  return (
    <section className="bg-ivory py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.4em] text-forest/60 mb-7">How It Works</p>
          <h2 className="font-serif text-4xl md:text-6xl font-light leading-[1.08] text-ink">
            Your path to <span className="italic text-forest">strength.</span>
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.n} className="relative border-t-2 border-ink/10 pt-8 group hover:border-gold transition-colors duration-500">
              <p className="font-serif italic text-5xl text-ink/15 group-hover:text-gold transition-colors duration-500">{s.n}</p>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-ink">{s.t}</h3>
              <p className="mt-3 font-light leading-relaxed text-ink/60 text-[15px]">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Pricing teaser ---------- */
export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "£—",
      per: "/month",
      desc: "Begin your journey with structured guidance.",
      feats: ["1 session per week", "Personalised programme", "Messaging support"],
      hot: false,
    },
    {
      name: "Committed",
      price: "£—",
      per: "/month",
      desc: "For those ready to transform.",
      feats: ["3 sessions per week", "Nutrition coaching", "Recovery plan", "Priority support"],
      hot: true,
    },
    {
      name: "Online",
      price: "£—",
      per: "/month",
      desc: "Full coaching, anywhere in the UK.",
      feats: ["Custom training app", "Weekly video reviews", "Direct messaging"],
      hot: false,
    },
  ];
  return (
    <section className="bg-ivory pb-24 md:pb-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.4em] text-forest/60 mb-7">Investment</p>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-ink">
            Honest <span className="italic text-forest">pricing.</span>
          </h2>
          <p className="mt-5 text-ink/55 font-light">Packages to be confirmed — enquire for current rates.</p>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative p-10 border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                p.hot ? "bg-ink text-ivory border-ink" : "bg-white/60 border-ink/10"
              }`}
            >
              {p.hot && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-ink px-5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em]">
                  Most popular
                </span>
              )}
              <p className="font-serif text-2xl font-semibold">{p.name}</p>
              <p className="mt-4">
                <span className="font-serif text-6xl font-light">{p.price}</span>
                <span className={`text-sm ${p.hot ? "text-ivory/50" : "text-ink/45"}`}>{p.per}</span>
              </p>
              <p className={`mt-3 text-sm font-light ${p.hot ? "text-ivory/60" : "text-ink/55"}`}>{p.desc}</p>
              <ul className="mt-7 space-y-3">
                {p.feats.map((f) => (
                  <li key={f} className={`flex items-center gap-3 text-sm ${p.hot ? "text-ivory/75" : "text-ink/65"}`}>
                    <svg className="w-4 h-4 text-gold shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M2.5 8.5l3.5 3.5 7-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className={`mt-9 block text-center py-4 text-[12px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                  p.hot
                    ? "bg-gold text-ink hover:bg-gold-light"
                    : "border border-ink/20 hover:bg-ink hover:text-ivory"
                }`}
              >
                Enquire
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQs ---------- */
const faqs = [
  { q: "Do I need to be fit already to start?", a: "Placeholder — reassurance that programmes are built for every starting point, including complete beginners." },
  { q: "Where do in-person sessions take place?", a: "Placeholder — Dr San will confirm training locations in London (NW6 area) and any partner gyms." },
  { q: "How does online coaching work?", a: "Placeholder — explanation of the online coaching process: programming, video check-ins and messaging support." },
  { q: "What should I expect in the first session?", a: "Placeholder — what the initial assessment and first session involve." },
  { q: "Can I cancel or pause my package?", a: "Placeholder — Dr San's policy on cancellations, pauses and refunds." },
];

export function FAQs() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-ivory pb-24 md:pb-36">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-forest/60 mb-7">FAQs</p>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-ink">
            Good <span className="italic text-forest">questions.</span>
          </h2>
        </div>
        <div className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left group"
                >
                  <span className="font-serif text-xl md:text-2xl font-medium text-ink group-hover:text-forest transition-colors">
                    {f.q}
                  </span>
                  <span className={`shrink-0 w-10 h-10 flex items-center justify-center border transition-all duration-300 ${isOpen ? "rotate-45 bg-forest text-ivory border-forest" : "border-ink/20 text-forest"}`} aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </span>
                </button>
                <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="pb-7 font-light leading-relaxed text-ink/65 max-w-2xl">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-6 text-center text-sm text-ink/40 font-light">Answers are placeholders — to be confirmed.</p>
      </div>
    </section>
  );
}

/* ---------- CTA banner ---------- */
export function CTABanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[65vh] min-h-[440px]">
        {/* Image renders directly */}
        <Image
          src="/images/cta-dark.jpg"
          alt="An empty premium gym at dawn with a beam of light"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-3xl text-center">
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-7">Begin Today</p>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-[1.08] text-ivory">
              Your strongest self is <span className="italic text-gold-light">waiting.</span>
            </h2>
            <p className="mt-6 max-w-xl mx-auto font-light text-ivory/70 text-base md:text-lg">
              The first step is a conversation. No pressure, no commitment — just an honest
              discussion about where you are and where you could be.
            </p>
            <Link
              href="#contact"
              className="mt-10 inline-block bg-gold text-ink px-10 py-4.5 text-[13px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-gold-light hover:shadow-[0_10px_40px_rgba(201,169,106,0.4)]"
            >
              Book Your Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", interest: "Personal Training", message: "", website: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (form.name.trim().length < 2) errs.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Please enter a valid email.";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    if (form.website) { setStatus("sent"); return; }
    setStatus("sending");
    const subject = encodeURIComponent(`Enquiry: ${form.interest} — ${form.name}`);
    const body = encodeURIComponent(`${form.message || "(No message)"}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:hello@servewell.co.uk?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  const input = "w-full bg-white border border-ink/12 px-5 py-4 text-base font-light placeholder:text-ink/30 outline-none transition-all focus:border-forest";

  return (
    <section id="contact" className="bg-ivory py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
        <div>
          <p className="text-[11px] uppercase tracking-[0.4em] text-forest/60 mb-7">Contact</p>
          <h2 className="font-serif text-4xl md:text-6xl font-light leading-[1.08] text-ink">
            Let&rsquo;s start the <span className="italic text-forest">conversation.</span>
          </h2>
          <p className="mt-7 font-light leading-relaxed text-ink/65 max-w-md text-base md:text-lg">
            Whether you&rsquo;re ready to begin or just exploring, I&rsquo;d love to hear from you.
            Every enquiry is answered personally.
          </p>
          <div className="mt-10 space-y-5">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-ink/45">Email</p>
              <a href="mailto:hello@servewell.co.uk" className="font-serif italic text-2xl text-forest hover:text-forest-deep transition-colors">
                hello@servewell.co.uk
              </a>
              <p className="text-xs text-ink/35 mt-1">Placeholder — to be confirmed</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-ink/45">Based in</p>
              <p className="font-light text-ink/70">London, NW6 — in person & online nationwide</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-ink/45">Hours</p>
              <p className="font-light text-ink/70">Mon–Sat, by appointment <span className="text-ink/35">(TBC)</span></p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 shadow-2xl border border-ink/5">
          {status === "sent" ? (
            <div role="status" className="py-12 text-center">
              <p className="font-serif text-4xl italic text-forest">Thank you.</p>
              <p className="mt-5 font-light text-ink/65 leading-relaxed max-w-sm mx-auto">
                Your email app should now open with your message ready to send — nothing was
                submitted automatically, as this form has no server backend yet.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <input type="text" value={form.website} onChange={(e) => set("website", e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="s-name" className="text-[11px] uppercase tracking-[0.28em] text-ink/55">Name *</label>
                    <input id="s-name" type="text" value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Your name" className={`${input} mt-2`} aria-invalid={!!errors.name} />
                    {errors.name && <p className="mt-2 text-sm text-red-800">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="s-email" className="text-[11px] uppercase tracking-[0.28em] text-ink/55">Email *</label>
                    <input id="s-email" type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@example.com" className={`${input} mt-2`} aria-invalid={!!errors.email} />
                    {errors.email && <p className="mt-2 text-sm text-red-800">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="s-interest" className="text-[11px] uppercase tracking-[0.28em] text-ink/55">I&rsquo;m interested in</label>
                  <select id="s-interest" value={form.interest} onChange={(e) => set("interest", e.target.value)} className={`${input} mt-2`}>
                    {["Personal Training", "Nutrition & Lifestyle", "Recovery & Mobility", "Online Coaching", "Something else"].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="s-msg" className="text-[11px] uppercase tracking-[0.28em] text-ink/55">Message</label>
                  <textarea id="s-msg" rows={4} value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="Tell me about your goals…" className={`${input} mt-2 resize-none`} />
                </div>
              </div>
              <button type="submit" disabled={status === "sending"} className="mt-8 w-full bg-ink text-ivory py-4.5 text-[13px] font-semibold uppercase tracking-[0.22em] transition-all duration-300 hover:bg-forest-deep disabled:opacity-60">
                {status === "sending" ? "Preparing…" : "Send Enquiry"}
              </button>
              <p className="mt-5 text-xs font-light text-ink/40 leading-relaxed">
                This form opens your email app — no data is stored on a server.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
