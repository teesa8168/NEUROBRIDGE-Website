'use client';

import React from 'react';
import Link from 'next/link';
import { Brain, ShieldCheck, Heart, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Value Prop Banner */}
        <div className="bg-gradient-to-r from-teal-900/40 via-indigo-900/40 to-slate-900 border border-slate-700/60 rounded-2xl p-8 mb-16 relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="text-teal-400 text-xs font-bold uppercase tracking-wider bg-teal-950/80 px-3 py-1 rounded-full border border-teal-800 inline-block mb-4">
              Our Core Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
              “NeuroBridge doesn&apos;t ask: <span className="text-slate-400 italic">How can the employee fit into the workplace?</span> It asks: <span className="text-teal-300 font-extrabold">How can the workplace work better for every employee?</span>”
            </h2>
            <p className="mt-3 text-slate-300 text-sm">
              Empowering neurodivergent talent through work-style clarity, actionable management guidance, and neuroinclusive HR design.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/assessment"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-sm transition"
            >
              <span>Start Work-Style Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-medium px-5 py-2.5 rounded-xl text-sm border border-slate-700 transition"
            >
              <span>Explore Resource Library</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Privacy */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-teal-600 flex items-center justify-center text-white">
                <Brain className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Neuro<span className="text-teal-400">Bridge</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Making workplaces work for every mind. Digital workplace platform bridging employees, managers, and HR.
            </p>
            <div className="flex items-center gap-2 text-xs text-teal-300 bg-teal-950/60 p-2.5 rounded-lg border border-teal-900/80">
              <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Zero-Diagnosis Required. You own your privacy.</span>
            </div>
          </div>

          {/* Col 2: Pathways */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Workplace Pathways
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/employee" className="hover:text-teal-300 transition">
                  👤 Employee Hub & AI Assistant
                </Link>
              </li>
              <li>
                <Link href="/assessment" className="hover:text-teal-300 transition">
                  🧠 Work-Style Assessment
                </Link>
              </li>
              <li>
                <Link href="/manager" className="hover:text-teal-300 transition">
                  👩‍💼 Manager Dashboard & Advisor
                </Link>
              </li>
              <li>
                <Link href="/manager#academy" className="hover:text-teal-300 transition">
                  🎓 Inclusive Manager Academy
                </Link>
              </li>
              <li>
                <Link href="/hr" className="hover:text-teal-300 transition">
                  🏢 HR Analytics & Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: HR & Hiring */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Inclusion Ecosystem
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/hr#recruitment" className="hover:text-teal-300 transition">
                  🔎 Neuroinclusive Job Scanner
                </Link>
              </li>
              <li>
                <Link href="/hr#onboarding" className="hover:text-teal-300 transition">
                  🚀 Structured Onboarding Flow
                </Link>
              </li>
              <li>
                <Link href="/hr#accommodations" className="hover:text-teal-300 transition">
                  🧩 Support & Accommodations
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-teal-300 transition">
                  📚 Neurodiversity 101 Library
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Project Scope */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Dissertation Project
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Designed & developed as a functional digital workplace dissertation project for neuroinclusive organizational design.
            </p>
            <div className="text-xs text-slate-500">
              Built with Next.js, React 19, TypeScript & Tailwind CSS. Ready for zero-cost deployment on Vercel.
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} NeuroBridge. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 mx-0.5" />
            <span>for cognitive diversity & inclusive design</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
