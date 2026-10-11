"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function ProductsPage() {
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
              {t.productsPage.badge}
            </span>
            <h1 className="text-4xl sm:text-6xl font-normal tracking-tight text-slate-900 leading-[1.1] mb-6">
              {t.productsPage.heading}
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 font-light leading-relaxed">
              {t.productsPage.desc}
            </p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {t.productsPage.items.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-slate-200/80 rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:border-amber-800/40 transition-colors"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-mono uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-md font-medium">
                      {product.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">0{idx + 1}</span>
                  </div>

                  <h2 className="text-2xl font-normal text-slate-900 mb-2 tracking-tight">
                    {product.title}
                  </h2>
                  <p className="text-xs text-amber-900/80 font-medium mb-6">
                    {product.subtitle}
                  </p>

                  <p className="text-sm text-slate-600 font-light leading-relaxed mb-8">
                    {product.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 space-y-3 mb-8 text-xs font-mono">
                  <div className="flex justify-between text-slate-500">
                    <span>{t.productsPage.dimLabel}</span>
                    <span className="text-slate-900 font-medium">{product.dims}</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>{t.productsPage.capLabel}</span>
                    <span className="text-slate-900 font-medium">{product.capacity}</span>
                  </div>
                </div>

                <Link
                  href="/kontakt"
                  className="w-full bg-slate-50 hover:bg-amber-800 hover:text-white text-slate-800 font-medium text-center py-3.5 text-sm rounded-lg transition-all border border-slate-200 hover:border-amber-800 block"
                >
                  {t.productsPage.btnInquiry}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
          <div className="bg-white border border-slate-200 rounded-3xl p-10 sm:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
            <div>
              <h2 className="text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight mb-3">
                {t.productsPage.ctaTitle}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-light">
                {t.productsPage.ctaDesc}
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <Link
                href="/kontakt"
                className="bg-amber-800 hover:bg-amber-900 text-white font-medium px-8 py-4 text-sm transition-all rounded-lg shadow-md cursor-pointer"
              >
                {t.productsPage.btnCta}
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