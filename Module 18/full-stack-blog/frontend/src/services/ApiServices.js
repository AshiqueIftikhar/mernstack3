import axios from "axios";

export function Create(title, content, author){
    let URL= "/api/v1/CreatePost"
    let postBody= JSON.stringify({
        title:title,
        content:content,
        author:author
    })
   return axios.post(URL,postBody,{headers:{"Content-Type" : "application/json"}}).then(res=>{
        if(res.status==200){
            return true;
        }
        else{
            return false;
        }
    }).catch(err=>{
        console.log(err);
        return false;
    });
}
export function Read(){
    let URL= "/api/v1/ReadPost"
    return axios.get(URL,{headers:{"Content-Type" : "application/json"}}).then(res=>{
        if(res.status===200){
            return res.data['data'];
        }else{
            return false;
        }
        
    }).catch(err=>{
        console.log(err);
        return false;
    });
}
export function Update(id){
    let URL= "/api/v1/UpdatePost"+id
    let postBody={
        title:title,
        content:content,
        author:author
    }
    return axios.post(URL,postBody).then(res=>{
        if(res.status===200){
            return true;
        }else{
            return false;
        }
    }).catch(err=>{
        console.log(err);
        return false;
    });
}
export function Delete(id){
    let URL= "/api/v1/DeletePost/"+id
    return axios.post(URL).then(res=>{
        if(res.status===200){
            return true;
        }else{
            return false;
        }
    }).catch(err=>{
        console.log(err);
        return false;
    });
}
