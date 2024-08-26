import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './Register'
import Login from './Login';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';
import Contact from './Contact';


const Router = ({setUserDetail, setAuth, product, setProduct, addtocart, setCart, cart, userDetail, auth}) => {
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
          element={<Home addtocart={addtocart} setUserDetail={setUserDetail} product={product} />}
        />
        <Route
          path="/shop"
          element={<Shop addtocart={addtocart} product={product} setProduct={setProduct} />}
        />
        <Route path="/cart" element={<Cart userDetail={userDetail} setCart={setCart} cart={cart} auth={auth} />} />
        <Route path="/contact" element={<Contact auth={auth} />}/>
      </Routes>
    </>
  );
}

export default Router