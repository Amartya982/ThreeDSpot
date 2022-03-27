import React from "react";
import hero from "../../assets/action_webp/2.webp";
import "./Store.css";
import { BsCheckCircleFill } from "react-icons/bs";

const Pricing = () => {
  return (
    <section className="hero">
      <div className="hero-body store-section">
        <div className="columns store-column">
          <div className="column">
            <div className="store-box">
              <div className="store-image">
                <figure className="image">
                  <img src={hero} alt="" />
                </figure>
              </div>
              <button className="price-button">$25</button>
              <div className="store-order">
                <button className="store-overlap">Order Now</button>
              </div>
            </div>
          </div>
       
       
        </div>
    
      </div>
    </section>
  );
};

export default Pricing;
