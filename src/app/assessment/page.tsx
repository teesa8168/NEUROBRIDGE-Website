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

const iconMap: Record<string, React.ComponentType<{ style?: React.CSSProperties; className?: string }>> = {
  MessageSquare,
  Calendar,
  Target,
  Headphones,
  Sparkles,
  CheckSquare,
};

export default function AssessmentPage() {
  const router = useRouter();
  const { updateEmployeeProfile, setRole } = useApp();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const [answers, setAnswers] = useState<Record<string, { value: string; detail: string }>>({
    communication: { value: 'Written', detail: 'Prefers comprehensive written requirements with explicit deadlines.' },
    meetings: { value: 'Advance Notice & Agenda', detail: 'Needs agenda and topics sent at least 2 hours prior to prepare thoughts.' },
    focus: { value: 'Deep Focus Blocks', detail: 'Works best when protected from ad-hoc pings and calendar fragmentation.' },
    environment: { value: 'Quiet / Low Sensory', detail: 'Needs minimal acoustic noise and low visual movement in direct sightlines.' },
    feedback: { value: 'Direct & Specific', detail: 'Appreciates explicit pointers on what was good and exact steps to improve.' },
    taskManagement: { value: 'Structured Sub-tasks', detail: 'Benefits from micro-deliverables and defined checkpoints.' },
  });

  const currentQuestion = assessmentQuestions[currentStepIndex];
  const progressPercent = Math.round(((currentStepIndex + 1) / assessmentQuestions.length) * 100);
  const CurrentIcon = iconMap[currentQuestion.icon] || Brain;

  const handleSelectOption = (value: string, detail: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: { value, detail } }));
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
    const newProfile: WorkStyleProfile = {
      communication: { preference: answers.communication.value, details: answers.communication.detail, visibility: { manager: true, hr: false, team: true } },
      meetings: { preference: answers.meetings.value, details: answers.meetings.detail, visibility: { manager: true, hr: false, team: false } },
      focus: { preference: answers.focus.value, details: answers.focus.detail, visibility: { manager: true, hr: false, team: true } },
      environment: { preference: answers.environment.value, details: answers.environment.detail, visibility: { manager: true, hr: false, team: false } },
      feedback: { preference: answers.feedback.value, details: answers.feedback.detail, visibility: { manager: true, hr: false, team: false } },
      taskManagement: { preference: answers.taskManagement.value, details: answers.taskManagement.detail, visibility: { manager: true, hr: true, team: true } },
    };

    updateEmployeeProfile(newProfile);
    setRole('employee');

    try {
      confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 }, colors: ['#2DD4BF', '#818CF8', '#A78BFA'] });
    } catch {}

    router.push('/employee?generated=true');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--nb-bg)', padding: '40px 16px 80px' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>

        {/* Privacy Banner */}
        <div style={{
          display: 'flex', alignItems: 'flex-start', gap: '14px',
          background: 'rgba(45,212,191,0.06)', border: '1px solid rgba(45,212,191,0.2)',
          borderRadius: '16px', padding: '18px', marginBottom: '28px',
        }}>
          <div style={{
            width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
            background: 'rgba(45,212,191,0.12)', border: '1px solid rgba(45,212,191,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--nb-teal)',
          }}>
            <ShieldCheck style={{ width: '20px', height: '20px' }} />
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: '14px', color: 'var(--nb-text-1)', marginBottom: '4px', letterSpacing: '-0.01em' }}>
              Your information belongs to you.
            </div>
            <p style={{ fontSize: '12px', color: 'var(--nb-text-2)', lineHeight: 1.7, margin: 0 }}>
              NeuroBridge does <strong>not</strong> require any medical diagnosis. This assessment focuses purely on your working preferences, cognitive energy rhythm, and environmental needs.
            </p>
          </div>
        </div>

        {/* Progress Card */}
        <div style={{
          background: 'var(--nb-bg-3)', border: '1px solid var(--nb-border-lg)',
          borderRadius: '20px', padding: '28px', marginBottom: '20px',
        }}>
          {/* Step indicator */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', fontSize: '12px', fontWeight: 700 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--nb-teal)' }}>
              <Brain style={{ width: '15px', height: '15px' }} />
              <span>Step {currentStepIndex + 1} of {assessmentQuestions.length}</span>
            </div>
            <span style={{ color: 'var(--nb-text-3)' }}>{progressPercent}% Complete</span>
          </div>

          {/* Progress bar */}
          <div style={{ height: '6px', borderRadius: '999px', background: 'rgba(255,255,255,0.06)', overflow: 'hidden', marginBottom: '28px' }}>
            <div style={{
              height: '100%', borderRadius: '999px',
              background: 'linear-gradient(90deg, var(--nb-teal), var(--nb-indigo))',
              width: `${progressPercent}%`,
              transition: 'width 0.4s cubic-bezier(0.16,1,0.3,1)',
            }} />
          </div>

          {/* Step dots */}
          <div style={{ display: 'flex', gap: '6px', marginBottom: '28px' }}>
            {assessmentQuestions.map((_, i) => (
              <div key={i} style={{
                flex: 1, height: '4px', borderRadius: '999px',
                background: i <= currentStepIndex ? 'var(--nb-teal)' : 'rgba(255,255,255,0.08)',
                transition: 'background 0.3s',
              }} />
            ))}
          </div>

          {/* Question Header */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
            <div style={{
              width: '48px', height: '48px', borderRadius: '14px', flexShrink: 0,
              background: 'rgba(45,212,191,0.1)', border: '1px solid rgba(45,212,191,0.18)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--nb-teal)',
            }}>
              <CurrentIcon style={{ width: '22px', height: '22px' }} />
            </div>
            <div>
              <div style={{ fontSize: '10px', fontWeight: 800, color: 'var(--nb-text-3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
                {currentQuestion.category}
              </div>
              <h1 style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontWeight: 900, color: 'var(--nb-text-1)', letterSpacing: '-0.025em', margin: '0 0 6px' }}>
                {currentQuestion.question}
              </h1>
              <p style={{ fontSize: '13px', color: 'var(--nb-text-2)', margin: 0, lineHeight: 1.6 }}>
                {currentQuestion.description}
              </p>
            </div>
          </div>
        </div>

        {/* Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
          {currentQuestion.options.map(option => {
            const isSelected = answers[currentQuestion.id]?.value === option.value;
            return (
              <button key={option.value} type="button"
                onClick={() => handleSelectOption(option.value, option.detail)}
                style={{
                  width: '100%', textAlign: 'left',
                  padding: '18px 20px',
                  borderRadius: '16px',
                  border: `1.5px solid ${isSelected ? 'rgba(45,212,191,0.5)' : 'var(--nb-border)'}`,
                  background: isSelected
                    ? 'rgba(45,212,191,0.06)'
                    : 'var(--nb-bg-3)',
                  cursor: 'pointer',
                  display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px',
                  transition: 'all 0.15s cubic-bezier(0.16,1,0.3,1)',
                  boxShadow: isSelected ? '0 0 20px rgba(45,212,191,0.1)' : 'none',
                  transform: isSelected ? 'translateY(-1px)' : '',
                }}
                onMouseEnter={e => {
                  if (!isSelected) {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)';
                    (e.currentTarget as HTMLElement).style.background = 'var(--nb-bg-4)';
                  }
                }}
                onMouseLeave={e => {
                  if (!isSelected) {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--nb-border)';
                    (e.currentTarget as HTMLElement).style.background = 'var(--nb-bg-3)';
                  }
                }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: isSelected ? 'var(--nb-teal)' : 'var(--nb-text-1)', marginBottom: '4px', letterSpacing: '-0.01em' }}>
                    {option.label}
                  </div>
                  <p style={{ fontSize: '12px', color: 'var(--nb-text-2)', margin: 0, lineHeight: 1.7 }}>
                    {option.detail}
                  </p>
                </div>
                <div style={{
                  width: '22px', height: '22px', borderRadius: '50%', flexShrink: 0, marginTop: '2px',
                  border: `2px solid ${isSelected ? 'var(--nb-teal)' : 'rgba(255,255,255,0.15)'}`,
                  background: isSelected ? 'var(--nb-teal)' : 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.15s',
                  color: 'white',
                }}>
                  {isSelected && <CheckCircle2 style={{ width: '14px', height: '14px' }} />}
                </div>
              </button>
            );
          })}
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <button type="button" onClick={handlePrev} disabled={currentStepIndex === 0}
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '12px 20px', borderRadius: '12px', border: '1px solid var(--nb-border)',
              background: 'var(--nb-bg-3)', color: 'var(--nb-text-2)',
              fontSize: '13px', fontWeight: 600, cursor: currentStepIndex === 0 ? 'not-allowed' : 'pointer',
              opacity: currentStepIndex === 0 ? 0.4 : 1,
              transition: 'all 0.15s',
            }}>
            <ArrowLeft style={{ width: '15px', height: '15px' }} />
            Previous
          </button>

          <button type="button" onClick={handleNext} className="btn-primary">
            {currentStepIndex === assessmentQuestions.length - 1
              ? <><Sparkles style={{ width: '15px', height: '15px' }} /> Generate My Profile <ArrowRight style={{ width: '15px', height: '15px' }} /></>
              : <><span>Next Question</span> <ArrowRight style={{ width: '15px', height: '15px' }} /></>
            }
          </button>
        </div>

        {/* Privacy footer note */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '28px', fontSize: '11px', color: 'var(--nb-text-3)', fontWeight: 600 }}>
          <Lock style={{ width: '12px', height: '12px' }} />
          Your answers are stored locally. You choose what to share.
        </div>
      </div>
    </div>
  );
}
