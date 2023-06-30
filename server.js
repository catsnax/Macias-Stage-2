const express = require('express');

const app = express();

app.listen(3000);

app.get('/programming-language', (req, res) => {
    res.send('Javascript');
})