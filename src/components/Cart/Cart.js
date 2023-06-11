import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props
    // console.log(cart);
    const randomItem = () => {
        const number = Math.floor(Math.random()*cart.length)
        console.log(number);
    }
    return (
        <div className='cart_component'>
            <h3>Selected All The Mobile Here</h3>
            {/* <h5> Items you have select: {cart.length}</h5> */}
            {
                cart.map((item, index) => <p
                key={index}
                >
                    {item.name}</p>)
            }
            

            <button onClick={randomItem}>CHOOSE 1 FOR ME</button>
            <br></br>
            <button>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;