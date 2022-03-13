import React from "react";
import hero from "../assets/action_webp/2.webp";
import "./Pricing.css";
import { BsCheckCircleFill } from "react-icons/bs";

const Pricing = () => {
  return (
    <section className="hero">
      <div className="hero-body pricing-section">
        <div className="columns first-col">
          <div className="column">
            <div className="simple">
              <div className="image-pricing">
                <figure className="image">
                  <img src={hero} alt="" />
                </figure>
              </div>
              <div className="pricing-order">
                <button className="price-overlap">Order Now</button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="simple">
              <div className="image-pricing">
                <figure className="image">
                  <img src={hero} alt="" />
                </figure>
              </div>
              <div className="pricing-order">
                <button className="price-overlap">Order Now</button>
              </div>
            </div>
          </div>{" "}
          <div className="column">
            <div className="simple">
              <div className="image-pricing">
                <figure className="image">
                  <img src={hero} alt="" />
                </figure>
              </div>
              <div className="pricing-order">
                <button className="price-overlap">Order Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="columns first-col">
          <div className="column">
            <div className="simple">
              <div className="image-pricing">
                <figure className="image">
                  <img src={hero} alt="" />
                </figure>
              </div>
              <div className="pricing-order">
                <button className="price-overlap">Order Now</button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="simple">
              <div className="image-pricing">
                <figure className="image">
                  <img src={hero} alt="" />
                </figure>
              </div>
              <div className="pricing-order">
                <button className="price-overlap">Order Now</button>
              </div>
            </div>
          </div>{" "}
          <div className="column">
            <div className="simple">
              <div className="image-pricing">
                <figure className="image">
                  <img src={hero} alt="" />
                </figure>
              </div>
              <div className="pricing-order">
                <button className="price-overlap">Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
