import React , {useEffect} from 'react'
import { db } from './firebase'
import {collection,getDocs} from 'firebase/firestore'

const Cart = ({setCart, cart, userDetail,auth}) => {
    //cart db reference
    const cartdbref = collection(db,"cartData")
    //Fetching cart data using useEffect Hooks
    useEffect(() =>
    {
        fetchcartdata()
    },[])
    const fetchcartdata = async() =>
    {
       const cartdata = await getDocs(cartdbref);
       const cartsnap = cartdata.docs.map((doc) => ({id:doc.id, ...doc.data()}))
       const findcartdata = cartsnap.filter((x) =>
       {
         return userDetail.id === x.userId
       })
       setCart(findcartdata)
    }

    //cart length check
    const cartlength = (cart || []).length === 0
  return (
    <>
    {
        auth
        ?
        <>
        {
            cartlength?
            <>
            <h2>Cart Is Empty Shop Now</h2>
            <button>Shop Now</button>
            </>
            :
            <>
            <h2>Cart is not Empty</h2>
            </>
        }
        </>
        :
        <><h2>Please LogIn</h2></>   
    }
    </>
  )
}

export default Cart