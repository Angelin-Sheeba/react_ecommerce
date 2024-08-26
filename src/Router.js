import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './Register'
import Login from './Login';
import Home from './Home';
import Shop from './Shop';

const Router = ({setUserDetail, setAuth, product, setProduct, addtocart, setCart, cart}) => {
  return (
    <>
      <Routes>
        <Route
          path="/register"
          element={<Register setUserDetail={setUserDetail} setAuth={setAuth} />}
        />
        <Route
          path="/login"
          element={<Login setUserDetail={setUserDetail} setAuth={setAuth} />}
        />
        <Route
          path="/"
          element={<Home setUserDetail={setUserDetail} product={product} />}
        />
        <Route
          path="/shop"
          element={<Shop addtocart={addtocart} product={product} setProduct={setProduct} />}
        />
      </Routes>
    </>
  );
}

export default Router