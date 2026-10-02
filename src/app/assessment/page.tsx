'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useApp } from '../../context/AppContext';
import { assessmentQuestions } from '../../lib/mockData';
import { WorkStyleProfile } from '../../lib/types';
import {
  Brain,
  MessageSquare,
  Calendar,
  Target,
  Headphones,
  Sparkles,
  CheckSquare,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Lock
} from 'lucide-react';
import confetti from 'canvas-confetti';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageSquare,
  Calendar,
  Target,
  Headphones,
  Sparkles,
  CheckSquare
};

export default function AssessmentPage() {
  const router = useRouter();
  const { updateEmployeeProfile, setRole } = useApp();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // Store selected values for each question
  const [answers, setAnswers] = useState<Record<string, { value: string; detail: string }>>({
    communication: {
      value: 'Written',
      detail: 'Prefers comprehensive written requirements with explicit deadlines.'
    },
    meetings: {
      value: 'Advance Notice & Agenda',
      detail: 'Needs agenda and topics sent at least 2 hours prior to prepare thoughts.'
    },
    focus: {
      value: 'Deep Focus Blocks',
      detail: 'Works best when protected from ad-hoc pings and calendar fragmentation.'
    },
    environment: {
      value: 'Quiet / Low Sensory',
      detail: 'Needs minimal acoustic noise and low visual movement in direct sightlines.'
    },
    feedback: {
      value: 'Direct & Specific',
      detail: 'Appreciates explicit pointers on what was good and exact steps to improve.'
    },
    taskManagement: {
      value: 'Structured Sub-tasks',
      detail: 'Benefits from micro-deliverables and defined checkpoints.'
    }
  });

  const currentQuestion = assessmentQuestions[currentStepIndex];
  const progressPercent = Math.round(((currentStepIndex + 1) / assessmentQuestions.length) * 100);
  const CurrentIcon = iconMap[currentQuestion.icon] || Brain;

  const handleSelectOption = (value: string, detail: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: { value, detail }
    }));
  };

  const handleNext = () => {
    if (currentStepIndex < assessmentQuestions.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      handleComplete();
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleComplete = () => {
    // Generate new profile
    const newProfile: WorkStyleProfile = {
      communication: {
        preference: answers.communication.value,
        details: answers.communication.detail,
        visibility: { manager: true, hr: false, team: true }
      },
      meetings: {
        preference: answers.meetings.value,
        details: answers.meetings.detail,
        visibility: { manager: true, hr: false, team: false }
      },
      focus: {
        preference: answers.focus.value,
        details: answers.focus.detail,
        visibility: { manager: true, hr: false, team: true }
      },
      environment: {
        preference: answers.environment.value,
        details: answers.environment.detail,
        visibility: { manager: true, hr: false, team: false }
      },
      feedback: {
        preference: answers.feedback.value,
        details: answers.feedback.detail,
        visibility: { manager: true, hr: false, team: false }
      },
      taskManagement: {
        preference: answers.taskManagement.value,
        details: answers.taskManagement.detail,
        visibility: { manager: true, hr: true, team: true }
      }
    };

    updateEmployeeProfile(newProfile);
    setRole('employee');

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {}

    router.push('/employee?generated=true');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      {/* Privacy Message Banner (Section 3 of requirement) */}
      <div className="bg-teal-50/90 border border-teal-200/90 rounded-2xl p-4 mb-8 flex items-start gap-3 shadow-xs">
        <div className="p-2 bg-teal-600 text-white rounded-xl shrink-0 mt-0.5">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div className="text-xs text-teal-950">
          <div className="font-bold text-sm text-teal-900 mb-0.5">
            Your information belongs to you.
          </div>
          <p className="text-teal-800 leading-relaxed">
            NeuroBridge does <strong>not</strong> require you to disclose any medical diagnosis. This assessment focuses purely on your working preferences, cognitive energy rhythm, and environmental needs.
          </p>
        </div>
      </div>

      {/* Progress Header */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-6">
        <div className="flex items-center justify-between mb-3 text-xs font-semibold">
          <span className="text-teal-700 uppercase tracking-wider flex items-center gap-1.5">
            <Brain className="w-4 h-4 text-teal-600" />
            <span>Step {currentStepIndex + 1} of {assessmentQuestions.length}</span>
          </span>
          <span className="text-slate-500">{progressPercent}% Completed</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden mb-6">
          <div
            className="bg-gradient-to-r from-teal-500 to-indigo-600 h-full rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Question Header */}
        <div className="flex items-start gap-4">
          <div className="p-3 bg-teal-50 text-teal-700 rounded-2xl border border-teal-100 shrink-0">
            <CurrentIcon className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {currentQuestion.category}
            </span>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
              {currentQuestion.question}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {currentQuestion.description}
            </p>
          </div>
        </div>
      </div>

      {/* Options Selection */}
      <div className="space-y-3.5 mb-8">
        {currentQuestion.options.map(option => {
          const isSelected = answers[currentQuestion.id]?.value === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => handleSelectOption(option.value, option.detail)}
              className={`w-full text-left p-5 rounded-2xl border-2 transition-all flex items-start justify-between gap-4 ${
                isSelected
                  ? 'border-teal-600 bg-teal-50/70 shadow-sm'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/60'
              }`}
            >
              <div className="space-y-1">
                <div className="font-bold text-sm sm:text-base text-slate-900 flex items-center gap-2">
                  <span>{option.label}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {option.detail}
                </p>
              </div>

              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition ${
                  isSelected
                    ? 'border-teal-600 bg-teal-600 text-white'
                    : 'border-slate-300 bg-white'
                }`}
              >
                {isSelected && <CheckCircle2 className="w-4 h-4" />}
              </div>
            </button>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={handlePrev}
          disabled={currentStepIndex === 0}
          className={`px-5 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 transition ${
            currentStepIndex === 0
              ? 'opacity-40 cursor-not-allowed text-slate-400 bg-slate-100'
              : 'text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 shadow-xs'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="px-7 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-teal-600 to-indigo-600 hover:from-teal-700 hover:to-indigo-700 text-white shadow-md transition flex items-center gap-2 transform hover:scale-[1.02]"
        >
          <span>
            {currentStepIndex === assessmentQuestions.length - 1
              ? 'Generate My Work Profile →'
              : 'Next Question'}
          </span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
