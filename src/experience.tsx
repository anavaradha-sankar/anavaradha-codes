import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { Section } from "./components";
import { experience } from "./data";

function shortCompany(company: string) {
  return company.replace("Tech Mahindra, for UBS", "Tech Mahindra · UBS");
}

function shortDates(dates: string) {
  return dates.replace(" to ", " – ");
}

export function Experience() {
  const [active, setActive] = useState(0);
  const [shown, setShown] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");
  const listRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicator, setIndicator] = useState({ top: 0, left: 0, height: 0, width: 0 });

  // Move the gold marker to the active tab (vertical on desktop, horizontal on mobile).
  useEffect(() => {
    const place = () => {
      const tab = tabRefs.current[active];
      if (!tab) return;
      setIndicator({
        top: tab.offsetTop,
        left: tab.offsetLeft,
        height: tab.offsetHeight,
        width: tab.offsetWidth,
      });
      const list = listRef.current;
      if (list && list.scrollWidth > list.clientWidth) {
        list.scrollTo({ left: tab.offsetLeft - 16, behavior: "smooth" });
      }
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [active]);

  // Fade the old role out, swap content, then fade the new one in.
  useEffect(() => {
    if (active === shown) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(active);
      return;
    }
    setPhase("out");
    const t = window.setTimeout(() => {
      setShown(active);
      setPhase("in");
    }, 220);
    return () => window.clearTimeout(t);
  }, [active, shown]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const last = experience.length - 1;
    let next = active;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const role = experience[shown];

  return (
    <Section id="experience" index="02" label="Experience">
      <h2 className="reveal font-display text-6xl leading-[0.9] tracking-wide md:text-7xl">
        15+ years of <span className="outline-text">shipping</span>
      </h2>

      <div className="reveal mt-14 grid gap-8 md:mt-16 md:grid-cols-[20rem_1fr] md:gap-14">
        <div
          ref={listRef}
          role="tablist"
          aria-label="Roles"
          aria-orientation="vertical"
          onKeyDown={onKeyDown}
          className="relative -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:-mx-8 sm:px-8 md:mx-0 md:block md:overflow-visible md:border-l md:border-line md:px-0 md:pb-0"
        >
          <span
            aria-hidden="true"
            className="absolute hidden w-[3px] -translate-x-px bg-gold transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)] md:block"
            style={{ top: indicator.top, height: indicator.height, left: 0 }}
          />
          {experience.map((r, i) => {
            const selected = i === active;
            return (
              <button
                key={r.dates}
                ref={(el) => (tabRefs.current[i] = el)}
                id={`role-tab-${i}`}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls="role-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                className={`shrink-0 rounded-full border px-4 py-2.5 text-left transition-colors duration-300 md:block md:w-full md:rounded-none md:border-0 md:px-6 md:py-4 ${
                  selected
                    ? "border-gold/60 text-cream md:bg-gradient-to-r md:from-gold/10 md:to-transparent"
                    : "border-line text-muted hover:text-cream"
                }`}
              >
                <span
                  className={`block font-display text-xl tracking-wide md:text-2xl ${
                    selected ? "text-gold" : ""
                  }`}
                >
                  {shortCompany(r.company)}
                  <span className="md:hidden"> · {r.dates.match(/\d{4}/)?.[0]}</span>
                </span>
                <span className="hidden text-[0.7rem] uppercase tracking-[0.22em] md:block">
                  {r.title} · {shortDates(r.dates)}
                </span>
              </button>
            );
          })}
        </div>

        <div
          id="role-panel"
          role="tabpanel"
          aria-labelledby={`role-tab-${shown}`}
          aria-live="polite"
          className={`min-h-[28rem] transition-all duration-300 ${
            phase === "out" ? "translate-y-3 opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-gold">
            {role.place} · {role.dates}
          </p>
          <h3 className="mt-2 font-display text-5xl leading-[0.95] tracking-wide md:text-6xl">
            {role.title}
          </h3>
          <p className="mt-1 text-lg text-cream">{role.company}</p>
          <ul key={shown} className="mt-6 space-y-3 text-muted">
            {role.points.map((p, k) => (
              <li
                key={p}
                className="role-point flex gap-3 leading-relaxed"
                style={{ animationDelay: `${k * 70}ms` }}
              >
                <span className="mt-[0.7em] h-px w-3 shrink-0 bg-gold/60" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
