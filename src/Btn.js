import React from "react";

export default function Btn(props) {
  return(
    <button style={props.style} className='btn' type= {props.type} onClick={props.onClick}>{props.label}</button>
  );
}