# 🚨 AI Smart Safety System

An intelligent **real-time safety web application** that combines live location tracking, AI-based risk prediction, and smart nearby search with navigation.

---

## 🌟 Features

### 📍 Live Location Tracking

* Real-time GPS tracking using browser geolocation
* Displays:

  * Latitude & Longitude
  * Full address (reverse geocoding)
* Live map updates using Leaflet.js

---

### 🧠 AI Risk Prediction

* Predicts safety level:

  * 🟢 Low Risk
  * ⚠️ Medium Risk
  * 🔴 High Risk
* Based on:

  * Time
  * Environmental simulation (AI logic)

---

### 🔍 Smart Nearby Search

Search for nearby places like:

* 🏥 Hospitals
* 🚔 Police Stations
* ☕ Coffee Shops
* 🛕 Temples
* 🛒 Grocery Stores
* 🏬 Supermarkets

**Features:**

* Shows multiple nearby locations
* Displays distance (in km)
* Auto-suggest correction (basic AI behavior)

---

### 🗺️ Map + Navigation

* Displays:

  * Current location marker
  * Multiple nearby place markers
* Automatically:

  * Finds nearest location
  * Draws route (pathway) on map
  * Zooms to route

---

### 🚨 Emergency Features

* One-click SOS (WhatsApp alert)
* Share live location instantly

---

### 🎨 UI/UX

* Modern glassmorphism UI
* Fully responsive:

  * 📱 Mobile
  * 💻 Laptop/Desktop
* Clean and compact layout
* Smooth user experience

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3 (Responsive + Glass UI)
* JavaScript

### Maps & APIs

* Leaflet.js
* OpenStreetMap (Nominatim API)
* OSRM Routing API

### Backend (Optional AI Integration)

* Node.js (Express.js)
* Python (Flask AI server)

---

## 📂 Project Structure

AI-Safety-System/
│
├── frontend/
│   └── index.html
│
├── backend/
│   └── server.js
│
├── ai/
│   └── ai_server.py

---

## 🚀 How to Run

### 1️⃣ Clone Repository

git clone https://github.com/your-username/ai-safety-system.git
cd ai-safety-system

---

### 2️⃣ Run Backend

cd backend
npm install
node server.js

---

### 3️⃣ Run AI Server

cd ai
pip install flask
python ai_server.py

---

### 4️⃣ Run Frontend

Open in browser:
frontend/index.html

---

## 🌍 Deployment

You can deploy easily:

* Frontend → Vercel / Netlify
* Backend → Render
* AI Server → Render / Railway

---

## 💡 Future Improvements

* 🔐 User authentication (Firebase)
* 📊 Safety analytics dashboard
* 🎙️ Voice-based SOS
* 📱 Android/iOS app
* 🧠 Real ML model with dataset
* 🚗 Live traffic + ETA

---

## 📸 Demo

<img width="1920" height="870" alt="location final" src="https://github.com/user-attachments/assets/347eb70d-91d5-426d-97af-c8b5b88d8bc8" />
<img width="1920" height="866" alt="location f1" src="https://github.com/user-attachments/assets/f02b2ba0-5c00-4fa4-8d00-2251c2cc0902" />


---

## 👨‍💻 Author

**Aswin Saran**
AI & Data Science Enthusiast
Full Stack Developer

---

## ⭐ Support

If you like this project:

⭐ Star this repository
🍴 Fork it
📢 Share it

---

## 📜 License

MIT License

Copyright (c) 2026 Aswin Saran

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

