'use client';

import React, { useState, useEffect } from 'react';
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
  BarChart3,
  Clock,
  ChevronRight,
  Headphones,
  Star,
  Users,
  TrendingUp,
  Globe,
  Award,
  Layers,
  Eye,
  Check
} from 'lucide-react';

export default function HomePage() {
  const { setRole, calmMode } = useApp();
  const [heroSensoryLevel, setHeroSensoryLevel] = useState<'quiet' | 'ambient' | 'remote'>('quiet');
  const [heroCommPref, setHeroCommPref] = useState<'written' | 'verbal' | 'visual'>('written');
  const [heroTaskExpanded, setHeroTaskExpanded] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const commOutput = {
    written: 'Send structured written requirements with bulleted milestones in Slack/Email before every sprint kickoff.',
    verbal: 'Provide a verbal brief followed immediately by a 3-bullet written summary so both modes are covered.',
    visual: 'Walk through visual wireframes & flowcharts during kickoff before any task handoff.',
  };

  const sensoryOutput = {
    quiet: 'Reserve quiet focus pods or noise-cancelling setups on deep-work days. Protect focus time badges.',
    ambient: 'Support noise-cancelling audio equipment during core focus blocks. Allow music without judgement.',
    remote: 'Provide full async communication tooling for remote productivity. No mandatory video presence.',
  };

  return (
    <div className={`${calmMode ? 'light-mode' : ''}`} style={{ background: 'var(--nb-bg)' }}>

      {/* ═══════════════════════════════════════════════════════
          1. HERO SECTION — Dark, Immersive, Linear-inspired
          ═══════════════════════════════════════════════════════ */}
      <section className="relative pt-28 pb-24 overflow-hidden">
        {/* Ambient background mesh */}
        <div className="hero-mesh" />
        <div className="grid-dots absolute inset-0 opacity-40" />

        {/* Floating orb top-left */}
        <div className="absolute top-20 left-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        {/* Floating orb bottom-right */}
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(45,212,191,0.1) 0%, transparent 70%)', filter: 'blur(80px)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Live badge */}
          <div className={`inline-flex items-center gap-2.5 mb-8 animate-slide-up`}>
            <div className="glow-badge">
              <span className="pulse-dot" />
              <span>Digital Workplace Inclusion Platform</span>
              <span style={{ color: 'var(--nb-text-3)' }}>•</span>
              <span>Zero Diagnosis Required</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="animate-slide-up-delay-1"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 900,
              letterSpacing: '-0.035em',
              lineHeight: 1.05,
              color: 'var(--nb-text-1)',
              maxWidth: '900px',
              margin: '0 auto 20px'
            }}>
            Every mind works{' '}
            <span className="text-gradient">differently.</span>
            <br />
            Every workplace should too.
          </h1>

          {/* Subtitle */}
          <p className="animate-slide-up-delay-2"
            style={{
              fontSize: '1.125rem',
              color: 'var(--nb-text-2)',
              maxWidth: '600px',
              margin: '0 auto 40px',
              lineHeight: 1.7,
            }}>
            Help neurodivergent employees communicate how they work best,
            while empowering managers and HR with practical, evidence-based inclusion tools.
          </p>

          {/* CTA Row */}
          <div className="flex flex-wrap justify-center items-center gap-4 animate-slide-up-delay-3">
            <Link href="/assessment" className="btn-primary">
              <Sparkles className="w-4 h-4" />
              <span>Take Work-Style Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/manager" onClick={() => setRole('manager')} className="btn-ghost">
              <Briefcase className="w-4 h-4" style={{ color: 'var(--nb-indigo)' }} />
              <span>Manager Hub</span>
            </Link>
            <Link href="/hr" onClick={() => setRole('hr')} className="btn-ghost">
              <Building2 className="w-4 h-4" style={{ color: 'var(--nb-amber)' }} />
              <span>HR & Hiring</span>
            </Link>
          </div>

          {/* Trust line */}
          <div className="flex items-center justify-center gap-2 mt-6 animate-slide-up-delay-4"
            style={{ fontSize: '12px', color: 'var(--nb-text-3)', fontWeight: 600 }}>
            <ShieldCheck className="w-4 h-4" style={{ color: 'var(--nb-teal)' }} />
            <span>100% Privacy by Default • Employee Controls All Visibility • Zero Clinical Labels</span>
          </div>

          {/* ── Interactive Live Canvas ── */}
          <div className="browser-frame mt-16 max-w-5xl mx-auto animate-slide-up-delay-4 text-left">
            {/* Browser chrome bar */}
            <div className="browser-frame-bar">
              <div className="w-3 h-3 rounded-full" style={{ background: '#F87171' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#FBBF24' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#34D399' }} />
              <div className="flex-1 mx-4 px-4 py-1.5 rounded-lg text-xs font-medium"
                style={{ background: 'var(--nb-bg)', color: 'var(--nb-text-3)', border: '1px solid var(--nb-border)' }}>
                neurobridge.app/employee/profile
              </div>
              <div className="metric-pill">
                <Zap className="w-3 h-3" />
                <span>Try It Live</span>
              </div>
            </div>

            {/* Canvas content */}
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left: Preference Simulator */}
                <div className="lg:col-span-7 space-y-4">
                  <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--nb-text-3)' }}>
                    Configure your work style preferences
                  </p>

                  {/* Communication */}
                  <div className="p-4 rounded-xl space-y-3" style={{ background: 'var(--nb-bg)', border: '1px solid var(--nb-border)' }}>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-sm font-semibold" style={{ color: 'var(--nb-text-1)' }}>
                        <MessageSquare className="w-4 h-4" style={{ color: 'var(--nb-teal)' }} />
                        Instruction Delivery Style
                      </span>
                      <span className="text-xs font-bold capitalize" style={{ color: 'var(--nb-teal)' }}>{heroCommPref}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'written', label: 'Written Docs' },
                        { id: 'verbal', label: 'Verbal + Notes' },
                        { id: 'visual', label: 'Visual Map' }
                      ].map(opt => (
                        <button key={opt.id} type="button"
                          onClick={() => setHeroCommPref(opt.id as any)}
                          className={`toggle-chip ${heroCommPref === opt.id ? 'active' : ''}`}>
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sensory */}
                  <div className="p-4 rounded-xl space-y-3" style={{ background: 'var(--nb-bg)', border: '1px solid var(--nb-border)' }}>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-sm font-semibold" style={{ color: 'var(--nb-text-1)' }}>
                        <Headphones className="w-4 h-4" style={{ color: 'var(--nb-indigo)' }} />
                        Sensory Environment
                      </span>
                      <span className="text-xs font-bold capitalize" style={{ color: 'var(--nb-indigo)' }}>{heroSensoryLevel} Space</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'quiet', label: 'Quiet Focus' },
                        { id: 'ambient', label: 'Ambient Sound' },
                        { id: 'remote', label: 'Home / Remote' }
                      ].map(opt => (
                        <button key={opt.id} type="button"
                          onClick={() => setHeroSensoryLevel(opt.id as any)}
                          className={`toggle-chip ${heroSensoryLevel === opt.id ? 'active-indigo' : ''}`}>
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* AI Task breakdown */}
                  <div className="p-4 rounded-xl space-y-3" style={{ background: 'var(--nb-bg)', border: '1px solid var(--nb-border)' }}>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-sm font-semibold" style={{ color: 'var(--nb-text-1)' }}>
                        <Zap className="w-4 h-4" style={{ color: 'var(--nb-amber)' }} />
                        AI Task Breakdown Engine
                      </span>
                      <button onClick={() => setHeroTaskExpanded(!heroTaskExpanded)}
                        className="text-xs font-bold" style={{ color: 'var(--nb-indigo)' }}>
                        {heroTaskExpanded ? 'Collapse' : 'Expand'}
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg text-xs font-semibold"
                      style={{ background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.15)', color: 'var(--nb-text-1)' }}>
                      <span>Task: "Complete Q3 Marketing Presentation"</span>
                      <span className="ml-3 shrink-0 text-[10px] px-2 py-1 rounded-md font-bold"
                        style={{ background: 'rgba(251,191,36,0.12)', color: 'var(--nb-amber)', border: '1px solid rgba(251,191,36,0.2)' }}>
                        5 Steps
                      </span>
                    </div>
                    {heroTaskExpanded && (
                      <div className="space-y-2">
                        {[
                          { step: '1. Outline core narrative & 3 key data points', time: '15m' },
                          { step: '2. Draft slide wireframes without styling', time: '25m' },
                          { step: '3. Add final figures & peer review check', time: '20m' },
                        ].map((s, idx) => (
                          <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg text-xs"
                            style={{ background: 'var(--nb-bg-2)', border: '1px solid var(--nb-border)', color: 'var(--nb-text-2)' }}>
                            <span>{s.step}</span>
                            <span className="ml-3 shrink-0 font-bold" style={{ color: 'var(--nb-text-3)' }}>{s.time}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Right: Manager output panel */}
                <div className="lg:col-span-5 rounded-xl p-5 flex flex-col justify-between space-y-4"
                  style={{ background: 'linear-gradient(145deg, rgba(45,212,191,0.06) 0%, rgba(79,70,229,0.08) 100%)', border: '1px solid var(--nb-border-lg)' }}>
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="metric-pill">
                        <span>Live Manager Recommendation</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--nb-text-3)' }}>
                        <Lock className="w-3 h-3" style={{ color: 'var(--nb-teal)' }} />
                        Opt-in
                      </div>
                    </div>

                    <h4 className="text-sm font-bold mb-4" style={{ color: 'var(--nb-text-1)', letterSpacing: '-0.01em' }}>
                      How your manager will support you:
                    </h4>

                    <div className="space-y-3">
                      <div className="p-3.5 rounded-xl" style={{ background: 'rgba(45,212,191,0.05)', border: '1px solid rgba(45,212,191,0.12)' }}>
                        <div className="text-xs font-bold mb-1.5" style={{ color: 'var(--nb-teal)' }}>Communication Protocol</div>
                        <p className="text-xs leading-relaxed" style={{ color: 'var(--nb-text-2)' }}>
                          {commOutput[heroCommPref]}
                        </p>
                      </div>
                      <div className="p-3.5 rounded-xl" style={{ background: 'rgba(129,140,248,0.05)', border: '1px solid rgba(129,140,248,0.12)' }}>
                        <div className="text-xs font-bold mb-1.5" style={{ color: 'var(--nb-indigo)' }}>Environment Adjustment</div>
                        <p className="text-xs leading-relaxed" style={{ color: 'var(--nb-text-2)' }}>
                          {sensoryOutput[heroSensoryLevel]}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link href="/assessment"
                    className="block w-full text-center py-3 rounded-xl text-xs font-bold transition-all"
                    style={{ background: 'var(--nb-grad-primary)', color: '#fff', boxShadow: '0 4px 16px rgba(45,212,191,0.25)' }}>
                    Generate Your Full Profile →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2. STATS STRIP
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16" style={{ borderTop: '1px solid var(--nb-border)', borderBottom: '1px solid var(--nb-border)', background: 'var(--nb-bg-2)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: '1 in 5', label: 'Workers are neurodivergent', icon: Brain, color: 'var(--nb-teal)' },
              { value: '87%', label: 'Prefer written instructions', icon: MessageSquare, color: 'var(--nb-indigo)' },
              { value: '3.7×', label: 'Innovation uplift with inclusion', icon: TrendingUp, color: 'var(--nb-violet)' },
              { value: '<3min', label: 'To generate your work profile', icon: Zap, color: 'var(--nb-amber)' },
            ].map((stat, i) => (
              <div key={i} className="stat-card">
                <stat.icon className="w-5 h-5 mx-auto mb-3" style={{ color: stat.color }} />
                <div className="text-3xl font-black mb-1" style={{ color: stat.color, letterSpacing: '-0.04em' }}>
                  {stat.value}
                </div>
                <div className="text-xs font-medium leading-tight" style={{ color: 'var(--nb-text-3)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          3. BENTO FEATURES GRID
          ═══════════════════════════════════════════════════════ */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="glow-badge inline-flex mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Intelligent Platform Suite</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 900, color: 'var(--nb-text-1)', marginTop: '12px', marginBottom: '16px' }}>
            Built for clarity, privacy,{' '}
            <span className="text-gradient">and actionable empathy.</span>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--nb-text-2)', lineHeight: 1.7 }}>
            Every feature reduces cognitive friction and empowers individual working styles — no diagnosis required.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Card 1 — Full width: Work Profile */}
          <div className="md:col-span-2 premium-card p-8 flex flex-col justify-between gradient-border">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="icon-wrap">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium" style={{ color: 'var(--nb-text-3)' }}>
                  <Lock className="w-3.5 h-3.5" style={{ color: 'var(--nb-teal)' }} />
                  Granular Visibility Controls
                </div>
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--nb-text-1)', marginBottom: '10px', letterSpacing: '-0.025em' }}>
                "How I Work Best" Living Profile
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--nb-text-2)', lineHeight: 1.7, marginBottom: '20px' }}>
                Replace awkward disclosure conversations with a structured, dignified work profile.
                Employees choose exactly what preferences are shared — with managers, HR, or kept private.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Communication', value: 'Written briefs + clear success criteria', color: 'var(--nb-teal)' },
                  { label: 'Meetings', value: 'Agendas shared 2 hours in advance', color: 'var(--nb-indigo)' },
                  { label: 'Focus Mode', value: 'Quiet pod + async-first windows', color: 'var(--nb-violet)' },
                  { label: 'Feedback', value: 'Written only, no surprise verbal reviews', color: 'var(--nb-amber)' },
                ].map((item, i) => (
                  <div key={i} className="p-3.5 rounded-xl" style={{ background: 'var(--nb-bg)', border: '1px solid var(--nb-border)' }}>
                    <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: item.color }}>{item.label}</div>
                    <div className="text-xs font-semibold" style={{ color: 'var(--nb-text-1)' }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <Link href="/employee" onClick={() => setRole('employee')}
              className="inline-flex items-center gap-2 mt-6 text-sm font-bold"
              style={{ color: 'var(--nb-teal)' }}>
              Explore Employee Profile Studio
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 2 — AI Assistant */}
          <div className="premium-card p-8 flex flex-col justify-between gradient-border">
            <div>
              <div className="icon-wrap indigo mb-5">
                <Zap className="w-5 h-5" />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--nb-text-1)', marginBottom: '10px', letterSpacing: '-0.025em' }}>
                AI Task & Email Assistant
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--nb-text-2)', lineHeight: 1.7, marginBottom: '16px' }}>
                Breaks down vague, overwhelming assignments into 15–45 minute actionable intervals and drafts polite clarifying emails.
              </p>
              <div className="p-4 rounded-xl space-y-2" style={{ background: 'rgba(129,140,248,0.06)', border: '1px solid rgba(129,140,248,0.12)' }}>
                <div className="text-xs" style={{ color: 'var(--nb-text-2)' }}>
                  💬 "I don't understand this assignment."
                </div>
                <div className="text-xs font-bold" style={{ color: 'var(--nb-indigo)' }}>
                  ↳ AI generates clarification template for manager.
                </div>
              </div>
            </div>
            <Link href="/employee#assistant" onClick={() => setRole('employee')}
              className="inline-flex items-center gap-2 mt-6 text-sm font-bold"
              style={{ color: 'var(--nb-indigo)' }}>
              Test AI Assistant <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 3 — Manager Advisor */}
          <div className="premium-card p-8 flex flex-col justify-between gradient-border">
            <div>
              <div className="icon-wrap mb-5" style={{ background: 'rgba(52,211,153,0.1)', borderColor: 'rgba(52,211,153,0.2)', color: '#34D399' }}>
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--nb-text-1)', marginBottom: '10px', letterSpacing: '-0.025em' }}>
                "What Should I Do?" Advisor
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--nb-text-2)', lineHeight: 1.7, marginBottom: '16px' }}>
                Concrete, practical strategies for real team scenarios — without assuming silence equals lack of competence.
              </p>
              <div className="p-4 rounded-xl" style={{ background: 'rgba(52,211,153,0.05)', border: '1px solid rgba(52,211,153,0.12)' }}>
                <div className="text-[11px] font-bold mb-1" style={{ color: '#34D399' }}>Scenario</div>
                <div className="text-xs" style={{ color: 'var(--nb-text-2)' }}>
                  Employee quiet in group standups →{' '}
                  <span style={{ color: 'var(--nb-text-1)', fontWeight: 600 }}>Send questions prior via async channels.</span>
                </div>
              </div>
            </div>
            <Link href="/manager#advisor" onClick={() => setRole('manager')}
              className="inline-flex items-center gap-2 mt-6 text-sm font-bold"
              style={{ color: '#34D399' }}>
              Open Situation Advisor <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 4 — HR Intelligence (wide) */}
          <div className="md:col-span-2 premium-card p-8 flex flex-col justify-between gradient-border">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="icon-wrap amber">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-xs font-bold px-2.5 py-1 rounded-lg" style={{ background: 'rgba(251,191,36,0.1)', color: 'var(--nb-amber)', border: '1px solid rgba(251,191,36,0.2)' }}>
                    Org Inclusion Score
                  </div>
                  <div className="text-2xl font-black" style={{ color: 'var(--nb-amber)', letterSpacing: '-0.05em' }}>72/100</div>
                </div>
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--nb-text-1)', marginBottom: '10px', letterSpacing: '-0.025em' }}>
                Inclusive Job Description Scanner & Barrier Telemetry
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--nb-text-2)', lineHeight: 1.7, marginBottom: '20px' }}>
                Scan recruitment postings to remove exclusionary language and monitor company-wide barrier trends — without ever exposing individual data.
              </p>

              <div className="space-y-3">
                {[
                  { label: 'Meeting Overload Friction', pct: 42, color: 'var(--nb-rose)' },
                  { label: 'Communication Preference Gap', pct: 67, color: 'var(--nb-amber)' },
                  { label: 'Focus Environment Alignment', pct: 78, color: 'var(--nb-teal)' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs font-semibold mb-2" style={{ color: 'var(--nb-text-2)' }}>
                      <span>{item.label}</span>
                      <span style={{ color: item.color }}>{item.pct}%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${item.pct}%`, background: item.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Link href="/hr" onClick={() => setRole('hr')}
              className="inline-flex items-center gap-2 mt-6 text-sm font-bold"
              style={{ color: 'var(--nb-amber)' }}>
              Open HR Overview & Scanner <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          4. PARADIGM SHIFT — Before vs After (dark panel)
          ═══════════════════════════════════════════════════════ */}
      <section className="py-24" style={{ background: 'var(--nb-bg-2)', borderTop: '1px solid var(--nb-border)', borderBottom: '1px solid var(--nb-border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="glow-badge inline-flex mb-4">
              <Target className="w-3.5 h-3.5" />
              <span>The NeuroBridge Paradigm Shift</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 900, color: 'var(--nb-text-1)', marginTop: '12px', marginBottom: '16px' }}>
              From "Fit into the Workplace" to{' '}
              <span className="text-gradient">"Design for Human Minds"</span>
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--nb-text-2)', lineHeight: 1.7 }}>
              When organizations accommodate diverse cognitive styles, performance, retention, and innovation surge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Before */}
            <div className="premium-card p-8 space-y-5" style={{ border: '1px solid rgba(244,63,94,0.15)' }}>
              <div className="flex items-center gap-3 font-bold text-base" style={{ color: 'var(--nb-rose)' }}>
                <XCircle className="w-5 h-5" />
                Traditional Workplace Assumptions
              </div>
              <ul className="space-y-3">
                {[
                  'Everyone communicates effectively in loud, impromptu verbal meetings.',
                  'Vague assignments test "proactivity" — no acceptance criteria needed.',
                  'Clinical medical diagnosis required before granting basic focus tools.',
                  'Evaluating employees on desk presence rather than quality of deliverables.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--nb-text-2)' }}>
                    <XCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'rgba(244,63,94,0.6)' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="premium-card p-8 space-y-5 gradient-border"
              style={{ background: 'linear-gradient(145deg, rgba(45,212,191,0.04) 0%, rgba(79,70,229,0.06) 100%)', border: '1px solid rgba(45,212,191,0.2)' }}>
              <div className="flex items-center gap-3 font-bold text-base" style={{ color: 'var(--nb-teal)' }}>
                <CheckCircle2 className="w-5 h-5" />
                The NeuroBridge Framework
              </div>
              <ul className="space-y-3">
                {[
                  'Multimodal communication: written briefings paired with agenda-driven syncs.',
                  'AI-assisted task deconstruction into clear, timed milestones.',
                  '100% confidential work-style profiles without diagnostic disclosure.',
                  'Outcome-driven performance evaluation that honors cognitive energy rhythms.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--nb-text-2)' }}>
                    <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'var(--nb-teal)' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          5. THREE PATHS SECTION
          ═══════════════════════════════════════════════════════ */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="glow-badge inline-flex mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>Three Dedicated Paths</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 900, color: 'var(--nb-text-1)', marginTop: '12px', marginBottom: '16px' }}>
            Everyone has a role in{' '}
            <span className="text-gradient">building inclusion.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              role: 'employee' as const,
              icon: UserCheck,
              title: 'Employee',
              subtitle: 'Own your work style',
              color: 'var(--nb-teal)',
              borderColor: 'rgba(45,212,191,0.2)',
              glowColor: 'rgba(45,212,191,0.08)',
              href: '/employee',
              features: ['Work-Style Profile Builder', 'AI Task Breakdown Engine', 'Anonymous Support Requests', 'Sensory & Focus Toolkit'],
            },
            {
              role: 'manager' as const,
              icon: Briefcase,
              title: 'Manager',
              subtitle: 'Lead with empathy',
              color: 'var(--nb-indigo)',
              borderColor: 'rgba(129,140,248,0.2)',
              glowColor: 'rgba(129,140,248,0.06)',
              href: '/manager',
              features: ['Team Preference Dashboard', '"What Should I Do?" Advisor', 'Inclusive Manager Academy', 'Meeting Effectiveness Kit'],
            },
            {
              role: 'hr' as const,
              icon: Building2,
              title: 'HR & Organisation',
              subtitle: 'Design inclusive systems',
              color: 'var(--nb-amber)',
              borderColor: 'rgba(251,191,36,0.2)',
              glowColor: 'rgba(251,191,36,0.06)',
              href: '/hr',
              features: ['Org Inclusion Analytics', 'Job Description AI Scanner', 'Onboarding Needs Capture', 'Anonymized Barrier Telemetry'],
            },
          ].map((path, i) => (
            <Link key={i} href={path.href} onClick={() => setRole(path.role)}
              className="premium-card p-8 flex flex-col group cursor-pointer"
              style={{ background: path.glowColor, border: `1px solid ${path.borderColor}`, borderRadius: 'var(--r-xl)' }}>
              <div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                  style={{ background: `color-mix(in srgb, ${path.color} 15%, transparent)`, border: `1px solid color-mix(in srgb, ${path.color} 25%, transparent)`, color: path.color }}>
                  <path.icon className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: path.color }}>{path.subtitle}</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--nb-text-1)', marginBottom: '16px', letterSpacing: '-0.025em' }}>
                  {path.title}
                </h3>
                <ul className="space-y-2.5">
                  {path.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm" style={{ color: 'var(--nb-text-2)' }}>
                      <Check className="w-3.5 h-3.5 shrink-0" style={{ color: path.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all" style={{ color: path.color }}>
                Enter {path.title} Hub
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          6. SOCIAL PROOF / RESEARCH ATTRIBUTION
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16" style={{ borderTop: '1px solid var(--nb-border)', background: 'var(--nb-bg-2)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest mb-8" style={{ color: 'var(--nb-text-3)' }}>
            Benchmarked against evidence-based neurodiversity research & inclusive organisational design
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 items-center justify-center">
            {[
              { icon: Brain, name: 'Stanford Neurodiversity Project', color: 'var(--nb-teal)' },
              { icon: Target, name: 'Oxford Inclusion Lab', color: 'var(--nb-indigo)' },
              { icon: Sparkles, name: 'Cambridge Cognitive Studies', color: 'var(--nb-violet)' },
              { icon: Building2, name: 'Deloitte Human Capital DEI', color: 'var(--nb-amber)' },
              { icon: ShieldCheck, name: 'WCAG 2.2 AAA Framework', color: 'var(--nb-teal)' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-2.5 group cursor-default">
                <item.icon className="w-4 h-4 transition-colors" style={{ color: 'var(--nb-text-3)' }} />
                <span className="text-xs font-bold transition-colors" style={{ color: 'var(--nb-text-3)' }}>
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          7. CTA SECTION — Gradient Hero Banner
          ═══════════════════════════════════════════════════════ */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden p-12 sm:p-16 text-center"
          style={{ background: 'linear-gradient(135deg, rgba(45,212,191,0.08) 0%, rgba(79,70,229,0.12) 50%, rgba(167,139,250,0.08) 100%)', border: '1px solid var(--nb-border-lg)' }}>

          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(45,212,191,0.12), transparent 70%)' }} />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="glow-badge inline-flex mb-6">
              <Globe className="w-3.5 h-3.5" />
              <span>Make Your Workplace Neuro-Inclusive</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 900, color: 'var(--nb-text-1)', marginTop: '12px', marginBottom: '16px', letterSpacing: '-0.03em' }}>
              Ready to make workplaces work{' '}
              <span className="text-gradient">for every mind?</span>
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--nb-text-2)', marginBottom: '36px', lineHeight: 1.7 }}>
              Generate your personalised work profile in under 3 minutes, or test the manager & HR dashboards right now.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/assessment" className="btn-primary">
                <Sparkles className="w-4 h-4" />
                Take Work-Style Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/manager" onClick={() => setRole('manager')} className="btn-ghost">
                <Briefcase className="w-4 h-4" style={{ color: 'var(--nb-indigo)' }} />
                Open Manager Hub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
