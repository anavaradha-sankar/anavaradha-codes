import { useEffect, useRef, useState, type PointerEvent } from "react";
import { ZurichClock } from "./components";
import { links, profile } from "./data";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Letters settle from random glyphs into the final text, left to right,
 * once the heading scrolls into view. Each character keeps its own slot
 * so the line never changes width while it animates.
 */
function ScrambleText({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(text);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || !("IntersectionObserver" in window)) return;

    let frame = 0;
    let raf = 0;
    const total = 28;
    const run = () => {
      frame += 1;
      const settled = Math.floor((frame / total) * text.length);
      setShown(
        text
          .split("")
          .map((ch, i) =>
            i < settled || ch === " " || ch === "'"
              ? ch
              : GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
          )
          .join(""),
      );
      if (frame < total) raf = window.setTimeout(run, 28);
      else setShown(text);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          io.disconnect();
          run();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearTimeout(raf);
    };
  }, [text]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {shown.split("").map((ch, i) => (
        <span key={i} aria-hidden="true">
          {ch}
        </span>
      ))}
    </span>
  );
}

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard blocked: the link itself still works */
    }
  };
  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? `${label} copied` : `Copy ${label.toLowerCase()}`}
      className="shrink-0 rounded-full border border-line p-2 text-muted transition-colors hover:border-gold hover:text-gold"
    >
      {copied ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
          <rect width="14" height="14" x="8" y="8" rx="2" />
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
      )}
      <span className="sr-only" aria-live="polite">
        {copied ? "Copied" : ""}
      </span>
    </button>
  );
}

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  // Gold spotlight that follows the pointer across the section.
  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      onPointerMove={onPointerMove}
      className="grain relative overflow-hidden bg-panel [--mx:30%] [--my:35%]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(34rem circle at var(--mx) var(--my), rgba(214,180,108,0.14), transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-page px-5 py-24 sm:px-8 md:py-36">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-5">
          <p className="eyebrow">
            <span>05</span>
            <span className="h-px w-12 bg-gold/60" aria-hidden="true" />
            <span>Contact</span>
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.25em] text-muted">
            <span className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 text-gold" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6h4" />
              </svg>
              <ZurichClock />
            </span>
            <span className="flex items-center gap-2 rounded-full border border-line px-3 py-1">
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="absolute inset-0 rounded-full bg-gold motion-safe:animate-ping" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
              {profile.status}
            </span>
          </div>
        </div>

        <h2 className="mt-14 font-display text-[18vw] leading-[0.85] tracking-wide md:mt-20 md:text-[10rem]">
          <ScrambleText text="Let's work" className="block" />
          <span className="flex items-end gap-4">
            <ScrambleText text="together" className="outline-text" />
            <ArrowUpRight className="mb-[0.12em] h-[0.6em] w-[0.6em] text-gold" />
          </span>
        </h2>

        <div className="mt-16 grid gap-12 md:mt-20 md:grid-cols-12 md:gap-16">
          <ol className="md:col-span-8">
            {links.map((l, i) => {
              const external = l.href.startsWith("http");
              const copyable = l.label === "Email" || l.label === "Phone";
              return (
                <li
                  key={l.label}
                  className="group border-b border-line first:border-t"
                >
                  <div className="flex items-center gap-4 py-5 transition-[padding] duration-300 group-hover:px-4 md:py-7">
                    <span className="w-7 shrink-0 font-display text-sm text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
                      <span className="w-28 shrink-0 text-[0.7rem] uppercase tracking-[0.25em] text-muted transition-colors group-hover:text-gold">
                        {l.label}
                      </span>
                      <a
                        href={l.href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="min-w-0 truncate text-lg text-cream transition-colors hover:text-gold md:text-xl lg:text-2xl"
                      >
                        {l.value}
                      </a>
                    </div>
                    {copyable && <CopyButton value={l.value} label={l.label} />}
                    <ArrowUpRight className="h-5 w-5 shrink-0 -translate-x-3 text-gold opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="md:col-span-4">
            <p className="max-w-xs text-lg leading-relaxed text-muted">
              Tell me what you're building. Email is the quickest way to reach
              me.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-transform duration-200 hover:scale-[1.03]"
              >
                Start a conversation
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={profile.cv}
                download
                className="inline-flex items-center gap-3 rounded-full border border-line px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-cream transition-colors hover:border-gold hover:text-gold"
              >
                Download CV
              </a>
            </div>
            <p
              aria-hidden="true"
              className="outline-text mt-16 hidden font-display text-8xl leading-none opacity-40 md:block"
            >
              Let's talk
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
