# 🎯 Smart To-Do

A modern, mobile-first to-do app built with Next.js, featuring task categorization, calendar integration, reminders, and progress analytics. Dark purple theme for that sleek, focused vibe—perfect for daily planning without the clutter.

## ✨ Features

📋 Task Management

- \*\* Task Management: Create, edit, delete tasks with subtasks, notes, attachments, and repeats (daily/weekly).
- \*\* Smart Filtering: Views for All, Today, Future/Previous, and categories (Work, Personal, Wishlist, Birthday, Daily).
- \*\* Calendar Sync: Visual grid with overlaid tasks and due dates.
- \*\* Reminders & Notifications: Set times, tones, and snoozes via settings.
- \*\* Progress Dashboard: Stats in "Mine" tab—completion rings, line graphs, pie charts for categories.
- \*\* Customization: Themes, languages, date formats, and FAQ support.
- \*\* Offline-First: LocalStorage persistence for seamless use.

📅 Calendar Integration

- \*\* Interactive calendar grid with overlaid tasks and due dates.
- \*\* Set reminders with time pickers and snooze options.

### 🎨 User Interface

## 🛠️ Tech Stack

- \*\* Framework: Next.js 15.5.4 (App Router)
- \*\* Language: TypeScript for type safety
- \*\* Styling: Tailwind CSS 4 + daisy/UI
- \*\* State Management: Zustand with LocalStorage persistence
- \*\* Forms: React Hook Form
- \*\* Data Visualization: Recharts
- \*\* Icons: Lucide React
- \*\* Dates: date-fns
- \*\* Animations: Framer Motion
- \*\* Font: Inter ....

## 🚀 Quick Start

### Prerequisites

- Node.js 20.19.16
- npm

### Installation and Setup

```bash
# Clone the repository
git clone https://github.com/RamtinRamzani/smart-todo
cd smart-tracker

# Install dependencies
npm install

# Run development server
npm run dev

# Open in browser
# http://localhost:3000
```

### Available Scripts

```bash
npm run dev          # Run development server
npm run build        # Build for production
npm run start        # Run production server
npm run lint         # Check code with ESLint
npm run type-check   # Check TypeScript
```

## 📂 Project Structure

```
src/
├── app/                # App Router pages and layouts
│   ├── ـcomponents/    # Generic UI components
│   ├── _lib/           # Libraries and utilities
│   ├── _styles/        # styles
│   ├── _types/         # TypeScript type definitions
│   ├── _stores/         # Zustand stores
│   └── _utils/
├── components/
│   ├── ui/             # Generic UI components
│   ├── tasks/          # Task-related components
│   ├── expenses/       # Expense-related components
│   └── shared/         # Shared components
└── hooks/              # Custom React hooks
```

## 🎯 How to Use

### Task Management

1. Navigate to the Tasks tab (default home).
2. Tap + to open the create modal.
3. Enter title, optional notes/subtasks, select category, due date/time, and reminder/repeat.
4. Save—task appears in lists with checkboxes for completion.

## Calendar View

1. Switch to Calendar tab.
2. Tap a date to view/add tasks; badges show counts.

## Progress Tracking

1. Go to Mine tab for your dashboard.
2. View rings/graphs; tap previews for quick edits.

## 📊 Advanced Features

### Local Storage

1. Tasks persist via Zustand + LocalStorage.
2. Offline-first: Works without internet; syncs on reconnect.

### Data Visualization

1. Line Chart: Daily task completion trends (Recharts).
2. Pie Chart: Tasks by category breakdown.
3. Ring Chart: Overall progress (total vs. completed).

### Filter and Search

1. Dropdown filters for views (Today/Future) and categories.
2. Search bar for titles/notes.
3. Sort by due date, priority, or completion.

## 🤝 Contributing

<!--  -->

## 📝 License

<!--  -->

## 👨‍💻 Developer

Made by Ramtin Ramezani

## 🐛 Bug Reports and Feature Requests

To report bugs or request new features, please create an [Issue](https://github.com/RamtinRamzani/smart-tracker/issues).

## 📸 Screenshots

_Screenshots will be added after UI completion_

## 🗺️ Roadmap

- [ ] ✅ Core task management
- [ ] 💰 Reminders and settings toggles
- [ ] 📊 Main charts
- [ ] 🌙 Dark mode
- [ ] 📱 Improved Mobile UI
- [ ] 🔄 FAQ and menu polish
- [ ] 📧 PWA for app-like install (Future)
