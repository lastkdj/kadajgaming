import { makeStyles } from "@material-ui/core/styles";

const HeaderStyles = makeStyles((theme) => ({
  header: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
      padding: "0px 80px",
      transition: "0.6s",
    },

    [theme.breakpoints.up("lg")]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      transition: "0.6s",
      padding: "30px 100px",
    },
  },

  sticky: {
    backgroundColor: "black",
    position: "sticky",
    top: "0",
    zIndex: "1",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0",
    flexDirection: "row-reverse",
    transition: "0.6s",
    animation: "fadeInTop2 ease 1s",
    borderBottom: "solid",
    borderBottomWidth: "3px",
    borderBottomColor: "rgb(56, 241, 15);",

    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      paddingLeft: "30px",
      paddingRight: "30px",
      paddingTop: "10px",
      paddingBottom: "10px",
    },

    [theme.breakpoints.up("lg")]: {},
  },

  "@keyframes fadeInTop2": {
    from: { top: "-50px" },
    to: { bottom: "50px" },
  },

  ul: {
    display: "none",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    animation: "fadeInTop ease 2s",
    margin: "0",

    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-end",
      display: "flex",
    },

    [theme.breakpoints.up("lg")]: {},
  },

  "@keyframes fadeInTop": {
    from: { left: "-50px" },
    to: { right: "50px" },
  },

  li: {
    position: "relative",
    listStyle: "none",
    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {},
  },

  a: {
    position: "relative",
    margin: "0 15px",
    textDecoration: "none",
    color: "white",
    letterSpacing: "2px",
    fontWeight: "500px",
    transition: "0.6s",
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {},
  },

  socials: {
    margin: "10px",
    fontSize: "40px",
    alignItems: "center",
    color: "white",
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {},
  },
}));

export default HeaderStyles;
