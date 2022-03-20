import React from "react";
import spider from "../../assets/us-1.webp";
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
                <font style={{ color: " #EF5DA8" }}> Turning </font>images into
                3D Model
              </p>
            </motion.div>

            <br />
            <p className="subtitle">
              Send the 2D Image and get a 3D Model ready for 3D Printing at a
              affordable cost.
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
