import portrait from "./assets/sankar-portrait.webp";
import { Nav, Section, ZurichClock } from "./components";
import { useReveal } from "./useReveal";
import {
  certifications,
  coreStack,
  education,
  experience,
  facts,
  languages,
  links,
  profile,
  toolkit,
} from "./data";

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-20 pt-36 sm:px-8 md:pb-28 md:pt-44"
    >
      <div
        className="pointer-events-none absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-gold/[0.06] blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-page items-center gap-14 md:grid-cols-[1fr_auto]">
        <div>
          <p className="eyebrow mb-6">
            {profile.role}
            <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
            {profile.location}
          </p>
          <h1 className="font-display text-[22vw] leading-[0.85] tracking-wide sm:text-[9rem] lg:text-[11rem]">
            <span className="block">Solution</span>
            <span className="outline-text block">Builder</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            I'm <span className="text-cream">{profile.name}</span>, a technical
            lead and full-stack engineer in Zurich. I've spent 15 years building
            web and mobile software and getting it safely into production.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-cream"
            >
              Get in touch
            </a>
            <a
              href={profile.cv}
              download
              className="rounded-full border border-line px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-cream transition-colors hover:border-gold hover:text-gold"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-fit md:mx-0">
          <div className="h-52 w-52 overflow-hidden rounded-full ring-1 ring-gold/50 ring-offset-8 ring-offset-ink sm:h-60 sm:w-60">
            <img
              src={portrait}
              alt="Portrait of Anavaradha Sankar"
              width={200}
              height={200}
              className="h-full w-full scale-[1.09] object-cover"
            />
          </div>
          <p className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-line bg-panel px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-cream">
            <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
            {profile.status}
          </p>
        </div>
      </div>
      <ul
        className="relative mx-auto mt-20 flex max-w-page flex-wrap gap-x-6 gap-y-3 border-t border-line pt-8 text-sm uppercase tracking-[0.2em] text-muted"
        aria-label="Core stack"
      >
        {coreStack.map((s) => (
          <li key={s} className="flex items-center gap-6">
            {s}
            <span className="text-gold/70 [li:last-child_&]:hidden" aria-hidden="true">
              ✦
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function About() {
  return (
    <Section id="about" index="01" label="About" className="bg-panel">
      <div className="grid gap-14 md:grid-cols-[1.1fr_1fr]">
        <div className="reveal">
          <h2 className="font-display text-6xl leading-[0.9] tracking-wide md:text-7xl">
            From first commit <span className="text-gold">to production.</span>
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
            <p>
              I work across the stack with .NET Core, C#, React and TypeScript.
              Most recently I was at Tech Mahindra on UBS's Fund Client
              Reporting platform during the Credit Suisse migration. I built
              features there and owned the GitLab pipelines, release management
              and L3 production support.
            </p>
            <p>
              Before that I spent almost 10 years at EF Education First, first
              in Bengaluru and from 2022 in Zurich. I built the Campus Connect
              app, the Customer Portal and the Adyen payment integration, and
              ran the team's sprints as Scrum Master.
            </p>
            <p>
              I use Claude Code and agent tooling every day to get work done
              faster, and I took a CAS in Generative AI at the University of
              Zurich. I live in Switzerland on a B permit, so you don't need to
              sponsor a visa.
            </p>
          </div>
        </div>
        <dl className="reveal grid self-start gap-px overflow-hidden rounded-2xl border border-line bg-line">
          {facts.map((f) => (
            <div key={f.label} className="flex items-baseline gap-6 bg-panel p-7">
              <dt className="sr-only">{f.label}</dt>
              <dd className="w-24 shrink-0 font-display text-6xl text-gold">
                {f.value}
              </dd>
              <dd className="text-sm uppercase tracking-[0.2em] text-muted">
                {f.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" index="02" label="Experience">
      <h2 className="reveal font-display text-6xl leading-[0.9] tracking-wide md:text-7xl">
        15+ years of <span className="outline-text">shipping</span>
      </h2>
      <ol className="mt-16 border-l border-line">
        {experience.map((role, i) => (
          <li key={role.dates} className="reveal relative pb-14 pl-8 last:pb-0 md:pl-12">
            <span
              className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full bg-gold"
              aria-hidden="true"
            />
            <div className="grid gap-6 md:grid-cols-[16rem_1fr] md:gap-12">
              <div>
                <p className="font-display text-2xl text-gold/70">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-3xl tracking-wide">
                  {role.title}
                </h3>
                <p className="mt-1 text-cream">{role.company}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">
                  {role.place} · {role.dates}
                </p>
              </div>
              <ul className="space-y-3 text-muted">
                {role.points.map((p) => (
                  <li key={p} className="flex gap-3 leading-relaxed">
                    <span className="mt-[0.7em] h-px w-3 shrink-0 bg-gold/60" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Toolkit() {
  return (
    <Section id="toolkit" index="03" label="Toolkit" className="bg-panel">
      <h2 className="reveal font-display text-6xl leading-[0.9] tracking-wide md:text-7xl">
        What I work with
      </h2>
      <dl className="mt-14 grid gap-x-12 md:grid-cols-2">
        {toolkit.map((t) => (
          <div key={t.group} className="reveal border-t border-line py-6">
            <dt className="font-display text-2xl tracking-wide text-gold">
              {t.group}
            </dt>
            <dd className="mt-2 leading-relaxed text-muted">
              {t.items.join(" · ")}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

function Credentials() {
  return (
    <Section id="credentials" index="04" label="Credentials">
      <div className="grid gap-12 md:grid-cols-3">
        <div className="reveal">
          <h2 className="outline-text font-display text-5xl tracking-wide">
            Education
          </h2>
          <ul className="mt-6 divide-y divide-line border-t border-line">
            {education.map((e) => (
              <li key={e.title} className="py-5">
                <p className="text-cream">{e.title}</p>
                <p className="text-muted">{e.place}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">
                  {e.dates}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal">
          <h2 className="outline-text font-display text-5xl tracking-wide">
            Certifications
          </h2>
          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-gold">
            {certifications.issuer}
          </p>
          <ul className="mt-4 divide-y divide-line border-t border-line">
            {certifications.items.map((c) => (
              <li key={c} className="py-4 text-cream">
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal">
          <h2 className="outline-text font-display text-5xl tracking-wide">
            Languages
          </h2>
          <ul className="mt-6 divide-y divide-line border-t border-line">
            {languages.map((l) => (
              <li key={l.name} className="flex justify-between py-4">
                <span className="text-cream">{l.name}</span>
                {l.level && <span className="text-muted">{l.level}</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" index="05" label="Contact" className="bg-panel">
      <div className="grid gap-14 md:grid-cols-[1.2fr_1fr]">
        <div className="reveal">
          <h2 className="font-display text-[18vw] leading-[0.85] tracking-wide sm:text-8xl lg:text-9xl">
            Let's work <span className="outline-text">together</span>
          </h2>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">
            Tell me what you're working on. Email is the quickest way to reach
            me.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-muted">
            <span className="rounded-full border border-line px-4 py-2">
              <ZurichClock />
            </span>
            <span className="flex items-center gap-2 rounded-full border border-line px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
              {profile.status}
            </span>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-cream"
            >
              Email me
            </a>
            <a
              href={profile.cv}
              download
              className="rounded-full border border-line px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-cream transition-colors hover:border-gold hover:text-gold"
            >
              Download CV
            </a>
          </div>
        </div>
        <ul className="reveal divide-y divide-line border-y border-line">
          {links.map((l) => {
            const external = l.href.startsWith("http");
            return (
              <li key={l.label}>
                <a
                  href={l.href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-baseline justify-between gap-4 py-5"
                >
                  <span className="text-xs uppercase tracking-[0.3em] text-gold">
                    {l.label}
                  </span>
                  <span className="truncate text-cream transition-colors group-hover:text-gold">
                    {l.value}
                    {external && <span aria-hidden="true"> ↗</span>}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}

export default function App() {
  useReveal();
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Nav cv={profile.cv} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Toolkit />
        <Credentials />
        <Contact />
      </main>
      <footer className="border-t border-line px-5 py-8 text-center text-xs uppercase tracking-[0.25em] text-muted">
        © {new Date().getFullYear()} {profile.fullName} · Zurich
      </footer>
    </>
  );
}
