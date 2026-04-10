import { copy } from "@/lib/copy";

export default function Story() {
  const { story } = copy;

  return (
    <section className="w-full bg-[#fafdf8] py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Image */}
        <div className="flex-shrink-0 w-full max-w-xs md:max-w-sm">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent z-10" />
            <img
              src="/story-image.webp"
              alt={story.imageAlt}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex-1">
          <div className="w-14 h-1 bg-green-500 rounded-full mb-6" />
          <p className="text-[#2d4a3e] text-lg md:text-xl leading-relaxed font-medium">
            {story.text}
          </p>
        </div>
      </div>
    </section>
  );
}
