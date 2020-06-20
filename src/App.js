import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Main from "./Components/Main/Main.js";
import NewIntro from "./Components/Imagenes/newintro.mp4";
import KadajDraw from "./Components/Drawer/KadajDraw";
import Listas from "./Components/Drawer/Listas";
import { makeStyles, Hidden } from "@material-ui/core";

function App() {
  const [abrir, setAbrir] = React.useState(false);

  const handleDrawerToggle = () => {
    setAbrir(!abrir);
  };

  return (
    <div id="Home">
      <video className="video" autoPlay loop muted>
        <source src={NewIntro} type="video/mp4" />
      </video>
      {/* <Hidden smUp>
        <KadajDraw
          variant="temporary"
          open={abrir}
          onClose={handleDrawerToggle}
        />
      </Hidden> */}
      {/* <Hidden xsDown>
        <KadajDraw variant="permanent" open={true} />
      </Hidden> */}

      <Header />
      <Banner />
      <Main />
    </div>
  );
}

export default App;
