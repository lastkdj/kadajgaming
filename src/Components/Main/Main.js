import React from "react";
import "./Main.css";

const Main = () => {
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
    </div>
  );
};

export default Main;
