import React from 'react'
import model from "../assets/model.png"
import "./Hero.css"

const Hero = () => {
    return (
        <section className="hero">
            <div className='hero-body'>
            <div className="model-image">
                    <figure className='img'>
                        <img src={model} alt="" className='man' />
                    </figure>
                </div>
                <div className="box">

                </div>

            

            </div>
        </section>


    )
}

export default Hero
