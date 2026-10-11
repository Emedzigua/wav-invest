"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="w-full bg-[#F8FAFC] text-slate-950 min-h-screen pt-20 lg:pt-28 pb-6 flex flex-col justify-between">
      <div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold block mb-3">
              {t.aboutPage.badge}
            </span>
            <h1 className="text-4xl sm:text-6xl font-normal tracking-tight text-slate-900 leading-[1.1] mb-6">
              {t.aboutPage.heading}
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 font-light leading-relaxed">
              {t.aboutPage.desc}
            </p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.aboutPage.cards.map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 sm:p-10 border border-slate-200/80 rounded-2xl shadow-sm"
              >
                <span className="text-4xl font-mono font-light text-amber-800 block mb-4">{card.num}</span>
                <h3 className="text-xl font-normal text-slate-900 mb-3 tracking-tight">{card.title}</h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
          <div className="bg-white border border-slate-200 rounded-3xl p-10 sm:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
            <div>
              <h2 className="text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight mb-3">
                {t.aboutPage.ctaTitle}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-light">
                {t.aboutPage.ctaDesc}
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <Link
                href="/produkty"
                className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-3.5 text-sm transition-all rounded-lg shadow-sm"
              >
                {t.aboutPage.btnProducts}
              </Link>
              <Link
                href="/kontakt"
                className="bg-amber-800 hover:bg-amber-900 text-white font-medium px-6 py-3.5 text-sm transition-all rounded-lg shadow-md"
              >
                {t.aboutPage.btnContact}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full max-w-7xl mx-auto px-6 lg:px-12 border-t border-slate-200 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 font-light">
        <div>
          <span className="text-slate-900 font-medium">WAV Invest s.r.o.</span> © 2026 {t.footer.rights}
        </div>
        <div className="flex items-center space-x-6 mt-2 sm:mt-0">
          <Link href="/" className="hover:text-slate-900 transition-colors">{t.nav.home}</Link>
          <Link href="/onas" className="hover:text-slate-900 transition-colors">{t.nav.about}</Link>
          <Link href="/produkty" className="hover:text-slate-900 transition-colors">{t.nav.products}</Link>
          <Link href="/kontakt" className="hover:text-slate-900 transition-colors">{t.nav.contact}</Link>
        </div>
      </footer>
    </main>
  );
}