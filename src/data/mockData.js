// NUURAI Mock Local Data Store

export const initialUserData = {
  name: "Anusha",
  streakDays: 6,
  totalCheckIns: 24,
  lastCheckInDate: "2026-07-26",
  todayCompleted: false,
};

export const moodOptions = [
  { id: "peaceful", label: "Peaceful", val: 5, icon: "Sun", color: "#527360", bg: "#EFF4F0", border: "#CBD9D0", description: "Calm, grounded, and centered" },
  { id: "content", label: "Content", val: 4, icon: "Smile", color: "#6A8373", bg: "#F1F6F2", border: "#D4E1D8", description: "At ease, satisfied with the day" },
  { id: "neutral", label: "Neutral", val: 3, icon: "Meh", color: "#7A7C78", bg: "#F5F3ED", border: "#E2DFC", description: "Steady, neither up nor down" },
  { id: "uneasy", label: "Uneasy", val: 2, icon: "Cloud", color: "#B37A5C", bg: "#FAF0EB", border: "#EBD4C7", description: "Restless or mildly stressed" },
  { id: "exhausted", label: "Exhausted", val: 1, icon: "CloudRain", color: "#A86969", bg: "#F9ECEC", border: "#E9CFCF", description: "Drained of energy and focus" },
];

export const mockCheckIns = [
  {
    id: "chk-14",
    date: "2026-07-26",
    displayDate: "Today",
    dayLabel: "Sun",
    moodId: "content",
    moodLabel: "Content",
    energyScore: 7,
    stressScore: 3,
    sleepHours: 7.5,
    sleepQuality: "Good",
    note: "Unwind afternoon with reading and light walk. Feeling ready for the week ahead.",
    themes: ["Outdoor walk", "Restful sleep", "Reading"]
  },
  {
    id: "chk-13",
    date: "2026-07-25",
    displayDate: "Yesterday",
    dayLabel: "Sat",
    moodId: "peaceful",
    moodLabel: "Peaceful",
    energyScore: 8,
    stressScore: 2,
    sleepHours: 8.0,
    sleepQuality: "Restful",
    note: "Spent quality quiet time without digital screens. Energy felt restored.",
    themes: ["Screen break", "Restful sleep", "Family"]
  },
  {
    id: "chk-12",
    date: "2026-07-24",
    displayDate: "Friday",
    dayLabel: "Fri",
    moodId: "uneasy",
    moodLabel: "Uneasy",
    energyScore: 5,
    stressScore: 7,
    sleepHours: 6.0,
    sleepQuality: "Restless",
    note: "Busy deadline before the weekend. Felt rushed throughout the afternoon.",
    themes: ["Work deadline", "Restless sleep", "Rushed"]
  },
  {
    id: "chk-11",
    date: "2026-07-23",
    displayDate: "Thursday",
    dayLabel: "Thu",
    moodId: "neutral",
    moodLabel: "Neutral",
    energyScore: 6,
    stressScore: 6,
    sleepHours: 6.5,
    sleepQuality: "Fair",
    note: "Normal workday. Managed tasks steadily, though felt a slight afternoon dip.",
    themes: ["Deep work", "Coffee", "Routine"]
  },
  {
    id: "chk-10",
    date: "2026-07-22",
    displayDate: "Wednesday",
    dayLabel: "Wed",
    moodId: "exhausted",
    moodLabel: "Exhausted",
    energyScore: 4,
    stressScore: 8,
    sleepHours: 5.5,
    sleepQuality: "Poor",
    note: "Multiple back-to-back meetings. Late night work session caught up with me.",
    themes: ["Meetings", "Late work", "Low sleep"]
  },
  {
    id: "chk-09",
    date: "2026-07-21",
    displayDate: "Tuesday",
    dayLabel: "Tue",
    moodId: "content",
    moodLabel: "Content",
    energyScore: 7,
    stressScore: 4,
    sleepHours: 7.2,
    sleepQuality: "Good",
    note: "Productive morning flow. Took a 20 min evening walk that helped clear my head.",
    themes: ["Outdoor walk", "Productive", "Balanced"]
  },
  {
    id: "chk-08",
    date: "2026-07-20",
    displayDate: "Monday",
    dayLabel: "Mon",
    moodId: "content",
    moodLabel: "Content",
    energyScore: 7,
    stressScore: 4,
    sleepHours: 7.5,
    sleepQuality: "Good",
    note: "Started week with clear priorities. Kept caffeine moderate.",
    themes: ["Planning", "Restful sleep", "Focus"]
  }
];

