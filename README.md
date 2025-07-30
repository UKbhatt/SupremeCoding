

<h1 align="center"><img width="50" height="50" alt="image" src="https://github.com/user-attachments/assets/f9240e44-4901-44e6-b2f0-59989957dc6a" />
SupremeCoding</h1>
<p align="center">An online code compiler & coding platform like LeetCode powered by a custom-built Node.js backend.</p>
<p align="center">
  <img src="https://img.shields.io/badge/Online%20Compiler-Built%20with%20Node.js-blue?style=for-the-badge&logo=node.js" />
  <img src="https://img.shields.io/badge/MongoDB-Questions%20Database-green?style=for-the-badge&logo=mongodb" />
  <img src="https://img.shields.io/badge/ReactJS-Frontend-purple?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Monaco%20Editor-VS%20Code%20Feel-informational?style=for-the-badge&logo=visualstudiocode" />
</p>

---

### 🚀 Features

- 🔥 Real-time code execution for **JavaScript, Python, Java, and C++**
- ✨ Code editor with **Monaco Editor (VS Code UI)**
- ✅ Run **test cases** and **custom input**
- 📚 Question database powered by **MongoDB**
- 🧠 LeetCode-style question screen with constraints, examples, difficulty tags
- 🛠️ Built from scratch: custom compiler backend using **child process**

---

### 🛠️ Tech Stack

| Frontend | Backend | Database | Code Execution |
|----------|---------|----------|----------------|
| React.js | Node.js + Express | MongoDB (Mongoose) | Native Compiler (child_process) |

---

### 📦 Local Setup

#### 1. Clone the repo

```bash
git clone https://github.com/your-username/SupremeCoding.git
cd SupremeCoding
```

#### 2. Backend Setup
```bash
cd server
npm install
node index.js
```
NOTE: Ensure compilers (g++, javac, python, node) are installed on your system.
#### 3.Frontend Setup
```bash
cd client
npm install
npm run dev
```

---
### 🔄 API Overview
```bash
POST /api/compile
{
  code: "...",
  language: "cpp" | "python" | "java" | "javascript",
  input: "user input"
}
✅ Returns output or error based on compilation
```

---

### 📁 Folder Structure

```bash
SUPREME_CODING/
├── public/                      # Static assets (if any)
│
├── server/                     # Backend (Node.js + Compiler)
│   ├── compiler/               # Custom compiler logic
│   │   ├── temp/               
│   │   └── index.js         
│   ├── data/                   
│   │   └── questions.js        # Array of questions (acts like DB)
│   ├── routes/
│   │   ├── compiler.js         # /api/compile route
│   │   └── questions.js        
│   ├── index.js                #Express server
│   ├── package.json
│   └── package-lock.json
│
├── src/                        # Frontend
│   ├── assets/                 
│   ├── components/             
│   ├── screens/                # Pages like SolutionScreen.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx                # ReactDOM root
│   ├── index.css               # Tailwind or global styles
│
├── .env                        # Environment variables
├── .gitignore
├── index.html
├── package.json               # React app config
├── package-lock.json
└── README.md

```
---

### 🛠️ Compiler Flow
    Frontend ➜ POST /api/compile ➜<br>
      Backend (child_process)<br>
        ➜ Saves code + input<br>
        ➜ Compiles (if needed)<br>
        ➜ Runs & captures output<br>
        ➜ Deletes temp folder<br>

---

### 🧪 Test Case Execution
  1. ✅ Compare output with expected<br>
  2. 💥 Show Pass/Fail with color indicators using "react-hot-toast" <br>
  3. 🕐 Execution time is recorded<br>

---
### ✨ Future Enhancements
1. 🔐 Add Auth (JWT)<br>
2. 📈 Leaderboard<br>
3. 🧠 Save Submissions<br>
4. 📊 Code Metrics + Time<br>

---

### 🤝 Contributing
```bash
git checkout -b feature/your-feature
git commit -m "Add: new feature"
git push origin feature/your-feature
```
## 🌍 Contact
**💻 Author: Utkarsh**<br>
**📧 Email: ubhatt2004@gmail.com**<br>
**🐙 GitHub: https://github.com/UKbhatt**<br>

<p align="center">
  <b>Built in Dark Theme because Light Attracts Bugs 🐞</b>

</p>
