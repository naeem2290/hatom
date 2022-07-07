import React, { useState } from "react";

import Dropdown from "./LandingPage/Dropdown";
import Logo from "../assets/images/logo.svg";
import Elrond from "../assets/images/elrond.svg";

export default function Header() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <header>
      <div className="header-inner">
        <img className="logo" src={Logo} alt="hatom-logo" />
        <ul>
          <li>Markets</li>
          <li>Governance</li>
          <li>Prices</li>
          <li>Docs</li>
          <li>
            <span className="hatom-link">Hatom Token</span>
          </li>
        </ul>
        <div className="button-container">
          <div className="button-hover">
            <button>
              <img className="elrond-img" src={Elrond} alt="elrond" />
              Elrond
            </button>
          </div>
          <div className="app-button-hover">
            <button className="app-btn">App</button>
          </div>
          <div
            className="menu-icon"
            onClick={() => {
              setDropdown(true);
            }}
          >
            <svg viewBox="0 0 100 80" width="35" height="30" fill="#fff">
              <rect width="75" height="10"></rect>
              <rect y="30" width="75" height="10"></rect>
              <rect y="60" width="75" height="10"></rect>
            </svg>
          </div>
        </div>
      </div>
      {dropdown && <Dropdown logo={Logo} setDropdown={setDropdown} />}
    </header>
  );
}
