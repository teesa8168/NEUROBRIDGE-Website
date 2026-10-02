'use client';

import React from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, Eye, Type, UserCheck, Briefcase, Building2, SlidersHorizontal } from 'lucide-react';
import { UserRole } from '../lib/types';

export default function AccessibilityToolbar() {
  const { calmMode, setCalmMode, highLegibility, setHighLegibility, fontSize, setFontSize, role, setRole } = useApp();

  return (
    <aside aria-label="Accessibility and persona toolbar" className="bg-slate-900/95 text-slate-100 text-xs py-2 px-4 border-b border-slate-800 backdrop-blur sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Sensory & Accessibility Toggles */}
        <div className="flex items-center flex-wrap gap-4">
          <span className="flex items-center gap-1.5 text-slate-400 font-medium">
            <SlidersHorizontal className="w-3.5 h-3.5 text-teal-400" />
            <span>Sensory & Accessibility:</span>
          </span>

          <button
            onClick={() => setCalmMode(!calmMode)}
            className={`px-2.5 py-1 rounded-full transition flex items-center gap-1.5 border ${
              calmMode
                ? 'bg-teal-500/20 text-teal-300 border-teal-500/50'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
            }`}
            title="Softer contrast and muted pastel background to reduce visual fatigue"
          >
            <Sparkles className="w-3 h-3 text-teal-400" />
            <span>Calm / Low-Sensory: {calmMode ? 'ON' : 'OFF'}</span>
          </button>

          <button
            onClick={() => setHighLegibility(!highLegibility)}
            className={`px-2.5 py-1 rounded-full transition flex items-center gap-1.5 border ${
              highLegibility
                ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/50'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
            }`}
            title="Increased letter spacing and line height for dyslexia-friendly reading"
          >
            <Eye className="w-3 h-3 text-indigo-400" />
            <span>High Legibility: {highLegibility ? 'ON' : 'OFF'}</span>
          </button>

          <button
            onClick={() => setFontSize(fontSize === 'normal' ? 'large' : 'normal')}
            className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 transition flex items-center gap-1.5"
            title="Toggle larger typography"
          >
            <Type className="w-3 h-3 text-amber-400" />
            <span>Font Size: {fontSize === 'large' ? 'Large (115%)' : 'Normal'}</span>
          </button>
        </div>

        {/* Quick Role Switcher for Demo / Professor Presentation */}
        <div className="flex items-center gap-2">
          <span className="text-slate-400 font-medium hidden sm:inline">Active Persona:</span>
          <div className="flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700">
            {(
              [
                { id: 'employee', label: 'Employee', icon: UserCheck, color: 'text-teal-400' },
                { id: 'manager', label: 'Manager', icon: Briefcase, color: 'text-indigo-400' },
                { id: 'hr', label: 'HR Admin', icon: Building2, color: 'text-amber-400' }
              ] as { id: UserRole; label: string; icon: React.ComponentType<{ className?: string }>; color: string }[]
            ).map(item => {
              const Icon = item.icon;
              const isActive = role === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setRole(item.id)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition ${
                    isActive
                      ? 'bg-slate-700 text-white shadow-sm font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  <Icon className={`w-3 h-3 ${item.color}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
}
