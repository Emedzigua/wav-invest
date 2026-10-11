"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/lib/translations";

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/onas", label: t.nav.about },
    { href: "/produkty", label: t.nav.products },
    { href: "/kontakt", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F8FAFC]/95 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Logo bez bodky - Invest v paletovo hnedej */}
        <Link href="/" className="text-xl font-medium tracking-tight text-slate-900 hover:opacity-90 transition-opacity">
          WAV <span className="text-amber-800 font-semibold">Invest</span>
        </Link>

        {/* Navigácia */}
        <nav className="hidden md:flex items-center space-x-10 text-sm font-light text-slate-600">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  isActive
                    ? "text-slate-900 font-normal border-b-2 border-amber-800 pb-1"
                    : "hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Prepínač jazykov - Podčiarknutie v paletovo hnedej */}
        <div className="flex items-center space-x-6 text-sm font-light text-slate-600">
          {(["SK", "DE", "EN"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l.toLowerCase() as Language)}
              className={`transition-colors cursor-pointer ${
                lang === l.toLowerCase()
                  ? "text-slate-900 font-normal border-b-2 border-amber-800 pb-1"
                  : "hover:text-slate-900"
              }`}
            >
              {l}
            </button>
          ))}
        </div>

      </div>
    </header>
  );
}