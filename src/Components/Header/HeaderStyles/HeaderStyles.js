import { makeStyles } from "@material-ui/core/styles";

const HeaderStyles = makeStyles((theme) => ({
  header: {
    [theme.breakpoints.up("md")]: {},

    [theme.breakpoints.up("lg")]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      transition: "0.6s",
      padding: "30px 100px",
    },
  },
}));

export default HeaderStyles;
