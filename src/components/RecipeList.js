import { copy } from "@/lib/copy";

export default function RecipeList() {
  const { recipeList, checkoutUrl } = copy;

  return (
    <section className="w-full bg-gradient-to-b from-[#f0faf4] to-white py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Headline */}
        <h2 className="text-2xl md:text-4xl font-extrabold text-center text-[#1a3a2a] mb-2">
          {recipeList.headline}{" "}
          <span className="text-[#22c55e]">{recipeList.headlineHighlight}</span>{" "}
          {recipeList.headlineSuffix}
        </h2>
        <div className="w-20 h-1 bg-green-400 rounded-full mx-auto mt-4 mb-12" />

        {/* Two-column list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
          {/* Column 1 */}
          <ul className="space-y-2">
            {recipeList.col1.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-green-100"
              >
                <span className="flex-shrink-0 w-5 h-5 mt-0.5 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-green-600" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-[#2d4a3e] text-sm md:text-base">{item}</span>
              </li>
            ))}
          </ul>
          {/* Column 2 */}
          <ul className="space-y-2">
            {recipeList.col2.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-green-100"
              >
                <span className="flex-shrink-0 w-5 h-5 mt-0.5 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-green-600" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-[#2d4a3e] text-sm md:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#22c55e] hover:bg-[#16a34a] text-white font-extrabold text-lg md:text-xl py-5 px-12 rounded-2xl shadow-[0_8px_32px_rgba(34,197,94,0.35)] border-b-4 border-[#15803d] transition-all hover:scale-105 active:scale-100"
          >
            {recipeList.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
