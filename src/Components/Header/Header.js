import React from "react";
import "./Header.css";
import { useEffect, useState } from "react";
import { StylesProvider } from "@material-ui/styles";
import SimpleMenu from "../Menu/Menu";
import { Hidden, Grid } from "@material-ui/core";

const Header = (props) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 70;

      if (isTop === false) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <StylesProvider injectFirst>
      <div className={scrolled ? "sticky" : "header"} id="Header">
        <a href="#" className="logo">
          Logo
        </a>
        <div className="bannerphones"></div>
        <div>
          <SimpleMenu />{" "}
        </div>
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
    </StylesProvider>
  );
};

export default Header;
