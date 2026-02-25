# 🌳 LinkTree Clone

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

A full-stack LinkTree clone built with **Next.js** that lets users create a personalized page with all their important links in one place.

---

## ✨ Features

- Claim a unique handle/username
- Add multiple links with custom display text
- Add a profile picture via URL
- Instantly creates your LinkTree page on submission
- Toast notifications for feedback
- Clean two-column responsive layout

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Notifications:** react-toastify
- **API:** Next.js API Routes (`/api/add`)

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/linktree-clone.git
cd linktree-clone
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
├── app/
│   ├── api/
│   │   └── add/
│   │       └── route.js       # API route to save linktree data
│   ├── generate/
│   │   └── page.js            # Main generate/create page
│   └── [handle]/
│       └── page.js            # Public linktree display page
├── public/
│   ├── logo.svg
│   └── generate.webp
└── README.md
```

---

## 🔌 API Reference

### `POST /api/add`

Creates a new LinkTree entry.

**Request Body:**

```json
{
  "handle": "johndoe",
  "profile": "https://example.com/photo.jpg",
  "link": [
    { "linktext": "My Portfolio", "link": "https://portfolio.com" },
    { "linktext": "Twitter", "link": "https://twitter.com/johndoe" }
  ]
}
```

**Response:**

```json
{
  "message": "LinkTree created successfully!"
}
```

---

## 🧑‍💻 Usage

1. **Step 1 — Claim Your Handle:** Enter a unique username. Your page will be accessible at `/{handle}`.
2. **Step 2 — Add Links:** Click **Add Link** to add as many links as you want, each with a display label and URL.
3. **Step 3 — Add Profile Picture:** Paste a URL to your profile image.
4. Click **Create Your Link Tree** to publish your page.

---

## 🐛 Known Issues / Fixed Bugs

- `handleChange` previously used the JS comma operator `(link, linktext)` instead of returning a proper object `{ link, linktext }` — now fixed.
- Input `onChange` handlers were passing stale values to `handleChange` — corrected argument order.
- `submitLink` was called with undefined variables `link` and `linktext` — fixed to use state directly.
- React was incorrectly imported as a named export — corrected to `import React, { useState } from 'react'`.

---

## 📄 License

MIT License. Feel free to use and modify.
