var express=require("express");
var app=express();
var multer=require("multer");
app.use(express.json());
var k=(req,res,next)=>{
    console.log(req.body);
    next();
};
var storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,__dirname);
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    },
});
var upload=multer({storage});


app.use(k);
app.use(express.urlencoded({extended:true}));
app.get("/register",(req,res)=>{
    res.send({
        "name":"ranjith",
        "age":12
    });
    

});
app.get("/login",(req,res)=>{
    res.send("login successful");
});
// app.get("/*",(req,res)=>{
//     res.send("invalid");
    
// });
app.get("/:r",(req,res)=>{
    res.send(req.query)
});
app.post("/",upload.single("file"),(req,res)=>{
    res.send(req.body);
    // res.send(req.file);
    // res.send(req.file.size);
})

app.listen(3000,()=>{
    console.log("started");
})