export const mockInsights = [
  {
    id: "ins-1",
    type: "Energy & Stress",
    headline: "Energy dips on high-stress days",
    description: "Your energy levels averaged 4.5/10 on days with stress scores above 7. Short 10-minute breaks appear to soften this effect.",
    impact: "High relevance",
    dateRange: "Past 7 days"
  },
  {
    id: "ins-2",
    type: "Sleep Correlation",
    headline: "Restful sleep unlocks higher morning focus",
    description: "Logging 7.5+ hours of sleep strongly correlates with 'Peaceful' or 'Content' mood entries the following day.",
    impact: "Positive trend",
    dateRange: "Past 14 days"
  },
  {
    id: "ins-3",
    type: "Recurring Habit",
    headline: "Evening walks help regulate workday stress",
    description: "On days where 'Outdoor walk' was tagged in your reflection, your reported evening stress was 35% lower.",
    impact: "Key pattern",
    dateRange: "Past 30 days"
  }
];

export const mockCompanionResponses = {
  starterPrompts: [
    "Help me reflect on today",
    "I've been feeling overwhelmed lately",
    "Show me my recent patterns",
    "How can I improve my sleep routine?"
  ],
  presetReplies: {
    "Help me reflect on today": {
      message: "Looking at your recent check-in, you logged a **Content** mood with solid energy (7/10).\n\nWhat brought you a moment of calm or satisfaction today? Is there anything you'd like to carry forward into tomorrow?",
      followups: ["What helped me most was taking breaks", "I still feel a bit distracted", "I want to rest early tonight"]
    },
    "I've been feeling overwhelmed lately": {
      message: "Thank you for sharing that. Looking at your past week, Wednesday was a high-stress peak (8/10 stress) following back-to-back commitments.\n\nWhen overwhelm begins to build up, what is one small thing you can pause or delegate today to give yourself space?",
      followups: ["I can step away for a 10 min walk", "I have too many deadlines", "Help me ground myself right now"]
    },
    "Show me my recent patterns": {
      message: "Here is what your regular check-ins reveal over the last 7 days:\n\n• **Mood Trend:** Mostly Content & Peaceful, with a brief dip around mid-week.\n• **Energy & Stress:** Energy remains steady (6-8/10) when sleep exceeds 7 hours.\n• **Top Anchor:** Outdoor walks consistently line up with lower stress scores.\n\nHow do these observations resonate with how you've felt?",
      followups: ["That feels accurate", "I didn't realize sleep mattered that much", "How can I reduce mid-week stress?"]
    },
    "How can I improve my sleep routine?": {
      message: "Your logs show that on nights with under 6 hours of sleep, your stress rating averaged 7.5 the next day.\n\nConsider keeping a consistent 20-minute screen-free wind-down. Notice if gentle reading or warm lighting helps signal to your body that it is time to rest.",
      followups: ["I'll try setting a screen timer", "What else helps with evening calm?"]
    }
  },
  defaultReply: {
    message: "Thank you for reflecting with NUURAI. Noticing your thoughts and acknowledging how you feel is a valuable step.\n\nWhat feeling or intention would you like to focus on right now?",
    followups: ["I want to focus on rest", "I need more clarity", "Let's review my mood dashboard"]
  }
};
