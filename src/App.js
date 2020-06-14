import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Main from "./Components/Main/Main.js";
import NewIntro from "./Components/Imagenes/newintro.mp4";

function App() {
  return (
    <div>
      <video className="video" autoPlay loop muted>
        <source src={NewIntro} type="video/mp4" />
      </video>

      <Header />
      <Banner />
      <Main />
    </div>
  );
}

export default App;
