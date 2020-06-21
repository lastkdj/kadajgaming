import React, { useState } from "react";
import "./Main.css";
import { ReactComponent as KadajName } from "../Imagenes/KadajLogo-05.svg";
import Grid from "@material-ui/core/Grid";
import DemoStyles from "./DemoStyles";
import AffliStyles from "./AffliStyles";
import DestroStyles from "./DestroStyles";
import MythicStyles from "./MythicStyles";
import VisionStyles from "./VisionStyles";
import NyalothaStyles from "./NyalothaStyles";

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
    <div className="main" id="Main">
      <Grid container className="classcontainer">
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
          <h1 className={classes.destroclass.destrotext}>
            Destruction Warlock
          </h1>
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
    </div>
  );
};

export default Main;
