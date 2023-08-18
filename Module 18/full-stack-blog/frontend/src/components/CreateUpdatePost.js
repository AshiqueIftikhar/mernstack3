import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate,useParams} from "react-router-dom";



function CreateUpdatePost() {

let {id} = useParams();
    let [FormValue,SetFormValue] = useState({Img:"",ProductCode:"",ProductName:"",Qty:"",TotalPrice:"",UnitPrice:""});
    let navigate = useNavigate();

   let [isProduct,setIsProduct]=useState(false);

    useEffect(()=>{

        (async ()=>{
           let res=await axios.get("https://crud.teamrabbil.com/api/v1/ReadProductByID/"+id);
           SetFormValue(res.data['data'][0]);
            setIsProduct(true);
        })()

    },[])


    const InputOnChange = (property,value) => {
        SetFormValue({...FormValue,[property]:value});
    }

    const onSubmit = async () => {
        let URL="https://crud.teamrabbil.com/api/v1/CreateProduct"
        if(id){
            URL="https://crud.teamrabbil.com/api/v1/UpdateProduct/"+id;
        }
       let res= await axios.post(URL, FormValue);
       if(res.status===200){
              alert("Save Changes");
              navigate('/');
       }
    }

  return (
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
          placeholder="Author an Author Name"
        />
      </div>
    </div>
  );
}

export default CreateUpdatePost;
