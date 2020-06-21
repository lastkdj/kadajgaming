import { makeStyles } from "@material-ui/core/styles";
import AffliImg from "../../Imagenes/aff.jpg";

const AffliStyles = makeStyles((theme) => ({
  afflisection: {
    display: "flex",
    filter: "grayscale(0%)",
    backgroundImage: `url(${AffliImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    flexDirection: "column",
    justifyContent: "center",
    cursor: "pointer",
    height: "20vh",
    backgroundPosition: "center",
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

  afflitext: {
    color: "white",
    marginTop: "0px",
    marginBottom: "0px",
    marginLeft: "50px",
    marginRight: "50px",
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
    },
  },
}));

export default AffliStyles;
