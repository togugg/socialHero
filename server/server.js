'use strict';
const express = require('express')

const cors = require('cors');
const app = express();

const port = 8080


app.use(cors());

app.use(express.static((__dirname + '/../website')));

app.use('*', (req, res) => {
    res.sendFile(__dirname + '/../website/index.html');
})

app.listen(port);

console.log('App listening on port '+port)

