import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './Register'
import Login from './Login';
import Home from './Home';

const Router = ({setUserDetail,setAuth,product}) => {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register setUserDetail={setUserDetail} setAuth={setAuth} />}/>
        <Route path="/login" element={<Login setUserDetail={setUserDetail} setAuth={setAuth} />}/>
        <Route path="/" element={<Home setUserDetail={setUserDetail} product={product} />}/>
      </Routes>
    </>
  );
}

export default Router