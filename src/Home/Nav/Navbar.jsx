import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    return (
       <>
            <nav className='navbar'>
            <h3 className='logo'>3D Spot</h3>
            <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}
                onClick={() => setIsMobile(false)}>
                <Link to="/" className='home'>
                    <li>Home</li>
                </Link>
                <Link to="/pricing" className='home'>
                    <li>Pricing</li>
                </Link>

                <Link to="/gallery" className='home'>
                    <li>Gallery</li>
                </Link>
                <Link to="/about" className='home'>
                    <li>About</li>
                </Link>
                <Link to="/contact" className='home contact'>
                    <li>Contact Us</li>
                </Link>
            </ul>
            <button className='mobile-menu-icon'
                onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? <i className="fas fa-times"></i> :
                    <i className='fas fa-bars'></i>}
            </button>
        </nav>
        <hr className="line" />
               </>
      

    )
}

export default Navbar
