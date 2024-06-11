import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 900) {
      setShowMenu(false);
    }
  };

  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          HarvestHire
        </NavLink>
        
        <div className={`nav__menu ${showMenu ? "show-menu" : ""}`} id="nav-menu">
          <ul className="nav__list">
          <li className="nav__item nav__search">
         
              <input type="text" className="nav__search-input" placeholder="Search..." />
            </li>
            <li className="nav__item">
              <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/about-us" className="nav__link" onClick={closeMenuOnMobile}>
                About Us
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/favorite" className="nav__link" onClick={closeMenuOnMobile}>
                Favorite
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/location" className="nav__link" onClick={closeMenuOnMobile}>
                Location
              </NavLink>
            </li>
           
            <li className="nav__item">
              <NavLink to="/login" className="nav__link nav__cta">
                Login
              </NavLink>
            </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
