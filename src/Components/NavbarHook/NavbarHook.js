import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import { RiSearchLine } from "react-icons/ri";

import "./NavbarHook.css";

const NavbarHook = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "900px" });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const renderNavLinks = () => {
    const listClassName = isMobile ? "nav__list" : "nav__list__web";
    const linkClassName = "nav__link";
    const buttonClassName = "nav__cta";

    return (
      <div>
        
      <ul className={listClassName}>
      <li className="nav__item nav__search">
        
          <input type="text" className="nav__search-input" placeholder="Search..." />
        </li>
        <li>

          <NavLink to="/" className={linkClassName} onClick={closeMobileMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about-us" className={linkClassName} onClick={closeMobileMenu}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorite" className={linkClassName} onClick={closeMobileMenu}>
            Favorite
          </NavLink>
        </li>
        <li>
          <NavLink to="/location" className={linkClassName} onClick={closeMobileMenu}>
            Location
          </NavLink>
        </li>
        
        <li>
          <NavLink to="/login" className={`${linkClassName} ${buttonClassName}`} onClick={closeMobileMenu}>
            Login
          </NavLink>
        </li>
      </ul>
      </div>
    );
  };

  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          HarvestHire
        </NavLink>
        {isMobile && (
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <IoMenu />
          </div>
        )}
        {isMobile ? (
          <div className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`} id="nav-menu">
            {renderNavLinks()}
            <div className="nav__close" id="nav-close" onClick={toggleMenu}>
              <IoClose />
            </div>
          </div>
        ) : (
          renderNavLinks()
        )}
      </nav>
    </header>
  );
};

export default NavbarHook;
