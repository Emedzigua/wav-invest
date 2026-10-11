"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="w-full bg-[#F8FAFC] text-slate-950 min-h-screen pt-20 lg:pt-28 pb-6 flex flex-col justify-between">
      <div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold block mb-3">
              {t.contactPage.badge}
            </span>
            <h1 className="text-4xl sm:text-6xl font-normal tracking-tight text-slate-900 leading-[1.1] mb-6">
              {t.contactPage.heading}
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 font-light leading-relaxed">
              {t.contactPage.desc}
            </p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-8"
            >
              <div className="bg-white border border-slate-200/80 rounded-2xl p-8 sm:p-10 shadow-sm space-y-6">
                <h2 className="text-2xl font-normal text-slate-900 tracking-tight mb-6">
                  {t.contactPage.companyTitle}
                </h2>

                <div className="flex items-start gap-4 text-slate-600">
                  <MapPin className="w-5 h-5 text-amber-800 shrink-0 mt-1" />
                  <div className="text-sm font-light leading-relaxed">
                    <p className="font-medium text-slate-900">{t.contactPage.addressLabel}</p>
                    <p>{t.contactPage.addressValue}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-slate-600">
                  <Mail className="w-5 h-5 text-amber-800 shrink-0 mt-1" />
                  <div className="text-sm font-light leading-relaxed">
                    <p className="font-medium text-slate-900">{t.contactPage.emailLabel}</p>
                    <a href="mailto:info@wavinvest.sk" className="hover:text-amber-800 transition-colors">
                      info@wavinvest.sk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-slate-600">
                  <Phone className="w-5 h-5 text-amber-800 shrink-0 mt-1" />
                  <div className="text-sm font-light leading-relaxed">
                    <p className="font-medium text-slate-900">{t.contactPage.phoneLabel}</p>
                    <a href="tel:+421000000000" className="hover:text-amber-800 transition-colors">
                      +421 000 000 000
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="bg-white border border-slate-200/80 rounded-2xl p-8 sm:p-12 shadow-sm">
                <h2 className="text-2xl font-normal text-slate-900 tracking-tight mb-8">
                  {t.contactPage.formTitle}
                </h2>

                {submitted ? (
                  <div className="p-8 border border-slate-200 bg-[#F8FAFC] text-center space-y-3 rounded-2xl my-8">
                    <Check className="w-10 h-10 text-amber-800 mx-auto" />
                    <h3 className="text-xl font-normal text-slate-900">{t.contactPage.successTitle}</h3>
                    <p className="text-sm text-slate-600 font-light">{t.contactPage.successDesc}</p>
                  </div>
                ) : (
                  <form 
                    onSubmit={(e) => { 
                      e.preventDefault(); 
                      setSubmitted(true); 
                    }} 
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase text-slate-500">{t.contactPage.nameLabel}</label>
                        <input 
                          type="text" 
                          required 
                          placeholder={t.contactPage.namePlaceholder}
                          className="w-full bg-[#F8FAFC] border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-800 transition-colors" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase text-slate-500">{t.contactPage.emailFormLabel}</label>
                        <input 
                          type="email" 
                          required 
                          placeholder={t.contactPage.emailPlaceholder} 
                          className="w-full bg-[#F8FAFC] border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-800 transition-colors" 
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase text-slate-500">{t.contactPage.phoneFormLabel}</label>
                      <input 
                        type="tel" 
                        placeholder={t.contactPage.phonePlaceholder} 
                        className="w-full bg-[#F8FAFC] border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-800 transition-colors" 
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase text-slate-500">{t.contactPage.msgLabel}</label>
                      <textarea 
                        required 
                        rows={5} 
                        placeholder={t.contactPage.msgPlaceholder} 
                        className="w-full bg-[#F8FAFC] border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-800 transition-colors resize-none" 
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="w-full bg-amber-800 hover:bg-amber-900 text-white font-medium py-4 text-sm transition-all rounded-lg shadow-md cursor-pointer"
                    >
                      {t.contactPage.btnSubmit}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
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