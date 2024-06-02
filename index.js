const express =require("express")
const cors = require("cors")
const app =express()
 app.use(express.json())
 app.use(cors())
app.get("/" , async (req,res) => {
  await  res.json("third api")
})

app.get("/user" , async (req,res) => {
    await  res.json("third user")
  })
app.listen(8000, (req,res) => {
    console.log("server is run on 8000")
})