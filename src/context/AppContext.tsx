'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserRole, WorkStyleProfile, TaskItem, SupportRequest, AcademyModule, TeamMember } from '../lib/types';
import { defaultEmployeeProfile, sampleSupportRequests, managerAcademyModules, sampleTeamMembers } from '../lib/mockData';

interface AppContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
  calmMode: boolean;
  setCalmMode: (enabled: boolean) => void;
  highLegibility: boolean;
  setHighLegibility: (enabled: boolean) => void;
  fontSize: 'normal' | 'large';
  setFontSize: (size: 'normal' | 'large') => void;
  employeeProfile: WorkStyleProfile;
  updateEmployeeProfile: (profile: WorkStyleProfile) => void;
  tasks: TaskItem[];
  toggleTask: (id: string) => void;
  addTask: (title: string) => void;
  breakdownTaskWithAI: (id: string, customSteps?: { step: string; timeMinutes?: number }[]) => void;
  toggleTaskSubStep: (taskId: string, stepIndex: number) => void;
  supportRequests: SupportRequest[];
  addSupportRequest: (category: string, details: string, routedTo: 'Manager' | 'HR') => void;
  updateSupportRequestStatus: (id: string, status: SupportRequest['status']) => void;
  academyModules: AcademyModule[];
  completeAcademyModule: (moduleId: string) => void;
  teamMembers: TeamMember[];
}

const initialTasks: TaskItem[] = [
  { id: 'task-1', title: 'Prepare quarterly product presentation', completed: false },
  { id: 'task-2', title: 'Respond to stakeholder emails and updates', completed: true },
  { id: 'task-3', title: 'Complete competitor market research analysis', completed: false },
  { id: 'task-4', title: 'Attend weekly engineering alignment sync – 3:00 PM', completed: false }
];

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<UserRole>('employee');
  const [calmMode, setCalmMode] = useState<boolean>(false);
  const [highLegibility, setHighLegibility] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');

  const [employeeProfile, setEmployeeProfile] = useState<WorkStyleProfile>(defaultEmployeeProfile);
  const [tasks, setTasks] = useState<TaskItem[]>(initialTasks);
  const [supportRequests, setSupportRequests] = useState<SupportRequest[]>(sampleSupportRequests);
  const [academyModules, setAcademyModules] = useState<AcademyModule[]>(managerAcademyModules);
  const [teamMembers] = useState<TeamMember[]>(sampleTeamMembers);

  // Load from localStorage if available
  useEffect(() => {
    try {
      const savedProfile = localStorage.getItem('neurobridge_profile');
      if (savedProfile) setEmployeeProfile(JSON.parse(savedProfile));

      const savedRole = localStorage.getItem('neurobridge_role');
      if (savedRole) setRole(savedRole as UserRole);

      const savedCalm = localStorage.getItem('neurobridge_calm');
      if (savedCalm) setCalmMode(JSON.parse(savedCalm));

      const savedLegibility = localStorage.getItem('neurobridge_legibility');
      if (savedLegibility) setHighLegibility(JSON.parse(savedLegibility));
    } catch {
      // ignore in SSR
    }
  }, []);

  const updateEmployeeProfile = (profile: WorkStyleProfile) => {
    setEmployeeProfile(profile);
    try {
      localStorage.setItem('neurobridge_profile', JSON.stringify(profile));
    } catch {}
  };

  const handleSetRole = (newRole: UserRole) => {
    setRole(newRole);
    try {
      localStorage.setItem('neurobridge_role', newRole);
    } catch {}
  };

  const handleSetCalmMode = (enabled: boolean) => {
    setCalmMode(enabled);
    try {
      localStorage.setItem('neurobridge_calm', JSON.stringify(enabled));
    } catch {}
  };

  const handleSetHighLegibility = (enabled: boolean) => {
    setHighLegibility(enabled);
    try {
      localStorage.setItem('neurobridge_legibility', JSON.stringify(enabled));
    } catch {}
  };

  const toggleTask = (id: string) => {
    setTasks(prev => prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const addTask = (title: string) => {
    if (!title.trim()) return;
    const newTask: TaskItem = {
      id: `task-${Date.now()}`,
      title,
      completed: false
    };
    setTasks(prev => [newTask, ...prev]);
  };

  const breakdownTaskWithAI = (id: string, customSteps?: { step: string; timeMinutes?: number }[]) => {
    setTasks(prev =>
      prev.map(t => {
        if (t.id !== id) return t;

        const defaultSteps = [
          { step: 'Define objective and target outcome', timeMinutes: 15, done: false },
          { step: 'Gather data and relevant reference documents', timeMinutes: 20, done: false },
          { step: 'Draft core content & structure main points', timeMinutes: 45, done: false },
          { step: 'Self-review against acceptance criteria', timeMinutes: 20, done: false },
          { step: 'Final polish and submit/share with team', timeMinutes: 10, done: false }
        ];

        return {
          ...t,
          brokenDown: customSteps
            ? customSteps.map(s => ({ ...s, done: false }))
            : defaultSteps
        };
      })
    );
  };

  const toggleTaskSubStep = (taskId: string, stepIndex: number) => {
    setTasks(prev =>
      prev.map(t => {
        if (t.id !== taskId || !t.brokenDown) return t;
        const newSteps = [...t.brokenDown];
        newSteps[stepIndex] = { ...newSteps[stepIndex], done: !newSteps[stepIndex].done };
        const allDone = newSteps.every(s => s.done);
        return {
          ...t,
          brokenDown: newSteps,
          completed: allDone
        };
      })
    );
  };

  const addSupportRequest = (category: string, details: string, routedTo: 'Manager' | 'HR') => {
    const newReq: SupportRequest = {
      id: `REQ-${Math.floor(1000 + Math.random() * 9000)}`,
      employeeName: 'Current User',
      category,
      details,
      status: 'Under Review',
      routedTo,
      date: new Date().toISOString().split('T')[0]
    };
    setSupportRequests(prev => [newReq, ...prev]);
  };

  const updateSupportRequestStatus = (id: string, status: SupportRequest['status']) => {
    setSupportRequests(prev =>
      prev.map(req => (req.id === id ? { ...req, status } : req))
    );
  };

  const completeAcademyModule = (moduleId: string) => {
    setAcademyModules(prev =>
      prev.map(m => (m.id === moduleId ? { ...m, completed: true } : m))
    );
  };

  return (
    <AppContext.Provider
      value={{
        role,
        setRole: handleSetRole,
        calmMode,
        setCalmMode: handleSetCalmMode,
        highLegibility,
        setHighLegibility: handleSetHighLegibility,
        fontSize,
        setFontSize,
        employeeProfile,
        updateEmployeeProfile,
        tasks,
        toggleTask,
        addTask,
        breakdownTaskWithAI,
        toggleTaskSubStep,
        supportRequests,
        addSupportRequest,
        updateSupportRequestStatus,
        academyModules,
        completeAcademyModule,
        teamMembers
      }}
    >
      <div
        className={`min-h-screen transition-colors duration-300 ${
          calmMode
            ? 'bg-[#F4F7F6] text-[#2C3E50]'
            : 'bg-slate-50 text-slate-900'
        } ${highLegibility ? 'font-sans tracking-wide leading-relaxed' : ''} ${
          fontSize === 'large' ? 'text-lg' : 'text-base'
        }`}
      >
        {children}
      </div>
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
