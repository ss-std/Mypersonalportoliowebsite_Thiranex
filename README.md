# 🚀 Full-Stack Personal Portfolio Website

Welcome to this full-stack personal portfolio web application for a Computer Science & Engineering undergraduate, Full-Stack Developer & Software Engineer.

---

## 📂 Project Structure & Architecture

The project is structured with complete separation of concerns between the **Frontend (Client)**, **Backend (Server)**, and **Database (MongoDB)**:

```text
THIRANEX/
│
├── 💻 client/                       # [FRONTEND PART] — React.js + Vite Application
│   ├── public/                      # Static assets & redirect configurations
│   ├── src/
│   │   ├── components/              # Modular UI components (with scoped CSS Modules)
│   │   │   ├── Navbar/              # Top header, glowing PORTFOLIO badge & icon pills
│   │   │   ├── Hero/                # Hero banner, floating glow orbs & typewriter effect
│   │   │   ├── About/               # Bio, quick statistics, and key strength cards
│   │   │   ├── Experience/          # Interactive CodeAlpha internship timeline
│   │   │   ├── Projects/            # Project showcase with individual tech icon badges
│   │   │   ├── Skills/              # Filterable icon matrix with live counters
│   │   │   ├── Education/           # B.Tech degree & 4 specialized certifications
│   │   │   ├── Contact/             # Direct contact cards & validated inquiry form
│   │   │   └── Footer/              # Social media links and copyright notice
│   │   ├── services/
│   │   │   └── api.js               # Clean Axios HTTP client for backend communication
│   │   ├── styles/
│   │   │   ├── variables.css        # Central design tokens (neon cyan, blue, purple)
│   │   │   └── global.css           # Global resets, animated ambient lighting & scrollbar
│   │   ├── App.jsx                  # Main application orchestrator
│   │   └── main.jsx                 # Vite entry point
│   ├── index.html                   # HTML template
│   ├── vite.config.js               # Vite config with proxy to backend (/api -> port 5000)
│   ├── vercel.json                  # 1-click deployment routing config for Vercel
│   └── package.json                 # Frontend dependencies (React 18, React Icons, Axios)
│
├── ⚙️ server/                       # [BACKEND PART] — Node.js + Express.js REST API
│   ├── config/
│   │   └── db.js                    # [DATABASE PART] — Mongoose database connection
│   ├── models/                      # [DATABASE PART] — Mongoose Document Schemas
│   │   ├── Project.js               # Schema for portfolio projects
│   │   ├── Skill.js                 # Schema for technical skills & proficiencies
│   │   └── Message.js               # Schema for contact form submissions
│   ├── routes/                      # RESTful API Endpoints
│   │   ├── projects.js              # Full CRUD for projects (/api/projects)
│   │   ├── skills.js                # Full CRUD for skills (/api/skills)
│   │   └── contact.js               # Contact form validator & processor (/api/contact)
│   ├── middleware/
│   │   └── errorHandler.js          # Centralized error handler with clean JSON responses
│   ├── seed/
│   │   └── seedData.js              # Database seed script populated with resume data
│   ├── server.js                    # Express server entry point & middleware mounting
│   ├── .env.example                 # Environment variables template
│   └── package.json                 # Backend dependencies (Express, Mongoose, CORS, Dotenv)
│
├── 📄 render.yaml                   # 1-click Render cloud blueprint for backend
├── 📄 .gitignore                    # Excludes node_modules, build artifacts, and secrets
└── 📄 README.md                     # You are here!
```

---

## 🛠️ Quick Local Setup

### Windows one-click startup
Double-click [`start-localhost.bat`](./start-localhost.bat). It installs dependencies, starts both services, and opens the portfolio at **http://localhost:5173**.

Keep the two terminal windows open while using the application. The frontend runs on port `5173` and the API runs on port `5000`.

### Manual startup

### Step 1: Start the Backend (Port 5000)
```bash
cd server
npm install
npm run dev
```

### Step 2: Start the Frontend (Port 5173)
```bash
cd client
npm install
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser!

> The backend requires MongoDB. Set `MONGO_URI` in `server/.env` or run MongoDB locally before starting the backend. The frontend itself is served by Vite on port `5173`.

---

## 🌐 1-Click Cloud Deployment

| Layer | Platform | Free Tier | Deploy Folder |
|---|---|---|---|
| **Frontend** | [Vercel](https://vercel.com) | 100% Free | Set root directory to `client` |
| **Backend** | [Render](https://render.com) | 100% Free | Set root directory to `server` |
| **Database** | [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) | 100% Free (M0) | Use connection URI in `MONGO_URI` |

---

## 🧰 Core Frontend Skills
- HTML5
- CSS3
- JavaScript (ES6+)
- React.js
- Vite
- Axios
- Responsive UI
- CSS Modules
- Web Accessibility

## ⚙️ Backend, Database & Tools
- Node.js and Express.js
- Java and Spring Boot
- RESTful API Design
- MongoDB and MongoDB Atlas
- Mongoose ODM and schema design
- dotenv and CORS
- Git, GitHub, npm, and CI/CD pipelines
