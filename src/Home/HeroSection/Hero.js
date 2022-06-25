import React from "react";
import spider from "../../assets/heroSection.png";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-body hero-section">
        <div className="columns">
          <div className="column title-section ">
            <motion.div animate={{x: [0, 100, 0]}} transition={{ type: "spring", ease: "easeOut", duration: 2 }}>
              <p className="title">
                <font className="title"> 2D IMAGE INTO<br/> 3D MODEL  </font>
           
              </p>
            </motion.div>

            <br />
            <p className="subtitle">
              Send 2D Image and Get a 3D Model Ready For <br /> 3D Printing
            </p>
            <br />
            <a href="/order">
              <button className="order">Order Now</button>
            </a>

            <button className="learn">Learn more</button>
          </div>
          <div className="column image-section">
            <figure className="image">
              <img src={spider} alt="" className="model-hero" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
