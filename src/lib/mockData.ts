import { WorkStyleProfile, TeamMember, AcademyModule, SupportRequest } from './types';

export const assessmentQuestions = [
  {
    id: 'communication',
    category: 'Communication',
    icon: 'MessageSquare',
    question: 'How do you prefer to receive instructions?',
    description: 'Help your team communicate clearly and effectively with you.',
    options: [
      { label: 'Verbal instructions with follow-up notes', value: 'Verbal + Follow-up', detail: 'Prefers verbal briefing followed by a short written bullet-point summary.' },
      { label: 'Written instructions (Email / Slack / Docs)', value: 'Written', detail: 'Prefers comprehensive written requirements with explicit deadlines.' },
      { label: 'Visual diagrams & workflow maps', value: 'Visual', detail: 'Works best when concepts are shown through diagrams, wireframes, or charts.' },
      { label: 'Combination of written and brief 1-on-1 walk-through', value: 'Combination', detail: 'Prefers reviewing written specs followed by a 5-minute alignment check.' }
    ]
  },
  {
    id: 'meetings',
    category: 'Meetings',
    icon: 'Calendar',
    question: 'Which meeting situation works best for you?',
    description: 'Ensure meeting time is productive and respects your cognitive energy.',
    options: [
      { label: 'I prefer advance notice & agendas before meetings', value: 'Advance Notice & Agenda', detail: 'Needs agenda and topics sent at least 2 hours prior to prepare thoughts.' },
      { label: 'I prefer knowing what I need to contribute in advance', value: 'Defined Contribution Role', detail: 'Works best when explicitly told whether attendance is for input or listening.' },
      { label: 'I prefer shorter meetings (<25 mins) with clear conclusions', value: 'Shorter Meetings', detail: 'Prefers concise, focused sessions with written action items.' },
      { label: 'I prefer asynchronous updates instead of live meetings', value: 'Async First', detail: 'Thrives when status checks and updates happen in chat or task boards.' },
      { label: 'No strong preference / adaptable', value: 'Flexible', detail: 'Comfortable with standard meeting formats.' }
    ]
  },
  {
    id: 'focus',
    category: 'Focus & Deep Work',
    icon: 'Target',
    question: 'When and how do you work best?',
    description: 'Identify your optimal focus rhythm for sustained energy.',
    options: [
      { label: 'Long uninterrupted blocks of focused time (2-3+ hours)', value: 'Deep Focus Blocks', detail: 'Works best when protected from ad-hoc pings and calendar fragmentation.' },
      { label: 'Short focused bursts (Pomodoro style) with regular breaks', value: 'Short Bursts + Breaks', detail: 'Maintains highest output in 25-45 minute sprints with mini-rests.' },
      { label: 'Collaborative sprints with frequent quick check-ins', value: 'Frequent Check-ins', detail: 'Benefits from touchpoints at start/end of milestones to stay anchored.' },
      { label: 'Flexible hours matching natural energy peaks', value: 'Flexible Peaks', detail: 'Produces best results with autonomy over daily schedule timing.' }
    ]
  },
  {
    id: 'environment',
    category: 'Sensory Environment',
    icon: 'Headphones',
    question: 'Which environment helps you concentrate best?',
    description: 'Optimize sensory inputs to reduce fatigue and overwhelm.',
    options: [
      { label: 'Quiet low-distraction space or noise-cancelling headphones', value: 'Quiet / Low Sensory', detail: 'Needs minimal acoustic noise and low visual movement in direct sightlines.' },
      { label: 'Consistent ambient background sound (music, cafe noise)', value: 'Ambient Sound', detail: 'Focuses well with white noise or steady rhythmic audio.' },
      { label: 'Remote / Home office with full control over sensory stimuli', value: 'Remote / Home Base', detail: 'Thrives in a customized home setup with controlled lighting and temperature.' },
      { label: 'Hybrid / Flexible desk arrangement', value: 'Hybrid Flexible', detail: 'Enjoys switching between quiet pods and open team spaces.' }
    ]
  },
  {
    id: 'feedback',
    category: 'Feedback & Review',
    icon: 'Sparkles',
    question: 'How do you prefer feedback on your work?',
    description: 'Ensure constructive feedback is clear, actionable, and low-stress.',
    options: [
      { label: 'Direct, specific, and actionable with examples', value: 'Direct & Specific', detail: 'Appreciates explicit pointers on what was good and exact steps to improve.' },
      { label: 'Written feedback with time to process before meeting', value: 'Written + Processing Time', detail: 'Prefers reading critique privately before discussing live.' },
      { label: 'Private 1-on-1 verbal conversation', value: 'Private 1-on-1', detail: 'Values tone of voice and real-time rapport in a safe, private space.' },
      { label: 'Immediate bite-sized feedback right after tasks', value: 'Continuous Micro-Feedback', detail: 'Prefers quick incremental validation over delayed quarterly reviews.' }
    ]
  },
  {
    id: 'taskManagement',
    category: 'Task & Project Management',
    icon: 'CheckSquare',
    question: 'When given a large project, what helps you most?',
    description: 'Eliminate ambiguity so you can execute with confidence.',
    options: [
      { label: 'Breaking the project into small, structured milestones', value: 'Structured Sub-tasks', detail: 'Benefits from micro-deliverables and defined checkpoints.' },
      { label: 'Clear explicit deadlines and prioritized order of execution', value: 'Prioritized Deadlines', detail: 'Needs clear ranking of what is Must-Have vs Nice-to-Have.' },
      { label: 'Reference examples / templates of finished work', value: 'Templates & Examples', detail: 'Understands expectations fastest when looking at past successful samples.' },
      { label: 'Clear written definition of done (acceptance criteria)', value: 'Definition of Done', detail: 'Requires unambiguous criteria of what constitutes completion.' }
    ]
  }
];

