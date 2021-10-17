import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <div className='menu-bar'>
                <Link className="link" to="/shop">Shop</Link>
                <Link className="link" to="order-review">Order Review</Link>
                <Link className="link" to="/blog">Blog</Link>
            </div>
        </div>
    );
};

export default Header;