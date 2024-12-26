const express=require("express")
const router = express.Router()
const article = require("../models/Article");

router.post("/", async (req,res)=>{
    const {title,active,body} = req.body
    const articlem = await article.create({title:title,active:active,body:body});
    res.json(articlem)
    })
    module.exports = router