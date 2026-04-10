import { copy } from "@/lib/copy";

export default function Footer() {
  const { footer } = copy;

  return (
    <footer className="w-full bg-[#061a0e] py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Brand */}
        <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
          {footer.brand}
        </h3>
        <p className="text-green-400 text-base mb-8">{footer.tagline}</p>

        {/* Link */}
        <a
          href={footer.linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-green-300 hover:text-green-200 underline underline-offset-4 text-sm mb-8 transition-colors"
        >
          {footer.linkLabel}
        </a>

        {/* Divider */}
        <div className="w-24 h-px bg-white/10 mx-auto mb-8" />

        {/* Contact info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-green-200/60 text-sm">
          <a
            href={`mailto:${footer.email}`}
            className="hover:text-green-300 transition-colors"
          >
            {footer.email}
          </a>
          <span className="hidden sm:block opacity-40">·</span>
          <span>{footer.whatsapp}</span>
          <span className="hidden sm:block opacity-40">·</span>
          <span>{footer.instagram}</span>
        </div>
      </div>
    </footer>
  );
}
