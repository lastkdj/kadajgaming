import React from "react";
import Grid from "@material-ui/core/Grid";
import DemoStyles from "./MainStyles/DemoStyles";
import AffliStyles from "./MainStyles/AffliStyles";
import DestroStyles from "./MainStyles/DestroStyles";
import MythicStyles from "./MainStyles/MythicStyles";
import VisionStyles from "./MainStyles/VisionStyles";
import NyalothaStyles from "./MainStyles/NyalothaStyles";
import Typography from "@material-ui/core/Typography";

const Main = () => {
  const classes = {
    democlass: DemoStyles(),
    affliclass: AffliStyles(),
    destroclass: DestroStyles(),
    mythicclass: MythicStyles(),
    visionclass: VisionStyles(),
    nyalothaclass: NyalothaStyles(),
  };

  return (
    <Grid container id="Main">
      <Grid
        item
        xs={12}
        md={6}
        lg={6}
        className={classes.democlass.demosection}
      >
        <h1 className={classes.democlass.demotext}>Demonology Warlock</h1>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        lg={6}
        className={classes.affliclass.afflisection}
      >
        <h1 className={classes.affliclass.afflitext}>Affliction Warlock</h1>
      </Grid>
      <Grid item xs={12} className={classes.destroclass.destrosection}>
        <h1 className={classes.destroclass.destrotext}>Destruction Warlock</h1>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        lg={6}
        className={classes.mythicclass.mythicsection}
      >
        <h1 className={classes.mythicclass.mythictext}>Mythic +</h1>
        <p className={classes.mythicclass.mythicfade}>
          Demonology the best M+ spec so far? Find out!
        </p>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        lg={6}
        className={classes.visionclass.visionsection}
      >
        <h1 className={classes.visionclass.visiontext}>Horrific Vision</h1>
        <p className={classes.visionclass.visionfade}>
          5 Mask Strategies, Memento's farming
        </p>
      </Grid>
      <Grid item xs={12} className={classes.nyalothaclass.nyalothasection}>
        <h1 className={classes.nyalothaclass.nyalothatext}>
          Nyalotha Raid Guide
        </h1>
        <p className={classes.nyalothaclass.nyalothafade}>
          Raiding tips, BiS gear, log parses and more..
        </p>
      </Grid>
    </Grid>
  );
};

export default Main;
