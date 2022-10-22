import React from "react";
import Style from "./styles.module.css";

// import { number, string } from "yup/lib/locale";

interface Props {
  text: string;
  color: string;
  iconName: JSX.Element;
  total: string;
}

function BlockUI2(props: Props) {
  return (
    <>
      <div
        className={Style.Block3Tong}
        style={{ backgroundColor: props.color, marginLeft: "40px" }}
      >
        <div style={{ marginBottom: "100px" }}>
          <i style={{ fontSize: "50px" }}>{props.iconName}</i>
        </div>
        <p style={{ fontSize: "20px" }}>{props.text}</p>
        <p>{props.total}</p>
      </div>
    </>
  );
}

export default BlockUI2;
