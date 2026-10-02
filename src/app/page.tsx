'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApp } from '../context/AppContext';
import {
  Brain,
  UserCheck,
  Briefcase,
  Building2,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Sparkles,
  Zap,
  Target,
  MessageSquare,
  Lock,
  Layers,
  BarChart3,
  Search,
  Check,
  Clock,
  ChevronRight,
  Sliders,
  Headphones,
  Eye,
  Calendar,
  Sparkle,
  Star,
  Users
} from 'lucide-react';

export default function HomePage() {
  const { setRole, calmMode } = useApp();

  // Interactive Live Hero Canvas State
  const [heroSensoryLevel, setHeroSensoryLevel] = useState<'quiet' | 'ambient' | 'remote'>('quiet');
  const [heroCommPref, setHeroCommPref] = useState<'written' | 'verbal' | 'visual'>('written');
  const [heroTaskExpanded, setHeroTaskExpanded] = useState(true);

  return (
    <div className="space-y-28 pb-24 overflow-x-hidden">
      {/* ─────────────────────────────────────────────────────────────────────────
          1. LUXURY HERO SECTION (Apple / Linear / Headspace Benchmark)
         ───────────────────────────────────────────────────────────────────────── */}
      <section className="relative pt-12 sm:pt-20 pb-16 bg-dot-pattern">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-gradient-to-b from-teal-500/15 via-indigo-500/10 to-transparent blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Live Metric Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-slate-200/90 text-slate-800 text-xs font-semibold mb-8 shadow-xs backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Digital Workplace Inclusion Platform</span>
            <span className="text-slate-300">•</span>
            <span className="text-teal-700 font-bold">Zero-Diagnosis Required</span>
          </div>

          {/* Impact Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.08] max-w-4xl mx-auto font-heading">
            Making workplaces work <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-teal-600 to-indigo-700">
              for every spectrum of mind.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-sans">
            Help neurodivergent employees communicate how they work best, while empowering managers and HR with practical, evidence-based inclusion tools.
          </p>

          {/* Action CTAs */}
          <div className="mt-9 flex flex-wrap justify-center items-center gap-3.5">
            <Link
              href="/assessment"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-7 py-3.5 rounded-xl shadow-md transition transform hover:-translate-y-0.5 text-sm"
            >
              <span>Take Work-Style Assessment</span>
              <ArrowRight className="w-4 h-4 text-teal-400" />
            </Link>

            <Link
              href="/manager"
              onClick={() => setRole('manager')}
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold px-6 py-3.5 rounded-xl border border-slate-200/90 shadow-xs transition text-sm hover:border-slate-300"
            >
              <Briefcase className="w-4 h-4 text-indigo-600" />
              <span>Manager Hub</span>
            </Link>

            <Link
              href="/hr"
              onClick={() => setRole('hr')}
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold px-6 py-3.5 rounded-xl border border-slate-200/90 shadow-xs transition text-sm hover:border-slate-300"
            >
              <Building2 className="w-4 h-4 text-amber-600" />
              <span>HR &amp; Hiring</span>
            </Link>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
            <ShieldCheck className="w-4 h-4 text-teal-600" />
            <span>100% Privacy by Default • Employee Controls All Visibility • Zero Clinical Labels</span>
          </div>

          {/* ─────────────────────────────────────────────────────────────────────────
              INTERACTIVE LIVE HERO CANVAS (Benchmark Live Interactive Preview)
             ───────────────────────────────────────────────────────────────────────── */}
          <div className="mt-14 max-w-5xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-2xl p-4 sm:p-7 text-left transition relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-rose-400/80" />
                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                <span className="ml-2 text-xs font-bold text-slate-700">
                  Interactive Live Preview: Employee &amp; Manager Alignment Canvas
                </span>
              </div>
              <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                ⚡ Try clicking the controls below
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
              {/* Left Column: Interactive Preferences Simulator (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Step 1: Configure Work Profile Preferences
                </div>

                {/* Communication Toggle */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                    <span className="flex items-center gap-1.5">
                      <MessageSquare className="w-4 h-4 text-teal-600" />
                      <span>Instruction Delivery Style:</span>
                    </span>
                    <span className="text-teal-700 font-extrabold capitalize">{heroCommPref}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'written', label: 'Written Bullet Docs' },
                      { id: 'verbal', label: 'Verbal + Follow-up' },
                      { id: 'visual', label: 'Visual Workflow Map' }
                    ].map(opt => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setHeroCommPref(opt.id as any)}
                        className={`p-2 rounded-xl text-xs font-medium border text-center transition ${
                          heroCommPref === opt.id
                            ? 'bg-teal-600 text-white border-teal-600 shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sensory Environment Toggle */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                    <span className="flex items-center gap-1.5">
                      <Headphones className="w-4 h-4 text-indigo-600" />
                      <span>Sensory Environment:</span>
                    </span>
                    <span className="text-indigo-700 font-extrabold capitalize">{heroSensoryLevel} Space</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'quiet', label: 'Quiet Focus Pod' },
                      { id: 'ambient', label: 'Ambient Sound' },
                      { id: 'remote', label: 'Home / Remote Base' }
                    ].map(opt => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setHeroSensoryLevel(opt.id as any)}
                        className={`p-2 rounded-xl text-xs font-medium border text-center transition ${
                          heroSensoryLevel === opt.id
                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Task Breakdown Demo */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                    <span className="flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-amber-600" />
                      <span>AI Task Breakdown Engine</span>
                    </span>
                    <button
                      onClick={() => setHeroTaskExpanded(!heroTaskExpanded)}
                      className="text-[11px] text-indigo-600 font-bold hover:underline"
                    >
                      {heroTaskExpanded ? 'Hide Steps' : 'Deconstruct Task'}
                    </button>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-900 flex items-center justify-between">
                    <span>Task: &ldquo;Complete Q3 Marketing Presentation&rdquo;</span>
                    <span className="text-[10px] bg-amber-50 text-amber-800 px-2 py-0.5 rounded-md font-bold">5 Steps AI Generated</span>
                  </div>

                  {heroTaskExpanded && (
                    <div className="space-y-1.5 pt-1">
                      {[
                        { step: '1. Outline core narrative & 3 key data points', time: '15m' },
                        { step: '2. Draft slide wireframes without styling', time: '25m' },
                        { step: '3. Add final figures & peer review check', time: '20m' }
                      ].map((s, idx) => (
                        <div key={idx} className="flex items-center justify-between text-[11px] p-2 bg-white/70 rounded-lg border border-slate-100 text-slate-700">
                          <span>{s.step}</span>
                          <span className="font-bold text-slate-500">{s.time}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Live Generated Manager Output (5 cols) */}
              <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-teal-400 bg-teal-950/90 px-2.5 py-1 rounded-md border border-teal-800">
                      Live Manager Recommendation
                    </span>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Lock className="w-3 h-3 text-teal-400" /> Opt-in
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-3">
                    How your manager will support you:
                  </h4>

                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700/80">
                      <div className="text-teal-300 font-bold mb-1">
                        Communication Protocol:
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        {heroCommPref === 'written' && 'Send structured written requirements with bulleted milestones in Slack/Email.'}
                        {heroCommPref === 'verbal' && 'Provide verbal brief followed by a 3-bullet written summary.'}
                        {heroCommPref === 'visual' && 'Walk through visual wireframes & flowchart before kickoff.'}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700/80">
                      <div className="text-indigo-300 font-bold mb-1">
                        Environment Adjustment:
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        {heroSensoryLevel === 'quiet' && 'Reserve quiet focus pods on deep-work days; protect focus badges.'}
                        {heroSensoryLevel === 'ambient' && 'Support noise-cancelling audio setup during core focus blocks.'}
                        {heroSensoryLevel === 'remote' && 'Provide full async communication tools for remote productivity.'}
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/assessment"
                  className="w-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold py-2.5 rounded-xl text-xs text-center transition block shadow-sm"
                >
                  Generate Your Full Profile →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          2. SOCIAL PROOF / INCLUSION RESEARCH STRIP
         ───────────────────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-y border-slate-200/80 py-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-6">
            Benchmarked against evidence-based neurodiversity research &amp; inclusive organizational design
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 items-center justify-center opacity-85 grayscale hover:grayscale-0 transition-all text-xs font-extrabold text-slate-800">
            <div className="flex items-center justify-center gap-2">
              <Brain className="w-5 h-5 text-teal-700" />
              <span>Stanford Neurodiversity Project</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Target className="w-5 h-5 text-indigo-700" />
              <span>Oxford Inclusion Lab</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-700" />
              <span>Cambridge Cognitive Studies</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Building2 className="w-5 h-5 text-slate-700" />
              <span>Deloitte Human Capital DEI</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-5 h-5 text-teal-700" />
              <span>WCAG 2.2 AAA Framework</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          3. BENTO GRID ARCHITECTURE (Benchmark Apple / Notion / Linear)
         ───────────────────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-teal-700 uppercase tracking-widest bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200 inline-block mb-2">
            Intelligent Platform Suite
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Built for clarity, privacy, and actionable empathy.
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Every feature is designed to reduce cognitive friction and empower individual working styles.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Card 1 (Span 2): How I Work Best Profile */}
          <div className="md:col-span-2 premium-card p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                  Profile &amp; Privacy Architecture
                </span>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Lock className="w-3.5 h-3.5 text-teal-600" />
                  <span>Granular Visibility</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2 font-heading">
                &ldquo;How I Work Best&rdquo; Living Profile
              </h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Replace awkward conversations with a structured, dignified work profile. Employees choose exactly what preferences are shared with managers, HR, or kept 100% private.
              </p>

              {/* Mini Profile Snapshot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="text-[11px] font-bold text-teal-800 uppercase">Communication</div>
                  <div className="text-xs font-bold text-slate-900 mt-0.5">Written briefs + clear success criteria</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="text-[11px] font-bold text-indigo-800 uppercase">Meetings</div>
                  <div className="text-xs font-bold text-slate-900 mt-0.5">Agendas shared 2 hours in advance</div>
                </div>
              </div>
            </div>

            <Link
              href="/employee"
              onClick={() => setRole('employee')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-800 pt-3"
            >
              <span>Explore Employee Profile Studio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Bento Card 2: AI Workplace Assistant */}
          <div className="premium-card p-8 flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-xl bg-indigo-50 text-indigo-700 w-fit mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">
                AI Task &amp; Email Assistant
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Breaks down vague, overwhelming assignments into 15–45 minute actionable intervals, and drafts polite clarifying emails.
              </p>
              <div className="p-3 rounded-xl bg-indigo-50/60 border border-indigo-100 text-[11px] text-indigo-900 font-medium space-y-1">
                <div>💬 &ldquo;I don&apos;t understand this assignment.&rdquo;</div>
                <div className="text-indigo-700 font-bold">↳ AI generates clarification template for manager.</div>
              </div>
            </div>

            <Link
              href="/employee#assistant"
              onClick={() => setRole('employee')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 hover:text-indigo-800 pt-3"
            >
              <span>Test AI Assistant</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Bento Card 3: Manager Situational Advisor */}
          <div className="premium-card p-8 flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-xl bg-emerald-50 text-emerald-700 w-fit mb-4">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">
                &ldquo;What Should I Do?&rdquo; Advisor
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Concrete, practical strategies for real team scenarios without assuming silence or anxiety equals lack of competence.
              </p>
              <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100 text-[11px] text-emerald-900 font-medium">
                Scenario: Quiet in group standups ↳ Strategy: Send questions prior + async channels.
              </div>
            </div>

            <Link
              href="/manager#advisor"
              onClick={() => setRole('manager')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 pt-3"
            >
              <span>Open Situation Advisor</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Bento Card 4 (Span 2): HR Inclusive Scanner & Anonymized Analytics */}
          <div className="md:col-span-2 premium-card p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  HR Intelligence &amp; Hiring AI
                </span>
                <span className="text-xs font-bold text-slate-500">
                  Org Score: 72/100
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2 font-heading">
                Inclusive Job Description Scanner &amp; Barrier Telemetry
              </h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Scan recruitment postings to remove exclusionary language (*&ldquo;thrive in fast-paced chaos&rdquo;*) and monitor company-wide barrier trends without ever exposing individual data.
              </p>

              {/* Barrier Progress Snippet */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>Meeting Overload Friction</span>
                  <span className="text-rose-600 font-extrabold">42% Workforce</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-rose-500 h-full w-[42%] rounded-full" />
                </div>
              </div>
            </div>

            <Link
              href="/hr"
              onClick={() => setRole('hr')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-900 pt-3"
            >
              <span>Open HR Overview &amp; Scanner</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          4. THE PARADIGM SHIFT: BEFORE VS AFTER
         ───────────────────────────────────────────────────────────────────────── */}
      <section className="bg-slate-900 text-white py-20 rounded-3xl max-w-7xl mx-auto px-6 sm:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-950 px-3.5 py-1 rounded-full border border-teal-800 inline-block mb-3">
            The NeuroBridge Paradigm Shift
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading">
            From &ldquo;Fit into the Workplace&rdquo; to &ldquo;Design for Human Minds&rdquo;
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            When organizations accommodate diverse cognitive styles, performance, retention, and innovation surge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800/80 rounded-2xl p-7 border border-red-900/40 space-y-4">
            <div className="flex items-center gap-2.5 text-red-400 font-bold text-base">
              <XCircle className="w-5 h-5" />
              <span>Traditional Workplace Assumptions</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li>• Everyone communicates effectively in loud, impromptu verbal meetings.</li>
              <li>• Vague assignments with zero acceptance criteria test &ldquo;proactivity&rdquo;.</li>
              <li>• Demanding clinical medical diagnoses before granting basic focus tools.</li>
              <li>• Evaluating employees on office desk presence rather than quality of deliverables.</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-teal-950/80 to-slate-800 rounded-2xl p-7 border border-teal-700/60 space-y-4 shadow-xl">
            <div className="flex items-center gap-2.5 text-teal-300 font-bold text-base">
              <CheckCircle2 className="w-5 h-5 text-teal-400" />
              <span>The NeuroBridge Framework</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
              <li>✓ Multimodal communication: written briefings paired with agenda-driven syncs.</li>
              <li>✓ AI-assisted task deconstruction into clear, timed milestones.</li>
              <li>✓ 100% confidential work-style profiles without diagnostic disclosure.</li>
              <li>✓ Outcome-driven performance evaluation that honors cognitive energy rhythms.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          5. CTA BANNER
         ───────────────────────────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-tr from-teal-800 via-indigo-800 to-slate-900 rounded-3xl p-10 sm:p-14 text-white shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 font-heading">
              Ready to make workplaces work for every mind?
            </h2>
            <p className="text-teal-100 text-sm sm:text-base mb-8 leading-relaxed">
              Generate your personalized work profile in under 3 minutes, or test the manager &amp; HR dashboards right now.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/assessment"
                className="bg-white text-slate-900 hover:bg-teal-50 font-bold px-8 py-3.5 rounded-xl shadow-md transition text-sm flex items-center gap-2 hover-lift"
              >
                <span>Take Work-Style Assessment</span>
                <ArrowRight className="w-4 h-4 text-teal-700" />
              </Link>
              <Link
                href="/manager"
                onClick={() => setRole('manager')}
                className="bg-teal-950/60 hover:bg-teal-950 text-white font-medium px-6 py-3.5 rounded-xl border border-teal-400/30 transition text-sm flex items-center gap-2 hover-lift"
              >
                <Briefcase className="w-4 h-4 text-teal-300" />
                <span>Open Manager Hub</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
