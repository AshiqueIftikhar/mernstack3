import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TodoDeleteAlert } from './TodoDeleteAlert'
import { TodoEditAlert } from './TodoEditAlert'

const TodoList = () => {
    const todoList = useSelector(state=>state.todo.value)

    return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-10">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Task Name</th>
                            <th>Completed?</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                    {todoList.map((todo,index)=>{
                        return(
                            <tr key={index}>
                            <td>{index+1}</td>
                            <td>{todo}</td>
                            <td><input type='checkbox' className='form-check-input'/></td>
                            <td><button className="btn btn-danger" onClick={()=>TodoDeleteAlert(index,todo)}>Delete</button></td>

                        </tr>
                        )
                     
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default TodoList