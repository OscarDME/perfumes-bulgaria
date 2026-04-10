"use client";
import { useState, useEffect } from "react";
import { copy } from "@/lib/copy";

function getTimeUntilMidnight() {
  const now = new Date();
  const midnight = new Date();
  midnight.setHours(24, 0, 0, 0);
  const diff = midnight - now;
  return {
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Hero() {
  const { hero } = copy;
  const [isMounted, setIsMounted] = useState(false);
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setIsMounted(true);
    setTime(getTimeUntilMidnight());
    const interval = setInterval(() => {
      setTime(getTimeUntilMidnight());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");

  const handleScrollToCta = (e) => {
    e.preventDefault();
    const el = document.getElementById("final-cta-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full bg-gradient-to-br from-[#0d3320] via-[#145a32] to-[#1a7a42] overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          {/* Timer badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <div className="flex items-center gap-1 text-white text-sm font-semibold tracking-wide">
              {isMounted ? (
                <>
                  <span className="bg-green-500/40 rounded px-1.5 py-0.5">{pad(time.hours)}</span>
                  <span className="opacity-70">:</span>
                  <span className="bg-green-500/40 rounded px-1.5 py-0.5">{pad(time.minutes)}</span>
                  <span className="opacity-70">:</span>
                  <span className="bg-green-500/40 rounded px-1.5 py-0.5">{pad(time.seconds)}</span>
                </>
              ) : (
                <span className="opacity-60">00:00:00</span>
              )}
              <span className="ml-2 opacity-80 text-xs">{hero.timerLabels.hours} restantes</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="font-black leading-tight mb-6">
            <span className="block text-3xl md:text-5xl text-green-200 mb-1">
              {hero.headlineLine1}
            </span>
            <span className="block text-4xl md:text-6xl text-white drop-shadow-lg">
              {hero.headlineHighlight}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
            {hero.subheadline}
          </p>

          {/* CTA */}
          <a
            href="#final-cta-section"
            onClick={handleScrollToCta}
            className="inline-block bg-[#22c55e] hover:bg-[#16a34a] text-white font-extrabold text-lg md:text-xl py-5 px-10 rounded-2xl shadow-[0_8px_32px_rgba(34,197,94,0.45)] border-b-4 border-[#15803d] transition-all hover:scale-105 active:scale-100 cursor-pointer"
          >
            {hero.cta}
          </a>
        </div>

        {/* Right: Image */}
        <div className="flex-shrink-0 order-1 md:order-2 w-full max-w-sm md:max-w-md">
          <div className="relative">
            <div className="absolute inset-0 bg-green-400/20 blur-3xl rounded-full scale-110" />
            <img
              src="/hero-mockup.webp"
              alt={hero.imageAlt}
              className="relative w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
