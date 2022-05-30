
import React, { useContext }  from 'react';
import { BsSearch } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";
import { Link } from 'react-router-dom';
import ContextNPO from '../ContextConfig/contextConfig';
import './Header.css'
function Header() {
  const userInfo = useContext(ContextNPO);
  
  return (
    <header>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/91/Logotyp_OLX_.png"
        alt=""
      />
      <div className="place-search-bar justify-content-center align-items-center">
        <BsSearch className="search_icon-place" />
        <input
          placeholder="Search you place or city"
          className="place-search"
        />
      </div>

      <div className="search-bar d-flex">
        <input
          type="text"
          className="search_items"
          placeholder="Find Cars, Mobile Phones and more..."
        />
        <div className="search_icon-items d-flex align-items-center justify-content-center">
          <BsSearch className="icon" />
        </div>
      </div>


      <h7>ENGLISH</h7>
      <Link to={"/login"}>{userInfo.name}</Link>

      
      <div className="sell_bar_first d-flex align-items-center justify-content-around">
        <div className="sell_bar_second d-flex justify-content-center align-items-center">
          <BsPlus className="sell_plus_icon" fontSize={30} />
          <h5>SELL</h5>
        </div>
      </div>
    </header>
  );
}
export default Header
