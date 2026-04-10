import { copy } from "@/lib/copy";

export default function Testimonials() {
  const { testimonials, checkoutUrl } = copy;

  return (
    <section className="w-full bg-gradient-to-b from-[#f0faf4] to-[#e8f5ee] py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-green-800 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Depoimentos
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#1a3a2a] leading-tight">
            {testimonials.headline}
          </h2>
          <div className="w-20 h-1 bg-green-400 rounded-full mx-auto mt-4" />
        </div>

        {/* Testimonial cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {testimonials.cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-shadow flex flex-col gap-4"
            >
              {/* Header: avatar + name + source badge */}
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 text-white font-black text-sm"
                  style={{ backgroundColor: card.color }}
                >
                  {card.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-[#1a3a2a] text-sm leading-tight">{card.name}</p>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-green-700 bg-green-100 px-2 py-0.5 rounded-full mt-0.5">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    {card.source}
                  </span>
                </div>
                {/* Stars */}
                <div className="flex gap-0.5 flex-shrink-0">
                  {Array.from({ length: card.stars }).map((_, s) => (
                    <svg key={s} className="w-4 h-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Quote text */}
              <p className="text-[#3d5a4a] text-sm md:text-base leading-relaxed">
                &ldquo;{card.text}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#22c55e] hover:bg-[#16a34a] text-white font-extrabold text-lg md:text-xl py-5 px-12 rounded-2xl shadow-[0_8px_32px_rgba(34,197,94,0.35)] border-b-4 border-[#15803d] transition-all hover:scale-105 active:scale-100"
          >
            {testimonials.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
