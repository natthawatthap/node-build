const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api', (req, res) => {
    res.send('Hello from the API!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
