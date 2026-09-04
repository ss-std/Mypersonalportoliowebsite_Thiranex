# ⚙️ 2. BACKEND PART (Node.js + Express)

Yahan aapka **RESTful API Server** hai jo frontend aur database ke beech bridge ka kaam karta hai.

---

## 📂 Key Files & What They Do:

| File / Folder | Purpose |
|---|---|
| **`server.js`** | Main entry point — starts Express server on port 5000 |
| **`routes/projects.js`** | API endpoints for fetching & managing projects (`/api/projects`) |
| **`routes/skills.js`** | API endpoints for skills (`/api/skills`) |
| **`routes/contact.js`** | API endpoints for receiving contact form messages (`/api/contact`) |
| **`middleware/errorHandler.js`** | Catches errors and sends clean JSON error responses |
| **`.env.example`** | Port and database connection configuration template |

---

## 🚀 How to Run Backend:
```bash
npm install
npm run dev
```
Runs at: **http://localhost:5000**
