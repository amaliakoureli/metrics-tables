import React, { useState, useRef } from "react";
import "./Row4.css";

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
      <div>
        <td className="table-cell">
          <input
            type="text"
            value={row.input1}
            onChange={(e) => handleChange(index, "input1", e.target.value)}
            className="controller dropdown39-select1"
            onKeyDown={(e) => handleEnterPress(e, index, true)}
          />
        </td>
        <td className="table-cell">
          <input
            type="text"
            value={row.input2}
            onChange={(e) => handleChange(index, "input2", e.target.value)}
            className="controller dropdown39-select2"
            onKeyDown={(e) => handleEnterPress(e, index, true)}
          />
        </td>
        <td className="table-cell">
          <input
            type="text"
            value={row.input3}
            onChange={(e) => handleChange(index, "input3", e.target.value)}
            className="controller dropdown39-select3"
            onKeyDown={(e) => handleEnterPress(e, index, true)}
          />
        </td>
        <td className="table-cell">
          <input
            type="text"
            value={row.input4}
            onChange={(e) => handleChange(index, "input4", e.target.value)}
            className="controller dropdown39-select4"
            onKeyDown={(e) => handleEnterPress(e, index, true)}
          />
        </td>
        <td className="table-cell">
          <input
            type="text"
            value={row.input5}
            onChange={(e) => handleChange(index, "input5", e.target.value)}
            className="controller dropdown39-select5"
            onKeyDown={(e) => handleEnterPress(e, index, true)}
          />
        </td>
        <td className="table-cell">
          <input
            type="text"
            value={row.input6}
            onChange={(e) => handleChange(index, "input6", e.target.value)}
            className="controller dropdown39-select6"
            onKeyDown={(e) => handleEnterPress(e, index, true)}
          />
        </td>
      </div>
    </tr>
  );
}

export default Row39;
