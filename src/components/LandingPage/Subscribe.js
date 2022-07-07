import React from "react";

export default function Subscribe() {
  return (
    <section className="subscribe-container">
      <div className="subscribe-inner">
        <span className="subscribe-heading">Subscribe to Hatom newsletter</span>
        <span className="subscribe-details">
          Subscribe to our newsletter and stay updated on the latest
          developments.
        </span>
        <form>
          <div className="input-container">
            <input placeholder="Enter your Email"></input>
            <button>Subscribe</button>
          </div>
        </form>
      </div>
    </section>
  );
}
