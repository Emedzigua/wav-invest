"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <main className="w-full bg-[#F8FAFC] text-slate-900">
      
      {/* ------------------------------------------------------------------ */}
      {/* 1. HERO SEKCIA (1. obrazovka) */}
      {/* ------------------------------------------------------------------ */}
      <section className="snap-start snap-always w-full h-[calc(100vh-80px)] flex items-center justify-center border-b border-slate-200 bg-white relative overflow-hidden px-6 lg:px-12">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-25 pointer-events-none"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-white/40 z-0 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-slate-900 leading-[1.1] mb-8">
              {t.hero.title}
            </h1>
            <p className="text-lg sm:text-xl text-slate-700 font-light leading-relaxed mb-10">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="/kontakt"
                className="bg-amber-800 hover:bg-amber-900 text-white font-medium px-8 py-4 text-sm transition-all rounded-lg shadow-md hover:shadow-amber-900/20"
              >
                {t.hero.btnQuote}
              </Link>
              <Link
                href="/produkty"
                className="text-slate-800 hover:text-amber-800 text-sm font-medium underline underline-offset-8 transition-colors"
              >
                {t.hero.btnProducts}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 2. KROK 1 (2. obrazovka) */}
      {/* ------------------------------------------------------------------ */}
      <section className="snap-start snap-always w-full h-[calc(100vh-80px)] flex items-center justify-center border-b border-slate-200 bg-[#F8FAFC] relative px-6 lg:px-12">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-12 md:gap-20"
          >
            <div className="w-full md:w-1/3 flex justify-start md:justify-end">
              <span className="text-8xl sm:text-9xl font-mono font-light text-amber-800 tracking-tighter">
                {t.process.steps[0].num}
              </span>
            </div>
            <div className="w-full md:w-2/3 bg-white p-8 sm:p-12 border border-slate-200/80 rounded-2xl shadow-sm">
              <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 mb-6 tracking-tight">
                {t.process.steps[0].title}
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
                {t.process.steps[0].desc}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 3. KROK 2 (3. obrazovka) */}
      {/* ------------------------------------------------------------------ */}
      <section className="snap-start snap-always w-full h-[calc(100vh-80px)] flex items-center justify-center border-b border-slate-200 bg-white relative px-6 lg:px-12">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20"
          >
            <div className="w-full md:w-1/3 flex justify-start md:justify-start">
              <span className="text-8xl sm:text-9xl font-mono font-light text-amber-800 tracking-tighter">
                {t.process.steps[1].num}
              </span>
            </div>
            <div className="w-full md:w-2/3 bg-[#F8FAFC] p-8 sm:p-12 border border-slate-200/80 rounded-2xl shadow-sm">
              <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 mb-6 tracking-tight">
                {t.process.steps[1].title}
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
                {t.process.steps[1].desc}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 4. KROK 3 + INTEGROVANÝ FOOTER (4. obrazovka / Koniec) */}
      {/* ------------------------------------------------------------------ */}
      <section className="snap-start snap-always w-full h-[calc(100vh-80px)] flex flex-col justify-between bg-[#F8FAFC] relative px-6 lg:px-12 pt-12 pb-6">
        <div className="max-w-5xl mx-auto w-full my-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-12 md:gap-20"
          >
            <div className="w-full md:w-1/3 flex justify-start md:justify-end">
              <span className="text-8xl sm:text-9xl font-mono font-light text-amber-800 tracking-tighter">
                {t.process.steps[2].num}
              </span>
            </div>
            <div className="w-full md:w-2/3 bg-white p-8 sm:p-12 border border-slate-200/80 rounded-2xl shadow-sm">
              <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 mb-6 tracking-tight">
                {t.process.steps[2].title}
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
                {t.process.steps[2].desc}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer priamo na spodku štvrtej obrazovky, aby sa naň dalo docrolovať */}
        <footer className="w-full max-w-7xl mx-auto border-t border-slate-200 py-4 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 font-light">
          <div>
            <span className="text-slate-900 font-medium">WAV Invest s.r.o.</span> © 2026 Všetky práva vyhradené.
          </div>
          <div className="flex items-center space-x-6 mt-2 sm:mt-0">
            <Link href="/" className="hover:text-slate-900 transition-colors">Domov</Link>
            <Link href="/onas" className="hover:text-slate-900 transition-colors">O nás</Link>
            <Link href="/produkty" className="hover:text-slate-900 transition-colors">Produkty</Link>
            <Link href="/kontakt" className="hover:text-slate-900 transition-colors">Kontakt</Link>
          </div>
        </footer>
      </section>

    </main>
  );
}