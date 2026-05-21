# TodoApp

A full-stack Todo application built with React and Firebase — featuring Google
authentication, real-time Firestore database, and complete task management.

---

## 🌐 Live Demo

[https://my-to-do-nu.vercel.app](https://my-to-do-nu.vercel.app)

---

## Features

- **Google Authentication** — One-click login with Firebase Auth
- **Create Tasks** — Add tasks with title and optional description
- **Edit Tasks** — Inline description editing from the details page
- **Delete Tasks** — Delete single or all tasks at once
- **Mark Complete / Active** — Toggle task status with real-time sync
- **Filter Tasks** — Filter by All, Active, or Completed
- **Dashboard Stats** — Live count of Total, Active, and Done tasks
- **Details Page** — Full task view with edit, delete, and status toggle
- **Protected Actions** — Login popup shown before any action if not
  authenticated
- **Persistent Auth** — User session saved in localStorage

---

## Tech Stack

| Technology         | Purpose               |
| ------------------ | --------------------- |
| React 19           | UI Framework          |
| React Router v7    | Client-side routing   |
| Firebase Auth      | Google authentication |
| Firebase Firestore | Real-time database    |
| Tailwind CSS       | Styling               |
| Vite               | Build tool            |

---

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   └── Header.jsx
│   └── ui/
│       ├── CheckBox.jsx
│       ├── Input.jsx
│       ├── LInk.jsx
│       └── Textarea.jsx
├── context/
│   ├── Auth.jsx            # Google auth context & provider
│   ├── createAuthContext.js
│   ├── TodoProvider.jsx    # Todo CRUD context & provider
│   └── todoContext.js
├── page/
│   ├── home/
│   │   ├── Home.jsx
│   │   ├── DashboardStats.jsx
│   │   ├── TaskForm.jsx
│   │   └── TodoCard.jsx
│   └── DetailsPage/
│       └── TodoDetails.jsx
├── firebase.js             # Firebase config
├── App.jsx
└── main.jsx
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- A Firebase project with Firestore and Google Auth enabled

### Installation

```bash
git clone https://github.com/alamin-one/My-ToDo.git
cd My-ToDo
# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APP_API_KEY=your_api_key
VITE_APP_AUTH_DOMAIN=your_auth_domain
VITE_APP_PROJECT_ID=your_project_id
VITE_APP_STORAGE_BUCKET=your_storage_bucket
VITE_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_APP_APP_ID=your_app_id
```

### Run Locally

```bash
npm run dev
```

---

## Authentication Flow

1. User visits the app
2. Any protected action (add, edit, delete) triggers a login popup if not
   authenticated
3. User signs in with Google via Firebase popup
4. Auth state persists in `localStorage` across page reloads
5. Todos are stored per user using their Firebase UID as the Firestore path:
   `users/{uid}/todos`

---

## Firestore Data Structure

```
users/
└── {uid}/
    └── todos/
        └── {todoId}/
            ├── title        (string)
            ├── description  (string)
            ├── completed    (boolean)
            └── createDate   (string)
```

---

## Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to
discuss what you would like to change.

---

## License

[MIT](LICENSE)
