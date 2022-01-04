import React from "react";
import styled from "styled-components";
import 'bulma/css/bulma.css'
import Burger from "./Burger";
import "./Navbar.css";
import logo from "../../assets/a.png";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 100px;
  margin-top: -50px;
 
`;

const Navbar = () => {
  return (
    <section className="hero">
      <div className="hero-body">
        <Nav>
          <div className="logo-box">
          <p className="logo">3D Spot</p>
          </div>
          <Burger />
        </Nav>
        <hr className="line"/>
      </div>
    </section>
  );
};

export default Navbar;
