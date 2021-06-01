const Post = require("./models/post");

const express = require("express");
const mongoose = require("mongoose");
const mongoDbString = require("./config/config");

const app = express();

app.set("view engine", "ejs");
app.set("views", "src/views");

//prisijungimas prie duombazes
mongoose.connect(mongoDbString, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => {
       console.log("connected to mongoose")
       app.listen(5000)
    })
    .catch((error) => console.warn(error))


app.get("/", (req, res) => res.render('index'));

app.get("/add-post", (req, res) => {
   //si nauja posta norime sukurti pagal schemoje aprasyta modeli
   const newPost = new Post({
      title: "this is mongoose db",
      author: "Mike Tyson",
      body: "mongodb is an easy way to db",
   })
   //issaugoti duomenu bazeje naudojame .save()
   newPost.save()
   res.send("all good");
})