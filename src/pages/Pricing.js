import React from 'react'
import "./Pricing.css"
import { BsCheckCircleFill } from "react-icons/bs"

const Pricing = () => {
    return (
        <section className='hero'>
            <div className="hero-body pricing-section">
                <p className='pricing-title has-text-centered'> Our Services Has<br />
                    Friendly Packages</p>
                <br />
                <p className='pricing-subtitle has-text-centered mb-6'>Choose plans that suits better to your model</p>

                <div className="columns price-section">
                    <div className="column">
                        <div className="simple">

                            <p className='simple-head has-text-centered mt-5'>Simple</p>
                            <br />
                            <p className='price has-text-centered'>$40</p>
                            <hr className='pricing-line' />
                            <button className='pricing-order '>
                                <div className="price-overlap">
                                    Order Now
                                </div>

                            </button>
                            <br />

                            <div className="correct has-text-left ml-4">
                                <BsCheckCircleFill className='icons mr-2' />
                                Simple Keychains
                            </div>
                            <br />
                            <div className="correct has-text-left ml-4">
                                <BsCheckCircleFill className='icons mr-2' />
                                Human face
                            </div>
                            <br />
                            <div className="correct has-text-left ml-4">
                                <BsCheckCircleFill className='icons mr-2' />
                                Scan Cleanup
                            </div>
                            <br />
                            <div className="correct has-text-left ml-4">
                                <BsCheckCircleFill className='icons mr-2' />
                                More...
                            </div>


                        </div>

                    </div>
                    <div className="column">
                        <div className="moderate">
                            <p className='simple-head has-text-centered mt-5'>Moderate</p>
                            <br />
                            <p className='price has-text-centered'>$60</p>
                            <hr className='pricing-line' />
                            <button className='pricing-order '>
                                <div className="price-overlap">
                                    Order Now
                                </div>

                            </button>
                            <br />

                            <div className="correct has-text-left ml-4">
                                <BsCheckCircleFill className='icons mr-2' />
                                Human Full Body
                            </div>
                            <br />
                            <div className="correct has-text-left ml-4">
                                <BsCheckCircleFill className='icons mr-2' />
                                Relief Model
                            </div>
                            <br />
                            <div className="correct has-text-left ml-4">
                                <BsCheckCircleFill className='icons mr-2' />
                                Props
                            </div>
                            <br />
                            <div className="correct has-text-left ml-4">
                                <BsCheckCircleFill className='icons mr-2' />
                                More...
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="complex">

                            <p className='simple-head has-text-centered mt-5'>Complicated</p>
                            <br />
                            <p className='price has-text-centered'>$120</p>
                            <hr className='pricing-line' />
                            <button className='pricing-order '>
                                <div className="price-overlap">
                                    Order Now
                                </div>

                            </button>
                            <br />

                            <div className="correct has-text-left ml-4">
                                <BsCheckCircleFill className='icons mr-2' />
                                Game Character
                            </div>
                            <br />
                            <div className="correct has-text-left ml-4">
                                <BsCheckCircleFill className='icons mr-2' />
                                Action Figure
                            </div>
                            <br />
                            <div className="correct has-text-left ml-4">
                                <BsCheckCircleFill className='icons mr-2' />
                                Ship, car, Truck...
                            </div>
                            <br />
                            <div className="correct has-text-left ml-4">
                                <BsCheckCircleFill className='icons mr-2' />
                                More...
                            </div>


                        </div>

                    </div>
                    <div className="column">
                        <div className="moderate">
                            <p className='simple-head has-text-centered mt-5'>Need to Talk</p>
                            <br />
                            <p className='price has-text-centered'>-</p>
                            <hr className='pricing-line' />
                            <button className='pricing-order '>
                                <div className="price-overlap">
                                    Chat Now
                                </div>

                            </button>
                            <br />

                            <div className="correct has-text-left ml-4">
                                <BsCheckCircleFill className='icons mr-2' />
                                For bigger and complicated
                                projects
                            </div>
                            <br />
                            <div className="correct has-text-left ml-4">
                                <BsCheckCircleFill className='icons mr-2' />
                                If your projects is very very small
                            </div>
                            <br />
                            <div className="correct has-text-left ml-4">
                                <BsCheckCircleFill className='icons mr-2' />
                                For any other queries
                            </div>
                            <br />

                        </div>

                    </div>
                </div>

            </div>

        </section>
    )
}

export default Pricing
