const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Smart Recovery Aid Backend is running 🚀");
});

app.post("/api/symptoms", (req, res) => {
  const { symptoms } = req.body;

  let response = "Please consult a doctor.";

  if (symptoms && symptoms.toLowerCase().includes("fever")) {
    response = "Possible viral infection. Rest and hydrate.";
  }

  res.json({
    input: symptoms,
    advice: response
  });
});

app.get("/test", (req, res) => {
  res.json({ message: "Backend is working" });
});

git init
git add .
git commit -m "initial backend"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});