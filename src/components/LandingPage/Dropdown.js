import React from "react";

import Close from "../../assets/images/close.svg";

export default function Dropdown({ logo, setDropdown }) {
  return (
    <div className="dropdown">
      <div className="d-logo-container">
        <img className="logo" src={logo} alt="Logo" />
        <img
          className="close"
          src={Close}
          alt="close"
          onClick={() => {
            setDropdown(false);
          }}
        />
      </div>
      <ul>
        <li>Markets</li>
        <li>Governance</li>
        <li>Prices</li>
        <li>Docs</li>
        <li>
          <span className="b-hatom-link">Hatom Token</span>
        </li>
        <li>
          <button>App</button>
        </li>
      </ul>
    </div>
  );
}
