//use middlewares

const express = require('express');

const app = express();

app.get('/health-checkup',function(req,res){
    const kidenyID = req.query.kidenyID;
    const username = req.headers.username;
    const password = req.headers.password;

    if(username !== 'aditya' || password !='123'){
        res.status(400).json("msg:somethings up with your inputs")
        return
    }

    if(kidenyID != 1 && kidenyID != 2){
        res.status(400).json('msg: invalid kidneys')
        return;
    }

    res.json({
        msg:"all ok!"
    })



})

app.listen(3000);
