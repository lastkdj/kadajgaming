import React from "react";
import { makeStyles, Drawer, Divider } from "@material-ui/core";
import Listas from "./Listas";

const drawerWidth = 160;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },

  drawerPaper: {
    width: drawerWidth,
    background: "black",
  },

  toolbar: theme.mixins.toolbar,
}));

const KadajDraw = (props) => {
  const classes = useStyles();

  return (
    <Drawer
      className="classes.drawer"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="right"
      variant={props.variant}
      open={props.open}
      onClose={props.onClose ? props.onClose : null}
    >
      <div className="classes.toolbar"></div>
      <Divider />
      <Listas />
    </Drawer>
  );
};

export default KadajDraw;
