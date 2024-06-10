
'use client';
import React from 'react'
import { useSelector } from 'react-redux';
import styles from './displayuser.module.css';
import { useDispatch } from 'react-redux';
import { removeUser } from '../redux/slice';

export default function DisplayUsers() {

  const {users} = useSelector((state) => state.usersData);
  const dispatch = useDispatch();

  console.log(users,"userData")

  const handleDelete = (id) => {
    dispatch(removeUser({id:id}))
  }

  return (
    <div className={styles.display_user}>
        <h1>User List</h1>
        <table className={styles.user_div}>
          <thead className={styles.tablehead}>
            <tr>
              <th>Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users && users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td><button className={styles.edit_button}>Edit</button></td>
                <td><button className={styles.delete_button} onClick={()=>handleDelete(user.id)}>Delete</button></td>
              </tr>
            ))
            }
          </tbody>
        </table>
    </div>
  )
}
