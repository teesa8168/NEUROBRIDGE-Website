'use client';

import React, { useState } from 'react';
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
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const { role, setRole, calmMode } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  // Dynamic Navigation based on Section 19 of requirement.txt
  const getNavLinks = () => {
    switch (role) {
      case 'employee':
        return [
          { name: 'Dashboard', href: '/employee' },
          { name: 'Work Assessment', href: '/assessment' },
          { name: 'AI Assistant', href: '/employee#assistant' },
          { name: 'Request Support', href: '/employee#support' },
          { name: 'Resources', href: '/resources' }
        ];
      case 'manager':
        return [
          { name: 'Manager Hub', href: '/manager' },
          { name: 'Team Preferences', href: '/manager#team' },
          { name: '"What Should I Do?"', href: '/manager#advisor' },
          { name: 'Manager Academy', href: '/manager#academy' },
          { name: 'Resources', href: '/resources' }
        ];
      case 'hr':
        return [
          { name: 'HR Overview', href: '/hr' },
          { name: 'Workplace Insights', href: '/hr#insights' },
          { name: 'Inclusive Hiring AI', href: '/hr#recruitment' },
          { name: 'Onboarding Flow', href: '/hr#onboarding' },
          { name: 'Accommodations', href: '/hr#accommodations' }
        ];
      default:
        return [
          { name: 'Home', href: '/' },
          { name: 'Assessment', href: '/assessment' },
          { name: 'Employee Path', href: '/employee' },
          { name: 'Manager Path', href: '/manager' },
          { name: 'HR Path', href: '/hr' },
          { name: 'Resources', href: '/resources' }
        ];
    }
  };

  const navLinks = getNavLinks();

  const roleInfo = {
    employee: { label: 'Employee Mode', icon: UserCheck, color: 'text-teal-600 bg-teal-50 border-teal-200' },
    manager: { label: 'Manager Mode', icon: Briefcase, color: 'text-indigo-600 bg-indigo-50 border-indigo-200' },
    hr: { label: 'HR Admin Mode', icon: Building2, color: 'text-amber-600 bg-amber-50 border-amber-200' },
    guest: { label: 'Guest Visitor', icon: Sparkles, color: 'text-slate-600 bg-slate-50 border-slate-200' }
  }[role];

  return (
    <header className={`sticky top-[37px] z-40 border-b backdrop-blur-md transition-colors ${
      calmMode
        ? 'bg-[#F4F7F6]/90 border-slate-200'
        : 'bg-white/90 border-slate-200/80 shadow-xs'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 via-indigo-600 to-indigo-700 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition transform">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900 flex items-center gap-1">
                Neuro<span className="text-teal-600">Bridge</span>
              </span>
              <span className="text-[10px] block font-medium text-slate-500 -mt-1 tracking-wider uppercase">
                Workplace Inclusion
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map(link => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                    isActive
                      ? 'bg-slate-100 text-teal-700 font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Active Persona Badge Dropdown */}
            <div className="relative">
              <button
                onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${roleInfo.color}`}
              >
                <roleInfo.icon className="w-3.5 h-3.5" />
                <span>{roleInfo.label}</span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </button>

              {roleDropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Switch Perspective
                  </div>
                  <button
                    onClick={() => {
                      setRole('employee');
                      setRoleDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs flex items-center gap-2 hover:bg-teal-50 text-slate-700 hover:text-teal-700"
                  >
                    <UserCheck className="w-4 h-4 text-teal-600" />
                    <div>
                      <div className="font-semibold">Employee</div>
                      <div className="text-[10px] text-slate-400">Work profile, AI assistant, support</div>
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      setRole('manager');
                      setRoleDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs flex items-center gap-2 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700"
                  >
                    <Briefcase className="w-4 h-4 text-indigo-600" />
                    <div>
                      <div className="font-semibold">Manager</div>
                      <div className="text-[10px] text-slate-400">Team preferences, academy, advisor</div>
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      setRole('hr');
                      setRoleDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs flex items-center gap-2 hover:bg-amber-50 text-slate-700 hover:text-amber-700"
                  >
                    <Building2 className="w-4 h-4 text-amber-600" />
                    <div>
                      <div className="font-semibold">HR / Organisation</div>
                      <div className="text-[10px] text-slate-400">Insights, recruitment AI, onboarding</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            <Link
              href="/assessment"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-teal-600 to-indigo-600 hover:from-teal-700 hover:to-indigo-700 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm transition transform hover:scale-[1.02]"
            >
              <span>Take Assessment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2">
            Navigation ({roleInfo.label})
          </div>
          <div className="space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-teal-600"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 mb-2">
              Switch Persona
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => {
                  setRole('employee');
                  setMobileMenuOpen(false);
                }}
                className={`p-2 rounded-lg text-xs font-medium border text-center ${
                  role === 'employee' ? 'bg-teal-50 border-teal-300 text-teal-800' : 'bg-slate-50 border-slate-200'
                }`}
              >
                Employee
              </button>
              <button
                onClick={() => {
                  setRole('manager');
                  setMobileMenuOpen(false);
                }}
                className={`p-2 rounded-lg text-xs font-medium border text-center ${
                  role === 'manager' ? 'bg-indigo-50 border-indigo-300 text-indigo-800' : 'bg-slate-50 border-slate-200'
                }`}
              >
                Manager
              </button>
              <button
                onClick={() => {
                  setRole('hr');
                  setMobileMenuOpen(false);
                }}
                className={`p-2 rounded-lg text-xs font-medium border text-center ${
                  role === 'hr' ? 'bg-amber-50 border-amber-300 text-amber-800' : 'bg-slate-50 border-slate-200'
                }`}
              >
                HR Admin
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
