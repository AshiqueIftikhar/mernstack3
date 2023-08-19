
import { useEffect, useState } from 'react';
import axios  from 'axios';
import { useNavigate, useParams } from 'react-router';

function CreateUpdatePost(){
  
  let {id} = useParams();
  const [formValue, setFormValue]=useState({"title":"", "content":"", "author":""});
  let navigate = useNavigate();

  useEffect(()=>{
    axios.get("http://localhost:5000/api/v1/ReadPostById/"+id).then(res=>{
      setFormValue(res.data['data'])
      //console.log(res.data['data'][0])
    }).catch(err=>{
      console.log(err)
    })
  },[])

  // useEffect(()=>{
  //   (async()=>{
  //     let res = await axios.get("http://localhost:5000/api/v1/ReadPostById/"+id);
  //     setFormValue(res.data['data'])
  //   })()
  // },[])

  const onInput=(property, value)=>{
  setFormValue({...formValue, [property]:value})
  }

  let BASEURL = "http://localhost:5000/api/v1/CreatePost"
  if(id){
      BASEURL = "http://localhost:5000/api/v1/UpdatePost/"+id
  }
  const onsubmit= async ()=>{
    //alert(JSON.stringify(formValue));
    let res = await axios.post(BASEURL,formValue)
    if(res.status===200){
      alert("Data inserted Successfully");
    }
    navigate("/")
    //navigate(0);
  }

  return (
    <>
        <div className="container">
       <div className="mb-3">
        <label for="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter a Content Title"
          value={formValue.title}
          onChange={(e)=>{onInput("title",e.target.value)}}
        />
      </div>
      <div className="mb-3">
        <label for="content" class="form-label">
          Content
        </label>
        <textarea
          className="form-control"
          id="content"
          rows="6"
          value={formValue.content}
          onChange={(e)=>{onInput("content",e.target.value)}}
        ></textarea>
      </div>
      <div className=" col-6 mb-3">
        <label for="author" className="form-label">
          Author
        </label>
        <input
          type="text"
          className="form-control"
          id="author"
          placeholder="Provide an Author Name"
          value={formValue.author}
          onChange={(e)=>{onInput("author",e.target.value)}}
        />
      </div>
    </div>
    <div className='container mt-5'>
      <div className='row'>
      <div className='col-3'>
      <button type='submit' className='btn btn-primary w-100' onClick={onsubmit}>Submit</button>
      </div>
      </div>
    </div>
    </>

  );

}

export default CreateUpdatePost;
