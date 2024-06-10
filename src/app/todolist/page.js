
"use client";
import React, { useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import Link from 'next/link';
import { addTodo } from '../redux/todoSlice';

export default function AddUser() {

  const [todo,setTodo] = useState('');
  const {todos} = useSelector((state) => state.todosData);
  const dispatch = useDispatch();

  const userDispatch = () =>{
    dispatch(addTodo({todo}));

  }
  return (
    <div className='add_user'>
        <h4>Add Todo </h4>
        <input type="text" placeholder="Enter Name" 
          onChange={(e)=>setTodo(e.target.value)}
        />
        <button onClick={userDispatch} className='add_user_button'>Add</button>

        <br/>
        <h2>
            Todo List
        </h2>

        {
            todos && todos.map((todo) => (
                <div key={todo.id} className='d-flex'>
                    <span> {todo.name} </span>
                    <span><button onClick={()=>handleDelete(todo.id)}>Remove</button></span>
                </div>
            ))
        }

    </div>
  )
}
