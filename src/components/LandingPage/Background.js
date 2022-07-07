import React, { useEffect, useState } from "react";
import { useMediaPredicate } from "react-media-hook";

import Heading from "../../assets/images/heading.svg";
import BgImg from "../../assets/images/bg.svg";
import BgMobile from "../../assets/images/bgMobile.png";
import BgMidImg from "../../assets/images/bg-mid.svg";
import BubblesMobile from "../../assets/images/bubbleMobile.svg";
import BgTopImg from "../../assets/images/scientists.svg";
import OverLight from "../../assets/images/over-light.svg";
import OverMobile from "../../assets/images/overMobile.svg";
import Coin from "./Coin";

const topPosition = () => {
  const coin = document.getElementById("coin-container");
  let coinRect = coin.getBoundingClientRect();
  let coinTop = coinRect.top + window.scrollY;
  return coinTop + coin.scrollTop + 50;
};

const bottomPosition = () => {
  const bottomPosition = document.getElementById("div-feature-btm");
  let bottomRect = bottomPosition.getBoundingClientRect();
  let bottom = bottomRect.top + window.scrollY;
  return bottom + bottomPosition.scrollTop;
};

export default function Background() {
  const [state, setState] = useState(false);
  const media = useMediaPredicate("(max-width: 640px)");
  const [transform, setTransform] = useState("99.6%");
  const [coinStyle, setCoinStyle] = useState({
    top: window.innerWidth > 640 ? "30vw" : "80vw",
    position: "fixed",
    condition: true,
  });
  let innerState = {};

  const coinPosition = () => {
    let top = topPosition();
    let bottom = bottomPosition();

    let scrollValues = [
      { transform: "0%" },
      { transform: "4.5%" },
      { transform: "9%" },
      { transform: "13.5%" },
      { transform: "18%" },
      { transform: "22.5%" },
      { transform: "27%" },
      { transform: "31.5%" },
      { transform: "36.05%" },
      { transform: "40.56%" },
      { transform: "45.11%" },
      { transform: "49.66%" },
      { transform: "54.21%" },
      { transform: "58.76%" },
      { transform: "63.29%" },
      { transform: "67.84%" },
      { transform: "72.38%" },
      { transform: "76.91%" },
      { transform: "81.45%" },
      { transform: "85.99%" },
      { transform: "90.52%" },
      { transform: "95.06%" },
      { transform: "99.6%" },
    ];

    scrollValues = scrollValues.reverse();
    if (window.innerWidth < 500) {
      bottom = bottom * 1;
    } else if (window.innerWidth < 1025) {
      bottom = bottom * 0.95;
    } else {
      bottom = bottom * 1.08;
    }

    let value = (bottom - top) / scrollValues.length;
    let media = window.innerWidth < 640;

    for (let i = 0; i < scrollValues.length; i++) {
      if (i === 0) {
        scrollValues[0].valueA = top;
        scrollValues[0].valueB = scrollValues[i].valueA + value;
      } else scrollValues[i].valueA = scrollValues[i - 1].valueB;
      scrollValues[i].valueB = scrollValues[i].valueA + value;
    }

    innerState = { top, bottom, scrollValues, media };

    if (media && !coinStyle.condition && coinStyle.position !== "absolute") {
      setCoinStyle({
        ...coinStyle,
        top: "80vw",
        position: "fixed",
        condition: true,
      });
      setTransform("99.6%");
    } else if (
      !media &&
      !coinStyle.condition &&
      coinStyle.position !== "absolute"
    ) {
      setCoinStyle({
        ...coinStyle,
        top: "30vw",
        position: "fixed",
        condition: true,
      });
      setTransform("99.6%");
    }
    scroll();
  };

  const scroll = () => {
    let state = innerState;
    let scrollHeight = window.pageYOffset;
    let height = scrollHeight + state.top;

    if (!coinStyle.condition || height < state.bottom) {
      setCoinStyle({
        ...coinStyle,
        top: !state.media ? "30vw" : "80vw",
        position: "fixed",
        condition: true,
      });
    } else if (height > state.bottom) {
      setCoinStyle({
        ...coinStyle,
        position: "absolute",
        top: state.bottom - state.top + "px",
        condition: false,
      });
      setTransform("0%");
    }

    for (let i = 0; i < state.scrollValues.length; i++) {
      if (
        height > state.scrollValues[i].valueA &&
        height < state.scrollValues[i].valueB
      ) {
        setTransform(state.scrollValues[i].transform);
        break;
      }
    }
  };

  useEffect(() => {
    if (state) {
      window.scrollTo(0, 0);
      coinPosition();
      window.addEventListener("resize", coinPosition);
      window.addEventListener("scroll", scroll);
    } else if (!state) {
      window.scrollTo(0, 0);
      coinPosition();
      window.removeEventListener("resize", coinPosition);
      window.removeEventListener("scroll", scroll);
      setState(true);
    }

    return () => {
      window.removeEventListener("resize", coinPosition);
      window.removeEventListener("scroll", scroll);
    };
  }, [state]);

  return (
    <div id="main-container" style={{ height: "100%" }}>
      <div id="bg-container">
        <img
          onLoad={() => {
            setState(!state);
          }}
          id="bg-img"
          src={!media ? BgImg : BgMobile}
          alt="bg-img"
        />
        {!media && <img className="bg-img-mid" src={BgMidImg} alt="bg-mid" />}
        <img
          className="bg-img-top"
          src={!media ? BgTopImg : BubblesMobile}
          alt="bg-top"
        />
        <img
          className="bg-over-light"
          src={!media ? OverLight : OverMobile}
          alt="overLight"
        />
      </div>
      <div className="heading-container">
        <img src={Heading} alt="heading" />
        <div>Deep dive into the heart of Hatom Protocol</div>
      </div>
      <div id="coin-container">
        <Coin transform={transform} coinStyle={coinStyle} />
      </div>
      <div className="hotem-features">
        <div className="dividends">
          <div>
            <div className="dividend-heading">
              <span>$9,449,627.26</span>
              <span className="dividend-word">Dividends</span>
            </div>
            <div className="dividend-description">
              Paid out to Hatom Token holders over 3 years
            </div>
          </div>
          <button className="dividend-btn">Buy Hatom Tokens</button>
        </div>
        <div className="dividend-feature">
          <div className="div-feature-top">
            <h2>
              Features <span>of Hatom Token</span>
            </h2>
          </div>
          <div id="div-feature-btm">
            <div className="left-feature">
              <div>
                <span>Earn</span>
                <p>
                  Stake your Hatom tokens to earn a share of the protocol's
                  revenue. Dividends are paid in EGLD, USDC, MEX, HTM, and RIDE.
                </p>
              </div>
              <div>
                <span>Vote</span>
                <p>
                  Decide which token should be listed next, and what upgrade or
                  feature should be integrated into the protocol.
                </p>
              </div>
            </div>
            <div className="right-feature">
              <div>
                <span>Supply &amp; Borrow</span>
                <p>Hatom token holders can use the HTM Money Market to :</p>
                <ul>
                  <li>
                    <p>Supply HTM and earn interest on their deposit.</p>
                  </li>
                  <li>
                    <p>
                      Use HTM as collateral and take a loan of any available
                      crypto asset.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
