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

        {/* Divider */}
        <div className="w-24 h-px bg-white/10 mx-auto mb-8" />

      </div>
    </footer>
  );
}
