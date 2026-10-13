import Image from "next/image";
import Link from "next/link";

/* ---------- Services ---------- */
const services = [
  {
    n: "01",
    name: "Personal Training",
    tag: "One-to-one coaching",
    desc: "Bespoke strength and conditioning programmes, coached in person with full attention on your technique, progress and goals.",
    image: "/images/service-training.jpg",
    alt: "A trainer spotting a client doing a barbell squat",
    points: ["Movement assessment", "Tailored programming", "In-person in London"],
  },
  {
    n: "02",
    name: "Nutrition & Lifestyle",
    tag: "Fuel for life",
    desc: "Practical, sustainable nutrition guidance — no crash diets, no fear. Learn to eat in a way that supports training and everyday energy.",
    image: "/images/service-nutrition.jpg",
    alt: "A spread of fresh colourful whole foods",
    points: ["Habit-based coaching", "Realistic meal structure", "Ongoing accountability"],
  },
  {
    n: "03",
    name: "Recovery & Mobility",
    tag: "Train for longevity",
    desc: "Mobility work, breathwork and recovery strategies that keep you training pain-free for years — not just weeks.",
    image: "/images/service-recovery.jpg",
    alt: "A person stretching at sunrise on a wooden deck",
    points: ["Mobility screening", "Breathwork basics", "Sleep & stress support"],
  },
  {
    n: "04",
    name: "Online Coaching",
    tag: "Nationwide, wherever you are",
    desc: "The full ServeWell experience delivered remotely — programming, video check-ins and messaging support, anywhere in the UK.",
    image: "/images/service-online.jpg",
    alt: "A coach on a video call demonstrating an exercise",
    points: ["Custom training app", "Weekly video reviews", "Direct messaging"],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-ivory py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.4em] text-forest/60 mb-7">Services</p>
            <h2 className="font-serif text-4xl md:text-6xl font-light leading-[1.08] text-ink">
              Built around <span className="italic text-forest">you.</span>
            </h2>
          </div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-ink/40">
            Proposed services — to be confirmed
          </p>
        </div>

        <div className="mt-16 space-y-20 md:space-y-28">
          {services.map((s, i) => (
            <article
              key={s.n}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <div className="lg:[direction:ltr] group relative overflow-hidden">
                {/* Image renders directly, never hidden */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 1024px) 90vw, 45vw"
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-700" />
                </div>
                <span className="absolute top-5 left-5 bg-ink/85 backdrop-blur text-ivory px-4 py-2 text-[10px] uppercase tracking-[0.25em]">
                  {s.tag}
                </span>
              </div>
              <div className="lg:[direction:ltr]">
                <p className="font-serif italic text-2xl text-gold">{s.n}</p>
                <h3 className="mt-3 font-serif text-4xl md:text-5xl font-light text-ink">{s.name}</h3>
                <p className="mt-5 max-w-lg font-light leading-relaxed text-ink/70 text-base md:text-lg">
                  {s.desc}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm text-ink/65">
                      <svg className="w-4 h-4 text-forest shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M2.5 8.5l3.5 3.5 7-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className="link-underline mt-8 inline-block text-[13px] font-medium uppercase tracking-[0.2em] text-forest"
                >
                  Enquire about this service
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
export function About() {
  return (
    <section id="about" className="bg-ink text-ivory py-24 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 overflow-hidden">
            {/* Portrait renders directly */}
            <Image
              src="/images/about-portrait.jpg"
              alt="Portrait placeholder for Dr San, founder of ServeWell"
              fill
              sizes="(max-width: 1024px) 90vw, 35vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 right-4 lg:right-10 bg-gold text-ink px-7 py-4 shadow-xl">
            <p className="font-serif italic text-xl">London, NW6 — & nationwide online</p>
          </div>
          <div className="absolute -top-6 -left-2 lg:left-6 font-serif italic text-[7rem] leading-none text-ivory/5 select-none" aria-hidden="true">
            &ldquo;
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-7">About</p>
          <h2 className="font-serif text-4xl md:text-6xl font-light leading-[1.08]">
            Meet <span className="italic text-gold-light">Dr San.</span>
          </h2>
          <div className="mt-8 space-y-5 font-light leading-relaxed text-ivory/70 text-base md:text-lg max-w-xl">
            <p>
              Health and fitness professional, coach, and servant at heart. For over a decade I have
              helped people rebuild their strength — and discover what that strength is for.
            </p>
            <p>
              My work blends professional training expertise with a missionary spirit: I believe
              every person I coach deserves the same care, honesty and dedication I would give my
              own family.
            </p>
            <p className="border-l-2 border-gold pl-5 italic font-serif text-xl text-ivory/80">
              &ldquo;Placeholder biography — Dr San&rsquo;s own story, qualifications, certifications
              and experience will appear here.&rdquo;
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Qualifications TBC", "Certifications TBC", "Insurance TBC"].map((t) => (
              <span key={t} className="border border-ivory/20 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-ivory/50">
                {t}
              </span>
            ))}
          </div>
          <Link
            href="#contact"
            className="mt-10 inline-block bg-gold text-ink px-9 py-4 text-[13px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-gold-light hover:shadow-[0_10px_40px_rgba(201,169,106,0.35)]"
          >
            Train With Me
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- Charity / giving back ---------- */
export function GivingBack() {
  return (
    <section className="bg-ivory py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="bg-forest-deep text-ivory overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 md:p-16 lg:p-20">
              <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-7">Giving Back</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.1]">
                Strength shared is <span className="italic text-gold-light">strength multiplied.</span>
              </h2>
              <p className="mt-7 font-light leading-relaxed text-ivory/70 text-base md:text-lg">
                A share of every ServeWell programme funds free community fitness sessions and
                supports charitable health initiatives — because wellness should never be a luxury
                reserved for the few.
              </p>
              <div className="mt-9 space-y-4">
                {[
                  "Free community workout sessions",
                  "Charity fundraising challenges",
                  "Missionary health outreach (details TBC)",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-4">
                    <span className="mt-1 w-2 h-2 rotate-45 bg-gold shrink-0" aria-hidden="true" />
                    <p className="font-light text-ivory/75">{t}</p>
                  </div>
                ))}
              </div>
              <Link
                href="#contact"
                className="link-underline mt-10 inline-block text-[13px] uppercase tracking-[0.2em] text-gold-light"
              >
                Partner or volunteer
              </Link>
            </div>
            {/* Image renders directly */}
            <div className="relative min-h-[320px] lg:min-h-full">
              <Image
                src="/images/mission-community.jpg"
                alt="Community fitness session in a park at sunrise"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
