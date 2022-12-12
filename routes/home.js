const express = require('express')
const router = express.Router()

const mysql = require('mysql2')
const app = express()
const port = 3000

app.set("view engine", "ejs")                   
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static("public"))

const conn = mysql.createConnection({
    host: 'sql6.freesqldatabase.com',
    user: 'sql6584277',
    password: 'wnb97uGCEi',
    database: 'sql6584277',
    port: 3306
})


router.get("/", (req,res)=>{
    res.render("home",{ans:"", number:"", fullname: "", qstatus: "", getqdate:"", getqtime: ""})
})


router.post("/", (req,res)=>{
    res.render('home')
})

module.exports = router;
