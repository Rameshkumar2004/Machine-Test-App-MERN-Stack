
# 🚀 Machine Test App – MERN Stack

A full-stack MERN application with:

- 🔐 Admin Login with JWT
- 👥 Agent Creation & Management
- 📤 PDF Upload & Task Distribution
- 🔒 Protected API Access

## 📁 Folder Structure

```
.
├── client/               # React Frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── utils/
│       ├── App.jsx
│       └── main.jsx
├── server/               # Express Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── utils/
│   ├── uploads/          # File upload folder
│   └── server.js
├── .env
└── README.md
```

## ⚙️ Technologies Used

- MongoDB
- Express.js
- React.js
- Node.js
- JWT
- Multer / express-fileupload
- TailwindCSS

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/machine-test-app.git
cd machine-test-app
```

### 2. Backend Setup (Server)

#### 📦 Install Dependencies

```bash
cd server
npm install
```

#### 📄 Environment Variables (`server/.env`)

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/machine_test
JWT_SECRET=your_jwt_secret
```

#### ▶️ Run the Server

```bash
npm run dev
```

> Server will run at: http://localhost:5000

### 3. Frontend Setup (Client)

#### 📦 Install Dependencies

```bash
cd client
npm install
```

#### 📄 Create `.env` in `client/` folder

```env
VITE_API_URL=http://localhost:5000/api
```

#### ▶️ Start the React App

```bash
npm run dev
```

> Frontend runs at: http://localhost:5173

## ✅ Features

### 🔐 Admin Login

- Email/Password based login
- JWT-based authentication
- Protected backend routes

### 👥 Agent Management

- Create and list agents
- Stores name, email, phone, and password securely

### 📤 Upload PDF

- Upload customer list in `.pdf` (or CSV if parser added)
- Automatically distributes tasks across 5 agents
- Stores distributed tasks in MongoDB

## 📝 Future Improvements

- Google Authentication (SSO)
- Email Notifications on Task Assignment
- PDF Parser Support (if enabled)
- Validation & Pagination for large datasets

## 🤝 Contributing

Feel free to fork this repo and submit PRs to improve functionality or fix bugs.


