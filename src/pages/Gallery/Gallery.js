import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import model1 from "../../assets/realistic_webp/3.webp";
import model2 from "../../assets/realistic_webp/3.webp";
import model3 from "../../assets/realistic_webp/4.webp";
import model4 from "../../assets/realistic_webp/5.webp";
import model5 from "../../assets/realistic_webp/6.webp";
import model12 from "../../assets/action_webp/1.webp";
import model13 from "../../assets/action_webp/2.webp";
import model14 from "../../assets/action_webp/3.webp";
import model15 from "../../assets/action_webp/4.webp";
import model16 from "../../assets/action_webp/5.webp";
import model17 from "../../assets/action_webp/6.webp";
import model27 from "../../assets/sketch_webp/1.webp";
import model28 from "../../assets/sketch_webp/2.webp";
import model29 from "../../assets/sketch_webp/3.webp";
import model33 from "../../assets/cartoon_webp/1.webp";
import model34 from "../../assets/cartoon_webp/2.webp";
import model35 from "../../assets/cartoon_webp/3.webp";
import model0 from "../../assets/626f065f-0649-4efc-aac7-0c6408968995.jpeg";

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
      <section className="hero gallery-section">
        <div className="hero-body">
          <p className="gallery has-text-centered">Gallery</p>

          <Carousel responsive={responsive} containerClass="carousel-container">
            <div className="card" id="curated-card">
              <div className="card-content-curated">
                <div className="curatedcard-image">
                  <figure className="image">
                    <img
                      src={model0}
                      id="curated-image2"
                      className="curated-image"
                      alt="Placeholder"
                    />
                  </figure>
                </div>
                <br />
              </div>
            </div>

            <div className="card" id="curated-card">
              <div className="card-content-curated">
                <div className="curatedcard-image">
                  <figure className="image">
                    <img
                      src={model1}
                      id="curated-image2"
                      className="curated-image"
                      alt="Placeholder"
                    />
                  </figure>
                </div>
                <br />
              </div>
            </div>

            <div className="card" id="curated-card">
              <div className="card-content-curated">
                <div className="curatedcard-image">
                  <figure className="image">
                    <img
                      src={model2}
                      id="curated-image2"
                      className="curated-image"
                      alt="Placeholder"
                    />
                  </figure>
                </div>
                <br />
              </div>
            </div>

            <div className="card" id="curated-card">
              <div className="card-content-curated">
                <div className="curatedcard-image">
                  <figure className="image">
                    <img
                      src={model3}
                      id="curated-image2"
                      className="curated-image"
                      alt="Placeholder"
                    />
                  </figure>
                </div>
                <br />
              </div>
            </div>

            <div className="card" id="curated-card">
              <div className="card-content-curated">
                <div className="curatedcard-image">
                  <figure className="image">
                    <img
                      src={model4}
                      id="curated-image2"
                      className="curated-image"
                      alt="Placeholder"
                    />
                  </figure>
                </div>
                <br />
              </div>
            </div>

            <div className="card" id="curated-card">
              <div className="card-content-curated">
                <div className="curatedcard-image">
                  <figure className="image">
                    <img
                      src={model5}
                      id="curated-image2"
                      className="curated-image"
                      alt="Placeholder"
                    />
                  </figure>
                </div>
                <br />
              </div>
            </div>
          </Carousel>

          <Carousel
            responsive={responsive}
            containerClass="carousel-container1"
          >
            <div className="card" id="curated-card">
              <div className="card-content-curated">
                <div className="curatedcard-image">
                  <figure className="image">
                    <img
                      src={model12}
                      id="curated-image2"
                      className="curated-image"
                      alt="Placeholder"
                    />
                  </figure>
                </div>
                <br />
              </div>
            </div>

            <div className="card" id="curated-card">
              <div className="card-content-curated">
                <div className="curatedcard-image">
                  <figure className="image">
                    <img
                      src={model13}
                      id="curated-image2"
                      className="curated-image"
                      alt="Placeholder"
                    />
                  </figure>
                </div>
                <br />
              </div>
            </div>

            <div className="card" id="curated-card">
              <div className="card-content-curated">
                <div className="curatedcard-image">
                  <figure className="image">
                    <img
                      src={model14}
                      id="curated-image2"
                      className="curated-image"
                      alt="Placeholder"
                    />
                  </figure>
                </div>
                <br />
              </div>
            </div>

            <div className="card" id="curated-card">
              <div className="card-content-curated">
                <div className="curatedcard-image">
                  <figure className="image">
                    <img
                      src={model15}
                      id="curated-image2"
                      className="curated-image"
                      alt="Placeholder"
                    />
                  </figure>
                </div>
                <br />
              </div>
            </div>

            <div className="card" id="curated-card">
              <div className="card-content-curated">
                <div className="curatedcard-image">
                  <figure className="image">
                    <img
                      src={model16}
                      id="curated-image2"
                      className="curated-image"
                      alt="Placeholder"
                    />
                  </figure>
                </div>
                <br />
              </div>
            </div>

            <div className="card" id="curated-card">
              <div className="card-content-curated">
                <div className="curatedcard-image">
                  <figure className="image">
                    <img
                      src={model17}
                      id="curated-image2"
                      className="curated-image"
                      alt="Placeholder"
                    />
                  </figure>
                </div>
                <br />
              </div>
            </div>
          </Carousel>

          <Carousel
            responsive={responsive}
            containerClass="carousel-container2"
          >
            <div className="card" id="curated-card">
              <div className="card-content-curated">
                <div className="curatedcard-image">
                  <figure className="image">
                    <img
                      src={model27}
                      id="curated-image2"
                      className="curated-image"
                      alt="Placeholder"
                    />
                  </figure>
                </div>
                <br />
              </div>
            </div>

            <div className="card" id="curated-card">
              <div className="card-content-curated">
                <div className="curatedcard-image">
                  <figure className="image">
                    <img
                      src={model28}
                      id="curated-image2"
                      className="curated-image"
                      alt="Placeholder"
                    />
                  </figure>
                </div>
                <br />
              </div>
            </div>

            <div className="card" id="curated-card">
              <div className="card-content-curated">
                <div className="curatedcard-image">
                  <figure className="image">
                    <img
                      src={model29}
                      id="curated-image2"
                      className="curated-image"
                      alt="Placeholder"
                    />
                  </figure>
                </div>
                <br />
              </div>
            </div>
          </Carousel>

          <Carousel
            responsive={responsive}
            containerClass="carousel-container3"
          >
            <div className="card" id="curated-card">
              <div className="card-content-curated">
                <div className="curatedcard-image">
                  <figure className="image">
                    <img
                      src={model33}
                      id="curated-image2"
                      className="curated-image"
                      alt="Placeholder"
                    />
                  </figure>
                </div>
                <br />
              </div>
            </div>

            <div className="card" id="curated-card">
              <div className="card-content-curated">
                <div className="curatedcard-image">
                  <figure className="image">
                    <img
                      src={model34}
                      id="curated-image2"
                      className="curated-image"
                      alt="Placeholder"
                    />
                  </figure>
                </div>
                <br />
              </div>
            </div>

            <div className="card" id="curated-card">
              <div className="card-content-curated">
                <div className="curatedcard-image">
                  <figure className="image">
                    <img
                      src={model35}
                      id="curated-image2"
                      className="curated-image"
                      alt="Placeholder"
                    />
                  </figure>
                </div>
                <br />
              </div>
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
};
export default Card;
