import React, { useState } from 'react'
import Router from './Router'
import {BrowserRouter} from 'react-router-dom'
import Nav from './Nav';

const App = () => {
  //Storing User Detail In useState hooks
  const [userDetail,setUserDetail] = useState();
  const [auth,setAuth] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Nav auth={auth} setAuth={setAuth} userDetail={userDetail}/>
        <Router setUserDetail={setUserDetail} setAuth={setAuth} auth={auth}/>
      </BrowserRouter>
    </>
  );
}

export default App