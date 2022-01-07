import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import model1 from "../assets/WhatsApp Image 2022-01-07 at 10.27.24 AM.jpeg"
import model from "../assets/sp 1.png"
import model2 from "../assets/MODEL2.jpeg"
import "./Gallery.css";

const Card = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 520 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 520, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Carousel responsive={responsive} containerClass="carousel-container">
        <div className="card" id="curated-card">
          <div className="card-content-curated">
            <div className="curatedcard-image">
              <figure className="image">
                <img src={model1} id="curated-image2" className="curated-image" alt="Placeholder" />
              </figure>
            </div>
            <br />
          </div>
        </div>
        <div className="card" id="curated-card">
          <div className="card-content-curated">
            <div className="curatedcard-image">
              <figure className="image">
                <img src={model} id="curated-image" className="curated-image" alt="Placeholder" />
              </figure>
            </div>
            <br />
          </div>
        </div>
        <div className="card" id="curated-card">
          <div className="card-content-curated">
            <div className="curatedcard-image">
              <figure className="image">
                <img src={model2} id="curated-image3" className="curated-image" alt="Placeholder" />
              </figure>
            </div>
            <br />
          </div>
        </div>
        <div className="card" id="curated-card">
          <div className="card-content-curated">
            <div className="curatedcard-image">
              <figure className="image">
                <img src={model1} id="curated-image3" className="curated-image" alt="Placeholder" />
              </figure>
            </div>
            <br />
          </div>
        </div>
        <div className="card" id="curated-card">
          <div className="card-content-curated">
            <div className="curatedcard-image">
              <figure className="image">
                <img src={model2} id="curated-image3" className="curated-image" alt="Placeholder" />
              </figure>
            </div>
            <br />
          </div>
        </div>
        <div className="card" id="curated-card">
          <div className="card-content-curated">
            <div className="curatedcard-image">
              <figure className="image">
                <img src={model} className="curated-image" alt="Placeholder" />
              </figure>
            </div>
            <br />
          </div>
        </div>
      </Carousel>
    </>


  );
}
export default Card;