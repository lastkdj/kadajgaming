import { makeStyles } from "@material-ui/core/styles";
import DestroImg from "../../Imagenes/destro.jpg";

const DestroStyles = makeStyles((theme) => ({
  destrosection: {
    display: "flex",

    filter: "grayscale(0%)",
    backgroundImage: `url(${DestroImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    flexDirection: "column",
    justifyContent: "center",
    cursor: "pointer",
    height: "20vh",
    backgroundPosition: "10% 30%",
    boxShadow: "3px 3px 5px 6px rgb(0, 0, 0)",
    transition: "filter 0.2s ease-in-out",

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

  destrotext: {
    color: "white",
    marginTop: "0px",
    marginBottom: "0px",
    marginLeft: "10px",
    marginRight: "10px",
    fontSize: "2em",
    textShadow: "2px 2px #000000",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "700",

    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {
      color: "white",
      fontSize: "3em",
      textAlign: "left",
      marginLeft: "50px",
    },
  },
}));

export default DestroStyles;
