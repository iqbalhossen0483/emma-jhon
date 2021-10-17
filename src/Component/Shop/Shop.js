import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from './Cart';
import Product from './Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setSearchProduct(data);
            })
    }, []);

    const [cart, setCart] = useState([]);
    const handleAddToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key);
    };

    const [searchedProduct, setSearchProduct] = useState([]);
    const handleSearch = event => {
        const searchText = event.target.value;
        const matchProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setSearchProduct(matchProduct);
    }

    //set local storage
    useEffect(() => {
        const localStorageData = getStoredCart();
        if (products.length) {
            const displayLocalData = [];
            for (const key in localStorageData) {
                const addedProducts = products.find((product) => key === product.key);
                const quantity = localStorageData[key];
                addedProducts.quantity = quantity;
                displayLocalData.push(addedProducts);
            }
            setCart(displayLocalData);
        }
    }, [products])

    // update quantity
    let totalQuantity = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        totalQuantity += product.quantity;
    }

    return (
        <>
            <div className='search-area'>
                <input className='search-box' type="text"
                    onChange={handleSearch}
                    placeholder='Search Product' />
                <div className='cart-count'>
                    <i className="fas fa-shopping-cart"></i>
                    <span>{totalQuantity}</span>
                </div>
            </div>
            <div className='container'>
                <div className='shop-cart-wrapper'>
                    <div>

                    </div>
                    <div className='shop'>
                        {
                            searchedProduct.map(product => <Product
                                product={product}
                                key={product.key}
                                handleCart={handleAddToCart}>
                            </Product>)
                        }
                    </div>
                </div>
                <Cart cart={cart} quantity={totalQuantity}></Cart>
            </div>
        </>
    )
};

export default Shop;