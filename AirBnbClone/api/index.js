const express = require('express')
const app = express();

app.get('/test',(req,res)=>{
    res.json('test done')
})

app.listen(3000)