import React from "react";
import "./ExclusiveModel.css";

const ExclusiveModel = () => {
  return (
    <section className="hero exclusive-section">
      <div className="hero-body">
        <div style={{ display: "flex" }} className="exclusive">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <p className="patreon-title">Exclusive Models</p>
            <p className="patreon-subtitle">
            +5 models every 
              <br /> month{" "}
            </p>
            <button className="join-patreon"> Downlaod</button>
          </div>

          <div className="exclusive-container">
         
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveModel;
