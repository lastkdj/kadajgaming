import React from "react";
import "./Banner.css";
import { SocialMediaIconsReact } from "social-media-icons-react";

const Banner = () => {
  return (
    <div className="container">
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
          <li id="fb">
            <a href="#">
              <SocialMediaIconsReact
                borderColor="rgba(255,0,0,0.25)"
                borderWidth="5"
                borderStyle="solid"
                icon="facebook"
                iconColor="rgba(255,252,252,1)"
                backgroundColor="rgba(0,228,41,1)"
                iconSize="6"
                roundness="21%"
                url="https://www.facebook.com/KadajGaming/"
                size="39"
              />
            </a>
          </li>
          <li id="tweet">
            <a href="#">
              <SocialMediaIconsReact
                borderColor="rgba(255,0,0,0.25)"
                borderWidth="5"
                borderStyle="solid"
                icon="twitter"
                iconColor="rgba(255,252,252,1)"
                backgroundColor="rgba(0,228,41,1)"
                iconSize="6"
                roundness="21%"
                url="https://twitter.com/darkkadaj"
                size="39"
              />
            </a>
          </li>
          <li id="yt">
            <a href="#">
              <SocialMediaIconsReact
                borderColor="rgba(255,0,0,0.25)"
                borderWidth="5"
                borderStyle="solid"
                icon="youtube"
                iconColor="rgba(255,252,252,1)"
                backgroundColor="rgba(0,228,41,1)"
                iconSize="6"
                roundness="21%"
                url="https://www.youtube.com/channel/UCgx2XgrA-GSLVWFekY8b8yQ"
                size="39"
              />
            </a>
          </li>
          <li id="inst">
            <a href="#">
              <SocialMediaIconsReact
                borderColor="rgba(255,0,0,0.25)"
                borderWidth="5"
                borderStyle="solid"
                icon="instagram"
                iconColor="rgba(255,252,252,1)"
                backgroundColor="rgba(0,228,41,1)"
                iconSize="6"
                roundness="21%"
                url="https://www.instagram.com/lastkdj/"
                size="39"
              />
            </a>
          </li>
          <li id="gp">
            <a href="#">
              <SocialMediaIconsReact
                borderColor="rgba(255,0,0,0.25)"
                borderWidth="5"
                borderStyle="solid"
                icon="googleplus"
                iconColor="rgba(255,252,252,1)"
                backgroundColor="rgba(0,228,41,1)"
                iconSize="6"
                roundness="21%"
                url=""
                size="39"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
