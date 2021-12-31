import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import logo from "../assets/a.png"

const Nav = styled.nav`
  width: 100%;
  height: 55px;

  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 0px 50px;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <figure className='image is-128x128'>
          <img src={logo} alt="" />
        </figure>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
