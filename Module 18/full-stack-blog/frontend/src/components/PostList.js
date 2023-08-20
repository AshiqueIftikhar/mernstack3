import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function PostList() {

  const [ListPost, setListPost] = useState([]);
  let navigate = useNavigate();
  useEffect(()=>{
    let BASEURL = "https://blog-express-k50e.onrender.com/api/v1/ReadPost"
    axios.get(BASEURL).then(res=>{
      setListPost(res.data['data']);
      //console.log(ListPost)
    })
  },[])

  const onDelete=(id)=>{
    axios.post("https://blog-express-k50e.onrender.com/api/v1/DeletePost/"+id).then(
      navigate(0)
    )
  }

  return (
    <div className="container">
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Author</th>
            <th><span></span></th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {ListPost.map((post, index)=>{
           return(  
            <tr key={index}>
            <td>{post.title}</td>
            <td>{post.content}</td>
            <td>{post.author}</td>
            <td><Link to={"/update/"+post._id} className="btn btn-primary">Edit</Link></td>
            <td><button className="btn btn-danger" onClick={()=>onDelete(post._id)}>Delete</button></td>
          </tr>
           )
            })}
        </tbody>
      </table>
    </div>
  );
}

export default PostList;
