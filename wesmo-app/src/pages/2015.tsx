// Filename - pages/2015.tsx

import React from "react";
import BurgerMenu from "../components/BurgerMenu.tsx";
import TitleCard from "../components/TitleCard.tsx";
import Logo from "../components/Logo.tsx";

import car_2015 from "../images/car_2015-2.jpg";

import "../App.css";

const History_2023: React.FC = () => {
  return (
    <div className="App">
      <div className="background history-table">
        <link
          href="https://fonts.googleapis.com/css?family=Roboto Condensed"
          rel="stylesheet"
        ></link>
        <div className="navbar">
          <div className="nav-left">
            <Logo colour="dark" />
          </div>
          <div className="nav-right">
            <BurgerMenu colour="black" />
            <div className="nav-right"></div>
          </div>
        </div>
        <br />
        <TitleCard title="W-FS15" />
        <br />
        <img src={car_2015} alt="W-FS15" className="history-car" />
        <table id="car_table" className="table table-bordered table-striped">
          <tbody>
            <tr>
              <th id="table_col">Engine</th>
              <td>Suzuki GSR600 - 60KW </td>
              <td>6 - Speed Sequential Gearbox</td>
            </tr>
            <tr>
              <th id="table_col">Drive Chain</th>
              <td>Drexler - LSD unit weight is approximately 2.6 kg </td>
              <td>Custom Sprocket and Carrier</td>
            </tr>
            <tr>
              <th id="table_col">Chassis</th>
              <td>Space-Frame Chassis</td>
              <td>Mild Steel</td>
            </tr>
            <tr>
              <th id="table_col">Suspension</th>
              <td>
                Unequal length, non-parallel wishbones. Pushrod actuated Front
                and Rear
              </td>
              <td>Ohlins Shock Absorbers</td>
            </tr>
            <tr>
              <th id="table_col">Braking System / Hub / Uprights</th>
              <td>
                Wilwood PS-1 Calipers with Twin outboard floating discs (Front)
              </td>
              <td>Aluminium Uprights </td>
            </tr>
            <tr>
              <th id="table_col">Ergonomics</th>
              <td>
                3-D Printed Paddle Shifters / Motec Dash Display / Momo Steering
                Wheel
              </td>
              <td>3-D Printed Pedals / Custom Carbon Fibre Seat</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History_2023;