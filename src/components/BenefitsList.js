import { copy } from "@/lib/copy";

export default function BenefitsList() {
  const { benefitsList, checkoutUrl } = copy;

  return (
    <section className="w-full bg-[#f0faf4] py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <h2 className="text-2xl md:text-4xl font-extrabold text-center text-[#1a3a2a] mb-2">
          {benefitsList.headline}
        </h2>
        <div className="w-20 h-1 bg-green-400 rounded-full mx-auto mt-4 mb-12" />

        {/* Benefits list */}
        <ul className="space-y-4 mb-12">
          {benefitsList.items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-4 bg-white rounded-2xl px-6 py-5 shadow-sm border border-green-100 hover:shadow-md transition-shadow"
            >
              <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-200">
                <svg className="w-4 h-4 text-white" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-[#2d4a3e] text-base md:text-lg leading-relaxed">
                <strong className="text-[#1a3a2a]">{item.bold}</strong>
                {item.rest}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="text-center">
          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#22c55e] hover:bg-[#16a34a] text-white font-extrabold text-lg md:text-xl py-5 px-12 rounded-2xl shadow-[0_8px_32px_rgba(34,197,94,0.35)] border-b-4 border-[#15803d] transition-all hover:scale-105 active:scale-100"
          >
            {benefitsList.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
