const express=require("express")
const mongoose=require("mongoose")
require('dotenv').config()
const Product=require("./models/model.js")
const cors=require("cors")
const bodyParser = require('body-parser');

const app=express()

app.use(cors())
app.use(express.json());
app.use(bodyParser.json()); 
app.use(express.urlencoded({ extended: true })); 

const authenticateKey = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];

    if (!apiKey || apiKey !== process.env.API_KEY) {
        return res.status(401).json({ msg: 'Unauthorized' });
    }

    next();
};

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

app.use(authenticateKey);


app.post('/addproduct',async(req,res)=>{
    try {
        const product=await Product.create(req.body)
        res.status(201).json(product)

    } catch (error) {
        res.status(500).json({msg:error})
    }
    
})

app.get('/getproducts',async(req,res)=>{
    try {
        const products=await Product.find({})
        res.status(201).json(products)
    } catch (error) {
        res.status(500).json({msg:error})
    }
})

app.patch('/updateproduct/:id',async(req,res)=>{
    try {
        const product=await Product.findOneAndUpdate({productId:req.params.id},req.body)
        if(!product){
            res.status(404).json({msg:"No product with this ID"})
        }
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json({msg:error})
    }
})

app.delete('/deleteproduct/:id',async(req,res)=>{
    try {
        const product=await Product.findOneAndDelete({productId:req.params.id})
        if(!product){
            res.status(404).json({msg:"No product with this ID"})
        }
        res.status(201).json(product)
        
    } catch (error) {
        res.status(500).json({msg:error})
    }
})

app.get('/getfeatured',async(req,res)=>{
    try {
        const products=await Product.find({featured:true})
        res.status(201).json(products)
    } catch (error) {
        res.status(500).json({msg:error})
    }
})

app.get('/getfeatured/price/:pricelimit',async(req,res)=>{
    try {
        const products=await Product.find({featured:true, price:{$lt:req.params.pricelimit}})
        res.status(201).json(products)
    } catch (error) {
        res.status(500).json({msg:error})
    }
})

app.get('/getfeatured/rating/:ratinglimit',async(req,res)=>{
    try {
        const products=await Product.find({featured:true, rating:{$gt:req.params.ratinglimit}})
        res.status(201).json(products)
    } catch (error) {
        res.status(500).json({msg:error})
    }
})



const PORT=3000;
const start=async()=>{
    await mongoose.connect(process.env.MONGO_URI)
    app.listen(PORT,()=>{
        console.log("Listening on port "+PORT);
    });

}

start()
