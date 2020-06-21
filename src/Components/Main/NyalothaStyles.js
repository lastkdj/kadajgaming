import { makeStyles } from "@material-ui/core/styles";
import NyalothaImg from "../Imagenes/nyalotha.jpg";

const NyalothaStyles = makeStyles((theme) => ({
  nyalothasection: {
    display: "flex",
    backgroundImage: `url(${NyalothaImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    flexDirection: "column",
    justifyContent: "center",
    cursor: "pointer",
    height: "20vh",
    backgroundPosition: "10% 60%",
    boxShadow: "3px 3px 5px 6px rgb(0, 0, 0)",
    transition: "filter 3s ease-in-out",
    filter: "brightness(100%)",

    "&:hover": {
      filter: "brightness(130%)",
      "& $nyalothafade": {
        display: "block",
        animation: "fadeIn ease 1s",
      },
    },

    [theme.breakpoints.up("md")]: {
      height: "30vh",
    },

    [theme.breakpoints.up("lg")]: {
      height: "50vh",
      filter: "grayscale(0%)",
    },
  },
  //Keyframes en makeStyle Hook
  "@keyframes fadeIn": {
    from: { left: "-50px" },
    to: { right: "50px" },
  },

  nyalothatext: {
    color: "white",
    marginTop: "0px",
    marginBottom: "0px",
    marginLeft: "50px",
    marginRight: "50px",
    fontSize: "2em",
    textShadow: "2px 2px #000000",
    justifyContent: "center",
    textAlign: "center",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {
      color: "white",
      fontSize: "3em",
      textAlign: "left",
      marginLeft: "50px",
    },
  },

  nyalothafade: {
    marginTop: "0%",
    color: "white",
    fontSize: "0.8em",
    textShadow: "2px 2px #000000",
    display: "none",
    textAlign: "center",

    [theme.breakpoints.up("md")]: {
      fontSize: "1em",
    },

    [theme.breakpoints.up("lg")]: {
      marginLeft: "50px",
      fontSize: "1.3em",
      textAlign: "left",
    },
  },
}));

export default NyalothaStyles;
