import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import model7 from "../../assets/model7.jpg";
import model10 from "../../assets/model10.jpg";
import model11 from "../../assets/model11.jpg";
import model12 from "../../assets/model12.jpg";
import model13 from "../../assets/model13.jpg";
import model14 from "../../assets/model14.jpg";
import model15 from "../../assets/model15.jpg";
import model16 from "../../assets/model16.jpg";
import model17 from "../../assets/model17.jpg";
import model18 from "../../assets/model18.jpg";
import model19 from "../../assets/model19.jpg";
import model20 from "../../assets/model20.jpg";
import model22 from "../../assets/model22.jpg";
import model23 from "../../assets/model23.jpg";
import model24 from "../../assets/model24.jpg";
import model25 from "../../assets/model25.jpg";
import model26 from "../../assets/model26.jpg";
import model27 from "../../assets/model27.webp";

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
          <div style={{ display: "flex", marginLeft: "auto",justifyContent:"flex-end" }}>
            <p id="title">Categories</p>
            <hr id="line_break" />
            <p id="view_more">VIEW MORE</p>
          </div>

          <Carousel
            responsive={responsive}
            containerClass="carousel-container"
            draggable={true}
            showDots={true}
            swipeable={true}
            removeArrowOnDeviceType={["desktop"]}
          >
            <div className="card" id="recent-gallery">
              <div className="card-content-gallery">
                <div className="gallerycard-image">
                  <figure className="image">
                    <img src={model10} alt="Placeholder" />
                  </figure>
                </div>
                <div className="gallerycard-box">
                  <p className="box-title">Soldier</p>
                </div>
                <br />
              </div>
            </div>

            <div className="card" id="recent-gallery">
              <div className="card-content-gallery">
                <div className="gallerycard-image">
                  <figure className="image">
                    <img src={model25} alt="Placeholder" />
                  </figure>
                </div>
                <div className="gallerycard-box">
                  <p className="box-title">Concept Art</p>
                </div>
                <br />
              </div>
            </div>
            <div className="card" id="recent-gallery">
              <div className="card-content-gallery">
                <div className="gallerycard-image">
                  <figure className="image">
                    <img src={model12} alt="Placeholder" />
                  </figure>
                </div>
                <div className="gallerycard-box">
                  <p className="box-title">Likeness</p>
                </div>
                <br />
              </div>
            </div>
            <div className="card" id="recent-gallery">
              <div className="card-content-gallery">
                <div className="gallerycard-image">
                  <figure className="image">
                    <img src={model13} alt="Placeholder" />
                  </figure>
                </div>
                <div className="gallerycard-box">
                  <p className="box-title">Likeness</p>
                </div>
                <br />
              </div>
            </div>
            <div className="card" id="recent-gallery">
              <div className="card-content-gallery">
                <div className="gallerycard-image">
                  <figure className="image">
                    <img src={model14} alt="Placeholder" />
                  </figure>
                </div>
                <div className="gallerycard-box">
                  <p className="box-title">Likeness</p>
                </div>
                <br />
              </div>
            </div>
          </Carousel>
          <Carousel
            responsive={responsive}
            containerClass="carousel-container"
            draggable={true}
            showDots={true}
            swipeable={true}
            removeArrowOnDeviceType={["desktop"]}
          >
            <div className="card" id="recent-gallery">
              <div className="card-content-gallery">
                <div className="gallerycard-image">
                  <figure className="image">
                    <img src={model7} alt="Placeholder" />
                  </figure>
                </div>
                <div className="gallerycard-box">
                  <p className="box-title">Likeness</p>
                </div>
                <br />
              </div>
            </div>

            <div className="card" id="recent-gallery">
              <div className="card-content-gallery">
                <div className="gallerycard-image">
                  <figure className="image">
                    <img src={model26} alt="Placeholder" />
                  </figure>
                </div>
                <div className="gallerycard-box">
                  <p className="box-title">Likeness</p>
                </div>
                <br />
              </div>
            </div>
            <div className="card" id="recent-gallery">
              <div className="card-content-gallery">
                <div className="gallerycard-image">
                  <figure className="image">
                    <img src={model27} alt="Placeholder" />
                  </figure>
                </div>
                <div className="gallerycard-box">
                  <p className="box-title">Likeness</p>
                </div>
                <br />
              </div>
            </div>
            <div className="card" id="recent-gallery">
              <div className="card-content-gallery">
                <div className="gallerycard-image">
                  <figure className="image">
                    <img src={model14} alt="Placeholder" />
                  </figure>
                </div>
                <div className="gallerycard-box">
                  <p className="box-title">Likeness</p>
                </div>
                <br />
              </div>
            </div>
            <div className="card" id="recent-gallery">
              <div className="card-content-gallery">
                <div className="gallerycard-image">
                  <figure className="image">
                    <img src={model15} alt="Placeholder" />
                  </figure>
                </div>
                <div className="gallerycard-box">
                  <p className="box-title">Likeness</p>
                </div>
                <br />
              </div>
            </div>
          </Carousel>
          <Carousel
            responsive={responsive}
            containerClass="carousel-container"
            draggable={true}
            showDots={true}
            swipeable={true}
            removeArrowOnDeviceType={["desktop"]}
          >
            <div className="card" id="recent-gallery">
              <div className="card-content-gallery">
                <div className="gallerycard-image">
                  <figure className="image">
                    <img src={model15} alt="Placeholder" />
                  </figure>
                </div>
                <div className="gallerycard-box">
                  <p className="box-title">Likeness</p>
                </div>
                <br />
              </div>
            </div>

            <div className="card" id="recent-gallery">
              <div className="card-content-gallery">
                <div className="gallerycard-image">
                  <figure className="image">
                    <img src={model16} alt="Placeholder" />
                  </figure>
                </div>
                <div className="gallerycard-box">
                  <p className="box-title">Likeness</p>
                </div>
                <br />
              </div>
            </div>
            <div className="card" id="recent-gallery">
              <div className="card-content-gallery">
                <div className="gallerycard-image">
                  <figure className="image">
                    <img src={model17} alt="Placeholder" />
                  </figure>
                </div>
                <div className="gallerycard-box">
                  <p className="box-title">Likeness</p>
                </div>
                <br />
              </div>
            </div>
            <div className="card" id="recent-gallery">
              <div className="card-content-gallery">
                <div className="gallerycard-image">
                  <figure className="image">
                    <img src={model18} alt="Placeholder" />
                  </figure>
                </div>
                <div className="gallerycard-box">
                  <p className="box-title">Likeness</p>
                </div>
                <br />
              </div>
            </div>
            <div className="card" id="recent-gallery">
              <div className="card-content-gallery">
                <div className="gallerycard-image">
                  <figure className="image">
                    <img src={model19} alt="Placeholder" />
                  </figure>
                </div>
                <div className="gallerycard-box">
                  <p className="box-title">Likeness</p>
                </div>
                <br />
              </div>
            </div>
          </Carousel>
          <Carousel
            responsive={responsive}
            containerClass="carousel-container"
            draggable={true}
            showDots={true}
            swipeable={true}
            removeArrowOnDeviceType={["desktop"]}
          >
            <div className="card" id="recent-gallery">
              <div className="card-content-gallery">
                <div className="gallerycard-image">
                  <figure className="image">
                    <img src={model20} alt="Placeholder" />
                  </figure>
                </div>
                <div className="gallerycard-box">
                  <p className="box-title">Likeness</p>
                </div>
                <br />
              </div>
            </div>

            <div className="card" id="recent-gallery">
              <div className="card-content-gallery">
                <div className="gallerycard-image">
                  <figure className="image">
                    <img src={model11} alt="Placeholder" />
                  </figure>
                </div>
                <div className="gallerycard-box">
                  <p className="box-title">Likeness</p>
                </div>
                <br />
              </div>
            </div>
            <div className="card" id="recent-gallery">
              <div className="card-content-gallery">
                <div className="gallerycard-image">
                  <figure className="image">
                    <img src={model22} alt="Placeholder" />
                  </figure>
                </div>
                <div className="gallerycard-box">
                  <p className="box-title">Likeness</p>
                </div>
                <br />
              </div>
            </div>
            <div className="card" id="recent-gallery">
              <div className="card-content-gallery">
                <div className="gallerycard-image">
                  <figure className="image">
                    <img src={model23} alt="Placeholder" />
                  </figure>
                </div>
                <div className="gallerycard-box">
                  <p className="box-title">Likeness</p>
                </div>
                <br />
              </div>
            </div>
            <div className="card" id="recent-gallery">
              <div className="card-content-gallery">
                <div className="gallerycard-image">
                  <figure className="image">
                    <img src={model24} alt="Placeholder" />
                  </figure>
                </div>
                <div className="gallerycard-box">
                  <p className="box-title">Likeness</p>
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
