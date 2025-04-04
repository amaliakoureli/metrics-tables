import React, { useState } from "react";
import "./Row4.css";

function Row26({ row, index, handleEnterPress, handleChange }) {
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
          <input
            type="text"
            value={row.input1}
            onChange={(e) => handleChange(index, "input1", e.target.value)}
            className="controller double-input1"
            onKeyDown={(e) => handleEnterPress(e, index, true)}
          />
        </td>
        <td className="table-cell">
          <input
            type="text"
            value={row.input1}
            onChange={(e) => handleChange(index, "input1", e.target.value)}
            className="controller double-input2"
            onKeyDown={(e) => handleEnterPress(e, index, true)}
          />
        </td>
      </div>
    </tr>
  );
}

export default Row26;
