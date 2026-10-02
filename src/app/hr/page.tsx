'use client';

import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { SupportRequest } from '../../lib/types';
import {
  Building2,
  Users,
  BarChart3,
  Search,
  CheckSquare,
  ShieldCheck,
  AlertTriangle,
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowRight,
  TrendingUp,
  FileText,
  UserPlus,
  Layers,
  ChevronRight,
  Filter
} from 'lucide-react';

export default function HRPage() {
  const { supportRequests, updateSupportRequestStatus } = useApp();

  const [activeTab, setActiveTab] = useState<'overview' | 'insights' | 'recruitment' | 'onboarding' | 'accommodations'>('overview');

  // Job Description Scanner State
  const [jobDescriptionInput, setJobDescriptionInput] = useState(
    "We are looking for a rockstar Software Engineer with excellent communication skills and the ability to thrive in a fast-paced, high-pressure environment. Must be a natural multitasker who loves spontaneous meetings and open-plan collaboration."
  );
  const [isScanning, setIsScanning] = useState(false);
  const [scanResults, setScanResults] = useState<{
    originalText: string;
    flaggedItems: {
      phrase: string;
      reason: string;
      suggestedRewrite: string;
    }[];
    inclusionScore: number;
  } | null>({
    originalText: "We are looking for a rockstar Software Engineer with excellent communication skills...",
    inclusionScore: 58,
    flaggedItems: [
      {
        phrase: "thrive in a fast-paced, high-pressure environment",
        reason: "Vague, high-stress phrase that discourages deep-focus workers and neurodivergent candidates without conveying actual job duties.",
        suggestedRewrite: "Ability to manage prioritized engineering tasks with realistic project timelines."
      },
      {
        phrase: "excellent communication skills",
        reason: "Generic requirement. Often masks expectations of extroverted verbal banter rather than technical clarity.",
        suggestedRewrite: "Ability to communicate technical updates clearly via written documents, tickets, or pull requests."
      },
      {
        phrase: "natural multitasker who loves spontaneous meetings",
        reason: "Promotes constant context switching, which increases cognitive exhaustion and decreases code quality.",
        suggestedRewrite: "Comfortable organizing task backlog with planned, agenda-driven alignment syncs."
      }
    ]
  });

  // Onboarding Checklist Progress State
  const [onboardingTasks, setOnboardingTasks] = useState([
    { id: 'ob-1', phase: 'Before Day 1', title: 'Send clear joining & parking/entry instructions', done: true },
    { id: 'ob-2', phase: 'Before Day 1', title: 'Provide Day 1 hourly schedule & agenda in advance', done: true },
    { id: 'ob-3', phase: 'Before Day 1', title: 'Explain workplace dress code & quiet pod locations', done: true },
    { id: 'ob-4', phase: 'Before Day 1', title: 'Share onboarding buddy contact information', done: false },
    { id: 'ob-5', phase: 'Week 1', title: 'Conduct Work-Style Profile & communication sync', done: true },
    { id: 'ob-6', phase: 'Week 1', title: 'Define explicit 30-day goals and acceptance criteria', done: false },
    { id: 'ob-7', phase: 'Week 1', title: 'Set up noise-cancelling equipment or quiet desk', done: true },
    { id: 'ob-8', phase: 'First 30 Days', title: 'Check-in on cognitive load & meeting density', done: false },
    { id: 'ob-9', phase: 'First 30 Days', title: 'Review accommodation satisfaction & adjustments', done: false }
  ]);

  const handleScanJob = (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobDescriptionInput.trim()) return;

    setIsScanning(true);
    setTimeout(() => {
      setScanResults({
        originalText: jobDescriptionInput,
        inclusionScore: 78,
        flaggedItems: [
          {
            phrase: "fast-paced environment",
            reason: "Vague requirement that triggers anxiety around constant emergency fire-fighting.",
            suggestedRewrite: "Dynamic product team with defined iterative sprints and structured milestones."
          },
          {
            phrase: "strong verbal presentation skills",
            reason: "May unnecessarily filter out exceptional individual contributors who excel in written documentation.",
            suggestedRewrite: "Ability to articulate project findings through written summaries, slides, or structured walk-throughs."
          }
        ]
      });
      setIsScanning(false);
    }, 700);
  };

  const toggleOnboardingTask = (id: string) => {
    setOnboardingTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-700 via-amber-800 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-200 text-xs font-semibold mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Human Resources &amp; People Ops</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            🏢 Organizational Neuroinclusion
          </h1>
          <p className="text-amber-100 text-sm mt-1 max-w-xl">
            Analyze aggregated workplace barrier trends, scan job descriptions for inclusive hiring, and track reasonable workplace adjustments.
          </p>
        </div>

        {/* Company Inclusion Scorecard (Section 14 of requirement) */}
        <div className="bg-amber-950/80 border border-amber-600/50 p-4 rounded-2xl flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center font-extrabold text-2xl shadow-sm">
            72
          </div>
          <div>
            <div className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">
              Org Neuroinclusion Score
            </div>
            <div className="text-sm font-bold text-white">
              72 / 100 (Progressing)
            </div>
            <div className="text-xs text-amber-200">
              Top barrier: Meeting overload (42%)
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl p-2 border border-slate-200 shadow-xs flex flex-wrap gap-2 sticky top-[105px] z-30 backdrop-blur">
        {[
          { id: 'overview', label: 'Organization Overview', icon: Building2 },
          { id: 'insights', label: 'Aggregated Barrier Insights', icon: BarChart3 },
          { id: 'recruitment', label: 'Inclusive Hiring Scanner AI', icon: Search },
          { id: 'onboarding', label: 'Structured Onboarding', icon: UserPlus },
          { id: 'accommodations', label: `Support Tickets (${supportRequests.length})`, icon: Layers }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
                isActive
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ─────────────────────────────────────────────────────────────────────────
          TAB 1: ORGANIZATION OVERVIEW (Section 9 & 14 of requirement)
         ───────────────────────────────────────────────────────────────────────── */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Key Metrics Cards (Section 9) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                Employees On Platform
              </div>
              <div className="text-3xl font-extrabold text-slate-900">1,248</div>
              <div className="text-xs text-emerald-600 font-semibold mt-2 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>+14% this quarter</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                Active Work Profiles
              </div>
              <div className="text-3xl font-extrabold text-slate-900">876</div>
              <div className="text-xs text-slate-500 font-medium mt-2">
                70.2% workforce adoption
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                Support Requests
              </div>
              <div className="text-3xl font-extrabold text-slate-900">64</div>
              <div className="text-xs text-teal-600 font-semibold mt-2">
                92% resolved / accommodated
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                Manager Participation
              </div>
              <div className="text-3xl font-extrabold text-slate-900">72%</div>
              <div className="text-xs text-indigo-600 font-semibold mt-2">
                Academy modules completed
              </div>
            </div>
          </div>

          {/* Inclusion Areas Scorecard (Section 14) */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Neuroinclusion Dimension Breakdown</h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Measurable indicators across recruitment, training, and workplace accessibility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-rose-900">🔴 Recruitment Accessibility</span>
                  <span className="text-xs font-extrabold text-rose-700">Needs Focus (52%)</span>
                </div>
                <p className="text-xs text-rose-800 leading-relaxed">
                  Job descriptions contain vague criteria. Use the Inclusive Job Scanner to rewrite postings.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-amber-900">🟡 Manager Training</span>
                  <span className="text-xs font-extrabold text-amber-700">Improving (72%)</span>
                </div>
                <p className="text-xs text-amber-800 leading-relaxed">
                  72% of people managers have completed Module 1 &amp; 2 in the Inclusive Manager Academy.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-emerald-900">🟢 Employee Support</span>
                  <span className="text-xs font-extrabold text-emerald-700">Strong (88%)</span>
                </div>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  High satisfaction with workplace adjustments and confidential profile controls.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────────────────
          TAB 2: AGGREGATED WORKPLACE INSIGHTS (Section 10 of requirement)
         ───────────────────────────────────────────────────────────────────────── */}
      {activeTab === 'insights' && (
        <div className="space-y-8">
          {/* Privacy Note (Section 10) */}
          <div className="bg-teal-50 border border-teal-200 rounded-2xl p-4 flex items-center gap-3 text-xs text-teal-950">
            <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0" />
            <div>
              <strong>Privacy Protocol:</strong> All insights shown here are aggregated across 876+ employees and completely anonymised. No individual employee response can be isolated.
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Common Workplace Friction Barriers</h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Aggregated percentage of employees citing barriers in weekly pulse reflections.
              </p>
            </div>

            {/* Bar Charts (from Section 10 of requirement) */}
            <div className="space-y-5">
              {[
                { name: 'Meeting Overload & Lack of Agendas', percent: 42, color: 'bg-rose-500', note: '42% of employees report fatigue from unscheduled or agenda-less meetings.' },
                { name: 'Unclear / Vague Task Instructions', percent: 35, color: 'bg-amber-500', note: '35% struggle with ambiguous success criteria and missing examples.' },
                { name: 'Open-Office Noise & Sensory Distractions', percent: 24, color: 'bg-indigo-500', note: '24% request access to quiet focus zones or noise-cancelling equipment.' },
                { name: 'Rigid 9-to-5 Schedules & Commute Stress', percent: 20, color: 'bg-teal-500', note: '20% benefit from core hours flexibility for peak cognitive focus.' },
                { name: 'Delayed / Non-Specific Feedback Style', percent: 15, color: 'bg-blue-500', note: '15% prefer written, actionable follow-ups over quarterly reviews.' }
              ].map(item => (
                <div key={item.name} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                    <span>{item.name}</span>
                    <span className="text-sm font-extrabold">{item.percent}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                    <div
                      className={`${item.color} h-full rounded-full transition-all duration-500`}
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                  <div className="text-[11px] text-slate-500">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────────────────
          TAB 3: INCLUSIVE RECRUITMENT SCANNER (Section 11 of requirement)
         ───────────────────────────────────────────────────────────────────────── */}
      {activeTab === 'recruitment' && (
        <div className="space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-amber-50 text-amber-700 rounded-xl border border-amber-100">
                <Search className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-extrabold text-slate-900">
                  🔎 Neuroinclusive Recruitment AI
                </h1>
                <p className="text-xs text-slate-500">
                  Paste your job description to detect exclusionary jargon and receive objective, skills-based rewrites.
                </p>
              </div>
            </div>

            <form onSubmit={handleScanJob} className="space-y-4 mt-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Job Description Content:
                </label>
                <textarea
                  rows={4}
                  value={jobDescriptionInput}
                  onChange={e => setJobDescriptionInput(e.target.value)}
                  className="w-full p-4 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <button
                type="submit"
                disabled={isScanning}
                className="bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition flex items-center gap-2 shadow-xs"
              >
                <Sparkles className="w-4 h-4" />
                <span>{isScanning ? 'Scanning with AI...' : 'Scan for Inclusive Language →'}</span>
              </button>
            </form>
          </div>

          {/* Scan Results (Section 11 of requirement) */}
          {scanResults && (
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">AI Linguistic Analysis Results</h3>
                  <p className="text-xs text-slate-500">
                    {scanResults.flaggedItems.length} potentially exclusionary phrases detected
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400 uppercase">Inclusivity Score:</span>
                  <span className="px-3 py-1 bg-amber-50 text-amber-800 font-extrabold text-sm rounded-lg border border-amber-200">
                    {scanResults.inclusionScore} / 100
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {scanResults.flaggedItems.map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-start gap-2 text-rose-700 font-bold text-xs sm:text-sm">
                      <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>Flagged Phrase: &ldquo;{item.phrase}&rdquo;</span>
                    </div>
                    <p className="text-xs text-slate-600 pl-6">
                      <strong>Why it&apos;s problematic:</strong> {item.reason}
                    </p>
                    <div className="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-teal-950 text-xs ml-6">
                      <strong className="text-teal-900 block mb-1">✓ Recommended Neuroinclusive Rewrite:</strong>
                      <span>&ldquo;{item.suggestedRewrite}&rdquo;</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Interview Checklist (Section 11 of requirement) */}
              <div className="p-6 rounded-2xl bg-indigo-50/70 border border-indigo-200 mt-6">
                <h4 className="font-bold text-sm text-indigo-950 mb-3 flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-indigo-600" />
                  <span>Neuroinclusive Interview Best-Practice Checklist</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-indigo-900 font-medium">
                  <div className="flex items-center gap-2">☑ Clear interview instructions sent 48h prior</div>
                  <div className="flex items-center gap-2">☑ Interview format &amp; panel attendees explained</div>
                  <div className="flex items-center gap-2">☑ Questions shared where appropriate</div>
                  <div className="flex items-center gap-2">☑ Work-sample / skills-based assessment</div>
                  <div className="flex items-center gap-2">☑ Reasonable sensory flexibility offered</div>
                  <div className="flex items-center gap-2">☑ Objective, rubric-based scoring criteria</div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────────────────
          TAB 4: STRUCTURED ONBOARDING (Section 12 of requirement)
         ───────────────────────────────────────────────────────────────────────── */}
      {activeTab === 'onboarding' && (
        <div className="space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl border border-indigo-100">
                <UserPlus className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-extrabold text-slate-900">
                  🚀 Neuroinclusive Onboarding Framework
                </h1>
                <p className="text-xs text-slate-500">
                  Predictable schedules and explicit role expectations remove first-day anxiety.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Before Day 1', 'Week 1', 'First 30 Days'].map(phase => {
              const phaseTasks = onboardingTasks.filter(t => t.phase === phase);
              return (
                <div key={phase} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <h3 className="font-bold text-sm text-slate-900">{phase}</h3>
                    <span className="text-xs font-bold text-slate-400">
                      {phaseTasks.filter(t => t.done).length} / {phaseTasks.length}
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {phaseTasks.map(task => (
                      <div
                        key={task.id}
                        onClick={() => toggleOnboardingTask(task.id)}
                        className={`p-3 rounded-xl border text-xs cursor-pointer transition flex items-start gap-2.5 ${
                          task.done
                            ? 'bg-slate-50 border-slate-200 text-slate-400 line-through'
                            : 'bg-white border-slate-200 text-slate-800 hover:border-slate-300'
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 mt-0.5 ${
                            task.done ? 'bg-teal-600 border-teal-600 text-white' : 'border-slate-300 bg-white'
                          }`}
                        >
                          {task.done && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                        <span className="font-medium leading-relaxed">{task.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────────────────
          TAB 5: ACCOMMODATIONS & SUPPORT TICKETS (Section 13 of requirement)
         ───────────────────────────────────────────────────────────────────────── */}
      {activeTab === 'accommodations' && (
        <div className="space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-teal-50 text-teal-700 rounded-xl border border-teal-100">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-extrabold text-slate-900">
                  🧩 Workplace Accommodation &amp; Support Centre
                </h1>
                <p className="text-xs text-slate-500">
                  Manage confidential employee adjustment requests with structured workflow actions.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h2 className="font-bold text-base text-slate-900">Active Support Requests</h2>
              <span className="text-xs text-slate-500">{supportRequests.length} total logged</span>
            </div>

            <div className="divide-y divide-slate-100">
              {supportRequests.map(req => (
                <div key={req.id} className="p-6 space-y-4 hover:bg-slate-50/50 transition">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-extrabold text-slate-900">{req.id}</span>
                      <span className="text-xs font-semibold bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full">
                        {req.category}
                      </span>
                      <span className="text-xs text-slate-400">Routed to: {req.routedTo}</span>
                    </div>

                    {/* Status Badge */}
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full border self-start sm:self-auto ${
                        req.status === 'Approved'
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                          : req.status === 'Under Review'
                          ? 'bg-amber-50 text-amber-800 border-amber-200'
                          : req.status === 'Declined'
                          ? 'bg-rose-50 text-rose-800 border-rose-200'
                          : 'bg-blue-50 text-blue-800 border-blue-200'
                      }`}
                    >
                      {req.status}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                    {req.details}
                  </p>

                  {/* Actions (Section 13) */}
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <span className="text-xs font-bold text-slate-400 mr-2">Action:</span>
                    <button
                      onClick={() => updateSupportRequestStatus(req.id, 'Approved')}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 transition"
                    >
                      ○ Approve
                    </button>
                    <button
                      onClick={() => updateSupportRequestStatus(req.id, 'Need More Information')}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 transition"
                    >
                      ○ Need More Info
                    </button>
                    <button
                      onClick={() => updateSupportRequestStatus(req.id, 'Declined')}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200 transition"
                    >
                      ○ Decline
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
