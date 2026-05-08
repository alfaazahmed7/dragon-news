# Dragon News

A modern and responsive news portal application built with Next.js 16. Dragon News allows users to explore categorized news articles, read detailed stories, and securely authenticate using email/password or social login providers.

---

## 🌐 Live Website

🔗 [https://dragon-news-orcin.vercel.app](https://dragon-news-orcin.vercel.app)

---

## 📌 Project Purpose

The purpose of Dragon News is to provide users with a clean, fast, and interactive platform for browsing news content by categories. The application focuses on modern UI/UX, authentication security, and optimized performance using the latest Next.js features.

---

## ✨ Key Features

* 🔐 Secure authentication with Better Auth
* 📧 Email & password login/register system
* 🌍 Google and GitHub social authentication
* 📰 Dynamic news category filtering
* ⚡ Built with Next.js App Router
* 📱 Fully responsive design
* 🎨 Styled using Tailwind CSS and DaisyUI
* 🔥 Breaking news marquee section
* 🚫 Custom 404 Not Found page
* ⏳ Loading state support for dynamic pages

---

## 🛠️ Technologies Used

### Frontend

* Next.js 16
* React 19
* Tailwind CSS 4
* DaisyUI
* React Icons
* React Fast Marquee
* React Hook Form

### Authentication & Backend

* Better Auth
* MongoDB
* Better Auth MongoDB Adapter

### Utility Libraries

* date-fns

---

## 📦 NPM Packages Used

```json
{
  "@better-auth/mongo-adapter": "^1.6.9",
  "better-auth": "^1.6.9",
  "date-fns": "^4.1.0",
  "mongodb": "^7.2.0",
  "next": "16.2.4",
  "react": "19.2.4",
  "react-dom": "19.2.4",
  "react-fast-marquee": "^1.6.5",
  "react-hook-form": "^7.74.0",
  "react-icons": "^5.6.0",
  "daisyui": "^5.5.19",
  "tailwindcss": "^4"
}
```

---

## 📁 Folder Structure

```bash
src/
 ├── app/
 │   ├── (auth)/
 │   ├── (main)/
 │   ├── api/
 │   └── globals.css
 │
 ├── components/
 │   └── shared/
 │
 ├── lib/
 │   ├── auth.js
 │   ├── auth-client.js
 │   └── data.js
 │
 └── assets/
```

---

## 🚀 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/alfaazahmed7/dragon-news.git
```

### 2️⃣ Navigate to the project folder

```bash
cd dragon-news
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Run the development server

```bash
npm run dev
```

### 5️⃣ Open in browser

```bash
http://localhost:3000
```

---

## 📡 API Source

News data is fetched from the Programming Hero Open API.

---

## 👨‍💻 Author

Developed with ❤️ using Next.js and modern web technologies.