const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/home', (req, res) => {
    res.send();
});

app.get('/api/contact');

app.listen(port, () => console.log('Listening on port ${port} '));