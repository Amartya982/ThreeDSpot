import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./rightnav.css";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    width: 100px;
    text-align: center;
    color: #fff;
    justify-content: space-between;
    font-family: "Readex Pro", sans-serif;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #ffd600;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    z-index: 10;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 5.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      margin-left: auto;
      margin-right: auto;
      padding: 30px;

      cursor: pointer;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <section className="hero">
      <div className="hero-body">
        <Ul open={open} className="link ">
          <li>
            <Link style={{ color: "#FFD600" }} to="/">
              <font className="link"> Home</font>
            </Link>
          </li>
          <li>
            <Link style={{ color: "white" }} to="/Pricing">
              <font className="link"> Pricing</font>
            </Link>
          </li>
          <li>
            <Link style={{ color: "white" }} to="/Gallery">
              <font className="link">Gallery</font>
            </Link>
          </li>
          <li>
            <Link style={{ color: "white" }} to="/About">
              <font className="link"> About</font>
            </Link>
          </li>
          <button className="contact">Contact Us</button>
        </Ul>
      </div>
    </section>
  );
};
export default RightNav;
