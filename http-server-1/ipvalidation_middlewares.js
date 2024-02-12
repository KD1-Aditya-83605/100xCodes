const express = require('express');
const app = express();

app.use(express.json());

app.post('/health-checkup', function (req, res) {

    
    const kidneys = req.body.kidneys; // corrected variable name
    const kidneysLength = kidneys.length; // corrected variable name

    res.send('You have ' + kidneysLength + ' kidneys');
    
   
});


//global catches - for handeling erorr

app.use(function(err,req,res,next){
    res.json({
        msg:"server is down"
    })
})

app.listen(3000)

