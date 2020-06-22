import React from "react";
import "./Banner.css";
import GuldanVideo from "../Imagenes/guldanvideo.mp4";
import SimpleMenu from "../Menu/Menu";
import Grid from "@material-ui/core/Grid";
import BannerStyles from "./BannerStyles/BannerStyles";
import Typography from "@material-ui/core/Typography";

const Banner = () => {
  const classes = BannerStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.menuxs}>
        <SimpleMenu />
      </Grid>

      <video className="videoguldan" autoPlay loop muted>
        <source src={GuldanVideo} type="video/mp4" />
      </video>

      <Grid
        container
        item
        xs={12}
        md={12}
        lg={6}
        className={classes.containernest}
      >
        <Grid
          container
          item
          xs={12}
          md={8}
          lg={8}
          className={classes.mobilebanner}
        >
          <Grid item xs={12} lg={12} className={classes.firstsection}>
            <Typography variant="h1" className={classes.firstsectiontext}>
              <span className={classes.firstsectionspan}>Kadaj</span> Gaming
            </Typography>
            <Typography variant="h2" className={classes.firstsectionh2}>
              Guides
            </Typography>
          </Grid>
          <Grid item xs={12} lg={12} className={classes.secondsection}>
            <Typography variant="body1" className={classes.secondsectionp}>
              Welcome to the new Warlock Workshop
            </Typography>
            <Typography variant="body1" className={classes.secondsectionp}>
              And learn all the basics of{" "}
              <span className={classes.secondsectionspan}>
                Mardita sea borre todo
              </span>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Banner;
