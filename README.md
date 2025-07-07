# Assignment04_L2
# 📚 Minimal Library Management System

A simple full-stack Library Management System built with:

- **Frontend**: React + TypeScript + Redux Toolkit Query (RTK Query)
- **Backend**: Node.js + Express.js + MongoDB
- **Purpose**: Manage books, borrow books, and view borrow summaries — all without authentication.

---

## 🚀 Features

### 🔓 Public Access
- No login or user roles required.
- All pages and features are publicly accessible.

### 🛠️ Book Management
- View all books in a paginated, filterable table.
- Add a new book via a form.
- Edit or delete a book.
- Borrow a book (with stock validation).
- If `copies = 0`, mark the book as unavailable.

### 📖 Borrow Book
- Form to borrow a book.
- Fields: Quantity, Due Date.
- Validation: Quantity must not exceed available copies.
- Auto update: If copies reach 0, availability is set to false.

### 📊 Borrow Summary
- Aggregated report showing:
  - Book Title (clickable to detail page)
  - ISBN
  - Total Quantity Borrowed

---

## 🌐 Live Demo (Optional)

[Demo Link](#) – Add once deployed

---

## 🧱 Tech Stack

### Frontend
- React + TypeScript
- Redux Toolkit Query
- Tailwind CSS
- React Router DOM

### Backend
- Express.js
- MongoDB
- Mongoose
- Zod (for schema validation)

---

## 🔁 API Endpoints

### 📘 Book Routes

| Method | Route                 | Description            |
|--------|----------------------|------------------------|
| GET    | `/api/books`         | Get all books          |
| POST   | `/api/books`         | Create a new book      |
| GET    | `/api/books/:id`     | Get book by ID         |
| PUT    | `/api/books/:id`     | Update book by ID      |
| DELETE | `/api/books/:id`     | Delete book by ID      |

### 📦 Borrow Routes

| Method | Route          | Description                       |
|--------|----------------|-----------------------------------|
| POST   | `/api/borrow`  | Borrow a book                     |
| GET    | `/api/borrow`  | Get borrow summary (aggregation)  |

---



🙌 Acknowledgments
Inspired by real-world library use cases and designed for learning full-stack CRUD + Aggregation + API integration using RTK Query.

