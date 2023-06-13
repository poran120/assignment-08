import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props
    // console.log(cart);
    const randomSelectItem = () => {
        const number = Math.floor(Math.random()*cart.length)
        console.log(number);
    }

    if(cart.length === 5){
        // alert('Dont select more items')
        // alert('return cart')
    }

    const chooseAgain = () => {
        console.log('Delete')
    }
    return (
        <div className='cart_component'>
            {
                cart.map((item, index) => <p
                key={index}>{item.name}</p>)
            }
            <button onClick={randomSelectItem}>CHOOSE 1 FOR ME</button>
            <br></br>
            <button onClick={chooseAgain}>CHOOSE AGAIN</button>
            <div>
<h5>Random Select Item</h5>

            </div>
        </div>
    );
};

export default Cart;