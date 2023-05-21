const express = require("express")

const app = express()

const port = 5000

var Users = [

    {name: "islem",age : 29 , id:1},
    {name: "alaya",age : 27 , id:2},
    {name: "bacha",age : 25 , id:3}

]
app.use(express.json()) 
app.get('/users',(req,res)=>{
   res.send(Users)
})
app.post('/addusers',(req,res)=>{
    Users=[...Users,req.body]
    res.send(Users)
})

app.delete('/deleteusers/:id',(req,res)=>{
    const {id}=req.params
    Users= Users.filter(el=> el.id != id)
    res.send(Users)
})

app.put('/upusers/:id',(req,res)=>{
    const{id} = req.params
    Users= Users.map(el=>el.id==id?{...el,...req.body}:el)
    res.send(Users)
})

app.listen(port,console.log("server is running"))