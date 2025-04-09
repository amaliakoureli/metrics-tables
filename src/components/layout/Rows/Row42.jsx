import React, { useState } from "react";
import "../../../assets/styles/Row4.css";

function Row42({
  row,
  index,
  handleEnterPress,
  handleChange,
  input1,
  select1,
}) {
  return (
    <>
      <tr
        key={row.id}
        className="table-row"
        data-row={index === 0 ? "0" : undefined}
      >
        <td className="table-cell column-id">{row.id}</td>
        <td className="table-cell column-text" colSpan={2}>
          Max open circuit (V LED+ - V LED- σε V DC, χωρλις τη LEDοσειρά πάνω)
        </td>
        <div className="inputs-alignment">
          <td className="table-cell">
            <input
              type="text"
              value={row.input1}
              onChange={(e) => handleChange(index, "input1", e.target.value)}
              className="controller row42-input1"
              onKeyDown={(e) => handleEnterPress(e, index, true)}
            />
          </td>
        </div>
      </tr>
      <tr>
        <td className="table-cell column-id"></td>
        <td className="table-cell column-text" colSpan={2}>
          {row.text}
        </td>
        <div className="inputs-alignment">
          <td className="table-cell">
            <select
              value={row.select1}
              onChange={(e) => handleChange(index, "select1", e.target.value)}
              className="controller row42-select1"
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
    </>
  );
}

export default Row42;
