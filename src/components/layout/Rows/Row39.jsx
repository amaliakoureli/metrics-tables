import React, { useState, useRef } from "react";
import "../../../assets/styles/Row4.css";

function Row39({ row, index, handleChange, handleEnterPress }) {
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
            className="controller row39-select1"
            onKeyDown={(e) => handleEnterPress(e, index, true)}
          >
            <option value=""></option>
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
            className="controller row39-select2"
            onKeyDown={(e) => handleEnterPress(e, index, true)}
          >
            <option value=""></option>
            <option value="ΔΑ">Δ.Α.</option>
            <option value="ΔΕ">Δ.Ε.</option>
            <option value="ΟΚ">ΟΚ</option>
            <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
          </select>
        </td>
        <td className="table-cell">
          <select
            value={row.input3}
            onChange={(e) => handleChange(index, "input3", e.target.value)}
            className="controller row39-select3"
            onKeyDown={(e) => handleEnterPress(e, index, true)}
          >
            <option value=""></option>
            <option value="ΔΑ">Δ.Α.</option>
            <option value="ΔΕ">Δ.Ε.</option>
            <option value="ΟΚ">ΟΚ</option>
            <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
          </select>
        </td>
        <td className="table-cell">
          <select
            value={row.input4}
            onChange={(e) => handleChange(index, "input4", e.target.value)}
            className="controller row39-select4"
            onKeyDown={(e) => handleEnterPress(e, index, true)}
          >
            <option value=""></option>
            <option value="ΔΑ">Δ.Α.</option>
            <option value="ΔΕ">Δ.Ε.</option>
            <option value="ΟΚ">ΟΚ</option>
            <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
          </select>
        </td>
        <td className="table-cell">
          <select
            value={row.input5}
            onChange={(e) => handleChange(index, "input5", e.target.value)}
            className="controller row39-select5"
            onKeyDown={(e) => handleEnterPress(e, index, true)}
          >
            <option value=""></option>
            <option value="ΔΑ">Δ.Α.</option>
            <option value="ΔΕ">Δ.Ε.</option>
            <option value="ΟΚ">ΟΚ</option>
            <option value="ΟΧΙ ΟΚ">NOT ΟΚ</option>
          </select>
        </td>
        <td className="table-cell">
          <select
            value={row.input6}
            onChange={(e) => handleChange(index, "input6", e.target.value)}
            className="controller row39-select6"
            onKeyDown={(e) => handleEnterPress(e, index, true)}
          >
            <option value=""></option>
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

export default Row39;
