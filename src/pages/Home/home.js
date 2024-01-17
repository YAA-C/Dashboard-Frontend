import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import axios from "axios";
import "./home.css";

export const Home = () => {
  const [username,setUsername]=useState("");
  const [apikey,setApiKey]=useState("");
  const [, , removeCookie] = useCookies(["access_token"]);
  const navigate = useNavigate();

  useEffect(()=>{
    axios.post("http://localhost:3001/user/getUser",{id:window.localStorage.getItem("userID")}).then((res)=>{
      setUsername(res.data.user.username);
      setApiKey(res.data.user.apikey);
    }).catch((err)=>{
      console.log(err);
    })
  },[])

  const modifyApiKey=async()=>{
    axios.patch("http://localhost:3001/user/createApiKey",{id:window.localStorage.getItem("userID")}).then((res)=>{
      if(res.data.success){
        setApiKey(res.data.newApiKey)
      }
    }).catch((err)=>{
      console.log(err);
    })
  }

  const logout=()=>{
    removeCookie("access_token", { path: "/", domain: "localhost" });
    localStorage.removeItem("userID");
    navigate("/auth");
  }

  return (
    <>
        <div className='white-box'>
            <h2>USERNAME :{username}</h2>
            {
              apikey?(<>
                <h4>API key: {apikey}</h4>
                <button className='btn btn-primary' onClick={modifyApiKey}>Update API key</button>
                <button className='btn btn-danger' onClick={logout}>Log out</button>
              </>):(<>
                <button className='btn btn-primary' onClick={modifyApiKey}>Create API key</button>
              </>)
            }
        </div>
    </>
  )
}
