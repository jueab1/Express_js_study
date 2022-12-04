// DAY 30=====>>>>>>
// first express application
/*var express= require("express")
var app =express()

app.get("/",(req,res)=>{
    res.end("hello express js")
})


app.listen(8000,function name(params) {
    console.log("server run success");
})*/

const { request } = require("express")

// Express.js routing ✔✔✔
/*var express= require("express")
var app =express()

app.get("/",(req,res)=>{
    res.end("hello express js")
})


app.get("/about",(req,res)=>{
    res.send("this is about pages")
})

app.get("/term",(req,res)=>{
    res.send("This is term pages")
})


app.listen(8000,function name(params) {
    console.log("server run success");
})*/


// Simple string response ✔✔✔✔✔✔

/*let express= require("express")
let app = express()

app.post("/one",(req,res)=>{
    res.end("This is double string")
})
app.post("/two",(req,res)=>{
    res.end('This is sinlge string')
})


app.listen(8000,function name(params) {
    console.log("server run success");
})*/


// Response status code ✔✔✔✔✔✔

/*let express= require("express")
let app= express()

app.post("/three",(req,res)=>{
    res.status(404)
    res.end("status code ok")
})


app.listen(8000,function name(params) {
    console.log("server run success");
})*/

// Json response ✔✔✔✔✔✔✔✔

/*let express= require("express")
let app=express()

app.post("/four",(req,res)=>{
    let jsonArray=[
        {
            name:"farid",
            city:"mymenshingh",
            occupation:"student"
        },
        {
            name:"minhaz",
            city:"dhaka",
            occupation:"job"
        }
    ]
    res.json(jsonArray)
})


app.listen(8000,function name(params) {
    console.log("server run success");
})*/

// DAY 31===>>>>
// Response download=>(or file download) 👍👍👍👍👍👍👍👍👍👍👍👍

/*let express= require("express")
let app= express()

app.get("/five",(req,res)=>{
    res.download("./uploads/download.jpg")
})


app.listen(8000,function name(params) {
    console.log("server run success");
})*/

// Response redirect 🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁

/*let express= require("express")
let app= express()

app.get("/Bangladesh",(req,res)=>{
    res.redirect("http://localhost:8000/pakistan")
})

app.get("/pakistan",(req,res)=>{
    res.send("This is pakistan")
})


app.listen(8000,function name(params) {
    console.log("server run success");
})*/


// ✌✌✌✌✌Response header ✌✌✌✌✌✌✌✌

/*let express= require("express")
let app= express()

app.post("/eight",(req,res)=>{
    res.append("name","farid")
    res.append("city","Mymenshingh")
    res.append("occupation","learner")
    res.append("Age","35")
    res.status(201)
    res.end("header add successfully")
})

app.listen(8000,function name(params) {
    console.log("server run success");
})*/

// 👀👀👀Response cookies 👀👀👀👀👀

/*let express= require("express")
let app= express()

app.get("/nine",(req,res)=>{
    res.cookie("name","jony")
    res.cookie("occupation","housewife")
    res.cookie("age","33")
    res.cookie("color","balck&white")
    res.end("cookies set successfully")
})

app.listen(8000,function name(params) {
    console.log("server run success");
})*/

// DAY 32==>>
// 🎈🎈🎈🎈🎈🎈working with Request 🎈🎈🎈🎈🎈🎈
// 🎗🎗get request query 🎗🎗🎗🎗
/*
const express= require("express")
const app= express()

app.get("/",(req,res)=>{
    const firstname=  req.query.firstname
    const lastname= req.query.lastname
    res.end(firstname+" "+lastname)
})


app.listen(8000,function name(params) {
    console.log("server run success");
})*/

// 🧨🧨🧨get request header🧨🧨🧨 

/*const express= require("express")
const app= express()

app.get("/",(req,res)=>{
    let firstname= req.header("firstname")
    let lastname= req.header("lastname")
    res.end(firstname+" "+lastname)
    // post-man=header bydeafult✔✔✔
    const password= req.header("password")
    res.end(password)
})

app.listen(8000,function name(params) {
    console.log("server run success");
})*/

// 😜😜😜post request 😜😜😜

/* 1) post request() same as get request method()*/

// 🕎🕎🕎Post request URL parameter 
/*1) post request url parameter same as get request url parameter */

// ☯☯☯☯☯☯ {post request header} ☯☯☯☯☯☯☯🤍🤍🤍

/*const express= require("express")
const app= express()

app.post("/",(req,res)=>{
    let username= req.header("username")
    let password= req.header("password")
    res.send("username:"+username +"password:"+password)
})


app.listen(8000,function name(params) {
    console.log("server run success");
})*/

// 🤍🤍🤍🤍post request json body{{body-parser}}🤍🤍🤍🤍🤍🤍

/*let express= require("express")
let bodyparser= require("body-parser")
const { json } = require("body-parser")

let app= express()
app.use(bodyparser.json())

app.post("/",(req,res)=>{
    let jsondata= req.body
   res.send(JSON.stringify(jsondata))
})


app.listen(8000,function name(params) {
    console.log("server run success");
})*/

// ▶▶▶▶post multipart form data ▶▶▶▶▶

/*var express= require("express")
var multer= require ("multer")
var multer= multer()
var app= express()
app.use(multer.array())
app.use(express.static("public"))

app.post("/",(req,res)=>{
    let jsondata= req.body
    const jsonstring= JSON.stringify(jsondata)
    res.send(jsonstring)
})
app.listen(8000,function name(params) {
    console.log("server run success");
})*/

// 🌞🌞🌞🌞🌞post method File upload using with multer⭐⭐⭐⭐⭐

let express= require("express")
let multer= require("multer")

let app = express()
let storage= multer.diskStorage({
    destination:function (req,file,callback) {
        callback(null,"./uploads")
    },
    filename:function name(req,file,callback) {
        callback(null,file.originalname)
    }
})
let upload= multer({storage:storage}).single("myfile")

app.post("/",(req,res)=>{
    upload(req,res,function(error) {
        if(error){
            res.send("file upload failed")
        }
        else{
            res.send("file upload success")
        }
    })
})
app.listen(8000,function name(params) {
    console.log("server run success");
})