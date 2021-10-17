import React from 'react';
import Rating from 'react-rating';
import './Product.css';

const Product = (props) => {
    const { name, img, seller, price, stock, star } = props.product;
    return (
        <div className='product-cart'>
            <img src={img} alt="" />
            <div className='product-cart-body'>
                <h4 className='product-name'>{name}</h4>
                <small>By: {seller}</small>
                <div className='product-description'>
                    <div className='pricing-part'>
                        <p>${price}</p>
                        <small>only {stock} left in stock - order soon</small> <br />
                        <button className='btn' onClick={() => props.handleCart(props.product)}><i className="fas fa-shopping-cart"></i> add to cart</button>
                    </div>
                    <div className='rating-part'>
                        <p>Rating: <Rating
                            readonly
                            initialRating={star}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                        ></Rating>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;