"use client";
import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchApiUser } from "../redux/userSlice";

export default function APIUser() {
  const dispatch = useDispatch();
  const {userAPIData} = useSelector((state)=> state.usersData)

  useEffect(() => {
    async function fetchData() {
      dispatch(fetchApiUser());
    }
    fetchData();
  }, []);


  return (
    <div>
      <h1>User List Api</h1>
      {userAPIData && userAPIData.map((user,index)=>{
        return (
        <div key={index}>
          <span> {user.name} </span>   <br/>  <br/>
        
        </div>
        )
      }) }
    </div>
  );
}
