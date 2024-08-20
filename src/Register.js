import React, { useState } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import {Link, useNavigate} from 'react-router-dom';
import './auth.css';
import {collection, addDoc , getDocs} from 'firebase/firestore'
import { app, db } from './firebase';


const Register = ({setUserDetail,setAuth}) => {
  //Storing the input value  using useState Hooks
  const [name,setName] = useState('');
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  //Creating Database Refrence To Store User Information
  const dbref = collection(db,'Users')

  //Creating Use Account On Firebase
  const authentication = async(e) =>{
    //Creating New User Account
    if(name.length === 0 || email.length === 0 || phone.length === 0 || password.length === 0){
      alert("All Fields are required")
    }
    else{
    try{
    e.preventDefault();
    const createAccount = await app.auth().createUserWithEmailAndPassword(email,password);
    if(createAccount){
      const userInfo = await addDoc(dbref,{Name:name,Email:email,Phone:phone})
      if(userInfo){
      //Fetching the userData from database
      const getData = await getDocs(dbref);
      const data = getData.docs.map((doc)=>({id:doc.id,...doc.data()}))
      const userdata = data.find((info) =>{
        return info.Email === email;
      })
      setUserDetail(userdata);
      alert('User Registered Successfully');
      setAuth(true);
      navigate('/');
      }
    }
    else{
      alert("Error While Registering User");
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
                type="text"
                placeholder="Full Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
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
                type="number"
                placeholder="Phone Number *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
            <button onClick={authentication}>Register</button>
            <p>
              Already Have Account <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register