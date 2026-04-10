import { copy } from "@/lib/copy";

export default function WhatYouGet() {
  const { whatYouGet } = copy;

  return (
    <section className="w-full bg-[#0d3320] py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text side */}
        <div className="flex-1 order-2 md:order-1">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-2 leading-tight">
            {whatYouGet.headline}
          </h2>
          <div className="w-14 h-1 bg-green-400 rounded-full mb-8" />

          <ul className="space-y-4">
            {whatYouGet.items.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 mt-0.5 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-900/40">
                  <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-green-100/90 text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <a
              href="#final-cta-section"
              className="inline-block bg-[#22c55e] hover:bg-[#16a34a] text-white font-extrabold text-lg py-4 px-10 rounded-2xl shadow-[0_8px_32px_rgba(34,197,94,0.4)] border-b-4 border-[#15803d] transition-all hover:scale-105 active:scale-100"
            >
              {whatYouGet.cta}
            </a>
          </div>
        </div>

        {/* Image side */}
        <div className="flex-shrink-0 w-full max-w-xs md:max-w-sm order-1 md:order-2">
          <div className="relative">
            <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full" />
            <img
              src="/features-image.webp"
              alt={whatYouGet.imageAlt}
              className="relative w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
