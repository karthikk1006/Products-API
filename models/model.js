const mongoose=require("mongoose")

const productSchema=new mongoose.Schema({
    productId:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating:mongoose.Schema.Types.Decimal128,
    createdAt:{
        type:Date,
        required:true,
        default: Date.now
    },
    company:{
        type:String,
        required:true
    }
})


module.exports=mongoose.models.Product || mongoose.model("Product",productSchema);