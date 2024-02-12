const express = require ('express');
const app = express()
app.use(express.json())

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:qmzHNfWimhJtuT7z@cluster0.2avpzqz.mongodb.net/')

const User = mongoose.model('users',{
    name: String,
    email : String,
    password : String,
});

app.post('/signup', async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({email:username});
    if(existingUser){
        return res.status(400).send("username already exists")
    }

    const newUser = new User({
        name:name,
        email:username,
        password:password
    })
   
    
    newUser.save().then(()=>{
        res.status(200).send("Created user")
    }).catch((err)=>{
        res.status(500).send("internal error")
    })
    
})
app.listen(3000);



