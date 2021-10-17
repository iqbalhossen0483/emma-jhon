import React from 'react';
import useProduct from '../Hooks/useProduct';
import useCart from '../Hooks/useCart';
import Cart from '../Shop/Cart';
import ReviewProduct from './ReviewProduct';
import "./ReviewProduct.css"
import { deleteFromDb } from '../../utilities/fakedb';

const OrderReview = () => {
    const [product] = useProduct();
    const [cart, setCart] = useCart(product);
    const handleRemoveProduct = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        deleteFromDb(key);
    }
    return (
        <div className="order-review-page">
            <div>
                {
                    cart.map(product => <ReviewProduct
                        key={product.key}
                        handleClick={handleRemoveProduct}
                        product={product}
                    ></ReviewProduct>)
                }
            </div>
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default OrderReview;