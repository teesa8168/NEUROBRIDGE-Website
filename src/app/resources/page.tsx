'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Brain,
  MessageSquare,
  Building2,
  Briefcase,
  Target,
  UserCheck,
  Search,
  BookOpen,
  ArrowRight,
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Neurodiversity 101',
    'Communication',
    'Sensory Workplace',
    'Manager Strategies',
    'Inclusive Hiring',
    'Employee Self-Advocacy'
  ];

  const articles = [
    {
      id: 'res-1',
      category: 'Neurodiversity 101',
      title: 'What is Neurodiversity in the Modern Workplace?',
      icon: Brain,
      summary: 'Understand cognitive diversity as a natural spectrum of human neurological variations rather than deficits.',
      takeaways: [
        'Neurodiversity encompasses ADHD, Autism, Dyslexia, Dyspraxia, and other cognitive styles.',
        'Focus on designing frictionless environments rather than expecting individuals to mask or conform.',
        'Strengths include hyperfocus, pattern recognition, spatial reasoning, and innovative problem-solving.'
      ]
    },
    {
      id: 'res-2',
      category: 'Communication',
      title: 'Multimodal Communication: Beyond Verbal Expectations',
      icon: MessageSquare,
      summary: 'How to combine asynchronous documentation with verbal alignment for crystal-clear collaboration.',
      takeaways: [
        'Always follow up critical verbal instructions with a concise written summary in chat or email.',
        'Provide meeting agendas and key questions 2-4 hours prior to meetings.',
        'Normalize async updates via Slack/Teams to reduce continuous context switching.'
      ]
    },
    {
      id: 'res-3',
      category: 'Sensory Workplace',
      title: 'Creating Sensory-Friendly Workspaces & Focus Zones',
      icon: Building2,
      summary: 'Optimizing acoustics, lighting, and workspace density to prevent sensory fatigue.',
      takeaways: [
        'Provide quiet library-style zones for deep work where conversations are discouraged.',
        'Normalize the use of noise-cancelling headphones and focus status indicators.',
        'Offer flexible lighting adjustments and reduce visual clutter in direct sightlines.'
      ]
    },
    {
      id: 'res-4',
      category: 'Manager Strategies',
      title: 'Practical Management: From Vague Goals to Clear Milestones',
      icon: Briefcase,
      summary: 'Concrete managerial habits that eliminate cognitive overload and drive superior project delivery.',
      takeaways: [
        'Establish unambiguous "Definitions of Done" and share past project examples/templates.',
        'Set lightweight milestone check-ins rather than waiting for quarterly deadlines.',
        'Focus evaluation on deliverables and impact rather than hours logged at an office desk.'
      ]
    },
    {
      id: 'res-5',
      category: 'Inclusive Hiring',
      title: 'Removing Barriers in Job Descriptions & Interviews',
      icon: Target,
      summary: 'How to write objective job criteria and conduct structured, skills-based interviews.',
      takeaways: [
        'Eliminate vague corporate jargon like "rockstar multitasker" or "thrive in high-pressure chaos".',
        'Share interview questions and formats in advance to assess authentic competency.',
        'Use objective rubric scoring rather than subjective "culture fit" impressions.'
      ]
    },
    {
      id: 'res-6',
      category: 'Employee Self-Advocacy',
      title: 'Communicating Your Work Preferences with Confidence',
      icon: UserCheck,
      summary: 'A step-by-step guide to framing your work-style requirements as workplace productivity enablers.',
      takeaways: [
        'Frame requests around outcomes: "I produce higher quality code when I have 2-hour uninterrupted blocks."',
        'Use NeuroBridge profiles to share clear communication preferences with your manager.',
        'Remember: you are not required to disclose medical diagnoses to ask for working adjustments.'
      ]
    }
  ];

  const filteredArticles = articles.filter(art => {
    const matchesCat = activeCategory === 'All' || art.category === activeCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold mb-4">
          <BookOpen className="w-3.5 h-3.5 text-teal-600" />
          <span>Knowledge &amp; Best Practices</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          NeuroBridge Resource Centre
        </h1>
        <p className="mt-3 text-slate-600 text-sm sm:text-base">
          Practical guides, frameworks, and actionable toolkits for employees, managers, and HR leaders.
        </p>

        {/* Search Bar */}
        <div className="mt-6 max-w-lg mx-auto relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search guides (e.g. 'sensory', 'meetings', 'feedback')..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-xs"
          />
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
              activeCategory === cat
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map(art => {
          const Icon = art.icon;
          return (
            <div
              key={art.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-100">
                    {art.category}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-50 text-slate-700 border border-slate-100">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {art.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {art.summary}
                </p>

                {/* Key Takeaways */}
                <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-6">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Key Principles:
                  </div>
                  {art.takeaways.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="text-teal-600 font-bold shrink-0">•</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/assessment"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-50 hover:bg-teal-50 text-slate-700 hover:text-teal-700 border border-slate-200 py-2.5 rounded-xl text-xs font-bold transition"
              >
                <span>Apply in Your Profile</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
