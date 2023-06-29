const Book = require("../model/books")
const {getResponseStructure}=require("../assets/responseStructure")
const saveBook=async(req,res)=>{
    const book=new Book(req.body);
    try{
       await book.save().then((ressult)=>{
        const resp=getResponseStructure(req.body,200,"data inserted Successfully");
        res.send(resp)
       }).catch((err)=>{
        console.log("values error"+err)
       })
    }catch(err){

        res.send("something went bad at server side")
        console.log(err)
    }
}

const updateBook=(req,res)=>{
    console.log(req,body)
}

const deleteBook=(req,res)=>{
    console.log(req.param.id)
}

const getAllBooks=(req,res)=>{

}

const getBooKById=(req,res)=>{


}
 

const getBooksByAuthor=(req,res)=>{

}

const getBookByName=(req,res)=>{

}



module.exports={
    saveBook,
    updateBook,
    deleteBook,
    getAllBooks,
    getBooKById,
    getBooksByAuthor,
    getBookByName
}