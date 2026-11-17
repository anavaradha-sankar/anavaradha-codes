import { useEffect, useRef, type CSSProperties } from "react";
import { Section } from "./components";
import { toolkit } from "./data";

// Layers from top to bottom, like an architecture diagram.
const layers: { group: string; note: string }[][] = [
  [{ group: "AI-Augmented Engineering", note: "How I work faster" }],
  [
    { group: "Frontend", note: "What users see" },
    { group: "Mobile", note: "Apps" },
  ],
  [
    { group: "Backend", note: "Services and APIs" },
    { group: "Databases", note: "Where data lives" },
    { group: "CMS", note: "Content" },
  ],
  [{ group: "Cloud & Automation", note: "How it ships and runs" }],
  [{ group: "Leadership", note: "How the team delivers" }],
];

const itemsFor = (group: string) => toolkit.find((t) => t.group === group)?.items ?? [];

export function Toolkit() {
  const stackRef = useRef<HTMLDivElement>(null);

  // Build the stack from the bottom up when it scrolls into view.
  useEffect(() => {
    const el = stackRef.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-built");
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-built");
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const total = layers.flat().length;
  let order = 0;

  return (
    <Section id="toolkit" index="03" label="Toolkit" className="bg-panel">
      <h2 className="reveal font-display text-6xl leading-[0.9] tracking-wide md:text-7xl">
        What I <span className="outline-text">work with</span>
      </h2>
      <div ref={stackRef} className="tool-stack mt-12 flex flex-col gap-2.5 [perspective:1200px]">
        {layers.map((row, r) => (
          <div key={r} className="flex flex-col gap-2.5 md:flex-row">
            {row.map(({ group, note }) => {
              // Bottom layers arrive first.
              const delay = (total - 1 - order++) * 120;
              const single = row.length === 1;
              return (
                <div
                  key={group}
                  style={{ "--d": `${delay}ms` } as CSSProperties}
                  className={`tool-layer grid flex-1 content-start gap-3 rounded-2xl border border-line bg-gradient-to-r from-gold/[0.07] to-ink/60 px-5 py-4 hover:border-gold/60 md:px-6 ${
                    single ? "md:grid-cols-[15rem_1fr] md:items-center md:gap-6" : ""
                  }`}
                >
                  <div>
                    <h3 className="font-display text-2xl leading-none tracking-wide text-gold md:text-[1.75rem]">
                      {group}
                    </h3>
                    <p className="mt-1 text-[0.7rem] uppercase tracking-[0.22em] text-muted">
                      {note}
                    </p>
                  </div>
                  <ul className="flex flex-wrap items-start gap-1.5">
                    {itemsFor(group).map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-line bg-ink px-3 py-1 text-sm text-cream"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </Section>
  );
}
