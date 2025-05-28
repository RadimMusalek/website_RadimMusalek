const express = require('express');
const app = express();
const port = 3000;

// Serve static files from 'docs' directory
app.use(express.static('docs'));

// Add a specific route for the root path
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: './docs' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 