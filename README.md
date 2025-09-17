# 🎯 Smart To-Do & Expense Tracker

A smart application for task management and expense tracking with advanced data visualization and local storage capabilities.

## ✨ Features

### 📋 Task Management

### 💰 Expense Tracking

### 🎨 User Interface

## 🛠️ Tech Stack

- **Framework:** Next.js 15.5.3 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Data Visualization:** Recharts
- **Storage:** IndexedDB
- **Icons:** Lucide React
- **Utils:** date-fns

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or higher
- npm or yarn

### Installation and Setup

```bash
# Clone the repository
git clone https://github.com/RamtinRamzani/smart-tracker.git
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
├── app/                 # App Router pages
│   ├── tasks/          # Task-related pages
│   ├── expenses/       # Expense-related pages
│   └── analytics/      # Analytics dashboard
├── components/
│   ├── ui/             # Generic UI components
│   ├── tasks/          # Task-related components
│   ├── expenses/       # Expense-related components
│   └── shared/         # Shared components
├── stores/             # Zustand stores
├── lib/                # Libraries and utilities
├── types/              # TypeScript type definitions
└── hooks/              # Custom React hooks
```

## 🎯 How to Use

### Task Management

1. Click on **"Add Task"**
2. Enter title, description, and deadline
3. Select priority and category
4. Save the task

### Expense Tracking

1. Click on **"Add Transaction"**
2. Enter amount, category, and description
3. Select transaction type (Income/Expense)
4. Record the transaction

## 📊 Advanced Features

### Local Storage

- All data stored in IndexedDB
- Offline functionality
- Data backup and restore

### Data Visualization

- Pie chart for expenses by category
- Line chart for expense trends over time
- Bar chart comparing income vs expenses
- Task progress visualization

### Filter and Search

- Filter tasks by status, priority, and category
- Filter expenses by date and category
- Quick search in task and expense text

## 🤝 Contributing

1. Fork the project
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Create a Pull Request

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
- [ ] 💰 Basic expense tracking
- [ ] 📊 Main charts
- [ ] 🌙 Dark mode
- [ ] 📱 Improved Mobile UI
- [ ] 🔄 Cloud synchronization (Future)
- [ ] 📧 Email reminders (Future)
- [ ] 🤖 AI for expense prediction (Future)
