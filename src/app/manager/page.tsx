'use client';

import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { TeamMember, AcademyModule } from '../../lib/types';
import { managerScenarios } from '../../lib/mockData';
import {
  Briefcase,
  Users,
  Brain,
  MessageSquare,
  Calendar,
  Sparkles,
  HelpCircle,
  Award,
  CheckCircle2,
  ShieldCheck,
  Search,
  ArrowRight,
  Eye,
  Check,
  Clock,
  BookOpen,
  Info,
  ChevronRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ManagerPage() {
  const { teamMembers, academyModules, completeAcademyModule } = useApp();

  const [activeTab, setActiveTab] = useState<'team' | 'advisor' | 'academy'>('team');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // "What should I do?" Advisor State
  const [customQuestion, setCustomQuestion] = useState('');
  const [activeScenario, setActiveScenario] = useState<(typeof managerScenarios)[0] | null>(managerScenarios[0]);
  const [customAnswer, setCustomAnswer] = useState<{ trigger: string; approaches: string[]; mindsetTip: string } | null>(null);
  const [isThinking, setIsThinking] = useState(false);

  // Academy Quiz State
  const [activeQuizModule, setActiveQuizModule] = useState<AcademyModule | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const completedModulesCount = academyModules.filter(m => m.completed).length;

  const handleCustomQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuestion.trim()) return;

    setIsThinking(true);
    setActiveScenario(null);

    setTimeout(() => {
      setCustomAnswer({
        trigger: customQuestion,
        approaches: [
          'Clarify the concrete outcome: Describe what a successful deliverable looks like with tangible examples.',
          'Provide multimodal instructions: Combine a brief verbal alignment with a 3-bullet written summary in chat.',
          'Set lightweight checkpoints: Agree on a 5-minute milestone review before the final deadline to prevent drift.',
          'Open two-way feedback: Ask "Is there any additional context or tool that would make this easier for you?"'
        ],
        mindsetTip: 'Proactive clarity from leadership eliminates cognitive ambiguity and empowers employees to perform at their peak.'
      });
      setIsThinking(false);
    }, 600);
  };

  const handleStartQuiz = (mod: AcademyModule) => {
    setActiveQuizModule(mod);
    setSelectedOption(null);
    setQuizSubmitted(false);
    setIsCorrect(false);
  };

  const handleQuizSubmit = () => {
    if (selectedOption === null || !activeQuizModule) return;
    const correct = selectedOption === activeQuizModule.quiz.correctIndex;
    setIsCorrect(correct);
    setQuizSubmitted(true);

    if (correct) {
      completeAcademyModule(activeQuizModule.id);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch {}
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-indigo-800 via-indigo-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Manager Leadership Hub</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            👩‍💼 Inclusive Team Management
          </h1>
          <p className="text-indigo-200 text-sm mt-1 max-w-xl">
            Lead with clarity, understand shared employee preferences without diagnostic labels, and master neuroinclusive leadership.
          </p>
        </div>

        {/* Academy Progress Badge */}
        <div className="bg-indigo-950/70 border border-indigo-700/60 p-4 rounded-2xl flex items-center gap-4">
          <div className="p-3 bg-indigo-600 rounded-xl text-white">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-indigo-300 uppercase tracking-wider">
              Academy Progress
            </div>
            <div className="text-lg font-extrabold text-white">
              {completedModulesCount} of {academyModules.length} Modules
            </div>
            <div className="text-xs text-indigo-300 font-medium">
              {completedModulesCount === academyModules.length ? 'Certified Inclusive Leader' : 'Complete quizzes to earn badges'}
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl p-2 border border-slate-200 shadow-xs flex flex-wrap gap-2 sticky top-[105px] z-30 backdrop-blur">
        <button
          onClick={() => setActiveTab('team')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
            activeTab === 'team'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Team Preferences ({teamMembers.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('advisor')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
            activeTab === 'advisor'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>&ldquo;What Should I Do?&rdquo; Advisor</span>
        </button>

        <button
          onClick={() => setActiveTab('academy')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
            activeTab === 'academy'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>Inclusive Manager Academy</span>
        </button>
      </div>

      {/* ─────────────────────────────────────────────────────────────────────────
          TAB 1: TEAM PREFERENCES (Sections 5 & 6 of requirement)
         ───────────────────────────────────────────────────────────────────────── */}
      {activeTab === 'team' && (
        <div className="space-y-6">
          {/* Privacy Guarantee Banner */}
          <div className="bg-teal-50 border border-teal-200 rounded-2xl p-4 flex items-center gap-3 text-xs text-teal-950">
            <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0" />
            <div>
              <strong>Privacy Protection:</strong> You only see working preferences that employees have explicitly opted to share with you. Diagnostic and medical details are never tracked.
            </div>
          </div>

          {/* Team Table */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Your Direct Reports</h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Click on any team member to view actionable recommendations for effective collaboration.
                </p>
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              {teamMembers.map(member => (
                <div
                  key={member.id}
                  className="p-6 hover:bg-slate-50 transition flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-12 h-12 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <h3 className="font-bold text-base text-slate-900">{member.name}</h3>
                      <div className="text-xs text-slate-500">
                        {member.role} • {member.department}
                      </div>

                      {/* Shared Preference Chips */}
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {Object.entries(member.sharedPreferences).map(([key, val]) => (
                          <span
                            key={key}
                            className="inline-flex items-center gap-1 text-[11px] font-semibold bg-indigo-50 text-indigo-800 px-2.5 py-0.5 rounded-md border border-indigo-100"
                          >
                            <span className="capitalize font-bold text-indigo-900">{key}:</span> {val}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedMember(member)}
                    className="inline-flex items-center gap-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 px-4 py-2 rounded-xl text-xs font-bold transition shrink-0 self-start md:self-auto"
                  >
                    <span>View Practical Recommendations</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Member Deep-Dive Modal (Section 6 of requirement) */}
          {selectedMember && (
            <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
              <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6">
                <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={selectedMember.avatar}
                      alt={selectedMember.name}
                      className="w-12 h-12 rounded-full object-cover border"
                    />
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900">
                        How to work effectively with {selectedMember.name}
                      </h3>
                      <div className="text-xs text-slate-500">
                        {selectedMember.role} • Shared Working Preferences
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedMember(null)}
                    className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
                  >
                    ✕
                  </button>
                </div>

                {/* Recommendations List (Section 6) */}
                <div className="space-y-4">
                  {selectedMember.recommendations.map((rec, rIdx) => (
                    <div key={rIdx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded">
                          {rec.category}
                        </span>
                        <h4 className="font-bold text-sm text-slate-900">{rec.title}</h4>
                      </div>
                      <p className="text-xs text-slate-700 font-medium">
                        <strong>Recommended:</strong> {rec.description}
                      </p>
                      <div className="p-2.5 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-950 text-[11px] flex items-start gap-2">
                        <Info className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <strong>Why this matters:</strong> {rec.whyItMatters}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Why This Matters Summary Box */}
                <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-100 text-xs text-indigo-950">
                  <div className="font-bold text-sm text-indigo-900 mb-1">
                    💡 Leadership Insight
                  </div>
                  <p className="text-indigo-800 leading-relaxed">
                    Different employees process information and communicate differently. These recommendations are designed to foster effortless collaboration and maximum creative performance.
                  </p>
                </div>

                <button
                  onClick={() => setSelectedMember(null)}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl text-sm"
                >
                  Close Recommendations
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────────────────
          TAB 2: "WHAT SHOULD I DO?" GUIDED ADVISOR (Section 7 of requirement)
         ───────────────────────────────────────────────────────────────────────── */}
      {activeTab === 'advisor' && (
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl border border-indigo-100">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-extrabold text-slate-900">
                  &ldquo;What Should I Do?&rdquo; Situation Advisor
                </h1>
                <p className="text-xs text-slate-500">
                  Instant, empathetic workplace approaches to common team challenges.
                </p>
              </div>
            </div>

            {/* Pre-built scenario selectors (from Section 7) */}
            <div className="mt-6">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Select a Common Management Scenario:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {managerScenarios.map(scen => (
                  <button
                    key={scen.id}
                    onClick={() => {
                      setActiveScenario(scen);
                      setCustomAnswer(null);
                    }}
                    className={`p-3.5 rounded-xl border text-left text-xs font-semibold transition ${
                      activeScenario?.id === scen.id && !customAnswer
                        ? 'bg-indigo-50 border-indigo-600 text-indigo-950 shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {scen.trigger}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Question Form */}
            <form onSubmit={handleCustomQuestionSubmit} className="mt-6 pt-6 border-t border-slate-100 flex gap-2">
              <input
                type="text"
                value={customQuestion}
                onChange={e => setCustomQuestion(e.target.value)}
                placeholder="Or ask about your specific situation (e.g. 'Employee seems anxious about deadlines')..."
                className="flex-1 px-4 py-3 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-5 py-3 rounded-xl text-xs transition"
              >
                Ask Advisor
              </button>
            </form>
          </div>

          {/* Advice Output Display */}
          {(activeScenario || customAnswer) && (
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800 px-2.5 py-1 rounded-md">
                  Scenario Guidance
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-2">
                  &ldquo;{(customAnswer || activeScenario)?.trigger}&rdquo;
                </h3>
              </div>

              {/* Actionable Approaches */}
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Recommended Workplace Approaches:
                </div>
                {(customAnswer || activeScenario)?.approaches.map((app, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3 text-xs sm:text-sm text-slate-800"
                  >
                    <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="font-medium leading-relaxed">{app}</span>
                  </div>
                ))}
              </div>

              {/* Mindset Callout (Section 7) */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 text-xs flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-amber-900 mb-0.5">Mindset Shift:</div>
                  <p className="text-amber-800">
                    {(customAnswer || activeScenario)?.mindsetTip}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────────────────
          TAB 3: INCLUSIVE MANAGER ACADEMY (Section 8 of requirement)
         ───────────────────────────────────────────────────────────────────────── */}
      {activeTab === 'academy' && (
        <div className="space-y-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-semibold mb-2">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Interactive Micro-Learning</span>
                </div>
                <h1 className="text-2xl font-extrabold text-slate-900">
                  🎓 Inclusive Manager Academy
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Bite-sized (5-10 minute) modules designed to level up your neuroinclusive management skills.
                </p>
              </div>

              <div className="text-xs font-bold text-indigo-700 bg-indigo-50 px-3.5 py-2 rounded-xl border border-indigo-200 shrink-0">
                {completedModulesCount} of {academyModules.length} Badges Earned
              </div>
            </div>
          </div>

          {/* Module Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academyModules.map(mod => (
              <div
                key={mod.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Module {mod.moduleNumber} • {mod.duration}
                    </span>
                    {mod.completed ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        <Check className="w-3 h-3" /> Completed
                      </span>
                    ) : (
                      <span className="text-[11px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                        Not Started
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">{mod.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{mod.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span>{mod.badge.title}</span>
                  </div>

                  <button
                    onClick={() => handleStartQuiz(mod)}
                    className="bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white font-bold px-3.5 py-1.5 rounded-xl text-xs transition"
                  >
                    {mod.completed ? 'Review Quiz' : 'Take Quiz →'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Quiz Modal */}
          {activeQuizModule && (
            <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
              <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6">
                <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                      Module {activeQuizModule.moduleNumber} Quick Quiz
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-1">
                      {activeQuizModule.quiz.question}
                    </h3>
                  </div>
                  <button
                    onClick={() => setActiveQuizModule(null)}
                    className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-2.5">
                  {activeQuizModule.quiz.options.map((opt, oIdx) => {
                    const isSelected = selectedOption === oIdx;
                    return (
                      <button
                        key={oIdx}
                        type="button"
                        onClick={() => {
                          if (!quizSubmitted) setSelectedOption(oIdx);
                        }}
                        className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition flex items-start justify-between gap-3 ${
                          isSelected
                            ? 'bg-indigo-50 border-indigo-600 text-indigo-950 font-semibold'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <span>{opt}</span>
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                            isSelected ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-slate-300'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Result Feedback */}
                {quizSubmitted && (
                  <div
                    className={`p-4 rounded-xl text-xs space-y-1 ${
                      isCorrect
                        ? 'bg-emerald-50 border border-emerald-200 text-emerald-950'
                        : 'bg-rose-50 border border-rose-200 text-rose-950'
                    }`}
                  >
                    <div className="font-bold">
                      {isCorrect ? '🎉 Correct! Badge Unlocked!' : '❌ Not quite. Review the explanation:'}
                    </div>
                    <p>{activeQuizModule.quiz.explanation}</p>
                  </div>
                )}

                <div className="flex gap-2">
                  {!quizSubmitted ? (
                    <button
                      onClick={handleQuizSubmit}
                      disabled={selectedOption === null}
                      className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold py-3 rounded-xl text-sm transition"
                    >
                      Submit Answer
                    </button>
                  ) : (
                    <button
                      onClick={() => setActiveQuizModule(null)}
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl text-sm"
                    >
                      Done
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
