import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Main from "./Components/Main/Main.js";
import NewIntro from "./Components/Imagenes/newintro.mp4";
import KadajDraw from "./Components/Drawer/KadajDraw";
import { makeStyles, Hidden } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

function App() {
  return (
    <Grid container id="Home">
      <video className="video" autoPlay loop muted>
        <source src={NewIntro} type="video/mp4" />
      </video>
      <Header />
      <Banner />
      <Main />
    </Grid>
  );
}

export default App;
