# 🧠 Lumin - Quiz App

**Lumin** is a full-featured **Quiz Application** that allows users to play, create, and share quizzes in real-time.  
It’s built for learners and developers who love competition — test your skills, challenge friends, and climb the leaderboard!

---

### Preview
<img width="1894" height="899" alt="image" src="https://github.com/user-attachments/assets/c063a309-0c0c-4606-b35b-2ef6a3dd13d1" />

<img width="1892" height="907" alt="image" src="https://github.com/user-attachments/assets/89b72989-82a6-4d3d-9783-ac5657438284" />


### 🎯 Core Features
- **Authentication System**
  - Secure signup/login using JWT.
  - Passwords hashed with bcrypt.
- **Pre-built Quizzes**
  - Includes quizzes for Java, JavaScript, Python, DBMS, Aptitude, and more.
- **Create Your Own Quiz**
  - Users can create custom quizzes with unique join codes.
- **Join with Code (Private Quiz Room)**
  - Only users with the code can join that quiz session.
- **Leaderboard**
  - Displays rankings based on accuracy percentage.
- **Responsive UI**
  - Built with React + Tailwind CSS for modern and mobile-friendly design.

---

## 🏗️ Tech Stack

| Category | Technology |
|-----------|-------------|
| Frontend | React.js, Redux Toolkit, Tailwind CSS, Framer Motion |
| Backend | Node.js, Express.js |
| Database | MongoDB (Mongoose) |
| Authentication | JWT, bcrypt |
| State Management | Redux Toolkit |
| Others | Axios, dotenv, cors |

---

## 📂 Folder Structure

```bash
lumin-quiz-app/
├── client/                # React Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── feature/auth/
│   │   ├── assets/images/
│   │   └── App.js
│   └── package.json
│
├── server/                # Node.js Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── db.js
│   ├── server.js
│   └── package.json
│
├── .env
├── README.md
```

## 🧮 Leaderboard Ranking Logic

| Accuracy (%) | Title     |
|---------------|-----------|
| 91%+          | Legend    |
| 81–90%        | Champion  |
| 67–80%        | Master    |
| 40–66%        | Learner   |
| < 40%         | Beginner  |
