# 🍃 3. DATABASE PART (MongoDB + Mongoose ODM)

Yahan aapka poora **Database Model & Connection Architecture** hai.

---

## 📂 Where Database Files Live:

| File / Folder | Purpose |
|---|---|
| **`server/config/db.js`** | Mongoose connection file connecting to local MongoDB or MongoDB Atlas |
| **`server/models/Project.js`** | MongoDB collection schema for Projects |
| **`server/models/Skill.js`** | MongoDB collection schema for Skills |
| **`server/models/Message.js`** | MongoDB collection schema for Contact Form Messages |
| **`server/seed/seedData.js`** | Script to automatically populate the database with your real resume projects & skills |

---

## 🚀 How to Populate/Seed Database:
```bash
cd server
npm run seed
```
This inserts your resume projects and skills into MongoDB in 2 seconds!
