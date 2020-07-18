import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
  return (
    <nav className="header">

    <Link to="/login">
      <img
      className="header__logo"
      src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      alt=""
      />
    </Link>

    <div className="header__search">
        <input type="text" className="header__searchInput"/>
        <SearchIcon className="header__searchIcon"/>
    </div>

    <div className="header__nav">

      <Link to="/login" className="header__link">
        <div className="header__option">
          <span  className="header__optionLineOne">Hello</span>
          <span className="header__optionLineTwo">Sign in</span>

        </div>
      </Link>

       <Link to="/" className="header__link">
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>

        </div>
      </Link>

       <Link to="/login" className="header__link">
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </Link>
    </div>


    <Link to="/checkout" className="header__link">
      <div className="header__optionBasket">
        <ForumIcon/>
        <span className="header__optionLineTwo header__basketCount">0</span>
      </div>
    </Link>
    </nav>
    );
  }

  export default Header;
