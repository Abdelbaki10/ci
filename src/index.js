const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.status(200).send('get to the application')
})

app.listen(4000,()=>{
    console.log('app is runing on port 4000');
})