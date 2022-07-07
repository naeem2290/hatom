import React from "react";

import Img33 from "../../assets/images/img33.svg";
import Img34 from "../../assets/images/img34.svg";
import Img35 from "../../assets/images/img35.svg";
import Arrow from "../../assets/images/arrow.svg";

const data = [
  {
    img: Img33,
    title: "Get Hatom",
    description: " Buy Hatom tokens and take part of a growing system",
  },
  {
    img: Img34,
    title: "Benefits of Hatom Token",
    description:
      "Take part in development of the ecosystem and have access to a trumendous staking yield",
  },
  {
    img: Img35,
    title: "White Paper",
    description:
      "Go through our whitepaper to have a better grasp of our protocol",
  },
];

export default function Understanding() {
  return (
    <section className="understanding-container">
      <div className="understanding">
        <h2>Understanding Hatom</h2>
        <div className="card-container">
          {data.map((el, index) => {
            return (
              <div key={index} className="card-deatils">
                <img src={el.img} alt="images" />
                <div className="card-btm">
                  <h3>{el.title}</h3>
                  <p>{el.description}</p>
                  <a href="#">
                    Learn More <img src={Arrow} alt="Arrow Icon" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
