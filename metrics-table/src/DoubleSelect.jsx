import React, { useState } from "react";
import "./Row4.css";

function DoubleSelect({ row, index, handleEnterPress, handleChange }) {
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
            className="controller double-selectInput1"
            onKeyDown={(e) => handleEnterPress(e, index, true)}
          >
            <option value="ΔΑ">Δ.Α.</option>
            <option value="ΔΕ">Δ.Ε.</option>
            <option value="ΟΚ">ΟΚ</option>
            <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
          </select>
        </td>
        <td className="table-cell">
          <select
            value={row.input2}
            onChange={(e) => handleChange(index, "input2", e.target.value)}
            className="controller double-selectInput2"
            onKeyDown={(e) => handleEnterPress(e, index, true)}
          >
            <option value="ΔΑ">Δ.Α.</option>
            <option value="ΔΕ">Δ.Ε.</option>
            <option value="ΟΚ">ΟΚ</option>
            <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
          </select>
        </td>
      </div>
    </tr>
  );
}

export default DoubleSelect;
