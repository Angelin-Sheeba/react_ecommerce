import React, { useEffect } from "react";
import { db } from "./firebase";
import { collection,doc,getDocs,updateDoc,deleteDoc,} from "firebase/firestore";
import { Link } from "react-router-dom";
import "./cart.css";

const Cart = ({ setCart, cart, userDetail, auth }) => {
  //cart db refrence
  const cartdbref = collection(db, "cartData");

  // Fetching cart Data using useeffect hooks
  useEffect(() => {
    fetchcartdata();
  }, []);
  const fetchcartdata = async () => {
    const cartdata = await getDocs(cartdbref);
    const cartsnap = cartdata.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    const findcartdata = cartsnap.filter((x) => {
      return userDetail.id === x.userId;
    });
    setCart(findcartdata);
  };

  //cart length check
  const cartlength = (cart || []).length === 0;

  //increasing product qty
  const inc = async (data) => {
    const cartdataref = doc(cartdbref, data.id);
    await updateDoc(cartdataref, { Qty: data.Qty + 1 });
    fetchcartdata();
  };

  const dec = async (data) => {
    if (data.Qty <= 1) {
      const cartdataref = doc(cartdbref, data.id);
      await deleteDoc(cartdataref);
      fetchcartdata();
    } else {
      const cartdataref = doc(cartdbref, data.id);
      await updateDoc(cartdataref, { Qty: data.Qty - 1 });
      fetchcartdata();
    }
  };

  //deleting cart data
  const rmv = async (data) => {
    const cartdataref = doc(cartdbref, data.id);
    await deleteDoc(cartdataref);
    fetchcartdata();
  };

  //calculating Total Price of product
  const totalprice = cart.reduce(
    (price, item) => price + item.Qty * item.Price,
    0
  );
  
  return (
    <>
      <div className="cart">
        <h2>#Cart</h2>
        {auth ? (
          <>
            {cartlength ? (
              <>
                <div className="empty_cart">
                  <h2>Cart Is Empty Shop Now</h2>
                  <Link to="/shop">
                    <button>Shop Now</button>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="cart_product">
                  {cart.map((curElm) => {
                    return (
                      <>
                        <div className="box">
                          <div className="img_box">
                            <img src={curElm.img} alt=""></img>
                          </div>
                          <div className="detail">
                            <h3>{curElm.Title}</h3>
                            <p>Price: ${curElm.Price}</p>
                            <div className="qty">
                              <button onClick={() => inc(curElm)}>+</button>
                              <input
                                type="number"
                                value={curElm.Qty}
                                readOnly
                              ></input>
                              <button onClick={() => dec(curElm)}>-</button>
                            </div>
                            <h3 className="total_price">
                              Total: ${curElm.Qty * curElm.Price}
                            </h3>
                            <button
                              className="rmv_btn"
                              onClick={() => rmv(curElm)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div className="totalprice">
                  <h3>SubTotal: ${totalprice}</h3>
                </div>
                <div className="checkout">
                  <button>Checkout</button>
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <div className="user_login">
              <h2>please LogIn</h2>
              <Link to="/login">
                <button>Login Now</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
