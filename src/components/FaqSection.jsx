import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/faq';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-km-blue text-xs font-black tracking-widest uppercase mb-3 border border-blue-200/50 shadow-sm">
            <HelpCircle className="w-4 h-4 text-km-blue" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Frequently Asked <span className="text-gradient-blue">Questions</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Everything you need to know about buying, financing, exchanging, and servicing your Tata car at Key Motors Bangalore.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden shadow-sm ${
                  isOpen ? 'border-blue-300 ring-2 ring-blue-500/10 shadow-md' : 'border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-black text-slate-900 hover:text-km-blue transition-colors text-sm sm:text-base"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div className={`p-2 rounded-xl transition-all duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 bg-blue-100 text-km-blue' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50 animate-in fade-in duration-200 font-medium">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
