import { copy } from "@/lib/copy";
import ScrollToCtaButton from "@/components/ScrollToCtaButton";

export default function Economy() {
  const { economy } = copy;

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 order-2 md:order-1">
          <div className="w-14 h-1 bg-green-500 rounded-full mb-6" />
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a3a2a] leading-tight mb-6">
            {economy.headline}
          </h2>
          <p className="text-[#3d5a4a] text-base md:text-lg leading-relaxed mb-4">
            {economy.text1}
          </p>
          <p className="text-[#3d5a4a] text-base md:text-lg leading-relaxed mb-8">
            {economy.text2}
          </p>
          <ScrollToCtaButton
            className="inline-block bg-[#22c55e] hover:bg-[#16a34a] text-white font-extrabold text-lg py-4 px-10 rounded-2xl shadow-[0_8px_32px_rgba(34,197,94,0.35)] border-b-4 border-[#15803d] transition-all hover:scale-105 active:scale-100"
          >
            {economy.cta}
          </ScrollToCtaButton>
        </div>

        {/* Image */}
        <div className="flex-shrink-0 w-full max-w-xs md:max-w-sm order-1 md:order-2">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-bl from-green-900/10 to-transparent z-10" />
            <img
              src="/economy-image.webp"
              alt={economy.imageAlt}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
