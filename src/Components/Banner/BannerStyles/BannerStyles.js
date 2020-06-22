import { makeStyles } from "@material-ui/core/styles";
import MythicImg from "../../Imagenes/dungeon.jpg";

const BannerStyles = makeStyles((theme) => ({
  container: {
    backgroundSize: "30em",
    backgroundPosition: "3em 3em 3em",
    backgroundRepeat: "no-repeat",
    height: "60vh",
    justifyContent: "center",

    [theme.breakpoints.up("md")]: {
      justifyContent: "center",
    },

    [theme.breakpoints.up("lg")]: {
      height: "80vh",
      justifyContent: "left",
    },
  },

  menuxs: {
    paddingTop: "10px",
    display: "flex",
    justifyContent: "flex-end",

    [theme.breakpoints.up("md")]: {
      display: "none",
    },

    [theme.breakpoints.up("lg")]: {},
  },

  containernest: {
    justifyContent: "center",
    marginLeft: "30px",
    marginRight: "30px",
    flexDirection: "column",

    [theme.breakpoints.up("md")]: {
      justifyContent: "center",
      alignItems: "center",
      margin: "0%",
    },

    [theme.breakpoints.up("lg")]: {
      justifyContent: "center",
      alignItems: "center",
      margin: "0%",
    },
  },

  firstsection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "flex-end",
    animation: "fadeIn ease 1.5s",
  },

  //   "@keyframes fadeIn": {
  //     from: { left: "-20px" },
  //     to: { right: "20px" },
  //   },

  firstsectiontext: {
    fontWeight: 700,
    color: "white",
    textDecoration: "none",
    textShadow: "2px 2px #000000",
    fontFamily: "Poppins, sans-serif",
    fontSize: "3em",
    marginBottom: "20px",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {
      fontSize: "4em",
    },
  },

  firstsectionspan: {
    color: "rgb(90, 240, 30)",
  },

  firstsectionh2: {
    color: "white",
    fontSize: "2em",
    margin: "0%",
    fontWeight: "700",
    color: "white",
    textDecoration: "none",
    textShadow: "2px 2px #000000",
    fontFamily: "Poppins, sans-serif",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {
      fontSize: "3em",
    },
  },

  secondsection: {
    display: "flex",
    flexDirection: "column",
    animation: "fadeInBot ease 2s",
  },

  secondsectionp: {
    fontSize: ".8em",
    margin: "0%",
    color: "white",
    textDecoration: "none",
    textShadow: "2px 2px #000000",
    fontFamily: "Poppins, sans-serif",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {
      fontSize: "1.3em",
    },
  },

  secondsectionspan: {
    color: "rgb(90, 240, 30)",
  },
}));

export default BannerStyles;
