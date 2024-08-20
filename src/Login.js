import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";
import { collection, getDocs } from "firebase/firestore";
import { app, db } from "./firebase";

const Login = ({setUserDetail,setAuth}) => {
    //Storing the input value  using useState Hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  //Creating Database Refrence To Store User Information
  const dbref = collection(db,'Users')

  //Creating Use Account On Firebase
  const authentication = async(e) =>{
    //Creating New User Account
    if(email.length === 0 ||  password.length === 0){
      alert("All Fields are required")
    }
    else{
    try{
    e.preventDefault();
    const createAccount = await app.auth().signInWithEmailAndPassword(email,password);
    if(createAccount){
      //Fetching the userData from database
      const getData = await getDocs(dbref);
      const data = getData.docs.map((doc)=>({id:doc.id,...doc.data()}))
      const userdata = data.find((info) =>{
        return info.Email === email;
      })
      setUserDetail(userdata);
      alert('User Login Successfully');
      setAuth(true);
      navigate('/');
      }
    else{
      alert("Error While Login User");
    }
  }
  catch(error){
     alert(error)
  }
  }
  }
  return (
    <>
      <div className="auth">
        <div className="container">
          <h2>angel</h2>
          <div className="icon">
            <FaCartShopping />
          </div>
          <div className="form">
            <div className="box">
              <input
                type="email"
                placeholder="E-mail *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="box">
              <input
                type="password"
                placeholder="Password *"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <button onClick={authentication}>Login</button>
            <p>
              Don't Have Account <Link to='/register'>Register</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}


export default Login