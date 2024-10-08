// Filename - pages/race-data.tsx

import React from "react";
import BurgerMenu from "../components/BurgerMenu.tsx";
import Logo from "../components/Logo.tsx";
import "../App.css";

const Data: React.FC = () => {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css?family=Roboto Condensed"
        rel="stylesheet"
      ></link>
      <div className="background">
        <div className="navbar">
          <div className="nav-left">
            <Logo />
          </div>
          <div className="nav-right">
            <BurgerMenu />
            <div className="nav-right"></div>
          </div>
        </div>
        <div id="mainTitle">
          <h1 className="text-3xl font-bold underline">
            Website under construction
          </h1>
          <h3>More coming soon</h3>
        </div>
      </div>
    </div>
  );
};

export default Data;
