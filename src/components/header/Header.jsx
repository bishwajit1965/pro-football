import React from "react";
import "./Header.css";
import Logo from "../../assets/images/Logo.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-20 py-2 shadow-lg header bg-white">
      <div>
        <img src={Logo} alt="" className="w-40 h-9" />
      </div>
      <nav>
        <a href="/order">Player</a>
        <a href="/order-review">Order player</a>
        <a href="/inventory">Manage player</a>
        <a href="/login">Login</a>
      </nav>
    </div>
  );
};

export default Header;
