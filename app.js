const express = require("express")
const { userCollection, orgCollection, publicationCollection } = require("./server")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())



app.get("/",cors(),(req,res)=>{

})

app.post("/",async(req,res)=>{
    const{role,uname,password}=req.body
    let check = null

    try{
        if (role === 'user') {
            check=await userCollection.findOne({username:uname})
        } else {
            check=await orgCollection.findOne({username:uname})
        }

        if(check && check.password === password){
            res.json("exists")
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
        status:'null'
    }

    try{
        const check = await userCollection.findOne({email:email})
        const check2 = await userCollection.findOne({username:username})
        console.log(check,check2);

        if(check || check2){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await userCollection.insertMany([data])
        }
    }
    catch{
        res.json("Does not exist")

    }
})

app.post("/changeStatus",async(req,res)=>{
    const{uname,decision}=req.body

    //Change status of that uname True/False
    const user = await userCollection.findOneAndUpdate(
        { username: uname },
        { status: decision },
        { new: true }
    );

})

app.post("/savePaper",async(req,res)=>{
    const{user, title, authors, keywords, abstract, pdf, draft}=req.body
    const data = {
        user:user,
        title:title,
        authors:authors,
        keywords:keywords,
        abstract:abstract,
        pdf:pdf,
        draft:draft
    }

    try{
        const check = await publicationCollection.findOne({user:user})

        if(check && check.title === title){
            if (check.draft === true) {
                // update with new data
            } else {
                res.json("exist")
            }
        } else{
            res.json("notexist")
            await publicationCollection.insertMany([data])
        }
    }
    catch{
        res.json("Does not exist")

    }    

})

app.post("/userDetails",async(req,res)=>{
    const{uname}=req.body

    const check=await userCollection.findOne({username:uname})

    if (check) {
        res.json(check)
    } else {
        res.json('User does not exist')
    }
    

})

app.listen(8000,()=>{
    console.log("Port connected");
})
