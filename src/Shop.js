import React from 'react'
import './shop.css'
import { CiHeart, CiSearch } from "react-icons/ci";
import { TfiReload } from "react-icons/tfi";
import Product from './Product'

const Shop = ({product,setProduct,addtocart}) => {
  //filtering category product
  const filterCat = (data) => 
  {
    const filter = Product.filter((x) => 
    {
      return x.cat === data;
    });
    setProduct(filter)
  }

  const allproduct = () => 
  {
    setProduct(Product);
  }

  return (
    <>
      <div className="shop">
        <h4>Home / Shop</h4>
        <div className="shop_container">
          <div className="left_box">
            <div className="content">
              <h3>
                <span>Prod</span>uct categories
              </h3>
              <ul>
                <li onClick={allproduct}>All</li>
                <li onClick={() => filterCat("headphone")}>Headphone</li>
                <li onClick={() => filterCat("watch")}>Watch</li>
                <li onClick={() => filterCat("Accessories")}>Accessories</li>
                <li onClick={() => filterCat("Mobile")}>Mobile</li>
              </ul>
            </div>
          </div>
          <div className="right_box">
            <div className="content">
              <div className="top_banner">
                <img src="../image/shop-banner.jpg" alt="shopbanner"></img>
              </div>
              <h2>Shop Now</h2>
              <div className="product_container">
                {
                product.map((curElm) => {
                  return (
                    <>
                      <div className="box">
                        <div className="img_box">
                          <img src={curElm.img} alt="productimage"></img>
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
                          <button onClick={() => addtocart(curElm)}>Add To Cart</button>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop