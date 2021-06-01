//reikia apibrezti kokio tipo duomenys bus saugomi

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
   title : {
      type : String,
      required : true
   },
      author : {
      type : String,
      required : true
   },
      body : {
      type : String,
      required : true
   },
},
    {timestamps : true}
);

//exportuoti naujai sukurti objekta pagal sita schema.
//turetu buti vienaskaita musu kolekcijos pavadinime.

const Post = mongoose.model("post", postSchema)

module.exports = Post;
