import React from 'react'
import NewTodo from '../components/NewTodo'
import TodoList from '../components/TodoList'

const TodoPage = () => {
  return (
    <div className='container my-5'>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h5>My Todo App</h5>
                    </div>
                    <div class="card-body">
                        <NewTodo />
                        <br/>
                        <br/>
                        <TodoList/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TodoPage