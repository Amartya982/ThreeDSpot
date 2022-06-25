import React, { useState } from 'react'
import "./Navbar.css"
import {HiOutlineShoppingCart} from "react-icons/hi"
import { Link } from 'react-router-dom'
import logo from "../../../src/assets/logo_white 1.png"

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    return (
       <>
            <nav className='navbar'>

            <Link to="/" className='logo-link'>
            <figure className='image'>
        <img src={logo} alt="" />
                </figure>
                </Link>
            <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}
                onClick={() => setIsMobile(false)}>
                <Link to="/" className='home'>
                    <li>Home</li>
                </Link>
                <Link to="/store" className='home'>
                    <li>Store</li>
                </Link>

                <Link to="/gallery" className='home'>
                    <li>Gallery</li>
                </Link>
                <Link to="/order" className='home'>
                    <li>Order</li>
                </Link>
          
                <Link to="/login" className='home login-butt' >
                    <li className=''>Login</li>
                </Link>
                <Link to="/cart" className='home cart'>
                <HiOutlineShoppingCart className='cart-icon'style={{ fontSize: '20px' }} />
                
                </Link>
            </ul>
            <button className='mobile-menu-icon'
                onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? <i className="fas fa-times"></i> :
                    <i className='fas fa-bars'></i>}
            </button>
        </nav>
               </>
      

    )
}

export default Navbar
