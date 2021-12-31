import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    width: 20rem;
    color: #fff;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    z-index: 2;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 5.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <section className="hero">
      <div className="hero-body">
        <Ul open={open}>
          <li className="link">Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </Ul>
      </div>
    </section>
  );
};
export default RightNav;
