const express = require('express')
const app = express();

app.use(express.json());

function ageCheck(req,res,next){
    const age = req.query.age
    if(age >= 14){
        next();
    }
    else{
        res.status(411).send('You are too young to ride this')
    }
}

app.get('/ride1',ageCheck,(req,res)=>{
    res.send('You have succesfully taken ride 1');

})

app.get('/ride2',ageCheck,(req,res)=>{
    res.send('You have sucessfully taken ride 2');
})


app.listen(3000);