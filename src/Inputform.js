import React from "react";

export default function Inputform(props) {
  return(
    <div>
      <label>{props.labelname}</label>
      <input type="number" step="any" min="1" value={props.value} onChange={props.onChange} />
    </div>
  );
}
