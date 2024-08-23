import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import { FaTruckFast } from "react-icons/fa6";
import { CiCreditCard1 } from "react-icons/ci";
import { GiReceiveMoney } from "react-icons/gi";
import { GoCommentDiscussion } from "react-icons/go";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="top_banner">
          <div className="content">
            <div className="info">
              <h2>x box series s:for best gaming</h2>
              <p>
                Get <span>30% off</span> This Week
              </p>
              <Link to="/shop">
                <button>Discover Now</button>
              </Link>
            </div>
            <div className="img_box">
              <img src="./image/bg.png" alt="banner image"></img>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="container">
            <div className="box">
              <div className="icon">
                <FaTruckFast />
              </div>
              <div className="info">
                <h3>FREE DELIVERY</h3>
                <p>For all orders over $120</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <CiCreditCard1 />
              </div>
              <div className="info">
                <h3>SECURE PAYMENT</h3>
                <p>100% secure payment</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <GiReceiveMoney />
              </div>
              <div className="info">
                <h3>SHOP WITH CONFIDENCE</h3>
                <p>For goods have problems</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <GoCommentDiscussion />
              </div>
              <div className="info">
                <h3>24/7 HELP CENTER</h3>
                <p>Dedicated 24/7 support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home