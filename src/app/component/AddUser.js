
"use client";
import React, { useState } from 'react'
import {addUser} from '../redux/userSlice';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

export default function AddUser() {

  const [name,setName] = useState('');
  const dispatch = useDispatch();

  const userDispatch = () =>{
    dispatch(addUser({name:name}));

  }
  return (
    <div className='add_user'>
        <h4>Add New User </h4>
        <input type="text" placeholder="Enter Name" 
          onChange={(e)=>setName(e.target.value)}
        />
        <button onClick={userDispatch} className='add_user_button'>Add User</button>
        <Link href='/removeuser'> <button  className='remove_user'>Remove User Page</button></Link>
        <Link href='/apiuser'> <button  className='remove_user'>API User List Page</button></Link>

    </div>
  )
}
