const path = require('path');
const express = require('express');
const app = express();

const PORT = 4040;

app.use(express.static('dist'));

app.listen(PORT, (err) => {
    if (err) {
        console.error('There was an error!');
    } else {
        console.log(`Listening at http://localhost:${PORT}`);
    }
})