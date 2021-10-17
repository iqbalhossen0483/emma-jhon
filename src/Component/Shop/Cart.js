import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    //set item quantity
    let totalQuantity = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        totalQuantity += product.quantity;
    }

    let itemPrice = 0;
    let sipping = 0;
    let subTotal = 0;
    let tax = 0;
    let total = 0;

    for (const product of cart) {
        const productPrice = product.price * product.quantity;
        if (!product.quantity) {
            product.quantity = 1;
        }
        itemPrice += productPrice;
    }
    if (itemPrice === 0) {
        sipping = 0;
    }
    else if (itemPrice <= 300) {
        sipping = 20;
    }
    else if (itemPrice <= 1000) {
        sipping = 50;
    }
    else {
        sipping = 80;
    }
    subTotal = itemPrice + sipping;
    tax = Math.round(itemPrice * 0.10);
    total = subTotal + tax;
    return (
        <div className='cart'>
            <h3 className='header'>Order summary</h3>
            <p className='item-ordered'>Item ordered: <span>{totalQuantity}</span></p>
            <div className='order-details'>
                <div>
                    <p>Total price:</p>
                    <p>Shipping:</p>
                    <p>Sub-Total:</p>
                    <p>tax:</p>
                    <h4 className='total'>Order Total:</h4>
                </div>
                <div>
                    <p>$<span>{itemPrice.toFixed(2)}</span></p>
                    <p>$<span>{sipping}</span></p>
                    <p>$<span>{subTotal.toFixed(2)}</span></p>
                    <p>$<span>{tax}</span></p>
                    <h4 className='total'>$<span>{total.toFixed(2)}</span></h4>
                </div>
            </div>
            <Link to="order-review">
                <button className='review-btn'>Review your order</button>
            </Link>
        </div>
    );
};

export default Cart;