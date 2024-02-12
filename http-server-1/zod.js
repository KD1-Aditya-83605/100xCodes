const express = require('express');
const app = express();
const zod = require('zod');

app.use(express.json());

//using zod
 const schema = zod.array(zod.number());

 //  {  email: string =>email
 //       password : atleast 8 char
 //         country : "IND" ,"US"
 //

 const schemas = zod.object({
    email: zod.string(),
    password: zod.string(),
    country : zod.literal("IN").or(zod.literal("US")),
 })

app.post('/health-checkup', function (req, res) {

    
    const kidneys = req.body.kidneys; // corrected variable name
    const responce = schema.safeParse(kidneys);  

    // res.send(responce);
    if(!responce.success){
        res.status(411).json({
            msg: 'Invalid input'
        })
    }
    else{
        res.send({
            responce
        })
    }
    
   
});


//global catches - for handeling erorr

app.use(function(err,req,res,next){
    res.json({
        msg:"server is down"
    })
})

app.listen(3000)