import React, { useState } from "react";
import "./Row4.css";

function SingleInput({ row, index, handleEnterPress, handleChange }) {
  return index === 42 || index === 43 ? (
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
          <div className="input-wrapper">
            <input
              type="text"
              value={row.input1}
              onChange={(e) => handleChange(index, "input1", e.target.value)}
              className="controller single-input1"
              onKeyDown={(e) => handleEnterPress(e, index, true)}
            />
            <span className="unit">°C</span>
          </div>
        </td>
      </div>
    </tr>
  ) : index === 22 ? (
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
          <div className="input-wrapper">
            <input
              type="text"
              value={row.input1}
              onChange={(e) => handleChange(index, "input1", e.target.value)}
              className="controller single-input1"
              onKeyDown={(e) => handleEnterPress(e, index, true)}
            />
            <span className="unit">uA</span>
          </div>
        </td>
      </div>
    </tr>
  ) : (
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
            className="controller single-input1"
            onKeyDown={(e) => handleEnterPress(e, index, true)}
          />
        </td>
      </div>
    </tr>
  );
}

export default SingleInput;
