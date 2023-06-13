import React, { useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props
    // console.log(cart);

    const [selectedItem, setSelectedItem] = useState([]);
    const randomSelectItem = () => {
        const number = Math.floor(Math.random()*cart.length)
        const randomItem = cart[number];
        setSelectedItem(randomItem)
    }

// const selectRandomItem = randomSelectItem();

    // if(cart.length === 5){
        // alert('Dont select more items')
        // alert('return cart')
    // }

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
                {/* {selectedItem &&  <h5>Random Selected Item : {selectedItem}</h5>} */}
                <h6>Selected Item: <span className='selected_item'>{selectedItem.name}</span>
                </h6>
            </div>
        </div>
    );
};

export default Cart;