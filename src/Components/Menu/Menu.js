import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton, ListItemIcon } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import HomeIcon from "@material-ui/icons/Home";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import { Link, animateScroll as scroll } from "react-scroll";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
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
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <LibraryBooksIcon />
          </ListItemIcon>
          <Link
            className="MenuText"
            activeClass="active"
            to="Main"
            spy={true}
            smooth={true}
            offset={-55}
            duration={800}
          >
            Guides
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <VideoLibraryIcon />
          </ListItemIcon>
          <Link
            className="MenuText"
            activeClass="active"
            to="Main"
            spy={true}
            smooth={true}
            offset={-55}
            duration={800}
          >
            Youtube
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
