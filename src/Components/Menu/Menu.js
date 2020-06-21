import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton, ListItemIcon } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-scroll";
import { Icon, InlineIcon } from "@iconify/react";
import twitchIcon from "@iconify/icons-mdi/twitch";
import youtubeOutlined from "@iconify/icons-ant-design/youtube-outlined";
import { ReactComponent as Guides } from "../Imagenes/Warlogo.svg";

import "./Menu.css";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const youtubeClick = () => {
    setAnchorEl(null);
    window.open("https://www.youtube.com/user/darkkadaj11");
  };

  const twitchClick = () => {
    setAnchorEl(null);
    window.open("https://www.twitch.tv/kadajgaming");
  };

  return (
    <div>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />{" "}
      </IconButton>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link
          className="MenuText"
          activeClass="active"
          to="Home"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            Home
          </MenuItem>
        </Link>
        <Link
          className="MenuText"
          activeClass="active"
          to="Main"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
        >
          <MenuItem onClick={handleClose}>
            <div className="twitch">
              <Guides />
            </div>
            Guides
          </MenuItem>
        </Link>
        <Link
          className="MenuText"
          activeClass="active"
          to="/"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
        >
          <MenuItem onClick={youtubeClick}>
            <div className="twitch">
              <Icon icon={youtubeOutlined} />
            </div>
            Youtube
          </MenuItem>
        </Link>
        <Link
          className="MenuText"
          activeClass="active"
          to="/"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
        >
          <MenuItem onClick={twitchClick}>
            {/* <ListItemIcon>
              <VideoLibraryIcon />
            </ListItemIcon> */}
            <div className="twitch">
              <Icon icon={twitchIcon} />
            </div>
            Twitch
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
