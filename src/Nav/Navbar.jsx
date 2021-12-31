import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import "./Navbar.css";
import logo from "../assets/a.png";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 100px;
  margin-top: -50px;
  .logo {
    width: 15rem;
  }
`;

const Navbar = () => {
  return (
    <section className="hero">
      <div className="hero-body">
        <Nav>
          <div className="logo">
            <figure className="image is-128x128">
              <img src={logo} alt="" className="logo-image" />
            </figure>
          </div>
          <Burger />
        </Nav>
      </div>
    </section>
  );
};

export default Navbar;
