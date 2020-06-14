import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <a href="#" className="logo">
        Logo
      </a>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Guides</a>
        </li>
        <li>
          <a href="#">Videos</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
