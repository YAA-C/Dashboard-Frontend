

import React from "react";
import "./LandingPage.css";
import yaacs from './images/logo3.png'
import { Link } from "react-router-dom";

export const LandingPage = () => {

  return (
    <>
      <div className="LandingPage-divbody">

        <div className="LandingPage-main">
          <div id="slideshow">

            <span className="LandingPage-quote">ELIMINATE CHEATERS, ELEVATE FAIRPLAY</span>
            <div className="text-on-image">
              <img style={{ height: 200, width: 400, padding: 15 }} src={yaacs} />
            </div>
            <div>
              <Link to={"/auth"}>
                <button className="LandingPage-btn">Log In / Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="LandingPage-information">
          <div className="LandingPage-introcard">
            <h1 className="LandingPage-heading">Introduction</h1>
            <p className="LandingPage-paraone">Modern video games have gained tremendous popularity among today’s youth and have become highly  lucrative. Fair play and integrity are fundamental aspects of the gaming experience, particularly in modern multiplayer games. Most of these contemporary games fall into the category of multiplayer first-person  shooter (FPS) games. FPS games have become increasingly mainstream, attracting thousands of players  daily. Titles like Counter-Strike: Global Offensive, Valorant, Call of Duty: Modern Warfare, and many more  are at the forefront. Competitive and online FPS games depend on balanced, skill based encounters, where players can gauge their abilities on a level playing field.The video game industry has grown rapidly in recent years as a result of developments in social connections, technol ogy, and entertainment. The business has seen a rise in competitive esports, grabbing the interest of millions with a huge worldwide  audience from many cultures, regions, and styles. The gaming business has reached new heights because  of technological advancements including amazing visuals, a lifelike gaming experience, improved sound quality, and other elements.</p>
          </div>
          {/* -------------------------------------------------------------------------------------------------------------------------- */}
          <div className="LandingPage-tablecard">
            <h1 className="LandingPage-heading2">Created By </h1>
            <div className="LandingPage-tablecreation">
              <table className="table table-striped" style={{ width: 600, height: 350 }}>
                <thead>
                  <tr >
                    <th scope="col">Sr.no</th>
                    <th scope="col">Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr >
                    <th scope="row">1</th>
                    <td>Siddhesh Dinge</td>
                  </tr>
                  <tr >
                    <th scope="row">2</th>
                    <td>Shubham Sukum</td>
                  </tr>
                  <tr >
                    <th scope="row">3</th>
                    <td>Harsh Ranjane</td>
                  </tr>
                  <tr >
                    <th scope="row">4</th>
                    <td>Ruturajsingh Rajput</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>

    </>




  );
}; 