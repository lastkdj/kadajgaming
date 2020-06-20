import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import MailIcon from "@material-ui/icons/Mail";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  font: {
    color: "white",
  },
}));

const Listas = (props) => {
  const classes = useStyles();

  return (
    <div>
      <List component="nav" className="classes.font">
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AssignmentIndIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LibraryBooksIcon />
          </ListItemIcon>
          <ListItemText primary="Guides" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <VideoLibraryIcon />
          </ListItemIcon>
          <ListItemText primary="Videos" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </div>
  );
};

export default Listas;
