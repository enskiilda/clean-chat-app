# Clean Chat App - Computer Use Demo

A clean Next.js application that uses Google Gemini 2.5 Flash to create a computer using agent with real-time streaming.

## Features

- 🚀 Real-time streaming with Server-Sent Events (SSE)
- 💬 Chat interface with AI assistant
- 🖥️ Desktop streaming via E2B
- 🎨 Modern UI with Tailwind CSS
- ⚡ No caching - always fresh data

## Tech Stack

- **Framework**: Next.js 15.2.1
- **UI**: React 19, Tailwind CSS 4
- **Desktop**: E2B Desktop
- **AI**: Google Gemini 2.5 Flash (via OpenAI-compatible API)
- **Styling**: Tailwind CSS with custom configuration

## Getting Started

### Prerequisites

- Node.js 20+
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd clean-chat-app
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file with your API keys:
```env
E2B_API_KEY=your_e2b_api_key
OPENAI_API_KEY=your_openai_api_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:5000](http://localhost:5000) in your browser.

## Available Scripts

- `npm run dev` - Start development server on port 5000
- `npm run build` - Build for production
- `npm run start` - Start production server on port 5000
- `npm run lint` - Run ESLint

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── chat/          # Chat API endpoint
│   │   └── kill-desktop/  # Desktop cleanup endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page
├── components/
│   ├── ui/                # UI components
│   ├── message.tsx        # Message display component
│   ├── input.tsx          # Input component
│   └── ...
├── lib/
│   ├── e2b/               # E2B integration
│   ├── streaming-config.ts # Streaming configuration
│   └── use-raw-streaming.ts # Custom streaming hook
└── next.config.ts         # Next.js configuration
```

## Configuration

### No Caching

This application is configured to disable all caching mechanisms:
- No middleware caching
- No storage optimization
- Real-time data streaming
- Fresh data on every request

### Streaming

The application uses a custom streaming implementation with:
- No buffering
- No message grouping
- Immediate processing
- Real-time updates

## License

MIT

## Notes

This is a clean version without any caching or storage optimization components. All data is processed in real-time.
