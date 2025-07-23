# 🤖 React Chatbot App

A simple and interactive chatbot built with React, featuring responsive design, user-to-bot message flow, typing indicators, and dynamic responses using a local response handler.
---

## 🚀 Features

- 🤖 Robot and user message rendering
- 🧠 Intelligent bot response handler (customizable)
- ⏳ Typing indicator for bot replies
- 💬 Real-time chat interface with send button
- 🔔 Toast notifications for empty input or errors
- 📱 Fully responsive layout for mobile, tablet, and desktop

---

## 📁 Project Structure

react-chatbot-project/
├── public/
│   ├── robot-icon.png
│   ├── user-icon.png
│   └── loading-icon.gif
│
├── src/
│   ├── utils/
│   │   └── robot-tasks.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── ChatInput.jsx
│   ├── ChatInput.css
│   ├── ChatMessage.jsx
│   ├── ChatMessage.css
│   ├── ChatMessages.jsx
│   ├── ChatMessages.css
│   ├── index.css
│   └── main.jsx

---

## Dependencies 
# Install all dependencies with : npm install

- react and react-dom
- react-toastify — Toast notifications
- axios — For API calls
- dayjs — For date rendering

---

## 🧠 Customize Robot Logic

// src/utils/robot-tasks.js

export function robotResponse(userInput) {
  // Add your own custom logic here
}

---

## 💻 Tech Stack

- React js
- JavaScript (ES6+)
- React Toastify
- axios
- HTML & CSS
- dayjs

---

## ✍️ Author : 
- Developed by Bhavya Sri Vardhini Chilukoti.

--------

## 📄 License :
This project is open source and free to use.

