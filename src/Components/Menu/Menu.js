import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton, ListItemIcon } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import { Link } from "react-scroll";
import { Icon, InlineIcon } from "@iconify/react";
import twitchIcon from "@iconify/icons-mdi/twitch";

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
          offset={-55}
          duration={800}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LibraryBooksIcon />
            </ListItemIcon>
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
            <ListItemIcon>
              <VideoLibraryIcon />
            </ListItemIcon>
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
            <ListItemIcon>
              <VideoLibraryIcon />
            </ListItemIcon>
            Twitch
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
