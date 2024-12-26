const mongoose= require("mongoose")
const articleschema=new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    active:{
        type:Boolean,
        default:false
    },
    body:{
        type:String,
        default:""
    }
    },
    {
        timestamps:true
        })
        module.exports=mongoose.model("Article",articleschema)
