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
import Grid from "@material-ui/core/Grid";
import HeaderStyles from "./HeaderStyles/HeaderStyles";

const Header = () => {
  const classes = HeaderStyles();
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

  const youtubeClick = () => {
    window.open("https://www.youtube.com/user/darkkadaj11");
  };

  const twitchClick = () => {
    window.open("https://www.twitch.tv/kadajgaming");
  };

  return (
    <StylesProvider injectFirst>
      <Grid
        container
        className={scrolled ? classes.sticky : classes.header}
        id="Header"
      >
        <SimpleMenu />{" "}
        <ul className={classes.ul}>
          <li className={classes.li}>
            <Link
              className={classes.a}
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
          <li className={classes.li}>
            <a className={classes.a} href="#">
              About
            </a>
          </li>
          <li className={classes.li}>
            <Link
              className={classes.a}
              activeClass="active"
              to="Main"
              spy={true}
              smooth={true}
              offset={-120}
              duration={800}
            >
              Guides
            </Link>
          </li>
          <li className={classes.li}>
            <Link
              className={classes.socials}
              activeClass="active"
              to="/"
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
              onClick={twitchClick}
            >
              <Icon icon={youtubeOutlined} />
            </Link>
          </li>
          <li className={classes.li}>
            <Link
              className={classes.socials}
              activeClass="active"
              to="/"
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
              onClick={twitchClick}
            >
              <Icon icon={twitchIcon} />
            </Link>
          </li>
        </ul>
      </Grid>
    </StylesProvider>
  );
};

export default Header;
