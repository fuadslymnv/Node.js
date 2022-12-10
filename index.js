const express = require("express");
const app = express();
app.get('/',(req,res)=>{
    // res.json("json rendered text")
    let employees=[
        {id:1,name:'Fuad',age:19},
        {id:2,name:'Samir',age:24},
        {id:3,name:'Eli',age:20}
    ]
    res.json(employees)
})

app.listen(3000,()=>{
    console.log('Server started on 3000 port')
})