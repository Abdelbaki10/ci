const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('App is running on port 4000')
})

app.get('/test', (req, res) => {
    res.status(200).send('adding test route')
})

app.listen(4000, () => {
    console.log('app is runing on port 4000');
})