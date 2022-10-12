import React from "react";
import img from "./basic-images/img1.jpg";
import "./basic.css";
type Props = {};

function Basic1({}: Props) {
  return (
    <>
      <div className="row">
      <div className="col-12">
      <img src={img} alt="" className="photo" style={{ float: "left" }} />
      <div className="demo" style={{ textAlign: "left", float: "left" }}>
        <h2>Clothing & Apparel</h2>
        <p>Accessories</p>
        <p>Bags</p>
        <p>Kid's Fashion</p>
        <p>Mens</p>
      </div>
      </div>
      </div>
    </>
  );
}

export default Basic1;