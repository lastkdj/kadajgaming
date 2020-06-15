import React, { useState } from "react";
import "./Main.css";
import Vision from "../Imagenes/vision.mp4";
import HoverVideoPlayer from "react-hover-video-player";

const Main = () => {
  const [PlayVideo, setPlayVideo] = useState(false);

  return (
    <div>
      <div className="classcontainer">
        <section className="demosection">
          <h1>Demonology Warlock</h1>
        </section>

        <section className="afflicsection">
          <h1>Affliction Warlock</h1>
        </section>
      </div>
      <div className="destrocontainer">
        <section className="destrosection">
          <h1>Destruction Warlock</h1>
        </section>
      </div>
      <div className="dungeoncontainer">
        <section className="mythicsection">
          <h1>Mythic +</h1>
        </section>
        <section
          className="visionsection"
          //   onMouseEnter={() => setPlayVideo(true)}
          //   onMouseLeave={() => setPlayVideo(false)}
        >
          {/* {PlayVideo ? (
            <video className="vision" autoPlay loop muted>
              <source src={Vision} type="video/mp4" />
            </video>
          ) : (
            <video className="vision" preload loop muted>
              <source src={Vision} type="video/mp4" />{" "}
            </video>
          )} */}

          <HoverVideoPlayer className="player-wrapper" videoSrc={Vision}>
            {" "}
            <h1>Horrific Visions</h1>
          </HoverVideoPlayer>
        </section>
      </div>
      <div className="nyalothacontainer">
        <section className="nyalothasection">
          <h1>Nyalotha Raid Guide</h1>
        </section>
      </div>
    </div>
  );
};

export default Main;
