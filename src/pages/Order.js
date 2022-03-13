import React from "react";
import "./Order.css";

const Order = () => {
  return (
    <section className="hero">
      <div className="hero-body order-section">
        <button className="create-button">Create Order</button>
        <button className="order-button">My Orders</button>
      </div>
    </section>
  );
};

export default Order;
