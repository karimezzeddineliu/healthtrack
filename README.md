# HealthTrack — Project Report

**Title:** HealthTrack — Fitness & Wellness Tracker

---

## Abstract

HealthTrack is a responsive full-stack web application built with **React.js** (Frontend) and **Node.js / Express** (Backend). It helps users log daily activities such as exercise, water intake, and sleep, view progress on a dynamic dashboard, and contact support. Unlike static trackers, HealthTrack persists user data in a **MySQL Cloud Database**, ensuring that data is safe and accessible from any device. The project demonstrates full-stack development skills including CRUD operations, RESTful API design, database management, and cloud deployment.

---

## Table of Contents

1. Introduction
2. System Design

   * Architecture
   * Database Schema
   * Pages and Components
   * Data Flow
3. Technologies Used
4. UI/UX Design Decisions
5. Key Code Snippets (Frontend & Backend)
6. Setup Instructions
7. Screenshots
8. Git Commit History Guidelines
9. Deployment Instructions
10. Academic Integrity & Contribution Statement

---

## 1. Introduction

**Problem:** Many existing fitness trackers are either too complex or work only offline, meaning user data can be lost when the browser cache is cleared.

**Solution:** HealthTrack provides a simple and clean interface where users can sign up, log in, track daily activities, and send messages. All data is securely stored in a cloud-based MySQL database through a custom REST API, ensuring persistence, reliability, and accessibility.

---

## 2. System Design

### Architecture

The application follows a **Client–Server Architecture**:

* **Frontend (Client):** React.js application responsible for UI rendering and user interactions.
* **Backend (Server):** Node.js and Express server responsible for handling API requests and business logic.
* **Database:** MySQL relational database hosted on Clever Cloud for persistent data storage.

### Database Schema

The system uses a relational MySQL database with the following tables:

* **`login`**: Stores user credentials (`id`, `name`, `email`, `password`).
* **`activities`**: Stores health tracker records (`id`, `date`, `time`, `type`, `val`, `notes`).
* **`contacts`**: Stores messages submitted through the Contact page (`id`, `name`, `email`, `message`, `created_at`).

### Pages and Components (Frontend)

* **Home.js** – Landing page introducing the application and its features.
* **Signup.js / Login.js** – User authentication forms.
* **Tracker.js** – Main dashboard allowing users to create, view, update, and delete activity logs.
* **Contact.js** – Contact form that sends messages to the backend API.
* **Navbar.js & Footer.js** – Shared layout components used across the application.

### Data Flow

1. The user submits a form from the React frontend (e.g., adding a new activity).
2. Axios sends an HTTP request to the backend API hosted on Render.
3. The Express server processes the request and executes a SQL query.
4. The MySQL database stores or retrieves the requested data.
5. The backend sends a response back to the frontend, which updates the UI in real time.

---

## 3. Technologies Used

### Frontend

* React.js (Create React App)
* Bootstrap 5
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js
* MySQL
* CORS

### Database & Hosting

* MySQL (Clever Cloud)
* Render (Backend Deployment)
* Vercel (Frontend Deployment)

---

## 4. UI/UX Design Decisions

* **Responsive Layout:** Bootstrap grid system ensures compatibility with mobile and desktop screens.
* **Unified Forms:** Single form handles both adding and editing records to simplify the user experience.
* **Instant Feedback:** Alerts and state updates confirm successful database operations immediately.

---

## 5. Key Code Snippets

### Frontend – Fetching Data (React + Axios)

```javascript
// Tracker.js
useEffect(() => {
    axios
        .get('https://healthtrack-67vp.onrender.com/api/activities')
        .then(res => setActivities(res.data))
        .catch(err => console.log(err));
}, []);
```

### Backend – Database Connection

```javascript
// server.js
const mysql = require('mysql');

const db = mysql.createConnection({
    host: "cloud-db-url",
    user: "user",
    password: "password",
    database: "db_name"
});
```

### Backend – API Route for Adding Data

```javascript
// server.js
app.post('/api/activities', (req, res) => {
    const sql = "INSERT INTO activities (`type`, `date`, `time`, `val`, `notes`) VALUES (?)";
    const values = [
        req.body.type,
        req.body.date,
        req.body.time,
        req.body.val,
        req.body.notes
    ];

    db.query(sql, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});
```

---

## 6. Setup Instructions

To run this project locally, open **two terminals** (one for backend and one for frontend).

### 1️⃣ Database Setup

* Create a MySQL database (local or cloud).
* Run the provided SQL scripts to create the following tables:

  * `login`
  * `activities`
  * `contacts`

### 2️⃣ Backend Setup

```bash
cd backend
npm install
node server.js
```

The backend server runs on **port 5000**.

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

The React application runs on **port 3000**.

---

## 7. Screenshots

### Home Page
![Home Page](frontend/docs/screenshots/home.png)

### Tracker Page
![Tracker Page](frontend/docs/screenshots/tracker.png)

### Features Page
![Features Page](frontend/docs/screenshots/features.png)

### About Page
![About Page](frontend/docs/screenshots/about.png)

### Contact Page
![Contact Page](frontend/docs/screenshots/contact.png)
---

## 8. Git Commit History Guidelines

* Commits were made incrementally during development.
* Each commit represents a meaningful change (feature, fix, or improvement).
* Commit messages clearly describe the implemented changes.

---

## 9. Deployment Instructions

This project follows a microservices-based deployment approach:

* **Database:** MySQL hosted on Clever Cloud
* **Backend:** Deployed on Render

  * Build Command: `npm install`
  * Start Command: `node server.js`
* **Frontend:** Deployed on Vercel

  * Connected to GitHub Repository
  * Build Command: `npm run build`

---

## 10. Academic Integrity & Contribution Statement

This project was designed and implemented individually for academic purposes. All code, documentation, and design decisions were created by the author, following university academic integrity guidelines.

---

**Author:** Karim Ezziddine
**University:** Lebanese International University