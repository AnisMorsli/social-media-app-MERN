import mongoose from "mongoose";

const storySchema = mongoose.Schema({
    caption : {type : String, require: true},
    username : {type: String, require :true},
    userId : {type : String, require : true},
    image : {type : String, require :true},
    tags : String,
    likes : { types : Number, default : 0 },
    postDate : { type: Date , default : new Date()},

})


export default mongoose.model("Story", storySchema)