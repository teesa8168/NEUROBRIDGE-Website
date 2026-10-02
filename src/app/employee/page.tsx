'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useApp } from '../../context/AppContext';
import {
  Brain,
  MessageSquare,
  Calendar,
  Target,
  Headphones,
  Sparkles,
  CheckSquare,
  Lock,
  Eye,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Plus,
  Send,
  HelpCircle,
  ChevronRight,
  Smile,
  Frown,
  Star,
  Layers,
  ArrowRight,
  Clock,
  Check
} from 'lucide-react';

function EmployeeContent() {
  const searchParams = useSearchParams();
  const isJustGenerated = searchParams ? searchParams.get('generated') === 'true' : false;

  const {
    employeeProfile,
    updateEmployeeProfile,
    tasks,
    toggleTask,
    addTask,
    breakdownTaskWithAI,
    toggleTaskSubStep,
    addSupportRequest,
    calmMode
  } = useApp();

  // Active tab state in employee hub
  const [activeTab, setActiveTab] = useState<'profile' | 'dashboard' | 'assistant' | 'support' | 'tracker'>('dashboard');

  // New task input state
  const [newTaskInput, setNewTaskInput] = useState('');

  // AI Assistant Chat State
  const [chatMessages, setChatMessages] = useState<
    { sender: 'user' | 'assistant'; text: string; actionSteps?: { step: string; time: string }[]; emailDraft?: string }[]
  >([
    {
      sender: 'assistant',
      text: "👋 Hi there! I'm your NeuroBridge Workplace Assistant. I can help break down overwhelming tasks, draft polite clarification emails for your manager, or plan your deep focus schedule."
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isAiThinking, setIsAiThinking] = useState(false);

  // Workplace Support Modal / Form State
  const [supportCategory, setSupportCategory] = useState('Communication');
  const [supportDetails, setSupportDetails] = useState('');
  const [supportRouting, setSupportRouting] = useState<'Manager' | 'HR' | 'Guidance'>('Manager');
  const [supportSubmitted, setSupportSubmitted] = useState(false);

  // Weekly Feedback State
  const [weeklyRating, setWeeklyRating] = useState<number>(4);
  const [challenges, setChallenges] = useState<string[]>(['Meeting overload']);
  const [feedbackNotes, setFeedbackNotes] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  useEffect(() => {
    if (isJustGenerated) {
      setActiveTab('profile');
    }
  }, [isJustGenerated]);

  // Handle task submission
  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskInput.trim()) return;
    addTask(newTaskInput.trim());
    setNewTaskInput('');
  };

  // AI Assistant interaction logic
  const handleSendMessage = (customPrompt?: string) => {
    const promptToSend = customPrompt || chatInput;
    if (!promptToSend.trim()) return;

    const newMessages = [...chatMessages, { sender: 'user' as const, text: promptToSend }];
    setChatMessages(newMessages);
    if (!customPrompt) setChatInput('');
    setIsAiThinking(true);

    setTimeout(() => {
      let reply: { text: string; actionSteps?: { step: string; time: string }[]; emailDraft?: string };
      const lower = promptToSend.toLowerCase();

      if (lower.includes('presentation') || lower.includes('slides') || lower.includes('where to start')) {
        reply = {
          text: "Let's break down your presentation into 5 bite-sized, low-friction steps so you don't feel overwhelmed:",
          actionSteps: [
            { step: '1. Define the 1 core message and target audience', time: '15 min' },
            { step: '2. Jot down 3 to 5 supporting bullet points on paper', time: '20 min' },
            { step: '3. Build rough slide headers without worrying about design', time: '30 min' },
            { step: '4. Add key diagrams / bullet points & run spellcheck', time: '25 min' },
            { step: '5. Dry-run practice with a 10-minute timer & finish', time: '15 min' }
          ]
        };
      } else if (lower.includes('vague') || lower.includes('dont understand') || lower.includes("don't understand") || lower.includes('instructions')) {
        reply = {
          text: "It is completely normal to need explicit criteria! Here is a checklist to clarify the task, plus a polite email draft ready to copy and send to your manager:",
          emailDraft: `Hi [Manager Name],\n\nThanks for sharing the overview on the [Project/Task Name]. Just to ensure we're completely aligned on expectations before I begin:\n\n1. What does the final successful deliverable look like (e.g. summary deck, doc, or sheet)?\n2. Are there specific priority milestones or a target completion deadline?\n3. Is there a previous example or template you'd like me to follow?\n\nLooking forward to getting this started!\nBest,\n[Your Name]`
        };
      } else if (lower.includes('meeting') || lower.includes('agenda')) {
        reply = {
          text: "Here is a quick script to politely request an agenda in advance without feeling self-conscious:",
          emailDraft: `Hi [Meeting Organizer],\n\nI'm looking forward to our upcoming sync on [Topic]. To help me prepare the most relevant data and thoughtful contributions in advance, could you share a quick agenda or the main discussion points?\n\nThanks so much,\n[Your Name]`
        };
      } else {
        reply = {
          text: `I've analyzed your goal: "${promptToSend}". Here is a structured 4-step action plan to maintain focus and avoid context-switching:`,
          actionSteps: [
            { step: 'Phase 1: Clarify Acceptance Criteria & Define Done', time: '15 min' },
            { step: 'Phase 2: Collect all source assets & links in one folder', time: '20 min' },
            { step: 'Phase 3: Deep Focus sprint — Execute draft version', time: '45 min' },
            { step: 'Phase 4: Review against initial criteria & deliver', time: '15 min' }
          ]
        };
      }

      setChatMessages(prev => [...prev, { sender: 'assistant', ...reply }]);
      setIsAiThinking(false);
    }, 700);
  };

  const handleTogglePrivacy = (
    section: keyof typeof employeeProfile,
    target: 'manager' | 'hr' | 'team'
  ) => {
    const updated = {
      ...employeeProfile,
      [section]: {
        ...employeeProfile[section],
        visibility: {
          ...employeeProfile[section].visibility,
          [target]: !employeeProfile[section].visibility[target]
        }
      }
    };
    updateEmployeeProfile(updated);
  };

  const handleSupportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!supportDetails.trim()) return;
    addSupportRequest(supportCategory, supportDetails, supportRouting === 'Guidance' ? 'HR' : supportRouting);
    setSupportSubmitted(true);
    setTimeout(() => {
      setSupportDetails('');
      setSupportSubmitted(false);
    }, 3000);
  };

  const handleWeeklyFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackSubmitted(true);
    setTimeout(() => {
      setFeedbackSubmitted(false);
    }, 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Employee Navigation Tabs */}
      <div className="bg-white rounded-2xl p-2 border border-slate-200 shadow-xs flex flex-wrap gap-1.5 sticky top-[105px] z-30 backdrop-blur">
        {[
          { id: 'dashboard', label: 'Personal Dashboard', icon: Target },
          { id: 'profile', label: '"How I Work Best" Profile & Privacy', icon: Brain },
          { id: 'assistant', label: 'AI Workplace Assistant', icon: Zap },
          { id: 'support', label: 'Request Workplace Support', icon: Layers },
          { id: 'tracker', label: 'Weekly Experience Tracker', icon: Star }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
                isActive
                  ? 'bg-teal-600 text-white shadow-sm'
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
          TAB 1: PERSONAL DASHBOARD (Section 4, Step 3 of requirement)
         ───────────────────────────────────────────────────────────────────────── */}
      {activeTab === 'dashboard' && (
        <div className="space-y-8">
          {/* Welcome Banner */}
          <div className="bg-gradient-to-r from-teal-700 via-teal-800 to-indigo-900 rounded-3xl p-6 sm:p-8 text-white shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-200 text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Employee Hub</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                👋 Welcome back, Alex!
              </h1>
              <p className="text-teal-100 text-sm mt-1 max-w-xl">
                Here is your personalized workspace cockpit. Monitor your cognitive energy, break down complex tasks, and communicate needs with ease.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setActiveTab('assistant')}
                className="bg-white text-teal-900 font-bold px-4 py-2.5 rounded-xl text-xs hover:bg-teal-50 transition shadow-sm flex items-center gap-2"
              >
                <Zap className="w-4 h-4 text-teal-600" />
                <span>Ask AI Assistant</span>
              </button>
              <Link
                href="/assessment"
                className="bg-teal-950/50 hover:bg-teal-950 text-teal-100 font-medium px-4 py-2.5 rounded-xl text-xs border border-teal-400/30 transition"
              >
                Retake Assessment
              </Link>
            </div>
          </div>

          {/* Today's Workspace Energy Meters (From Step 3 of requirement) */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Today&apos;s Cognitive &amp; Workspace Pulse
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-lg">
                  🟢
                </div>
                <div>
                  <div className="text-xs text-emerald-800 font-medium">Focus Bandwidth</div>
                  <div className="text-base font-extrabold text-emerald-950">Good (Optimal)</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-100 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-lg">
                  🟡
                </div>
                <div>
                  <div className="text-xs text-amber-800 font-medium">Task Load</div>
                  <div className="text-base font-extrabold text-amber-950">Moderate (3 active)</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-rose-50 border border-rose-100 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center font-bold text-lg">
                  🔴
                </div>
                <div>
                  <div className="text-xs text-rose-800 font-medium">Meeting Density</div>
                  <div className="text-base font-extrabold text-rose-950">High (3 scheduled)</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-100 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-lg">
                  🟡
                </div>
                <div>
                  <div className="text-xs text-amber-800 font-medium">Energy Reserve</div>
                  <div className="text-base font-extrabold text-amber-950">Moderate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Today's Tasks + AI Breakdown (From Step 3 & 4 of requirement) */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <CheckSquare className="w-5 h-5 text-teal-600" />
                  <span>Today&apos;s Focus Tasks</span>
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Overwhelmed by a large project? Click <span className="font-semibold text-teal-700">&ldquo;Break down with AI&rdquo;</span> to transform it into small steps.
                </p>
              </div>

              {/* Add Task Form */}
              <form onSubmit={handleAddTask} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Add a new task..."
                  value={newTaskInput}
                  onChange={e => setNewTaskInput(e.target.value)}
                  className="px-3.5 py-2 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 w-48 sm:w-64"
                />
                <button
                  type="submit"
                  className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add</span>
                </button>
              </form>
            </div>

            {/* Task Items List */}
            <div className="space-y-4">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className={`p-4 rounded-2xl border transition ${
                    task.completed
                      ? 'bg-slate-50/80 border-slate-200'
                      : 'bg-white border-slate-200/90 shadow-xs hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => toggleTask(task.id)}
                        className={`w-5 h-5 rounded-md border flex items-center justify-center transition ${
                          task.completed
                            ? 'bg-teal-600 border-teal-600 text-white'
                            : 'border-slate-300 hover:border-teal-500 bg-white'
                        }`}
                      >
                        {task.completed && <Check className="w-3.5 h-3.5" />}
                      </button>
                      <span
                        className={`text-sm font-semibold ${
                          task.completed
                            ? 'line-through text-slate-400'
                            : 'text-slate-900'
                        }`}
                      >
                        {task.title}
                      </span>
                    </div>

                    {/* AI Breakdown Button */}
                    {!task.brokenDown && !task.completed && (
                      <button
                        onClick={() => breakdownTaskWithAI(task.id)}
                        className="inline-flex items-center gap-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200/80 px-3 py-1.5 rounded-lg text-xs font-semibold transition"
                      >
                        <Zap className="w-3.5 h-3.5 text-indigo-600" />
                        <span>Break this task down</span>
                      </button>
                    )}
                  </div>

                  {/* Render Broken Down Sub-Steps if activated */}
                  {task.brokenDown && (
                    <div className="mt-4 pt-4 border-t border-indigo-100 bg-indigo-50/40 -mx-4 -mb-4 p-4 rounded-b-2xl space-y-2.5">
                      <div className="flex items-center justify-between text-xs font-bold text-indigo-900 mb-1">
                        <span className="flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                          <span>AI Structured Sub-Milestones</span>
                        </span>
                        <span className="text-[11px] font-medium text-indigo-600">
                          {task.brokenDown.filter(s => s.done).length} of {task.brokenDown.length} finished
                        </span>
                      </div>

                      {task.brokenDown.map((subStep, idx) => (
                        <div
                          key={idx}
                          onClick={() => toggleTaskSubStep(task.id, idx)}
                          className={`flex items-center justify-between p-2.5 rounded-xl border text-xs cursor-pointer transition ${
                            subStep.done
                              ? 'bg-white/60 border-slate-200 text-slate-400 line-through'
                              : 'bg-white border-indigo-200 text-slate-800 hover:border-indigo-400 shadow-xs'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <div
                              className={`w-4 h-4 rounded border flex items-center justify-center ${
                                subStep.done
                                  ? 'bg-teal-600 border-teal-600 text-white'
                                  : 'border-slate-300 bg-white'
                              }`}
                            >
                              {subStep.done && <Check className="w-3 h-3" />}
                            </div>
                            <span className="font-medium">{subStep.step}</span>
                          </div>
                          {subStep.timeMinutes && (
                            <span className="text-[10px] font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{subStep.timeMinutes}m</span>
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────────────────
          TAB 2: "HOW I WORK BEST" PROFILE & PRIVACY (Section 4, Step 2)
         ───────────────────────────────────────────────────────────────────────── */}
      {activeTab === 'profile' && (
        <div className="space-y-8">
          {/* Header & Privacy Notice */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold mb-2">
                  <Brain className="w-3.5 h-3.5 text-teal-600" />
                  <span>Central Work-Style Profile</span>
                </div>
                <h1 className="text-2xl font-extrabold text-slate-900">
                  🧠 My &ldquo;How I Work Best&rdquo; Profile
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  This profile communicates your working conditions and collaboration preferences to eliminate assumptions.
                </p>
              </div>

              <Link
                href="/assessment"
                className="bg-teal-50 hover:bg-teal-100 text-teal-800 font-bold px-4 py-2 rounded-xl text-xs border border-teal-200 transition shrink-0 self-start sm:self-auto"
              >
                Re-assess Preferences
              </Link>
            </div>

            {/* Privacy Callout */}
            <div className="p-4 rounded-xl bg-slate-900 text-slate-200 text-xs space-y-1.5 mt-4">
              <div className="flex items-center gap-2 font-bold text-white text-sm">
                <Lock className="w-4 h-4 text-teal-400" />
                <span>🔒 Granular Privacy Settings</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                You have total control over who sees each preference. Toggle visibility for your manager, HR, or team members individually below.
              </p>
            </div>
          </div>

          {/* Profile Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                key: 'communication',
                title: 'Communication Preferences',
                icon: MessageSquare,
                color: 'teal',
                data: employeeProfile.communication
              },
              {
                key: 'meetings',
                title: 'Meeting Preferences',
                icon: Calendar,
                color: 'indigo',
                data: employeeProfile.meetings
              },
              {
                key: 'focus',
                title: 'Focus & Deep Work',
                icon: Target,
                color: 'blue',
                data: employeeProfile.focus
              },
              {
                key: 'environment',
                title: 'Sensory Environment',
                icon: Headphones,
                color: 'purple',
                data: employeeProfile.environment
              },
              {
                key: 'feedback',
                title: 'Feedback Style',
                icon: Sparkles,
                color: 'amber',
                data: employeeProfile.feedback
              },
              {
                key: 'taskManagement',
                title: 'Task Management',
                icon: CheckSquare,
                color: 'emerald',
                data: employeeProfile.taskManagement
              }
            ].map(sec => {
              const Icon = sec.icon;
              return (
                <div
                  key={sec.key}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 rounded-xl bg-teal-50 text-teal-700 border border-teal-100">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900">{sec.title}</h3>
                    </div>

                    <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 mb-4">
                      <div className="text-xs font-extrabold text-teal-700 uppercase tracking-wider mb-1">
                        I work best with:
                      </div>
                      <div className="text-sm font-bold text-slate-900">
                        {sec.data.preference}
                      </div>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {sec.data.details}
                      </p>
                    </div>
                  </div>

                  {/* Privacy Toggles */}
                  <div className="pt-3 border-t border-slate-100">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Who can see this section?</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200">
                        ☑ Me (Locked)
                      </span>

                      <button
                        onClick={() => handleTogglePrivacy(sec.key as any, 'manager')}
                        className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition ${
                          sec.data.visibility.manager
                            ? 'bg-teal-50 text-teal-800 border-teal-300'
                            : 'bg-white text-slate-400 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {sec.data.visibility.manager ? '☑ My Manager' : '☐ My Manager'}
                      </button>

                      <button
                        onClick={() => handleTogglePrivacy(sec.key as any, 'hr')}
                        className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition ${
                          sec.data.visibility.hr
                            ? 'bg-amber-50 text-amber-800 border-amber-300'
                            : 'bg-white text-slate-400 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {sec.data.visibility.hr ? '☑ HR' : '☐ HR'}
                      </button>

                      <button
                        onClick={() => handleTogglePrivacy(sec.key as any, 'team')}
                        className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition ${
                          sec.data.visibility.team
                            ? 'bg-indigo-50 text-indigo-800 border-indigo-300'
                            : 'bg-white text-slate-400 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {sec.data.visibility.team ? '☑ Team' : '☐ Team'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────────────────
          TAB 3: AI WORKPLACE ASSISTANT (Section 4, Step 4 of requirement)
         ───────────────────────────────────────────────────────────────────────── */}
      {activeTab === 'assistant' && (
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-gradient-to-tr from-teal-600 to-indigo-600 text-white rounded-xl shadow-xs">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-extrabold text-slate-900">
                  🤖 NeuroBridge Assistant
                </h1>
                <p className="text-xs text-slate-500">
                  Task Deconstruction • Email &amp; Message Drafting • Executive Function Support
                </p>
              </div>
            </div>

            {/* Quick Prompt Starters */}
            <div className="mt-4 pt-4 border-t border-slate-100">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Try asking one of these:
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  '“I have a presentation tomorrow and don&apos;t know where to start.”',
                  '“My manager gave me a task but I don&apos;t understand what they want.”',
                  '“How do I politely request an agenda before our 3 PM meeting?”',
                  '“I feel overwhelmed by 5 concurrent deadlines. Help me prioritize.”'
                ].map((promptText, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendMessage(promptText.replace(/&apos;/g, "'").replace(/“|”/g, ''))}
                    className="text-xs font-medium px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-teal-50 hover:text-teal-800 border border-slate-200 transition text-left"
                  >
                    {promptText}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Stream Window */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col h-[520px]">
            <div className="flex-1 p-6 overflow-y-auto space-y-4">
              {chatMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-3 ${
                    msg.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {msg.sender === 'assistant' && (
                    <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center shrink-0 text-xs font-bold mt-1">
                      <Zap className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-xl rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-teal-600 text-white font-medium rounded-tr-none'
                        : 'bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200'
                    }`}
                  >
                    <div>{msg.text}</div>

                    {/* Action Steps Breakdown */}
                    {msg.actionSteps && (
                      <div className="mt-3 space-y-2 pt-3 border-t border-slate-200">
                        {msg.actionSteps.map((step, sIdx) => (
                          <div
                            key={sIdx}
                            className="bg-white p-2.5 rounded-xl border border-slate-200/80 flex items-center justify-between gap-3 text-slate-900"
                          >
                            <span className="font-semibold text-xs">{step.step}</span>
                            <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md shrink-0">
                              ⏱ {step.time}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Email Draft Box */}
                    {msg.emailDraft && (
                      <div className="mt-3 bg-white p-3.5 rounded-xl border border-teal-200 text-slate-900">
                        <div className="text-[11px] font-bold text-teal-700 uppercase tracking-wider mb-1 flex items-center justify-between">
                          <span>Suggested Message Draft</span>
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(msg.emailDraft || '');
                              alert('Draft copied to clipboard!');
                            }}
                            className="text-[10px] bg-teal-50 px-2 py-0.5 rounded hover:bg-teal-100 text-teal-800 border border-teal-200"
                          >
                            Copy text
                          </button>
                        </div>
                        <pre className="text-xs whitespace-pre-wrap font-sans text-slate-700 leading-relaxed">
                          {msg.emailDraft}
                        </pre>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isAiThinking && (
                <div className="flex items-center gap-2 text-xs text-slate-400 italic">
                  <div className="w-2 h-2 rounded-full bg-teal-500 animate-ping" />
                  <span>NeuroBridge Assistant is structuring your response...</span>
                </div>
              )}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={e => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-4 border-t border-slate-200 bg-slate-50 rounded-b-2xl flex gap-2"
            >
              <input
                type="text"
                placeholder="Type a task, question, or scenario you need help breaking down..."
                value={chatInput}
                onChange={e => setChatInput(e.target.value)}
                className="flex-1 px-4 py-3 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-xs"
              />
              <button
                type="submit"
                disabled={!chatInput.trim()}
                className="bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white font-bold px-5 py-3 rounded-xl transition flex items-center gap-1.5 text-xs shadow-sm"
              >
                <span>Send</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────────────────
          TAB 4: WORKPLACE SUPPORT REQUEST (Section 4, Step 5 & 6)
         ───────────────────────────────────────────────────────────────────────── */}
      {activeTab === 'support' && (
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-rose-50 text-rose-600 rounded-xl border border-rose-100">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-extrabold text-slate-900">
                  🧩 Request Workplace Support
                </h1>
                <p className="text-xs text-slate-500">
                  Confidential, structured workplace adjustments tailored to your needs.
                </p>
              </div>
            </div>

            <form onSubmit={handleSupportSubmit} className="space-y-6 mt-6">
              {/* Category Picker */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  What type of support would help you?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    'Communication',
                    'Sensory Workspace',
                    'Scheduling / Hours',
                    'Meeting Structure',
                    'Task Management',
                    'Feedback Method'
                  ].map(cat => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSupportCategory(cat)}
                      className={`p-3 rounded-xl border text-xs font-semibold text-left transition ${
                        supportCategory === cat
                          ? 'bg-teal-50 border-teal-600 text-teal-900 shadow-xs'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Details Input */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Describe what adjustment or tool would help:
                </label>
                <textarea
                  rows={4}
                  required
                  value={supportDetails}
                  onChange={e => setSupportDetails(e.target.value)}
                  placeholder="e.g. Permission to work in quiet pod on Tuesdays/Thursdays, or receiving meeting questions 2 hours in advance..."
                  className="w-full p-3.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {/* Routing Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  How would you like to handle this request?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    {
                      id: 'Manager',
                      title: 'Option A — Share with Manager',
                      desc: 'Routes directly to your manager dashboard.'
                    },
                    {
                      id: 'HR',
                      title: 'Option B — Share with HR',
                      desc: 'Routes confidentially to HR accommodation team.'
                    },
                    {
                      id: 'Guidance',
                      title: 'Option C — Ask NeuroBridge First',
                      desc: 'Pre-screens with AI for best wording.'
                    }
                  ].map(opt => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSupportRouting(opt.id as any)}
                      className={`p-3.5 rounded-xl border text-left transition ${
                        supportRouting === opt.id
                          ? 'bg-indigo-50 border-indigo-600 text-indigo-950'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <div className="font-bold text-xs text-slate-900 mb-1">{opt.title}</div>
                      <p className="text-[11px] text-slate-500 leading-snug">{opt.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {supportSubmitted && (
                <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-teal-900 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                  <span>Your support request has been logged and routed to {supportRouting}. You retain full control over this submission.</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-600 to-indigo-600 hover:from-teal-700 hover:to-indigo-700 text-white font-bold py-3.5 rounded-xl text-sm shadow-sm transition"
              >
                Submit Support Request →
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────────────────
          TAB 5: WEEKLY EXPERIENCE TRACKER (Section 16 of requirement)
         ───────────────────────────────────────────────────────────────────────── */}
      {activeTab === 'tracker' && (
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <div className="text-center max-w-md mx-auto mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-2">
                <Star className="w-5 h-5 fill-amber-500" />
              </div>
              <h1 className="text-xl font-extrabold text-slate-900">
                Weekly Experience Check-in
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                Your anonymous feedback informs aggregated organizational barrier trends for HR.
              </p>
            </div>

            <form onSubmit={handleWeeklyFeedbackSubmit} className="space-y-6">
              {/* 5-Star Rating */}
              <div className="text-center">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                  How was your work experience this week?
                </label>
                <div className="flex justify-center gap-2">
                  {[1, 2, 3, 4, 5].map(star => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setWeeklyRating(star)}
                      className="p-2 transition transform hover:scale-110"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          star <= weeklyRating
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-slate-200'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* What was challenging? */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  What was challenging this week?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Communication',
                    'Meeting overload',
                    'Unclear instructions',
                    'Sensory/Noise',
                    'Rigid schedules',
                    'Feedback style'
                  ].map(barrier => {
                    const isChecked = challenges.includes(barrier);
                    return (
                      <button
                        key={barrier}
                        type="button"
                        onClick={() => {
                          setChallenges(prev =>
                            isChecked ? prev.filter(c => c !== barrier) : [...prev, barrier]
                          );
                        }}
                        className={`p-3 rounded-xl border text-xs font-medium text-left transition flex items-center justify-between ${
                          isChecked
                            ? 'bg-rose-50 border-rose-300 text-rose-900 font-semibold'
                            : 'bg-slate-50 border-slate-200 text-slate-600'
                        }`}
                      >
                        <span>{barrier}</span>
                        {isChecked && <Check className="w-3.5 h-3.5 text-rose-600" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* What helped? Text Box */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  What helped you work well this week?
                </label>
                <textarea
                  rows={3}
                  value={feedbackNotes}
                  onChange={e => setFeedbackNotes(e.target.value)}
                  placeholder="e.g. Quiet focus morning on Wednesday helped me deliver the engineering spec ahead of time..."
                  className="w-full p-3 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {feedbackSubmitted && (
                <div className="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-teal-900 text-xs font-semibold text-center">
                  ✓ Thank you! Your anonymous weekly feedback has been recorded.
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 rounded-xl text-sm transition"
              >
                Submit Weekly Reflection
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default function EmployeePage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-16 text-center text-slate-400">
          Loading Employee Hub...
        </div>
      }
    >
      <EmployeeContent />
    </Suspense>
  );
}