export const defaultEmployeeProfile: WorkStyleProfile = {
  communication: {
    preference: 'Written instructions + clear expectations',
    details: 'Prefers receiving project briefs in writing with structured bullet points before kicking off work.',
    visibility: { manager: true, hr: false, team: true }
  },
  meetings: {
    preference: 'Advance agenda & defined contribution',
    details: 'Prefers receiving agendas at least 2 hours in advance so questions can be prepared.',
    visibility: { manager: true, hr: false, team: false }
  },
  focus: {
    preference: 'Uninterrupted deep focus blocks',
    details: 'Performs best with 2-3 hour quiet blocks in the morning without ad-hoc meeting requests.',
    visibility: { manager: true, hr: false, team: true }
  },
  environment: {
    preference: 'Low-distraction / sensory-friendly zone',
    details: 'Benefits from noise-cancelling headphones and low ambient visual distraction.',
    visibility: { manager: true, hr: false, team: false }
  },
  feedback: {
    preference: 'Specific, direct & actionable feedback',
    details: 'Prefers written feedback with clear examples, followed by a brief 1-on-1 chat.',
    visibility: { manager: true, hr: false, team: false }
  },
  taskManagement: {
    preference: 'Breaking large tasks into structured steps',
    details: 'Works best when large deliverables are decomposed into smaller sub-milestones with clear definitions of done.',
    visibility: { manager: true, hr: true, team: true }
  }
};

export const sampleTeamMembers: TeamMember[] = [
  {
    id: 'emp-1',
    name: 'Alex Rivera',
    role: 'Frontend Software Engineer',
    department: 'Engineering',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    sharedPreferences: {
      communication: 'Written instructions & bulleted summaries',
      meetings: 'Advance agenda (2h prior)',
      focus: 'Morning deep work blocks (9am - 12pm)',
      feedback: 'Specific & direct with code examples',
      taskManagement: 'Structured sub-tasks with clear Definition of Done'
    },
    recommendations: [
      {
        category: 'Communication',
        title: 'Provide written follow-up after verbal instructions',
        description: 'Summarize key action items in Slack or Jira after verbal standups.',
        whyItMatters: 'Written summaries eliminate memory fatigue and prevent misaligned assumptions.'
      },
      {
        category: 'Meetings',
        title: 'Share agenda beforehand',
        description: 'Send meeting objective and topics 2 hours in advance.',
        whyItMatters: 'Allows cognitive preparation and ensures everyone can contribute with confidence.'
      },
      {
        category: 'Task Management',
        title: 'Clarify priorities and milestones',
        description: 'Provide clear rankings when assigning multiple concurrent tickets.',
        whyItMatters: 'Prevents context-switching anxiety and improves task velocity.'
      }
    ]
  },
  {
    id: 'emp-2',
    name: 'Jordan Chen',
    role: 'Product Designer',
    department: 'Design & UX',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    sharedPreferences: {
      communication: 'Visual wireframes & Figma walk-throughs',
      meetings: 'Shorter meetings (<25 mins)',
      focus: 'Flexible afternoon focus sprints',
      environment: 'Quiet workspace / Noise cancelling'
    },
    recommendations: [
      {
        category: 'Meetings',
        title: 'Keep design syncs focused and concise',
        description: 'Set 20-minute cap with clear visual deliverables to review.',
        whyItMatters: 'Long unstructured meetings cause cognitive overload and deplete creative energy.'
      },
      {
        category: 'Environment',
        title: 'Respect quiet focus badges',
        description: 'Avoid spontaneous in-person taps on the shoulder during focus hours.',
        whyItMatters: 'Re-gaining lost focus takes up to 23 minutes after an interruption.'
      }
    ]
  },
  {
    id: 'emp-3',
    name: 'Samira Patel',
    role: 'Data Analyst',
    department: 'Business Intelligence',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    sharedPreferences: {
      communication: 'Written documentation + data schemas',
      meetings: 'Async-first status updates',
      feedback: 'Written critique with time to process before 1-on-1'
    },
    recommendations: [
      {
        category: 'Feedback',
        title: 'Send written review before live 1-on-1s',
        description: 'Share performance notes 24 hours prior to discussing.',
        whyItMatters: 'Allows time to process emotional and analytical information constructively.'
      }
    ]
  }
];

