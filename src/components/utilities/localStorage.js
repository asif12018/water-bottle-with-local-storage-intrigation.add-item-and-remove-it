/* eslint-disable no-unused-vars */

//checking if the function availble in localstorage
const getStoredCart = () =>{
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString);
    }
    return [];
}


//saving id to local storage
const addToLocalStorage = id =>{
    const cart = getStoredCart();
    cart.push(id);
    //save to local storage
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

// remove from local storage
const removeFromLocalStorage = id =>{
    //getting data from local storage
    const cart = getStoredCart();
    //filtering the item i want to remove from local storage
    const remaining = cart.filter(idx =>idx !== id);
    localStorage.setItem('cart',JSON.stringify(remaining));
}


export {addToLocalStorage, getStoredCart, removeFromLocalStorage};