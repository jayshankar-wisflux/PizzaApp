const mongoose=require('mongoose');
mongoose.connect(process.env.DB_URL ||'mongodb://127.0.0.1:27017/pizzaapp',
(err)=>{
    if(!err){
console.log("DB connection successfull");
    }else{
        console.log("DB connection faild "+err);
    }

});
module.exports=mongoose;