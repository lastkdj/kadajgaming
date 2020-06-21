import React from "react";
import "./Header.css";
import { useEffect, useState } from "react";
import { StylesProvider } from "@material-ui/styles";
import SimpleMenu from "../Menu/Menu";
import { Link } from "react-scroll";
import twitchIcon from "@iconify/icons-mdi/twitch";
import youtubeOutlined from "@iconify/icons-ant-design/youtube-outlined";
import { Icon, InlineIcon } from "@iconify/react";
import { ReactComponent as KadajName } from "../Imagenes/KadajLogo-05.svg";

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
        <div className="kadajname">
          <KadajName />
        </div>

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
          <li className="socials">
            <Link
              className="socials"
              activeClass="active"
              to="/"
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
            >
              <Icon icon={youtubeOutlined} />
            </Link>
          </li>
          <li className="socials">
            <Link
              activeClass="active"
              to="/"
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
            >
              <Icon icon={twitchIcon} />
            </Link>
          </li>
        </ul>
      </div>
    </StylesProvider>
  );
};

export default Header;
