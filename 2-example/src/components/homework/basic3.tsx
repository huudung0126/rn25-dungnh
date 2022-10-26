import React from "react";
import Chandung from "./homework/basic-images/img3.jpg";
type Props = {};

function Basic3({}: Props) {
  return (
    <div className="main__3">
      <div className="row p-4">
        <div className="col-12">
          <img src={Chandung} alt="ChanDung" className="img3" />
        </div>
        <div className="col-12">
          <h2 className="main__3-name">Technogly</h2>
          <h3 className="main__3-size">
            HARMAN KADON ONYX STUDIO MINI, REVIEWS AND EXPERINECES
          </h3>
          <div className="main__3-star">Fer 21, 2022 by drfurion</div>
        </div>
      </div>
    </div>
  );
}

export default Basic3;