export const managerAcademyModules: AcademyModule[] = [
  {
    id: 'mod-1',
    moduleNumber: 1,
    title: 'Understanding Neurodiversity',
    duration: '6 mins',
    description: 'Learn the core principles of neurodiversity in the workplace: moving from "fixing the person" to "optimizing the environment".',
    completed: true,
    quiz: {
      question: 'What is the core philosophy of neurodiversity-affirming leadership?',
      options: [
        'Expecting every employee to conform to identical communication standards',
        'Recognizing neurological differences as natural human variations and designing supportive environments',
        'Requiring official medical diagnoses before adjusting management styles',
        'Avoiding delegating complex projects to neurodivergent employees'
      ],
      correctIndex: 1,
      explanation: 'Neurodiversity views cognitive variations as natural strengths and focuses on removing unnecessary workplace friction.'
    },
    badge: {
      title: 'Neurodiversity Foundations',
      icon: 'Brain'
    }
  },
  {
    id: 'mod-2',
    moduleNumber: 2,
    title: 'Inclusive Communication',
    duration: '8 mins',
    description: 'Techniques for delivering crystal-clear instructions, avoiding ambiguity, and respecting multimodal communication preferences.',
    completed: true,
    quiz: {
      question: 'Which method best supports employees who prefer written instructions?',
      options: [
        'Giving complex verbal instructions during a crowded hallway conversation',
        'Following up important verbal briefs with concise written action items and success criteria',
        'Assuming silence means the instruction was completely clear',
        'Calling unexpected unscheduled phone calls for status checks'
      ],
      correctIndex: 1,
      explanation: 'Written follow-ups provide a persistent reference point that reduces anxiety and prevents miscommunication.'
    },
    badge: {
      title: 'Clarity Champion',
      icon: 'MessageSquare'
    }
  },
  {
    id: 'mod-3',
    moduleNumber: 3,
    title: 'Running Inclusive Meetings',
    duration: '5 mins',
    description: 'How to structure agendas, support asynchronous contribution, and eliminate meeting fatigue.',
    completed: false,
    quiz: {
      question: 'Why should agendas be shared before meetings?',
      options: [
        'To fill calendar requirements only',
        'To allow participants to process topics, formulate thoughtful contributions, and reduce social anxiety',
        'To prevent participants from attending',
        'So no questions can be asked during the meeting'
      ],
      correctIndex: 1,
      explanation: 'Pre-meeting agendas enable deep thinkers and neurodivergent individuals to prepare quality input in advance.'
    },
    badge: {
      title: 'Meeting Architect',
      icon: 'Calendar'
    }
  },
  {
    id: 'mod-4',
    moduleNumber: 4,
    title: 'Giving Effective Feedback',
    duration: '7 mins',
    description: 'Constructive feedback frameworks that minimize rejection sensitivity and focus on actionable growth.',
    completed: false,
    quiz: {
      question: 'What makes feedback most actionable and neuroinclusive?',
      options: [
        'Vague general statements like "be more proactive"',
        'Concrete examples, specific observations, and clear forward-looking suggestions',
        'Delayed feedback given only once a year during annual reviews',
        'Public critiques in team chat rooms'
      ],
      correctIndex: 1,
      explanation: 'Specificity removes guesswork and helps team members apply improvements immediately.'
    },
    badge: {
      title: 'Empathetic Evaluator',
      icon: 'Sparkles'
    }
  },
  {
    id: 'mod-5',
    moduleNumber: 5,
    title: 'Inclusive Performance Management',
    duration: '9 mins',
    description: 'Evaluating outcomes and value delivered rather than conformity to traditional work habits.',
    completed: false,
    quiz: {
      question: 'How should managers evaluate performance in a neuroinclusive workplace?',
      options: [
        'By hours logged sitting at an office desk and camera-on status in meetings',
        'By objective deliverables, problem-solving impact, and defined goals',
        'By how extroverted the employee acts during informal social banter',
        'By rigid adherence to 9-to-5 routines without flexibility'
      ],
      correctIndex: 1,
      explanation: 'Focusing on outcomes and deliverables allows employees with different work styles to thrive authentically.'
    },
    badge: {
      title: 'Performance Leader',
      icon: 'Award'
    }
  },
  {
    id: 'mod-6',
    moduleNumber: 6,
    title: 'Supporting Different Work Styles',
    duration: '6 mins',
    description: 'Handling sensory needs, deep focus protection, and navigating reasonable workplace accommodations.',
    completed: false,
    quiz: {
      question: 'What should a manager do if an employee requests noise-reduction accommodations?',
      options: [
        'Demand a medical certificate immediately before considering any adjustment',
        'Collaboratively discuss practical solutions like quiet zones, noise-cancelling headphones, or flexible hours',
        'Tell the employee to get used to office noise',
        'Exclude the employee from team projects'
      ],
      correctIndex: 1,
      explanation: 'Practical, low-barrier workplace adjustments benefit focus, wellbeing, and overall company productivity.'
    },
    badge: {
      title: 'Workplace Inclusion Master',
      icon: 'ShieldCheck'
    }
  }
];

