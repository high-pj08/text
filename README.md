# MessageApp

A modern, full-stack real-time chat application with authentication, user profiles, and beautiful UI. Built with React (Vite, TypeScript, Tailwind CSS, DaisyUI) for the frontend and Node.js (Express, TypeScript, Socket.io, MongoDB) for the backend.

---

## Features
- Real-time messaging with Socket.io
- User authentication (signup, login, JWT cookies)
- Profile management (update avatar, info)
- Modern, responsive UI with theme support (DaisyUI, Tailwind)
- Black & white and colorful theme options
- Image upload in chat
- Live online user status

---

## Tech Stack
- **Frontend:** React, Vite, TypeScript, Tailwind CSS, DaisyUI, Zustand, Socket.io-client
- **Backend:** Node.js, Express, TypeScript, Socket.io, MongoDB (Mongoose), Cloudinary (for image upload)

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Kunal-sharma24/texts.git
cd texts
```

### 2. Setup the Backend
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` folder:
```env
PORT=5001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```
Run the backend:
```bash
npm run dev
```

### 3. Setup the Frontend
```bash
cd ../frontend
npm install
```
If you deploy the backend, set the API URL in a `.env` file (optional for local dev):
```env
VITE_API_URL=https://your-backend-url/api
```
Run the frontend:
```bash
npm run dev
```

---

---

## Environment Variables

### Backend
- `PORT` - Port to run the server (default: 5001)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret for JWT signing
- `CLOUDINARY_CLOUD_NAME` - Cloudinary cloud name
- `CLOUDINARY_API_KEY` - Cloudinary API key
- `CLOUDINARY_API_SECRET` - Cloudinary API secret

### Frontend
- `VITE_API_URL` - (Optional) URL of the backend API (for production)

---

## License
MIT
