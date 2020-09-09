import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
function Header() {
    return (
        <div className='header'>
            <img className="header-logo" src='https://jordantravers.com/wp-content/uploads/2018/10/Amazon-Logo-1024x373.png' />
            {/* Search Box */}
            <div className="header-search">
                <input type="text" className='search-input' />
                <SearchIcon className="search-icon" />
            </div>
            {/* Account Details */}
            <div className="header-nav">
                <div className='header-section'>
                    <span className="sectionline-1">Hello, Guest</span>
                    <span className="sectionline-2">Sign-In</span>
                </div>
                <div className='header-section'>
                    <span className="sectionline-1">Returns</span>
                    <span className="sectionline-2">& Orders</span>
                </div>
                <div className='header-section'>
                    <span className="sectionline-1">Your</span>
                    <span className="sectionline-2">Prime</span>
                </div>
                <div className='header-section-cart'>
                    <ShoppingCartIcon />
                    <span className="cart-count">100</span>
                </div>
            </div>

            {/* Order Details */}
            {/* Prime Details */}
            {/* Cart */}
        </div>
    )
}

export default Header
