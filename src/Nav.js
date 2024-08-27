import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './nav.css';
import { IoCartSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

const Nav = ({auth,setAuth,userDetail,setSearch,search,searchProduct}) => {
  //Handling navbar
  const [openNav,setOpenNav] = useState(false);

  //Handling Logout
  const logout = () =>
  {
    setAuth(false);
  }
  
  //Handling Open Navbar
  const navopen = () =>
  {
    setOpenNav(true);
  }

  const closenav = () => 
  {
    setOpenNav(false);
  }
  return (
    <>
      <div className="nav">
        <div className="container">
          <div className="top_bar">
            <p>Get Free Shipping - Free 30 Day Money Back Guarantee</p>
            {auth ? (
              <>
                <p>
                  <Link to="/login" className="link" onClick={logout}>
                    Logout
                  </Link>
                </p>
              </>
            ) : (
              <p>
                <Link to="/login" className="link">
                  Login
                </Link>{" "}
                /{" "}
                <Link to="/register" className="link">
                  Register
                </Link>
              </p>
            )}
          </div>
          <div className="mid_bar">
            <div className="content">
              <div className="navicon">
                {openNav ? (
                  <>
                    <div className="closenav" onClick={closenav}>
                      <IoIosClose />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="navopen" onClick={navopen}>
                      <FaBars />
                    </div>
                  </>
                )}
              </div>
              <div className="logo">
                <img src="./image/logo.png" alt="logoimage"></img>
              </div>
              <div className="search_bar">
                <input type="text" placeholder="Search Products..." value={search} onChange={(e) => setSearch(e.target.value)}></input>
                <button onClick={searchProduct}>Search</button>
              </div>
              <div className="icons">
                <div className="icon">
                  <Link to="/cart">
                    <IoCartSharp />
                  </Link>
                </div>
                <div className="icon">
                  <FaRegHeart />
                </div>
              </div>
            </div>
          </div>
          <div className={`bottom_bar ${openNav && "active"}`}>
            <div className="user_detail">
              <div className="icon">
                <FaRegUser />
              </div>
              <div className="detail">
                {auth ? (
                  <>
                    <h2>{userDetail.Name}</h2>
                    <p>{userDetail.Email}</p>
                  </>
                ) : (
                  <>
                    <h2>Please,Sign In</h2>
                  </>
                )}
              </div>
            </div>
            <ul>
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="link">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="offer">
              <h2>30% Offer In Winter Sale</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav