const express = require('express');
const os = require('os');
const path = require('path');

const app = express();
const port = 80;

// Serve static files (like your HTML)
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to return the hostname
app.get('/hostname', (req, res) => {
    res.send(os.hostname());
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

