# ChatBoat - AI Chat Interface with Plugin System

![ChatBoat Screenshot](./public/screenshot.png)

A React-based AI chat interface with plugin-style tools for enhanced functionality, supporting natural language and slash commands.

## Features

- 💬 Interactive chat UI with message history
- 🧩 Plugin architecture for extensible functionality
- ⚡ Real-time API integrations
- 📱 Responsive design
- 💾 Local storage persistence

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm (v8+ recommended)

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/chatboat.git
cd chatboat
```

2. Install dependencies
   npm install

3. Set up environment variables
   cp .env.example .env

4. Start development server
   npm run dev

Test Cases:
1./weather [location]
2./calc [expression]
3./define [word]

Weather API
Endpoint: https://api.openweathermap.org/data/2.5/weather

Required: OPENWEATHER_API_KEY in .env
