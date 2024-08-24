import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { FaTruckFast } from "react-icons/fa6";
import { CiCreditCard1 } from "react-icons/ci";
import { GiReceiveMoney } from "react-icons/gi";
import { GoCommentDiscussion } from "react-icons/go";
import { CiHeart, CiSearch } from "react-icons/ci";
import { TfiReload } from "react-icons/tfi";

const Home = ({ product, addtocart }) => {
  //storing sale product
  const [sale, setSale] = useState([]);
  //Storing New Product
  const [newProduct, setNewProduct] = useState([]);
  //fetching product data using useeffect

  const fetchdata = () => {
    //fetch sale product data
    const salefilter = product.filter((curElm) => {
      return curElm.type === "sale";
    });
    setSale(salefilter);
    //fetching new product data
    const newproduct = product.filter((curElm) => {
      return curElm.type === "new";
    });
    setNewProduct(newproduct);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <div className="home">
        <div className="top_banner">
          <div className="contant">
            <div className="info">
              <h2>x box series s:for best gaming</h2>
              <p>
                Get <span>30% off </span>This Week
              </p>
              <Link to="/shop">
                <button>Discover Now</button>
              </Link>
            </div>
            <div className="img_box">
              <img src="../image/bg.png" alt="backgroundimage"></img>
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
                <p>For all oders over $120</p>
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
                <p>If goods have problems</p>
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
        <div className="sale_products">
          <h2>Hot Deal Products</h2>
          <div className="container">
            {sale.map((curElm) => {
              return (
                <>
                  <div className="box">
                    <div className="img_box">
                      <img src={curElm.img} alt=""></img>
                    </div>
                    <div className="detail">
                      <div className="icons">
                        <div className="icon">
                          <CiHeart />
                        </div>
                        <div className="icon">
                          <TfiReload />
                        </div>
                        <div className="icon">
                          <CiSearch />
                        </div>
                      </div>
                      <h3>{curElm.Name}</h3>
                      <h4>${curElm.price}</h4>
                      <button onClick={() => addtocart(curElm)}>
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="mid_banner">
          <div className="container">
            <div className="banner_box">
              <img src="../image/jk-banner-4.jpg" alt="bannerimage1"></img>
            </div>
            <div className="banner_box">
              <img src="../image/jk-banner-5.jpg" alt="bannerimage2"></img>
            </div>
          </div>
        </div>
        <div className="top_category">
          <div className="container">
            <div className="cat_box">
              <h2>Top Categories This Week</h2>
              <p>Aliquam eget consectetuer habitasse interdum.</p>
              <button>view all categories</button>
            </div>
            <div className="box">
              <div className="img_box">
                <img src="../image/category-slider-3.jpg" alt="category1"></img>
              </div>
              <div className="info">
                <h4>TV & Audio</h4>
              </div>
            </div>
            <div className="box">
              <div className="img_box">
                <img src="../image/category-slider-1.jpg" alt="category2"></img>
              </div>
              <div className="info">
                <h4>Games & Consoles</h4>
              </div>
            </div>
            <div className="box">
              <div className="img_box">
                <img src="../image/category-slider-2.jpg" alt="category3"></img>
              </div>
              <div className="info">
                <h4>Furnitures & Decor</h4>
              </div>
            </div>
            <div className="box">
              <div className="img_box">
                <img src="../image/category-slider-4.jpg" alt="category4"></img>
              </div>
              <div className="info">
                <h4>Fashion & Clothing</h4>
              </div>
            </div>
            <div className="box">
              <div className="img_box">
                <img src="../image/category-slider-5.jpg" alt="category5"></img>
              </div>
              <div className="info">
                <h4>Computer & Laptop</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="featured_product">
          <h3>Featured Products</h3>
          <div className="container">
            {newProduct.map((curElm) => {
              return (
                <>
                  <div className="box">
                    <div className="img_box">
                      <img src={curElm.img} alt=""></img>
                    </div>
                    <div className="detail">
                      <h4>{curElm.Name}</h4>
                      <p>${curElm.price}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="newsletter">
          <div className="conatiner">
            <div className="main">
              <h3>Newsletter Sign Up</h3>
              <p>
                (Get <span>30% OFF</span> coupon today subscibers)
              </p>
            </div>
            <div className="detail">
              <p>
                <span>Join 226.000+ subscribers</span> and get a new discount
                coupon on every Monday.
              </p>
            </div>
            <div className="box">
              <input type="text" placeholder="Enter Your Email"></input>
              <button>Subscribe!</button>
            </div>
          </div>
        </div>
        <div className="brands">
          <div className="Container">
            <div className="box">
              <img src="../image/brand1.jpg" alt="brand1"></img>
            </div>
            <div className="box">
              <img src="../image/brand2.jpg" alt="brand2"></img>
            </div>
            <div className="box">
              <img src="../image/brand3.jpg" alt="brand3"></img>
            </div>
            <div className="box">
              <img src="../image/brand4-1.jpg" alt="brand41"></img>
            </div>
            <div className="box">
              <img src="../image/brand4.jpg" alt="brand4"></img>
            </div>
            <div className="box">
              <img src="../image/brand5-1.jpg" alt="brand51"></img>
            </div>
            <div className="box">
              <img src="../image/brand5.jpg" alt="brand5"></img>
            </div>
            <div className="box">
              <img src="../image/brand6.jpg" alt="brand6"></img>
            </div>
            <div className="box">
              <img src="../image/brand7.jpg" alt="brand7"></img>
            </div>
            <div className="box">
              <img src="../image/brand8.jpg" alt="brand8"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
