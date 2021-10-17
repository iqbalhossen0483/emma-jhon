import React from 'react';
import "./ReviewProduct.css"

const ReviewProduct = (props) => {
    const { key, name, price, seller, quantity } = props.product;

    return (
        <div className="review-page">
            <div>

            </div>
            <div>
                <h3 className="product-name">{name}</h3>
                <div className="review-body">
                    <div className="review-body-1">
                        <h5 className="product-price">{price}</h5>
                        <small>sold by: {seller}</small>
                        <p>Quantity: {quantity}</p>
                        <button onClick={() => props.handleClick(key)} className="remove-btn">Remove</button>
                    </div>
                    <div className="">
                        <h4>Shipping Options</h4>
                        <p className="shipping"><input type="radio" /> 8-10 business days</p>
                        <small>$0 - Free Shipping</small>
                        <p className="shipping"><input type="radio" /> 5-7 business days</p>
                        <small>$3.99 - Regular Shipping</small>
                        <p className="shipping"><input type="radio" /> 2-4 business days</p>
                        <small>$7.99 - Standard Shipping</small>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default ReviewProduct;