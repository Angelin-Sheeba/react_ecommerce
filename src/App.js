import React, { useState } from 'react'
import Router from './Router'
import {BrowserRouter} from 'react-router-dom'
import Nav from './Nav';
import Product from './Product';
import Footer from './Footer';

const App = () => {
  //Storing User Detail In useState hooks
  const [userDetail,setUserDetail] = useState();
  const [auth,setAuth] = useState(false);

  //Storing Product Data In Usestate Hooks
  const [product,setProduct] = useState(Product);

  //Performing Search
  const [search,setSearch] = useState('');
  return (
    <>
      <BrowserRouter>
        <Nav auth={auth} setAuth={setAuth} userDetail={userDetail} setSearch={setSearch} search={search}/>
        <Router setUserDetail={setUserDetail} setAuth={setAuth} auth={auth} product={product} setProduct={setProduct}/>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App