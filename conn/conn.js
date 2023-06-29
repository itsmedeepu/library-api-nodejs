const mongoose= require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/library").then((res)=>{
    console.log("connection successfull to database")
}).catch((err)=>{

    console.log(err)
})

