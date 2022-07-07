import React from "react";

import LogoSquare from "../assets/images/logoSquare.png";
import English from "../assets/images/eng.svg";
import Logos from "./LandingPage/Logos";

export default function Footer() {
  console.log(Logos);
  return (
    <footer>
      <div className="footer-top">
        <img src={LogoSquare} alt="logo" />
        <div>
          <span>Protocol</span>
          <ul>
            <li>Market</li>
            <li>Prices</li>
            <li>Blog</li>
            <li>Docs</li>
          </ul>
        </div>
        <div>
          <span>Governance</span>
          <ul>
            <li>Overview</li>
            <li>Hatom Token</li>
          </ul>
        </div>
        <div>
          <span>Security</span>
          <ul>
            <li>Audits</li>
            <li>Formal Verification</li>
            <li>Economic Security</li>
            <li>Bug Bounty</li>
          </ul>
        </div>
        <div className="f-btn-container">
          <button>App</button>
        </div>
      </div>
      <div className="footer-mid">
        <span>© 2022 Hatom Labs, LLC.</span>
        <div className="logo-container">
          {Logos.map((logo, index) => {
            return (
              <span className="f-logos" key={index}>
                {logo()}
              </span>
            );
          })}
        </div>
      </div>
      <div className="footer-bottom">
        <div>
          <span className="blinker"></span>
          <span>Latest Epoch: 706</span>
        </div>

        <div>
          Language <img src={English} alt="English" />
        </div>
      </div>
    </footer>
  );
}
