//creating an http server
//not in built

const express = require('express');
const app = express();
app.use(express.json());

// function sum(n){
//     let ans = 0;
//     for(let i = 0;i<=n;i++){
//         ans = ans +i;
//     }
//     return ans;
// }

// app.get('/',function(req, res){
//     const n = req.query.n;
//     const ans = sum(n);
//     res.send(`Hello my ans is ${ans}`)
// })
const users = [{
    name:"Aditya",
    kidneys:[{
        healthy: false,

    }],

}]

app.get('/',function(req,res){
    //writing logic
    const adityaKidney = users[0].kidneys;
    const noOfkidney = adityaKidney.length;

    let noOfHealthyKidneys = 0
    for(let i = 0;i<adityaKidney.length;i++){
        if(adityaKidney[i].healthy){
            noOfHealthyKidneys = noOfHealthyKidneys+1;
        }
    }

    const unHealthyKidneys = noOfkidney-noOfHealthyKidneys;

    res.json({
        noOfkidney,
        
        noOfHealthyKidneys,
        unHealthyKidneys,
    })
    
})

app.post('/',function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    });

    res.json({
        msg:"DONE IT"
    })

})

app.put('/',function(req,res){
    if(isThereUnhealthy()){
    for(let i =0 ;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({})
}
else{
    res.status(411).json({
        msg:"There are no unhelathy kids"
    })
        
    
}
})

app.delete('/',function(req,res){
    //should return 411 status code
    //only if one unhealthy kid exits

    if(isThereUnhealthy()){
        const newKidneys = [];
    for(let i = 0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy == false){
            newKidneys.push({
                healthy : true,
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({msg:"Done"});

    }

    else{
        res.status(411).json({
            msg:"you have no bad kideny",
        })
    }
   

    
})

function isThereUnhealthy(){
    let atLeastOneUnhealthyKidney =false;
    for(let i =0 ;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atLeastOneUnhealthyKidney = true;
        }
    }
    return atLeastOneUnhealthyKidney
}



app.listen(3000);