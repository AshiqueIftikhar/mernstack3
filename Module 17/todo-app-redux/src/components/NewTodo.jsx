import { useDispatch } from "react-redux"
import { addTodo } from "../redux/state/todoSlice";
import { useRef } from "react";

const NewTodo = () => {
    
    const dispatch = useDispatch();
    const newVal = useRef();

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-10">
                <input ref={newVal} placeholder='Task Name' type="text" className='form-control' />
            </div>
            <div className="col-md-2">
                <button className="btn btn-primary" onClick={()=>dispatch(addTodo(newVal.current.value))}>Add Task</button>
            </div>    
        </div>    
    </div>
  )
}

export default NewTodo