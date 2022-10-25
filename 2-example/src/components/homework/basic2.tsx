import React from "react";
import Tivi from "./basic-images/img2.jpg";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

// import
type Props = {};

function Basic2({}: Props) {
  return (
    <div className="main__2">
      <div className="row p-4">
        <div className="col-12">
          <img src={Tivi} alt="Television" className="img2" />
        </div>
        <div className="col-12">
          <h2 className="main__2-name">YOUNG SHOP</h2>
          <h3 className="main__2-size">SAMSUNG IHBCD 50 INCH</h3>
          <div className="main__2-star">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            {/* <AiOutlineStar /> */}
          </div>
          <span className="main__2-buy">30 trieu</span>
        </div>
      </div>
    </div>
  );
}

export default Basic2;
