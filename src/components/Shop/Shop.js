import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
// import Product from '../Product/Product'
// import Product from '../Product/Product';
// import '../../utilities/fakedb'



const Shop = () => {
    // console.log(props);

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    },[])

const placeOrder = (product) => {
    console.log(product)
    
    const newCart = [...cart, product];
    setCart(newCart)
    }

    return (
        <div className='shop_container'>
            <div className='product_container'>
                {
                    products.map(product => <Product
                    key={product.id}
                        product={product}
                        placeOrder = {placeOrder}
                    ></Product>)
                }
            </div>
            <div className='cart_container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;