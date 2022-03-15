import React from "react";
import { Link } from "react-router-dom";
import "./Order.css";

const Order = () => {
  return (
    <section className="hero">
      <div className="hero-body order-section">
        <Link to="/createorder">
          <button className="create-button">Create Order</button>
        </Link>

        <button className="order-button" to="">
          My Orders
        </button>
      </div>
    </section>
  );
};

export default Order;
