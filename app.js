const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const loginModel = require("./models/admin")
const app = express()
app.use(cors())
app.use(express.json())
                                       //password|
mongoose.connect("mongodb+srv://Jafna02:jafna9074@cluster0.icijy.mongodb.net/PatientDb?retryWrites=true&w=majority&appName=Cluster0")

app.get("/test",(req,res)=>{
    res.json({"status":"success"})
})

app.post("/adminsignUp",(req,res)=>{
   let input = req.body
   let hashedpassword=bcrypt.hashSync(input.password,10)
   //console.log(hashedpassword)
   input.password=hashedpassword
   console.log(input)
   let result=new loginModel(input)
    result.save()    //mongokk save cheyyan
    res.json({"status":"success"})
})

app.listen(8080,()=>{
    console.log("server started")
})