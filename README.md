


# MERN Auth Frontend

This is the **frontend** of a complete MERN stack authentication system. Built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, **Redux Toolkit**, and **Redux-Saga**, it handles user registration, login, and authentication using JWTs. Designed to be fully **responsive** and production-ready.

---

## 🌟 Features

- 🔐 User Signup & Login
- 🧠 State management with Redux Toolkit
- ⚙️ Redux-Saga for side effects (API calls, token handling)
- 🎨 Tailwind CSS for modern, responsive UI
- 📱 Mobile-first responsive design
- 🔁 Persistent authentication via JWT (stored in localStorage)
- ✅ Type-safe with TypeScript
- ⚡ Blazing fast dev server using Vite

---

## 📁 Project Structure

```

client/
├── public/
├── src/
│   ├── api/                # Axios config and auth API functions
│   ├── components/         # Reusable UI components (Input, Button, etc.)
│   ├── pages/              # Pages like Login, Signup, Dashboard
│   ├── redux/
│   │   ├── auth/           # Auth slice and saga
│   │   ├── rootSaga.ts     # Combine all sagas
│   │   └── store.ts        # Redux store setup
│   ├── App.tsx             # Main app component with routes
│   ├── main.tsx            # App entry point
│   ├── index.css           # Tailwind CSS entry
│   └── types/              # Global TypeScript types
├── .env
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts

````

---

## ⚙️ Tech Stack

- React + TypeScript
- Redux Toolkit + Redux-Saga
- React Router DOM
- Tailwind CSS
- Axios
- Vite

---

## 📦 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/mern-auth-frontend.git
cd mern-auth-frontend
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Set environment variables

Create a `.env` file in the root of the project:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

### 4️⃣ Run the app

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

---

## 🔒 Authentication Flow

1. User signs up or logs in.
2. JWT token is received and stored in `localStorage`.
3. On app reload, token is used to rehydrate auth state.
4. Protected routes can be guarded using the auth state from Redux.

---

## 🖼️ Screenshots (Optional)

| Signup Page                 | Login Page                 | Dashboard                      |
| --------------------------- | -------------------------- | ------------------------------ |
| ![](assets\Screenshot 2025-06-11 111704.png) | ![](assets\Screenshot 2025-06-11 111717.png) | ![](assets/Screenshot 2025-06-11 111704.png) |

---

## 📌 Scripts

```bash
npm run dev       # Run the app in development
npm run build     # Build for production
npm run preview   # Preview production build
```

---

## 🔧 Linting and Formatting

You can optionally set up ESLint and Prettier for code consistency. Let me know if you want a config for that.

---

## 🛡️ Best Practices

* Keep `.env` file out of Git: make sure `.env` is listed in `.gitignore`
* Use HTTPS and secure cookies in production
* Never expose sensitive environment variables on the frontend

---

## 📚 Future Enhancements

* Password reset flow
* Google/GitHub OAuth login
* Toast notifications
* Unit tests with Jest + React Testing Library
* Role-based access control

---

## 🙌 Acknowledgements

* [React](https://reactjs.org/)
* [Redux Toolkit](https://redux-toolkit.js.org/)
* [Redux-Saga](https://redux-saga.js.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Vite](https://vitejs.dev/)

---
