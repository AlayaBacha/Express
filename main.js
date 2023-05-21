const express = require("express")

const app = express()

const port = 5000

// const Middeleware =(req,res,next)=>{
//   console.log("islem")
//   next()
// }
// app.use(Middeleware)
 
// app.get("/test",(req,res)=>{
//     res.send('alaya')
// })


// app.get("/alaya",(req,res)=>{
//     res.send('<h1>PACHA</h1>')
// })

// app.get("/home",(req,res)=>{
//     res.sendFile(__dirname+"/public/Home.html")
// })
// app.get("/Style.css",(req,res)=>{
//    res.sendFile(__dirname+"/public/Style.css")
// })
// app.get("/index",(req,res)=>{
//    res.sendFile(__dirname+"/public/")
// })

app.use(express.static("public"))

app.listen(port, console.log("server is running"))