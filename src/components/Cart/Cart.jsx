/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './Cart.css'
import PropTypes from 'prop-types'

const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            <h4>Cart: {cart.length}</h4>
            <div className="cart-container">
                {
                    cart.map(bottle=> <div>
                        <img src={bottle.img} ></img>
                        <button onClick={()=>handleRemoveFromCart(bottle.id)}>Remove</button>
                    </div>)
                }
            </div>
        </div>
    );
};

//adding props type to make sure the information we are passing that are array
Cart.prototype ={
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default Cart;