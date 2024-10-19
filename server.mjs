// server.js
import express from 'express';
import path from 'path';


const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = import.meta.dirname;


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'clientApp/build')));

// API endpoint example
app.get('/api/hello', (req, res) => {
    console.log(req);
    res.json({ message: 'Hello from Express!' });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'clientApp/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
