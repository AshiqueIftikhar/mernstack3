const mongoose = require('mongoose');

const PostSchema = mongoose.Schema(
    {
    title:{type:String, required: true},
    content:{type:String, required: true},
    author:{type:String, required: true},
    createdAt:{type:Date, default:Date.now()}
    },
    {versionKey:false}
) 

const PostModel = mongoose.model("posts",PostSchema);
module.exports = PostModel;