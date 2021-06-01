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

//get all posts
app.get("/posts", (req, res) => {
   Post.find()
       .then((result) => {
          console.log(result)
          res.send(result)
       })
       .catch((error) => console.warn(error));
})

//get single post
app.get("/single-post",(req, res) => {
   const id = "60b60747c7707ccc732616ea"
   Post.findById(id)
       .then(result => {
          console.log(result)
          res.json(result)
       })
       .catch((error) => console.warn(error))
})


//create new post
app.get("/add-post", (req, res) => {
   //si nauja posta norime sukurti pagal schemoje aprasyta modeli
   const newPost = new Post({
      title: "3000 leagues under the sea",
      author: "Mike Tyson",
      body: "mongodb is an easy way to db",
   })
   //issaugoti duomenu bazeje naudojame .save()
   newPost
       .save()
       .then((result) => res.send(result))
       .catch(error => console.warn(error))
})