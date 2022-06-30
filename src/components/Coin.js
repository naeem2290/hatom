import React from "react";

export default function Coin({ transform, coinStyle }) {
  return (
    <div
      id="coin"
      style={{
        backgroundPositionY: transform,
        top: coinStyle.top,
        position: coinStyle.position,
      }}
    ></div>
  );
}
