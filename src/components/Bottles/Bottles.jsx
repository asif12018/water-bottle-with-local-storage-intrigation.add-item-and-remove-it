/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import {addToLocalStorage, getStoredCart, removeFromLocalStorage} from '../utilities/localStorage.js'
import './Bottles.css'
import Cart from "../Cart/Cart.jsx";


const Bottles = () => {

  //getting data from json
    const [bottles,setBottles] = useState([]);
   useEffect(()=>{
    fetch('bottles.json')
    .then(res => res.json())
    .then(data => setBottles(data));
    
   }, []);
   
   // cart state to save data on cart
   const [cart,setCart] = useState([]);

   const handleAddTocart = bottle =>{
      const newCart = [...cart, bottle];
      setCart(newCart);
      //saving id to local storage
      addToLocalStorage(bottle.id);
      
   }

   //load cart from local storage
    useEffect(()=>{
      if (bottles.length > 0){
        //getting id from local storage
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id of storedCart){
          const bottle = bottles.find(bottle => bottle.id == id);
          savedCart.push(bottle);
        }
        setCart(savedCart);
      }

    },[bottles])

    //remove item from cart function
    const handleRemoveFromCart = id =>{
       //visual cart remove
        const remainingCart = cart.filter(bottle=>bottle.id !== id);
        setCart(remainingCart);
       //remove from local storage
       removeFromLocalStorage(id);
    }
 

   
   
   
   


    return (
        <div>
            <h2>Total Bottle:{bottles.length}</h2>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            
          <div className="bottles-container">
          {
            bottles.map(bottle=> <Bottle key={bottle.id} bottle={bottle}  handleAddTocart={handleAddTocart}></Bottle>)
          }
          </div>
        </div>
    );
};

export default Bottles;