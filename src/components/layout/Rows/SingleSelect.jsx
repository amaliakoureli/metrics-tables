import React, { useState } from "react";
import "../../../assets/styles/styles.css";

function SingleSelect({ row, index, handleEnterPress, handleChange }) {
  return (
    <tr
      key={row.id}
      className="table-row"
      data-row={index === 0 ? "0" : undefined}
    >
      <td className="table-cell column-id">{row.id}</td>
      <td className="table-cell column-text" colSpan={2}>
        {row.text}
      </td>
      <div className="inputs-alignment">
        <td className="table-cell">
          <select
            value={row.input1}
            onChange={(e) => handleChange(index, "input1", e.target.value)}
            className="controller  single-select1"
            onKeyDown={(e) => handleEnterPress(e, index, true)}
          >
            <option value=""></option>
            <option value="Δ.Α.">Δ.Α.</option>
            <option value="Δ.Ε.">Δ.Ε.</option>
            <option value="ΟΚ">ΟΚ</option>
            <option value="NOT ΟΚ">NOT ΟΚ</option>
          </select>
        </td>
      </div>
    </tr>
  );
}

export default SingleSelect;
