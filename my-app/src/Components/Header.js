import React from 'react';

export default function Header () {
    return (
        <div className="header">

            <p className="logo">
                Sephora The ReBrand
            </p>

            <div id="container">
                <div id="search">
                    <label for="searchInput"></label>
                    <input id="searchInput" type="text" placeholder="Search"></input>
                </div>
            <button className="fav-btn">
                Favorites
            </button>
            <button className="checkout-btn">
                Checkout 
            </button>

            </div>
        </div>
    )
}