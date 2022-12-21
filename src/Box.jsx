import React from "react";

export default function Box(props) {
  const styles = props.on ? "#000" : "#fff";
  return (
    <div
      className="box"
      style={{ background: styles }}
      onClick={props.toggle}
    ></div>
  );
}
