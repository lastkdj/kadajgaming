import React from "react";
import "./Banner.css";
import { ReactComponent as TwitchSvg } from "../Imagenes/twitchsvg.svg";
import { ReactComponent as Facebook } from "../Imagenes/facebook.svg";
import { ReactComponent as Instagram } from "../Imagenes/youtube.svg";
import { ReactComponent as Youtube } from "../Imagenes/twitter.svg";
import { ReactComponent as Twitter } from "../Imagenes/instagram.svg";
import NewIntro from "../Imagenes/newintro.mp4";

const Banner = () => {
  return (
    <div className="container">
      {/* <video className="responsiveVideo" autoPlay loop muted>
        <source src={NewIntro} type="video/mp4" />
      </video> */}

      <div className="containerNest">
        <section className="firstsection">
          <h1>
            <span>Kadaj</span> Gaming
          </h1>
          <h2>Guides</h2>
        </section>
        <section className="secondsection">
          <p>Welcome to the new Warlock Workshop</p>
          <p>
            And learn all the basics of <span>Mardita sea borre todo</span>
          </p>
        </section>
      </div>
      <div className="social">
        <ul>
          <li id="twitch">
            <a href="#"> {/* <TwitchSvg />{" "} */}</a>
          </li>
          <li id="fb">
            <a href="#">{/* <Facebook /> */}</a>
          </li>
          <li id="tweet">
            <a href="#">{/* <Youtube /> */}</a>
          </li>
          <li id="yt">
            <a href="#">{/* <Twitter /> */}</a>
          </li>
          <li id="inst">
            <a href="#">{/* <Instagram /> */}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
