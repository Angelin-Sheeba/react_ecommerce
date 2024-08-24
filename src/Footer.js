import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="deatil_box">
            <div className="header">
              <div className="logo">
                <img src="../image/logo.png" alt="logoimage"></img>
              </div>
            </div>
            <div className="bottom">
              <div className="detail">
                <p>
                  We are a team of designers and developers that create high
                  quality WordPress, Magento, Prestashop, Opencart.
                </p>
              </div>
              <div className="address">
                <p>
                  <span>Address:</span> The Barn, Ullenhall, Henley in Arden
                  B578 5C, England.
                </p>
              </div>
              <div className="contact">
                <p>
                  <span>Mobile:</span> +123.456.789 – +123.456.678
                </p>
                <p>
                  <span>E-mail:</span> support@domain.com
                </p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="header">
              <h2>
                <span>Inform</span>ation
              </h2>
            </div>
            <div className="bottom">
              <ul>
                <li>About Us</li>
                <li>Delivery Information</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Customer Service</li>
                <li>Return Policy</li>
              </ul>
            </div>
          </div>
          <div className="box">
            <div className="header">
              <h2>
                <span>My Acc</span>ount
              </h2>
            </div>
            <div className="bottom">
              <ul>
                <li>About Us</li>
                <li>Delivery Information</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Customer Service</li>
                <li>Return Policy</li>
              </ul>
            </div>
          </div>
          <div className="box">
            <div className="header">
              <h2>
                <span>Quick L</span>ink
              </h2>
            </div>
            <div className="bottom">
              <ul>
                <li>About Us</li>
                <li>Delivery Information</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Customer Service</li>
                <li>Return Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
