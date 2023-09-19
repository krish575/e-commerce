import React from 'react';
import mainLogo from '../assets/e-commerce_logo.svg';
import search from '../assets/search-svgrepo-com.svg';
import account from '../assets/account-user-avatar-svgrepo-com.svg';
import wishlist from '../assets/heart-svgrepo-com.svg';
import shoppingBag from '../assets/shopping-bag-1-svgrepo-com.svg';

const Component_navbar = () => {
    return (
        <section>
        <nav id="navbar_list">
            <img src={mainLogo} id="unsen_logo"></img>
                <ul id="navbar_list1">
                <a href="#Home" class="navbar_items">Home</a>
                <a href="#Demo" class="navbar_items">Demo</a>
                <a href="#Features" class="navbar_items">Features</a>
                <a href="#Shop" class="navbar_items">Shop</a>
                <a href="#Products" class="navbar_items">Products</a>
                <a href="#Blog" class="navbar_items">Blog</a>
                <a href="#Lookbook" class="navbar_items">Lookbook</a>
                <a href="#Pages" class="navbar_items">Pages</a>
                </ul>
                <ul id="navbar_list2">
                <a href="#none" class="nav_icons"><img src={search} class="nav_icons"></img></a>
                <a href="#none" class="nav_icons"><img src={account} class="nav_icons"></img></a>
                <a href="#none" class="nav_icons"><img src={wishlist} class="nav_icons"></img></a>
                <a href="#none" class="nav_icons"><img src={shoppingBag} class="nav_icons"></img></a>
                </ul>
        </nav>
        </section>
    )
}
export default Component_navbar;
 