const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to Bamboo"
    })
})

app.listen(3000);