const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

let users = {};
let sosAlerts = [];

// 📍 SAVE LOCATION
app.post("/location", (req, res) => {
  const { userId, lat, lon } = req.body;

  users[userId] = {
    lat,
    lon,
    time: new Date()
  };

  res.json({ message: "Location updated" });
});

// 📡 TRACK USER
app.get("/track/:userId", (req, res) => {
  const user = users[req.params.userId];
  res.json(user || {});
});

// 🚨 SOS SYSTEM
app.post("/sos", (req, res) => {
  const { userId, lat, lon } = req.body;

  const alert = {
    userId,
    lat,
    lon,
    time: new Date()
  };

  sosAlerts.push(alert);

  console.log("🚨 SOS ALERT:", alert);

  res.json({ message: "SOS sent", alert });
});

// 🧠 AI RISK (CONNECTED TO PYTHON AI)
app.post("/risk", async (req, res) => {
  try {
    const response = await axios.post("http://localhost:5000/predict", req.body);
    res.json(response.data);
  } catch (error) {
    res.json({ risk: "AI server not running ❌" });
  }
});

app.listen(3000, () => {
  console.log("✅ Backend running: http://localhost:3000");
});