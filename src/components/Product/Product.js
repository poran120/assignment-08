import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'




const Product = (props) => {
    // console.log(props);
    // const { placeOrder } = props;
    const { img, name, price, category, seller } = props.product;

    return (
        <div className='product_details'>
            <img src={img} alt='' />
            <div className='product_price_other'>
                <h4 className='product_name'>{name}</h4>
                <p>Price: ${price}</p>
                <p><small>Category: {category}</small></p>
                <p><small>Seller: {seller}</small></p>
            </div>
<button onClick={() => props.placeOrder(props.product)} className='order_button'>
                <p>Place Order</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;