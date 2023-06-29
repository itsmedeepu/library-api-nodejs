function ResponseStructure(data,statuscode,message){

   this.data=data;
   this.statuscode=statuscode;
   this.message=message;
}


const  getResponseStructure=function(data,statuscode,message){

    return new ResponseStructure(data,statuscode,message);
}

module.exports={
    getResponseStructure
}