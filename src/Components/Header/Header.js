import React from "react";
import "./Header.css";
import { useEffect, useState } from "react";
import { StylesProvider } from "@material-ui/styles";
import SimpleMenu from "../Menu/Menu";
import { Link } from "react-scroll";

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
        <a href="#" className="logo"></a>
        <div className="bannerphones"></div>
        <div>
          <SimpleMenu />{" "}
        </div>
        <ul>
          <li>
            <Link
              className="MenuText"
              activeClass="active"
              to="Home"
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
            >
              Home
            </Link>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <Link
              className="guidenav"
              activeClass="active"
              to="Main"
              spy={true}
              smooth={true}
              offset={-150}
              duration={800}
            >
              Guides
            </Link>
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
