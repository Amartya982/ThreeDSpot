import React from 'react'
import spider from "../../assets/sp 1.png"
import "./Hero.css"

const Hero = () => {
    return (
        <section className='hero'>
            <div className="hero-body hero-section">
                <div className="columns">
                    <div className="column title-section ">
                        <p className='title'>
                            <font style={{ color: " #EF5DA8" }}>  Turning </font>images into 3D Model
                        </p>
                        <br />
                        <p className='subtitle'>
                            Send the 2D Image and get a 3D Model ready for 3D Printing at a affordable cost.
                        </p>
                        <br />
                        <button className='order'>
                            Order Now
                        </button>
                        <button className='learn'>
                            Learn more
                        </button>

                    </div>
                    <div className="column image-section">
                        <figure className='image'>
                            <img src={spider} alt="" />
                        </figure>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero
