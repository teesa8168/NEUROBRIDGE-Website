'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useApp } from '../context/AppContext';
import {
  Brain,
  Menu,
  X,
  UserCheck,
  Briefcase,
  Building2,
  Sparkles,
  ArrowRight,
  ChevronDown
} from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const { role, setRole, calmMode } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    if (!roleDropdownOpen) return;
    const close = () => setRoleDropdownOpen(false);
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [roleDropdownOpen]);

  const getNavLinks = () => {
    switch (role) {
      case 'employee':
        return [
          { name: 'Dashboard', href: '/employee' },
          { name: 'Assessment', href: '/assessment' },
          { name: 'AI Assistant', href: '/employee#assistant' },
          { name: 'Resources', href: '/resources' },
        ];
      case 'manager':
        return [
          { name: 'Manager Hub', href: '/manager' },
          { name: 'Team View', href: '/manager#team' },
          { name: 'Advisor', href: '/manager#advisor' },
          { name: 'Academy', href: '/manager#academy' },
          { name: 'Resources', href: '/resources' },
        ];
      case 'hr':
        return [
          { name: 'HR Overview', href: '/hr' },
          { name: 'Insights', href: '/hr#insights' },
          { name: 'Hiring AI', href: '/hr#recruitment' },
          { name: 'Onboarding', href: '/hr#onboarding' },
          { name: 'Accommodations', href: '/hr#accommodations' },
        ];
      default:
        return [
          { name: 'Home', href: '/' },
          { name: 'Assessment', href: '/assessment' },
          { name: 'Employee', href: '/employee' },
          { name: 'Manager', href: '/manager' },
          { name: 'HR', href: '/hr' },
          { name: 'Resources', href: '/resources' },
        ];
    }
  };

  const navLinks = getNavLinks();

  const roleConfig = {
    employee: { label: 'Employee Mode', icon: UserCheck, accentColor: 'var(--nb-teal)', bg: 'rgba(45,212,191,0.1)', border: 'rgba(45,212,191,0.25)' },
    manager: { label: 'Manager Mode', icon: Briefcase, accentColor: 'var(--nb-indigo)', bg: 'rgba(129,140,248,0.1)', border: 'rgba(129,140,248,0.25)' },
    hr: { label: 'HR Admin Mode', icon: Building2, accentColor: 'var(--nb-amber)', bg: 'rgba(251,191,36,0.1)', border: 'rgba(251,191,36,0.25)' },
    guest: { label: 'Choose Your Role', icon: Sparkles, accentColor: 'var(--nb-text-2)', bg: 'rgba(255,255,255,0.05)', border: 'rgba(255,255,255,0.1)' },
  }[role];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: scrolled
        ? 'rgba(10, 12, 16, 0.9)'
        : 'rgba(10, 12, 16, 0.7)',
      backdropFilter: 'blur(20px) saturate(1.5)',
      WebkitBackdropFilter: 'blur(20px) saturate(1.5)',
      borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.08)' : 'transparent'}`,
      transition: 'all 0.25s cubic-bezier(0.4,0,0.2,1)',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{
              width: '38px', height: '38px', borderRadius: '10px',
              background: 'linear-gradient(135deg, var(--nb-teal-dim) 0%, var(--nb-indigo-deep) 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'white', boxShadow: '0 0 20px rgba(45,212,191,0.25)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(45,212,191,0.4)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = '';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(45,212,191,0.25)';
              }}>
              <Brain style={{ width: '20px', height: '20px' }} />
            </div>
            <div>
              <div style={{ fontWeight: 900, fontSize: '1.1rem', letterSpacing: '-0.03em', color: 'var(--nb-text-1)', lineHeight: 1 }}>
                Neuro<span style={{ color: 'var(--nb-teal)' }}>Bridge</span>
              </div>
              <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--nb-text-3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '1px' }}>
                Workplace Inclusion
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'none', alignItems: 'center', gap: '2px' }} className="hidden md:flex">
            {navLinks.map(link => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.name} href={link.href} style={{
                  padding: '7px 14px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'var(--nb-text-1)' : 'var(--nb-text-2)',
                  background: isActive ? 'rgba(255,255,255,0.07)' : 'transparent',
                  border: isActive ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
                  textDecoration: 'none',
                  transition: 'all 0.15s',
                }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.color = 'var(--nb-text-1)';
                      (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.color = 'var(--nb-text-2)';
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                    }
                  }}>
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex" style={{ alignItems: 'center', gap: '10px' }}>
            {/* Role badge */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '7px',
                  padding: '7px 14px', borderRadius: '8px',
                  background: roleConfig.bg,
                  border: `1px solid ${roleConfig.border}`,
                  color: roleConfig.accentColor,
                  fontSize: '12px', fontWeight: 700,
                  cursor: 'pointer', transition: 'all 0.15s',
                }}>
                <roleConfig.icon style={{ width: '14px', height: '14px' }} />
                <span>{roleConfig.label}</span>
                <ChevronDown style={{ width: '12px', height: '12px', opacity: 0.7 }} />
              </button>

              {roleDropdownOpen && (
                <div onMouseDown={e => e.stopPropagation()} style={{
                  position: 'absolute', right: 0, top: 'calc(100% + 8px)',
                  width: '220px',
                  background: 'var(--nb-bg-4)',
                  border: '1px solid var(--nb-border-lg)',
                  borderRadius: '14px',
                  boxShadow: '0 16px 40px rgba(0,0,0,0.5)',
                  padding: '8px',
                  zIndex: 100,
                }}>
                  <div style={{ padding: '6px 10px 4px', fontSize: '10px', fontWeight: 700, color: 'var(--nb-text-3)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Switch Perspective
                  </div>
                  {([
                    { r: 'employee', label: 'Employee', sub: 'Work profile, AI assistant', icon: UserCheck, color: 'var(--nb-teal)' },
                    { r: 'manager', label: 'Manager', sub: 'Team preferences, academy', icon: Briefcase, color: 'var(--nb-indigo)' },
                    { r: 'hr', label: 'HR / Organisation', sub: 'Insights, recruitment AI', icon: Building2, color: 'var(--nb-amber)' },
                  ] as const).map(item => (
                    <button key={item.r}
                      onClick={() => { setRole(item.r); setRoleDropdownOpen(false); }}
                      style={{
                        width: '100%', textAlign: 'left',
                        display: 'flex', alignItems: 'center', gap: '10px',
                        padding: '10px', borderRadius: '10px',
                        background: 'transparent', border: 'none',
                        cursor: 'pointer', transition: 'background 0.12s',
                        color: 'var(--nb-text-1)',
                      }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}>
                      <item.icon style={{ width: '16px', height: '16px', color: item.color, flexShrink: 0 }} />
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--nb-text-1)' }}>{item.label}</div>
                        <div style={{ fontSize: '10px', color: 'var(--nb-text-3)' }}>{item.sub}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA */}
            <Link href="/assessment" className="btn-primary" style={{ padding: '8px 18px', fontSize: '13px' }}>
              <span>Take Assessment</span>
              <ArrowRight style={{ width: '14px', height: '14px' }} />
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
            style={{ padding: '8px', borderRadius: '8px', background: 'transparent', border: 'none', color: 'var(--nb-text-2)', cursor: 'pointer' }}
            aria-label="Toggle menu">
            {mobileMenuOpen ? <X style={{ width: '22px', height: '22px' }} /> : <Menu style={{ width: '22px', height: '22px' }} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div style={{
          borderTop: '1px solid var(--nb-border)',
          background: 'var(--nb-bg-2)',
          padding: '16px 24px 24px',
        }}>
          <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--nb-text-3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
            Navigate ({roleConfig.label})
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '16px' }}>
            {navLinks.map(link => (
              <Link key={link.name} href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'block', padding: '10px 14px', borderRadius: '10px',
                  fontSize: '15px', fontWeight: 600,
                  color: 'var(--nb-text-2)', textDecoration: 'none',
                  transition: 'all 0.15s',
                }}>
                {link.name}
              </Link>
            ))}
          </div>

          <div style={{ borderTop: '1px solid var(--nb-border)', paddingTop: '16px' }}>
            <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--nb-text-3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
              Switch Persona
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
              {([
                { r: 'employee', label: 'Employee', color: 'var(--nb-teal)' },
                { r: 'manager', label: 'Manager', color: 'var(--nb-indigo)' },
                { r: 'hr', label: 'HR Admin', color: 'var(--nb-amber)' },
              ] as const).map(item => (
                <button key={item.r}
                  onClick={() => { setRole(item.r); setMobileMenuOpen(false); }}
                  style={{
                    padding: '10px 8px', borderRadius: '10px', textAlign: 'center',
                    fontSize: '12px', fontWeight: 700, cursor: 'pointer',
                    border: `1px solid ${role === item.r ? item.color : 'var(--nb-border)'}`,
                    background: role === item.r ? `color-mix(in srgb, ${item.color} 12%, transparent)` : 'var(--nb-bg-3)',
                    color: role === item.r ? item.color : 'var(--nb-text-2)',
                    transition: 'all 0.15s',
                  }}>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
