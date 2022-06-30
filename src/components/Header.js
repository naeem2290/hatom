import React from "react";

import Logo from "../assets/images/logo.svg";

export default function Header() {
  return (
    <header>
      <div className="header-inner">
        <img src={Logo} alt="hatom-logo" />
        <ul>
          <li>Markets</li>
          <li>Governance</li>
          <li>Prices</li>
          <li>Docs</li>
          <li>Hatom Token</li>
        </ul>
        <div className="button-container">
          <button>Elrond</button>
          <button className="app-btn">App</button>
          <div className="menu-icon">
            <svg viewBox="0 0 100 80" width="35" height="30" fill="#fff">
              <rect width="100" height="10"></rect>
              <rect y="30" width="100" height="10"></rect>
              <rect y="60" width="100" height="10"></rect>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