export const sampleSupportRequests: SupportRequest[] = [
  {
    id: 'REQ-1024',
    employeeName: 'Anonymous Employee #1024',
    category: 'Workplace Environment',
    details: 'Requesting access to quiet focus pod or permission to use noise-cancelling headphones during deep work hours.',
    status: 'Under Review',
    routedTo: 'HR',
    date: '2026-09-28'
  },
  {
    id: 'REQ-1025',
    employeeName: 'Anonymous Employee #1025',
    category: 'Meeting Structure',
    details: 'Requesting all recurring team syncs have agendas posted at least 3 hours in advance with async recap notes.',
    status: 'Approved',
    routedTo: 'Manager',
    date: '2026-09-29'
  },
  {
    id: 'REQ-1026',
    employeeName: 'Anonymous Employee #1026',
    category: 'Flexible Scheduling',
    details: 'Requesting core working hours flexibility (10:30 AM - 3:30 PM) to accommodate sensory commute patterns.',
    status: 'Under Review',
    routedTo: 'HR',
    date: '2026-10-01'
  }
];

export const managerScenarios = [
  {
    id: 'scen-1',
    trigger: 'My employee is quiet and rarely speaks up in group meetings.',
    approaches: [
      'Send agenda and specific discussion questions at least 2 hours before the meeting.',
      'Give time to process: do not put team members on the spot unexpectedly.',
      'Offer alternative contribution channels (e.g. shared doc, Slack thread, post-meeting notes).',
      'Remember: Silence in live meetings often reflects active processing, not disinterest or lack of ability.',
      'Follow up 1-on-1: "I loved your thoughts in the report; would you like me to create space for you to share that next time?"'
    ],
    mindsetTip: 'Avoid assuming silence = lack of engagement or competence.'
  },
  {
    id: 'scen-2',
    trigger: 'An employee seems overwhelmed when handed multi-stage projects.',
    approaches: [
      'Schedule a 10-minute co-planning session to break the project into 3-4 concrete phases.',
      'Provide clear ranking of priorities: what is the single most critical milestone this week?',
      'Share a sample or template of a previous successful project as a concrete reference point.',
      'Establish lightweight async check-ins (e.g., bullet point update on Friday afternoon).'
    ],
    mindsetTip: 'Executive function fatigue is easily resolved by clear structural anchors and defined acceptance criteria.'
  },
  {
    id: 'scen-3',
    trigger: 'An employee struggles with frequent unexpected interruptions.',
    approaches: [
      'Agree on designated "Focus Blocks" where Slack pings can wait for response.',
      'Batch non-urgent questions into a shared 1-on-1 doc instead of sending multiple ad-hoc messages.',
      'Encourage status indicators (e.g., 🎧 "Deep Work until 2pm") across the team.',
      'Support noise-cancelling equipment or quiet space reservation.'
    ],
    mindsetTip: 'Context switching costs up to 20-30 minutes of cognitive recovery per disruption.'
  }
];
