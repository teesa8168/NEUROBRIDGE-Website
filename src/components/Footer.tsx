'use client';

import React from 'react';
import Link from 'next/link';
import {
  Brain, ShieldCheck, Heart, ArrowRight,
  UserCheck, Briefcase, Building2, BookOpen,
  Search, Rocket, Puzzle, LayoutDashboard, GraduationCap
} from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--nb-bg-2)', borderTop: '1px solid var(--nb-border)', paddingTop: '64px', paddingBottom: '48px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

        {/* Philosophy Banner */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(45,212,191,0.06) 0%, rgba(79,70,229,0.08) 100%)',
          border: '1px solid var(--nb-border-lg)',
          borderRadius: '20px', padding: '40px', marginBottom: '64px',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Orb */}
          <div style={{
            position: 'absolute', top: '-40px', right: '-40px',
            width: '200px', height: '200px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(45,212,191,0.1), transparent 70%)',
            filter: 'blur(40px)', pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', maxWidth: '680px' }}>
            <div className="glow-badge inline-flex mb-4">
              <Brain style={{ width: '12px', height: '12px' }} />
              <span>Our Core Philosophy</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontWeight: 800, color: 'var(--nb-text-1)', lineHeight: 1.4, marginTop: '12px', marginBottom: '12px', letterSpacing: '-0.025em' }}>
              NeuroBridge doesn't ask:{' '}
              <span style={{ color: 'var(--nb-text-3)', fontStyle: 'italic', fontWeight: 600 }}>
                "How can the employee fit into the workplace?"
              </span>
              {' '}It asks:{' '}
              <span className="text-gradient">
                "How can the workplace work better for every employee?"
              </span>
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--nb-text-2)', lineHeight: 1.7, marginBottom: '24px' }}>
              Empowering neurodivergent talent through work-style clarity, actionable management guidance, and neuroinclusive HR design.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <Link href="/assessment" className="btn-primary" style={{ fontSize: '13px', padding: '10px 20px' }}>
                Start Work-Style Assessment
                <ArrowRight style={{ width: '14px', height: '14px' }} />
              </Link>
              <Link href="/resources" className="btn-ghost" style={{ fontSize: '13px', padding: '10px 20px' }}>
                Explore Resource Library
              </Link>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', paddingBottom: '48px', borderBottom: '1px solid var(--nb-border)' }}>

          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '10px',
                background: 'linear-gradient(135deg, var(--nb-teal-dim), var(--nb-indigo-deep))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', boxShadow: '0 0 20px rgba(45,212,191,0.2)',
              }}>
                <Brain style={{ width: '18px', height: '18px' }} />
              </div>
              <span style={{ fontWeight: 900, fontSize: '1rem', color: 'var(--nb-text-1)', letterSpacing: '-0.03em' }}>
                Neuro<span style={{ color: 'var(--nb-teal)' }}>Bridge</span>
              </span>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--nb-text-3)', lineHeight: 1.7 }}>
              Making workplaces work for every mind. A platform bridging employees, managers, and HR through neuro-inclusive design.
            </p>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '10px 14px', borderRadius: '10px',
              background: 'rgba(45,212,191,0.06)', border: '1px solid rgba(45,212,191,0.15)',
              fontSize: '11px', color: 'var(--nb-teal)', fontWeight: 600,
            }}>
              <ShieldCheck style={{ width: '14px', height: '14px', flexShrink: 0 }} />
              Zero-Diagnosis Required. You own your privacy.
            </div>
          </div>

          {/* Pathways */}
          <div>
            <h3 style={{ color: 'var(--nb-text-1)', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
              Workplace Pathways
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { href: '/employee', icon: UserCheck, label: 'Employee Hub & AI Assistant', color: 'var(--nb-teal)' },
                { href: '/assessment', icon: Brain, label: 'Work-Style Assessment', color: 'var(--nb-teal)' },
                { href: '/manager', icon: Briefcase, label: 'Manager Dashboard & Advisor', color: 'var(--nb-indigo)' },
                { href: '/manager#academy', icon: GraduationCap, label: 'Inclusive Manager Academy', color: 'var(--nb-indigo)' },
                { href: '/hr', icon: Building2, label: 'HR Analytics & Insights', color: 'var(--nb-amber)' },
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    fontSize: '13px', color: 'var(--nb-text-3)', textDecoration: 'none',
                    transition: 'color 0.15s',
                  }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = item.color}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--nb-text-3)'}>
                    <item.icon style={{ width: '13px', height: '13px', flexShrink: 0 }} />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Inclusion Ecosystem */}
          <div>
            <h3 style={{ color: 'var(--nb-text-1)', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
              Inclusion Ecosystem
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { href: '/hr#recruitment', icon: Search, label: 'Neuroinclusive Job Scanner' },
                { href: '/hr#onboarding', icon: Rocket, label: 'Structured Onboarding Flow' },
                { href: '/hr#accommodations', icon: Puzzle, label: 'Support & Accommodations' },
                { href: '/resources', icon: BookOpen, label: 'Neurodiversity 101 Library' },
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    fontSize: '13px', color: 'var(--nb-text-3)', textDecoration: 'none',
                    transition: 'color 0.15s',
                  }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--nb-teal)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--nb-text-3)'}>
                    <item.icon style={{ width: '13px', height: '13px', flexShrink: 0 }} />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Project info */}
          <div>
            <h3 style={{ color: 'var(--nb-text-1)', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
              Dissertation Project
            </h3>
            <p style={{ fontSize: '12px', color: 'var(--nb-text-3)', lineHeight: 1.7, marginBottom: '12px' }}>
              Designed & developed as a functional digital workplace dissertation project for neuroinclusive organisational design.
            </p>
            <div style={{ fontSize: '11px', color: 'var(--nb-text-3)', padding: '10px 14px', borderRadius: '10px', background: 'var(--nb-bg-3)', border: '1px solid var(--nb-border)' }}>
              Built with Next.js 16, React 19, TypeScript & Tailwind CSS v4. Deployed on Vercel.
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ paddingTop: '24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', fontSize: '12px', color: 'var(--nb-text-3)' }}>
          <div>© {new Date().getFullYear()} NeuroBridge. All rights reserved.</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Built with</span>
            <Heart style={{ width: '13px', height: '13px', color: '#F43F5E', fill: '#F43F5E' }} />
            <span>for cognitive diversity & inclusive design</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
