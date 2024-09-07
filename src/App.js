import React, { useState } from 'react'
import Router from './Router'
import {BrowserRouter} from 'react-router-dom'
import Nav from './Nav';
import Product from './Product';
import Footer from './Footer';
import {db} from './firebase';
import {collection, addDoc, getDocs ,updateDoc, doc} from 'firebase/firestore'

const App = () => {
  //Storing User Detail In useState hooks
  const [userDetail,setUserDetail] = useState()
  const [auth,setAuth] = useState(false)

  //Storing Product Data In Usestate Hooks
  const [product,setProduct] = useState(Product)

  //Performing Search
  const [search,setSearch] = useState('')

  //Performing cart function
  //Creating useState Hooks to store cart data
  const [cart,setCart] = useState([])

  //creating cart database reference
  const cartdbref = collection(db,"cartData")
  const addtocart = async (data) =>
  {
    if(auth === false)
    {
      alert("Please Login In");
    }
    else
    {
      //Matching Cart Product
      const fetchcartdata = await getDocs(cartdbref);
      const cartsnap = fetchcartdata.docs.map((doc) => ({id:doc.id, ...doc.data()}))
      const findcartdata = cartsnap.find((x) =>
      {
        return userDetail.id === x.userId && data.id === x.CartId
      })
      if (findcartdata)
      {
        //Creating cartData ref
        const cartdataref = doc(cartdbref,findcartdata.id)
        await updateDoc(cartdataref,{Qty:findcartdata.Qty+1})
        alert("This Product is already in the Cart")
      }
      else
      {
        const addCartData = await addDoc(cartdbref, {
           userId: userDetail.id,
           Title: data.Name,
           CartId: data.id,
           img: data.img,
           Des: data.des,
           Cat: data.cat,
           Price: data.price,
           Type: data.type,
           Qty: 1,
        });
        alert("Product is added to the Cart")
      }
    }
  }
  //peforming search
  const searchlength = (search || []).length === 0
  const searchProduct = () =>
  {
    if (searchlength) 
    {
      alert("Please Enter Something To search")
      setProduct(Product)
    } 
    else 
    {
      const searchFilter = Product.filter((x) =>
      {
        return x.cat === search
      })
      if (searchFilter.length === 0) 
      {
        alert("Product Not Found")  
        setProduct(Product)
      } 
      else 
      {
        setProduct(searchFilter)
      }
    }
  }

  return (
    <>
      <BrowserRouter>
        <Nav searchProduct={searchProduct} auth={auth} setAuth={setAuth} userDetail={userDetail} setSearch={setSearch} search={search}/>
        <Router
          userDetail={userDetail} cart={cart} setCart={setCart} addtocart={addtocart} setUserDetail={setUserDetail} setAuth={setAuth} auth={auth} product={product} setProduct={setProduct}/>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App