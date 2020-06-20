import React from "react";
import { makeStyles } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
}));

const Drawer = () => {
  return <div>Drawer</div>;
};

export default Drawer;
