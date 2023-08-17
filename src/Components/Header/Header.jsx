import React, { useRef } from "react";
import "./header.css";
import CTA from "./CTA";
import SHE from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import Typewriter from "typewriter-effect";

const Header = () => {
  const StyleToName = useRef("");
  const Colors = [
    "#F0C808",
    "#93C0A4",
    "#6CD4FF",
    "#9E643C",
    "#64E9EE",
    "#F8F32B",
    "#DC136C",
    "#F49D37",
    "#A682FF",
    "#FF3F00",
    "#F6AE2D",
    "#F26419",
    "#56203D",
    "#FF1D15",
    "#53DD6C",
    "#FDE12D",
    "#32E875",
    "#F8F4E3",
    "#706C61",
    "#E5446D",
    "#623CEA",
    "#020202",
    "#A882DD",
    "#49416D",
    "#86BBD8",
  ];

  const StyleThem = () => {
    const RandomColorGenerator = Math.floor(Math.random() * Colors.length);
    StyleToName.current.style.color = Colors[RandomColorGenerator];
  };

  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 ref={StyleToName} onClick={StyleThem} style={{ cursor: "pointer" }}>
          SARAVANAN
        </h1>
        <h5 className="text-light">
          <Typewriter
            options={{
              strings: [
                "FRONT-END DEVELOPER",
                "BACKEND DEVELOPER",
                "UI/UX DESIGNER",
              ],
              autoStart: true,
              loop: true,
              cursor: "|",
              delay: 120,
              cursorClassName: "apps",
              deleteSpeed: 50,
            }}
          />
        </h5>
        <CTA />
        <HeaderSocials />

        <div className="she">
          <img src={SHE} alt="Profile_PIC" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
