import mainLogo from "../assets/e-commerce_logo.svg";
import search from "../assets/search-svgrepo-com.svg";
import account from "../assets/account-user-avatar-svgrepo-com.svg";
import wishlist from "../assets/heart-svgrepo-com.svg";
import shoppingBag from "../assets/shopping-bag-1-svgrepo-com.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const open = (id) => {
    const element = document.getElementById(`${id}`);
    element.style.transform = 'translateX(0%)';
    element.classList.add('transition')
  }
  return (
    <section>
      <nav id="navbar_list">
        <img src={mainLogo} id="unsen_logo"></img>    
        <ul id="navbar_list1">
          <Link to="/" className="navbar_items">
            Home
          </Link>
          <Link to="/profile" className="navbar_items">
            Profile
          </Link>
          <Link to="/products" className="navbar_items">
            Products
          </Link>
          <Link to="/blog" className="navbar_items">
            Blog
          </Link>
          <Link to="/contact" className="navbar_items">
            Contact
          </Link>
        </ul>
        <ul id="navbar_list2">
          <a href="#none" className="nav_icons">
            <img src={search} className="nav_icons"></img>
          </a>
          <a href="#none" className="nav_icons">
            <img src={account} className="nav_icons"></img>
          </a>
          <a href="#none" className="nav_icons">
            <img src={wishlist} className="nav_icons"></img>
          </a>
          <a href="#none" className="nav_icons" onClick={()=> open('sidebar_wrappper')}>
            <img src={shoppingBag} className="nav_icons"></img>
          </a>
        </ul>
      </nav>
    </section>
  );
};
export default Navbar;
