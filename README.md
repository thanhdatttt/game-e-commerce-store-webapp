# 🎮 Game E-commerce Store WebApp

A **fullstack personal project** for a modern game e-commerce platform, designed to be **CV-ready**, scalable, and aligned with real-world production practices.

---

## 📌 Project Overview

The **Game E-commerce Store WebApp** is an online platform that allows users to browse, purchase, and manage digital games. The project focuses on:

* Clean **system architecture**
* Strong **backend design** (API, database, authentication)
* Modern **frontend UX/UI**
* Real-world features such as carts, orders, payments, reviews, and admin management

This project is suitable for showcasing **Fullstack Developer** skills.

---

## 🧱 Tech Stack

### Backend

* **Node.js** + **Express.js**
* **TypeScript** (strict mode)
* **PostgreSQL** (hosted on **Supabase**)
* **Prisma ORM**
* **JWT Authentication**
* **RESTful API**

### Frontend

* **Next.js (App Router)**
* **TypeScript**
* **Tailwind CSS**
* **Zustand** (state management)
* **Axios**

### DevOps & Tooling

* **Docker** (optional)
* **ESLint + Prettier**
* **GitHub Actions** (CI/CD – optional)
* **dotenv** for environment variables

---

## ✨ Core Features

### 👤 Authentication & Authorization

* User registration & login
* JWT-based authentication
* Role-based access control:

  * `USER`
  * `ADMIN`

---

### 🎮 Game Management

* View game list
* Search & filter games
* Game details page
* Categories & tags

**Admin only:**

* Create / update / delete games
* Upload game images
* Manage categories

---

### 🛒 Cart & Checkout

* Add / remove games from cart
* Update quantity
* Checkout process
* Order summary

---

### 📦 Orders

* Create orders from cart
* Order status tracking:

  * `PENDING`
  * `PAID`
  * `DELIVERED`
  * `CANCELLED`
* View order history

---

### 💳 Payment (Mock / Extendable)

* Simple payment confirmation flow
* Designed to be extendable to:

  * Stripe
  * PayPal
  * Local payment gateways

---

### ⭐ Reviews & Ratings

* Users can review purchased games
* Rating system (1–5 stars)
* Admin moderation support

---

### 🧑‍💼 Admin Dashboard

* Manage users
* Manage games
* View orders & revenue
* Control pagination & visibility

---

## 📁 Project Structure

### Backend

```
backend/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── middlewares/
│   ├── libs/
│   ├── app.ts
│   └── server.ts
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── .env
├── prisma.config.ts
└── tsconfig.json
```

### Frontend

```
frontend/
├── app/
├── components/
├── stores/
├── services/
├── styles/
├── next.config.ts
└── tsconfig.json
```

---

## ⚙️ Environment Variables

### Backend `.env`

```
DATABASE_URL=postgresql://...
JWT_SECRET=your_secret_key
PORT=5000
```

### Frontend `.env.local`

```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

---

## 🚀 Getting Started

### 1️⃣ Clone repository

```bash
git clone https://github.com/your-username/game-ecommerce-store-webapp.git
```

### 2️⃣ Backend setup

```bash
cd backend
npm install
npx prisma migrate dev
npm run dev
```

### 3️⃣ Frontend setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🧪 Testing (Optional)

* Unit tests with **Jest**
* API tests with **Postman**

---

## 📈 Future Improvements

* Wishlist
* Game bundles & discounts
* Real payment gateway integration
* Email notifications
* Admin analytics dashboard

---

## 🎯 Why This Project Is CV-Ready

* Uses **industry-standard technologies**
* Clear **separation of concerns**
* Scalable backend architecture
* Modern frontend stack
* Demonstrates full product lifecycle

---

## 👨‍💻 Author

**Thanh Đạt Pham**
Fullstack Developer

---

## 📄 License

MIT License
