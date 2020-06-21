import { makeStyles } from "@material-ui/core/styles";
import DemoImg from "../Imagenes/demo2.jpg";

const DemoStyles = makeStyles((theme) => ({
  demosection: {
    display: "flex",
    backgroundImage: `url(${DemoImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    flexDirection: "column",
    justifyContent: "center",
    cursor: "pointer",
    height: "20vh",
    backgroundPosition: "center",
    boxShadow: "3px 3px 5px 6px rgb(0, 0, 0)",
    transition: "filter .2s ease-in-out",
    filter: "grayscale(0%)",

    [theme.breakpoints.up("md")]: {
      height: "30vh",
    },

    [theme.breakpoints.up("lg")]: {
      height: "50vh",
      filter: "grayscale(100%)",
      "&:hover": {
        filter: "grayscale(0%)",
      },
    },
  },

  demotext: {
    color: "white",
    marginTop: "0px",
    marginBottom: "0px",
    marginLeft: "10px",
    marginRight: "10px",
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
}));

export default DemoStyles;
