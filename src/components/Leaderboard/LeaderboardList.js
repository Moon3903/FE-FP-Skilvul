import React from "react";
import medalEmas from "./../../assets/img/medal.svg";
import medalPerak from "./../../assets/img/medal1.svg";
import medalPerunggu from "./../../assets/img/medal2.svg";

export default function ({ id,index, img, name, point }) {
  function medal(curr) {
    if (curr === 0) {
      return <img src={medalEmas} />;
    } else if (curr === 1) {
      return <img src={medalPerak} />;
    } else if (curr === 2) {
      return <img src={medalPerunggu} />;
    } else return curr;
  }

  return (
    <tr>
      <th scope="row">{medal(index)}</th>
      <td>
        <img src={img} style={{ height: "2rem" }} />
      </td>
      <td>{name}</td>
      <td>
        <span className="value-table">{point}</span>
        &nbsp;
        <small>total points</small>
      </td>
    </tr>
  );
}
