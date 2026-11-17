import { useEffect, useState, type ReactNode } from "react";

export function Section({
  id,
  index,
  label,
  children,
  className = "",
}: {
  id: string;
  index: string;
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-5 py-24 sm:px-8 md:py-32 ${className}`}>
      <div className="mx-auto max-w-page">
        <p className="eyebrow reveal mb-8">
          <span>{index}</span>
          <span className="h-px w-12 bg-gold/60" aria-hidden="true" />
          <span>{label}</span>
        </p>
        {children}
      </div>
    </section>
  );
}

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#toolkit", label: "Toolkit" },
  { href: "#credentials", label: "Credentials" },
  { href: "#contact", label: "Contact" },
];

export function Nav({ cv }: { cv: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-page items-center justify-between rounded-full border border-line bg-ink/80 py-2 pl-5 pr-2 backdrop-blur-md"
      >
        <a href="#top" className="font-display text-2xl tracking-wide text-cream">
          AS<span className="text-gold">.</span>
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-xs font-medium uppercase tracking-[0.25em] text-muted transition-colors hover:text-gold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a
            href={cv}
            download
            className="rounded-full bg-gold px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-cream"
          >
            CV
          </a>
          <button
            type="button"
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-line md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <span
              className={`h-px w-4 bg-cream transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-4 bg-cream transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>
      <div
        id="mobile-menu"
        hidden={!open}
        className="mx-auto mt-2 max-w-page rounded-3xl border border-line bg-panel p-6 md:hidden"
      >
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl tracking-wide text-cream hover:text-gold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export function ZurichClock() {
  const fmt = () =>
    new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Zurich",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date());
  const [time, setTime] = useState(fmt);
  useEffect(() => {
    const t = setInterval(() => setTime(fmt()), 30_000);
    return () => clearInterval(t);
  }, []);
  return <span>Zurich {time}</span>;
}
