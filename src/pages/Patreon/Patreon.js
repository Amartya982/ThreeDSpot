import React from "react";
import "./Patreon.css";

const Patreon = () => {
  return (
    <section className="hero patreon-section">
      <div className="hero-body">
        <div style={{ display: "" }}>
          <div style={{ display: "flex", marginRight: "auto" }}>
            <p id="title">JOIN OUR PATREON</p>
            <hr id="line_break" />
            <p id="view_more">VIEW MORE</p>
          </div>
          <div className="patreon-container">
            <div style={{display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
         
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <p className="patreon-title">3D printable Statue Pack</p>
                <p className="patreon-subtitle">Over 200 3d model<br/> availabe </p>
                <button className="join-patreon"> Join Now</button>
            </div>

            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Patreon;
