# TodoApp — Full Stack Todo Application

A modern full-stack Todo application built with **React**, **Firebase Authentication**, and **Firestore**. It provides a simple and efficient task management experience with Google login, real-time database updates, and complete CRUD functionality.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-Build_Tool-646CFF?logo=vite)
![Firebase](https://img.shields.io/badge/Firebase-Backend-FFCA28?logo=firebase)
![Firestore](https://img.shields.io/badge/Firestore-Database-FFCA28?logo=firebase)
![Firebase Auth](https://img.shields.io/badge/Firebase_Auth-Authentication-FFCA28?logo=firebase)
![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?logo=reactrouter)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Framework-38BDF8?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green)

---

## Live Demo

**Live Preview:** https://my-to-do-nu.vercel.app

---

## Features

### Authentication

- Google Authentication with Firebase
- Persistent User Session
- Protected Actions
- Login Popup for Unauthorized Actions

### Task Management

- Create Tasks
- Edit Task Details
- Delete Single Task
- Delete All Tasks
- Mark Task as Complete / Active
- Real-time Task Updates

### Dashboard

- Total Task Count
- Active Task Count
- Completed Task Count
- Task Filtering
  - All
  - Active
  - Completed

### User Experience

- Responsive Design
- Real-time Firestore Sync
- Loading States
- Clean UI
- Fast Performance

---

## Tech Stack

| Frontend | Backend & Services |
|----------|--------------------|
| React 19 | Firebase Authentication |
| Vite | Firebase Firestore |
| React Router v7 | Real-time Database |
| Tailwind CSS | |
| Context API | |

---

## Project Structure

```text
src/
├── components/
│   ├── layout/
│   │   └── Header.jsx
│   │
│   └── ui/
│       ├── CheckBox.jsx
│       ├── Input.jsx
│       ├── Link.jsx
│       └── Textarea.jsx
│
├── context/
│   ├── Auth.jsx
│   ├── createAuthContext.js
│   ├── TodoProvider.jsx
│   └── todoContext.js
│
├── pages/
│   ├── home/
│   │   ├── Home.jsx
│   │   ├── DashboardStats.jsx
│   │   ├── TaskForm.jsx
│   │   └── TodoCard.jsx
│   │
│   └── DetailsPage/
│       └── TodoDetails.jsx
│
├── firebase.js
├── App.jsx
└── main.jsx
