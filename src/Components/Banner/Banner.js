import React from "react";
import "./Banner.css";

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
    </div>
  );
};

export default Banner;
