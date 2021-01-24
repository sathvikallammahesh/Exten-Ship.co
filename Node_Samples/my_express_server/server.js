const express = require("express")

const app = express()
app.get("/", function(req,res){
    res.send("<h1>Welcome hi</h1>")
})
app.listen(3000, function(){
    console.log("Server runnig..")
})

app.get("/about",function(req, res) {
    res.send("<em>Hello  satI'm Sathvik</em>")
})