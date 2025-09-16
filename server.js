const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Optional: API route to get trails.json (if you want JSON fetch via /api/trails)
app.get('/api/trails', (req, res) => {
  const trailsFile = path.join(__dirname, 'public', 'trails.json');
  fs.readFile(trailsFile, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read trails.json' });
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
