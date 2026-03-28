from flask import Flask, jsonify
from datetime import datetime
import random

app = Flask(__name__)

@app.route("/predict", methods=["POST"])
def predict():
    hour = datetime.now().hour
    crowd = random.randint(1, 10)

    score = 0

    if hour >= 22 or hour <= 5:
        score += 2
    elif hour >= 18:
        score += 1

    if crowd < 3:
        score += 2
    elif crowd < 6:
        score += 1

    if score >= 3:
        risk = "HIGH RISK 🔴"
    elif score == 2:
        risk = "MEDIUM RISK ⚠️"
    else:
        risk = "LOW RISK 🟢"

    return jsonify({"risk": risk})

app.run(port=5000)