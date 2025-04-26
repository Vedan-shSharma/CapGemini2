const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => res.send('Hello from Dockerized Node.js App by Vedansh Sharma!'));
app.listen(PORT, () => console.log(`Running on port ${PORT}`));