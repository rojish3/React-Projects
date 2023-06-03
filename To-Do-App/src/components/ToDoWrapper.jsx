import React, { useState } from 'react'
import ToDoForm from './ToDoForm'
import {v4 as uuidv4} from 'uuid'
import ToDo from './ToDo';
uuidv4();

const ToDoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo  => {
        setTodos([...todos, {id :uuidv4(), task: todo, completed: false, isEditing: false}])
        console.log(todos);
    }
  return (
    <div className='TodoWrapper'>
        <ToDoForm addTodo={addTodo} />
        <ToDo />
    </div>
  )
}

export default ToDoWrapper