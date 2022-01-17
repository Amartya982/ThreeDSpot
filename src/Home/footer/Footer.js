import React from 'react'
import "./Footer.css"
import {
    FaInstagram,
    FaYoutube,
    FaReddit,
    FaTwitter,
    FaDiscord,
} from "react-icons/fa";
const Footer = () => {

    return (
        <section class="hero footer-section">
            <hr className="line" />
            <div className="hero-body">


                <div className="columns privacy-link ">
                    <div className="column footer-link mr-auto">
                        <a href="/privacy" className='privcy mr-auto'>Privacy Policy</a>
                    </div>
                    <div className="column has-text-centered">
                        <div className="footer-link">
                            <a href="/collection" className="link">
                                Products
                            </a>
                            <a href="/gallery" className="link">
                                Gallery
                            </a>
                            <a href="/contact" className="link">
                                Contact Us
                            </a>
                        </div>
                        <br />
                        <br />
                        <p className="copyright has-text-centered">
                        © 3D Spot, Inc. 2021. We love our users!
                        </p>
                    </div>


                    <div className="column social-links">
                        <div className="social-icons ml-auto is-centered-mobile">
                            <a
                                id="footer-icons"
                                href="www.google.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                id="footer-icons"
                                href="www.google.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                id="footer-icons"
                                href="www.google.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaReddit />
                            </a>
                            <a
                                id="footer-icons"
                                href="www.google.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaDiscord />
                            </a>


                            <a
                                id="footer-icons"
                                href="www.google.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaYoutube />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
