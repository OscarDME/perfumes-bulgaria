"use client";
import { useState, useEffect } from "react";
import { copy } from "@/lib/copy";

const BASE_CHECKOUT_URL = copy.checkoutUrl;

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

export default function FinalCta() {
  const { finalCta } = copy;
  const [checkoutUrl, setCheckoutUrl] = useState(BASE_CHECKOUT_URL);
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

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        let src = params.get("src");
        let fbclid = params.get("fbclid");
        if (!src) src = localStorage.getItem("hotmart_src");
        if (!fbclid) fbclid = localStorage.getItem("hotmart_fbclid");
        if (src || fbclid) {
          const urlObj = new URL(BASE_CHECKOUT_URL);
          if (src) urlObj.searchParams.set("src", src);
          if (fbclid) urlObj.searchParams.set("fbclid", fbclid);
          setCheckoutUrl(urlObj.toString());
        }
      }
    } catch (error) {
      console.error("Error construyendo URL:", error);
    }
  }, []);

  const pad = (n) => String(n).padStart(2, "0");

  const handleBeginCheckout = () => {
    try {
      let priceNum = 0;
      if (finalCta.offerPrice) {
        const cleaned = String(finalCta.offerPrice)
          .replace(/[^\d.,]/g, "")
          .replace(",", ".");
        const parsed = parseFloat(cleaned);
        if (Number.isFinite(parsed)) priceNum = parsed;
      }
      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "begin_checkout",
          value: priceNum,
          currency: "BRL",
          items: [
            {
              item_id: "guia_cosmeticos_naturais",
              item_name: "Guia de Cosméticos Naturais",
              price: priceNum,
            },
          ],
        });
      }
    } catch (err) {
      console.error("[FinalCTA] Error em analytics:", err);
    }
  };

  return (
    <section
      id="final-cta-section"
      className="w-full bg-gradient-to-b from-[#0a2718] to-[#0d3320] py-16 md:py-24 px-4"
    >
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
        {/* Urgency badge */}
        <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/40 rounded-full px-5 py-2 mb-8">
          <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
          <span className="text-red-300 font-bold text-sm tracking-wide uppercase">
            {finalCta.urgencyLabel}{" "}
            <span className="text-red-200 font-normal normal-case tracking-normal">
              {finalCta.urgencySub}
            </span>
          </span>
        </div>

        {/* Timer */}
        <div className="flex items-center gap-3 mb-8">
          {[
            { val: isMounted ? pad(time.hours) : "00", label: finalCta.timerLabels.hours },
            { val: isMounted ? pad(time.minutes) : "00", label: finalCta.timerLabels.minutes },
            { val: isMounted ? pad(time.seconds) : "00", label: finalCta.timerLabels.seconds },
          ].map((unit, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="flex flex-col items-center">
                <div className="bg-white/10 border border-white/20 rounded-xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white font-black text-2xl md:text-3xl tabular-nums">
                    {unit.val}
                  </span>
                </div>
                <span className="text-green-400 text-[10px] font-semibold tracking-widest uppercase mt-1">
                  {unit.label}
                </span>
              </div>
              {i < 2 && (
                <span className="text-white/50 font-bold text-2xl mb-5">:</span>
              )}
            </div>
          ))}
        </div>

        {/* Urgency text */}
        <p className="text-green-200/80 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
          {finalCta.urgencyText}
        </p>

        {/* iPad mockup */}
        <div className="w-full max-w-[280px] md:max-w-[320px] mb-8 relative">
          {/* Glow */}
          <div className="absolute inset-0 bg-green-400/20 blur-3xl rounded-full scale-110 pointer-events-none" />

          {/* iPad shell */}
          <div className="relative rounded-[2.8rem] bg-gradient-to-b from-[#2a2a2e] to-[#1a1a1e] p-[10px] shadow-[0_32px_80px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.12)] border border-white/10">

            {/* Side buttons — volume */}
            <div className="absolute -left-[3px] top-[88px] w-[3px] h-8 rounded-l-full bg-[#2a2a2e] shadow-[-1px_0_0_rgba(255,255,255,0.08)]" />
            <div className="absolute -left-[3px] top-[132px] w-[3px] h-8 rounded-l-full bg-[#2a2a2e] shadow-[-1px_0_0_rgba(255,255,255,0.08)]" />
            {/* Side button — power */}
            <div className="absolute -right-[3px] top-[110px] w-[3px] h-10 rounded-r-full bg-[#2a2a2e] shadow-[1px_0_0_rgba(255,255,255,0.08)]" />

            {/* Screen bezel */}
            <div className="rounded-[2.2rem] bg-black overflow-hidden relative">
              {/* Top camera bar */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-black z-10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#1a1a1a] border border-[#333] shadow-inner" />
              </div>

              {/* Bottom home indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-5 bg-black z-10 flex items-end justify-center pb-1.5">
                <div className="w-16 h-1 rounded-full bg-white/20" />
              </div>

              {/* Screen content */}
              <div className="pt-6 pb-5">
                <img
                  src="/product-box.webp"
                  alt={finalCta.imageAlt}
                  className="w-full h-auto block"
                />
              </div>
            </div>

            {/* Glossy sheen */}
            <div className="absolute inset-[10px] rounded-[2.2rem] pointer-events-none bg-gradient-to-br from-white/5 via-transparent to-transparent" />
          </div>
        </div>

        {/* Product title */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6">
          {finalCta.productTitle}
        </h2>

        {/* Bundle checklist */}
        <ul className="w-full max-w-sm space-y-3 mb-10 text-left">
          {finalCta.bundleList.map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-green-100 text-base">{item}</span>
            </li>
          ))}
        </ul>

        {/* Price */}
        <div className="mb-8">
          <p className="text-6xl md:text-7xl font-black text-[#22c55e] tracking-tighter drop-shadow-[0_0_30px_rgba(34,197,94,0.5)]">
            {finalCta.offerPrice}
          </p>
        </div>

        {/* CTA Button */}
        <a
          href={checkoutUrl}
          onClick={handleBeginCheckout}
          className="inline-block w-full md:w-auto bg-[#22c55e] hover:bg-[#16a34a] text-white font-black py-6 px-12 rounded-2xl shadow-[0_8px_48px_rgba(34,197,94,0.5)] text-xl md:text-2xl border-b-4 border-[#15803d] transition-all hover:scale-105 active:scale-100 cursor-pointer animate-pulse hover:animate-none"
        >
          {finalCta.button}
        </a>
      </div>
    </section>
  );
}
