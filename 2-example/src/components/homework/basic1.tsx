import React from "react";
import Ao from "./basic-images/img1.jpg";
type Props = {};

function Basic1({}: Props) {
  return (
    <div className="main__1">
      <div className="row">
        <div className="col-6 p-4">
          <img src={Ao} className="main-img1" alt="T-Shirt" />
        </div>
        <div className="col-6 d-flex align-items-center">
          <div className="main-content">
            <h2 className="main-title">Clothing & Apparel</h2>
            <p>Accessories</p>
            <p>Bags</p>
            <p>Kid's Fashion</p>
            <p>Mens</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basic1;
