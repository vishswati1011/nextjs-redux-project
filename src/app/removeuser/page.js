'use client';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../redux/slice';
import { useRouter } from 'next/navigation';

export default function RemoveUser() {
  
    const {users} = useSelector((state) => state.usersData);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleDelete = (id) => {
        dispatch(removeUser({id}))
    }

    return (
        <div>
            <h1>
                Remove User Page
            </h1>
            {users && users.map((user) => (
                <div key={user.id} className='d-flex'>
                 <span> {user.name} </span>
                    <span><button onClick={()=>handleDelete(user.id)}>Remove</button></span>
                </div>
            ))}

            <br/>
            <button onClick={()=>router.push('/')} className='add_user_button'>Add User</button>
        
        </div>
    )
}
