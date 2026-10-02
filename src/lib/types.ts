export type UserRole = 'guest' | 'employee' | 'manager' | 'hr';

export interface WorkStyleProfile {
  communication: {
    preference: string;
    details: string;
    visibility: { manager: boolean; hr: boolean; team: boolean };
  };
  meetings: {
    preference: string;
    details: string;
    visibility: { manager: boolean; hr: boolean; team: boolean };
  };
  focus: {
    preference: string;
    details: string;
    visibility: { manager: boolean; hr: boolean; team: boolean };
  };
  environment: {
    preference: string;
    details: string;
    visibility: { manager: boolean; hr: boolean; team: boolean };
  };
  feedback: {
    preference: string;
    details: string;
    visibility: { manager: boolean; hr: boolean; team: boolean };
  };
  taskManagement: {
    preference: string;
    details: string;
    visibility: { manager: boolean; hr: boolean; team: boolean };
  };
}

export interface TaskItem {
  id: string;
  title: string;
  completed: boolean;
  brokenDown?: {
    step: string;
    timeMinutes?: number;
    done: boolean;
  }[];
}

export interface SupportRequest {
  id: string;
  employeeName: string;
  category: string;
  details: string;
  status: 'Under Review' | 'Approved' | 'Need More Information' | 'Declined';
  routedTo: 'Manager' | 'HR';
  date: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  avatar: string;
  sharedPreferences: {
    communication?: string;
    meetings?: string;
    focus?: string;
    environment?: string;
    feedback?: string;
    taskManagement?: string;
  };
  recommendations: {
    category: string;
    title: string;
    description: string;
    whyItMatters: string;
  }[];
}

export interface AcademyModule {
  id: string;
  moduleNumber: number;
  title: string;
  duration: string;
  description: string;
  completed: boolean;
  quiz: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
  badge: {
    title: string;
    icon: string;
  };
}
