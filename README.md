# common-AI

A full-stack AI-powered web application featuring image generation, blog title suggestions, article writing, and more. Built with Node.js/Express backend and React/Vite frontend.

## Features

- AI Tools: Generate images, write articles, suggest blog titles, and remove backgrounds.
- User Authentication & Community Dashboard.
- Modern UI with reusable React components.
- Cloudinary integration for image uploads.

## Project Structure

```
backend/
  controllers/      # Express route controllers
  middlewares/      # Auth and other middleware
  routes/           # API route definitions
  configs/          # Cloudinary, DB, Multer configs
  server.js         # Main Express server
  package.json      # Backend dependencies

frontend/
  src/
    components/     # Reusable React components
    pages/          # App pages (Dashboard, Home, etc.)
    assets/         # Images, icons, etc.
    App.jsx         # Main React app
    main.jsx        # Entry point
    index.css       # Global styles
  public/           # Static assets
  index.html        # App HTML template
  package.json      # Frontend dependencies
  vite.config.js    # Vite config
```

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Backend Setup

```bash
cd backend
npm install
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

- Configure your API keys and secrets in `.env` files for both backend and frontend as needed.

## License

MIT
