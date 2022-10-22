import React from "react";
import Style from "./styles.module.css";

// import { number, string } from "yup/lib/locale";

interface Props {
  text: string;
  color: string;
  iconName: JSX.Element;
  // total : number;
  // unit : string;
  percentage: number;
}

function BlockUI2(props: Props) {
  return (
    <div className={`${Style.div__bar}`} style={{ width: "80%" }}>
      {/* <CustomFaIcon name="FaStar" />
      <i className={iconName}></i> */}
      <div style={{ display: "inline-block", marginLeft: "100px" }}>
        <i className={Style.myIcon}>{props.iconName}</i>
        <span style={{ fontSize: "18px" }}>{props.text}</span>
      </div>
      <div className={Style.process__bar}>
        <div
          className={Style.success}
          style={{
            backgroundColor: props.color,
            width: `${props.percentage}%`,
          }}
        >
          {props.percentage}%
        </div>
      </div>
    </div>
  );
}

export default BlockUI2;
