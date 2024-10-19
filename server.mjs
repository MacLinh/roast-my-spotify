// server.js
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import appRoutes from './src/routes/app.routes.mjs';


const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = import.meta.dirname;


// serve react app
app.use(express.static(path.join(__dirname, 'clientApp/build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

for (let route of appRoutes) {
    app.use('/api/'+route.path, route.controller);
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'clientApp/build', 'index.html'));
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
