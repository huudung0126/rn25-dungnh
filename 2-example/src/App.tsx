import React from "react";
import logo from "./logo.svg";
import "./App.css";
// // import pic1 from "./images/pic1.jpeg";
import Header from "./components/Header";
// // import Footer from "./components/Footer";
import Basic1 from "./components/homework/basic1";
import Basic2 from "./components/homework/basic2";
import "./components/homework/basic.css";
// import BTNumber from "./components/BT/BTNumber";
import Login from "./components/Login";
import BlockUI1 from "./components/homework/BlockUI1/BlockUI1";
import BlockUI2 from "./components/homework/BlockUI2/BlockUI2";

import * as Icons from "react-icons/ai";
import BlockUI3 from "./components/homework/BlockUI3/BlockUI3";
import Basic3 from "./components/basic3";
// import Like from "./components/SS3/Like";

function App() {
  return (
    <>
      <Basic1 />
      <Basic2 />
      <Basic3 />
      {/* <div>
  HELLO
</div>

<Login />

<Header /> */}

      {/* BlockUI */}
      {/* BlockUI1======= */}
      {/* <BlockUI1  text = "BANK"
  color1 = "red"
  color2 = "blue"
  percentage = {50}/> */}

      {/* ======BlockUI 2===== */}
      {/* <div style={{border:"1px solid red ", margin : "10px", borderRadius : "10px"}}>
<BlockUI2
  text = "FACEBOOK"
  color = "Blue"
  iconName =  {<Icons.AiFillFacebook/>}
  percentage =  {70}/>
</div> */}

      {/* BlockUI3====== */}
      {/* <BlockUI3
        text="FACEBOOK"
        color="blue"
        iconName={<Icons.AiFillFacebook />}
        total="500000 Like"
      />
      <BlockUI3
        text="google+"
        color="red"
        iconName={<Icons.AiFillGoogleCircle />}
        total="500000 Like"
      /> */}

      {/* ===SS3==== */}
      {/* <Like /> */}
    </>
  );
}

export default App;
