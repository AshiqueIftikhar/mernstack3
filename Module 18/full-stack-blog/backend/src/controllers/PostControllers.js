const PostModel = require("../models/PostModel")

exports.CreatePost = (req, res)=>{
    let reqBody = req.body;
    //MongoDb Query
    PostModel.create(reqBody).then((data,err)=>{
        if(err){
            res.status(400).json({status:'fail', data:err})
        }else{
            res.status(200).json({status:'success', data:data})
        }
    })
}

exports.ReadPost = (req, res)=>{
    let Query={};
    let Projection= "title content author";
    //MongoDb Query
    PostModel.find(Query, Projection).then((data,err)=>{
        if(err){
            res.status(400).json({status:'fail', data:err})
        }else{
            res.status(200).json({status:'success', data:data})
        }
    })
}
exports.ReadPostById = (req, res)=>{
    let id = req.params.id;
    let Query={_id:id};
    let Projection= "title content author";
    //MongoDb Query
    PostModel.findOne(Query, Projection).then((data,err)=>{
        if(err){
            res.status(400).json({status:'fail', data:err})
        }else{
            res.status(200).json({status:'success', data:data})
        }
    })
}

exports.UpdatePost = (req, res)=>{
    let id = req.params.id;
    let Query={_id:id};
    let reqBody = req.body; 
    //MongoDb Query
    PostModel.updateOne(Query, reqBody).then((data, err)=>{
        if(err){
            res.status(400).json({status:'fail', data:err})
        }else{
            res.status(200).json({status:'success', data:data})
        }
    })
}
exports.DeletePost = (req, res)=>{
    let id = req.params.id;
    let Query={_id:id};
    //MongoDb Query
    PostModel.deleteOne(Query).then((data, err)=>{
        if(err){
            res.status(400).json({status:'fail', data:err})
        }else{
            res.status(200).json({status:'success', data:data})
        }
    })
}
