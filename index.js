require("dotenv").config()
const express=require("express")
const app =express()
const library_router=require("./routes/library")

//database 
require("./conn/conn")


app.use(express.json())
app.use("/library",library_router)

const port =3000||process.env.PORT


app.listen(port,()=>{

    console.log(`server running at port http://localhost:${port}`)
})



