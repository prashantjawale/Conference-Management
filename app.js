const express = require("express")
const collection = require("./server")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())



app.get("/",cors(),(req,res)=>{

})

app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("Exists")
        }
        else{
            res.json("Does not exist")
        }
    }
    catch{
        res.json("Does not exist")

    }
})


app.post("/signup",async(req,res)=>{
    const{name,affiliation,affiliation_address,email,contact_no,website,username,password}=req.body
    const data={
        name:name,
        affiliation:affiliation,
        affiliation_address:affiliation_address,
        email:email,
        contact_no:contact_no,
        website:website,
        username:username,
        password:password,
        status:false
    }

    try{
        const check = await collection.findOne({email:email})
        const check2 = await collection.findOne({username:username})

        if(check || check2){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }
    }
    catch{
        res.json("Does not exist")

    }
})

app.listen(8000,()=>{
    console.log("Port connected");
})
