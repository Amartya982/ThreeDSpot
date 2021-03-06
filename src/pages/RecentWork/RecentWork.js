import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import model4 from "../../assets/model4.jpg";
import model5 from "../../assets/model5.jpg";
import model6 from "../../assets/model6.jpg";
import model7 from "../../assets/model7.jpg";
import model8 from "../../assets/model8.jpg";
import "./RecentWork.css";

const RecentWork = () => {
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
      <section className="hero recentwork-section">
        <div className="hero-body">
          <div className="recent-work-box" style={{ display: "flex" }}>
            <div style={{ display: "flex", marginLeft: "auto" }}>
              <p id="title">RECENT WORK</p>
              <hr id="line_break" />
              <p id="view_more">VIEW MORE</p>
            </div>
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
                    <img
               
                      src={model5}
                      alt="Placeholder"
                    />
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
                    <img src={model6} alt="Placeholder" />
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
                    <img src={model4} alt="Placeholder" />
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
                  <figure className="image ">
                    <img src={model8} alt="Placeholder" />
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
export default RecentWork;
