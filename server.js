const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let activities = [];

app.get('/api/activities', (req, res) => {
  res.json(activities);
});

app.post('/api/activities', (req, res) => {
  const { title, details } = req.body;
  const newActivity = { id: Date.now(), title, details, time: new Date().toLocaleTimeString() };
  activities.push(newActivity);
  res.status(201).json(newActivity);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});