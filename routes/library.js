const express = require("express")
const router=express.Router()

//database connection

const db = require("../conn/conn")

const {saveBook,updateBook,deleteBook, getBooKById, getAllBooks, getBooksByAuthor, getBookByName}=require("../controller/LibraryController")

router.get("/home",(req,res)=>{

    res.send("library home page ")

})


router.post("/savebook",saveBook);

router.put("/updateBook/:id")

router.delete("/delete/:id",deleteBook)

router.get("/getBookById/:id",getBooKById)
router.get("/getAllBooks",getAllBooks)
router.get("/getBookByAuthor",getBooksByAuthor)
router.get("/getBookByName",getBookByName)










module.exports=router