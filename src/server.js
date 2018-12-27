import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Container from './components/Container';
import express from 'express';
const app = express();

const PORT = 4040;

app.use(express.static('dist'));

app.get("/*", (req, res) => {
    const jsx = (<Container />)
    const initialOutput = renderToString(jsx);
    res.writeHead(200, { "Content-Type": "text/html" })
    console.log('sending html')
    res.end(htmlTemplate(initialOutput));
})

app.listen(PORT, (err) => {
    if (err) {
        console.error('There was an error!');
    } else {
        console.log(`Listening at http://localhost:${PORT}`);
    }
})

function htmlTemplate(jsx) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>New React App</title>
    </head>
    <body>
        <div id="root">${jsx}</div>
        <script type="text/javascript" src="bundle.js"></script>
    </body>
    </html>
    `
}