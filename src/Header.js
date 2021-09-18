import React from "react";
import logo from "./img/amazon-logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <nav className="header">
      <Link to="/login">
        <img src={logo} alt="Amaz Logo" className="header__logo" />
      </Link>
      <input type="text" className="header__searchInput" />
      <SearchIcon className="header__searchInput" />
    </nav>
  );
}

export default Header;
