import React, { useState, useRef } from "react";
import "./Row4.css";
function Rows5679({ row, index, handleChange, handleEnterPress }) {
  return index === 8 ? (
    <tr key={row.id} data-row={index === 0 ? "0" : undefined}>
      <td className="table-cell column-id">{row.id}</td>
      <td className="table-cell column-text" colSpan={2}>
        {(() => {
          const textParts = row.text
            ? row.text.split("{middleInput}")
            : ["", ""];
          return (
            <div className="middleInput-alignment">
              <div className="input-wrapper-start">
                {textParts[0]}
                <input
                  type="text"
                  value={row.middleInput || ""}
                  onChange={(e) =>
                    handleChange(index, "middleInput", e.target.value)
                  }
                  className="controller row9-middleInput"
                  onKeyDown={(e) => handleEnterPress(e, index, true)}
                />
                <span className="unit-rows9-18">V</span>
              </div>
            </div>
          );
        })()}
      </td>
      <div className="inputs-alignment">
        <td className="table-cell">
          <select
            value={row.input1}
            onChange={(e) => handleChange(index, "input1", e.target.value)}
            className="controller  row9-select1"
            onKeyDown={(e) => handleEnterPress(e, index, true)}
          >
            <option value=""></option>
            <option value="Δ.Α.">Δ.Α.</option>
            <option value="Δ.Ε.">Δ.Ε.</option>
            <option value="ΟΚ">ΟΚ</option>
            <option value="NOT ΟΚ">NOT ΟΚ</option>
          </select>
        </td>
        <td className="table-cell">
          <select
            value={row.input2}
            onChange={(e) => handleChange(index, "input2", e.target.value)}
            className="controller  row9-select2"
            onKeyDown={(e) => handleEnterPress(e, index, true)}
          >
            <option value=""></option>
            <option value="Δ.Α.">Δ.Α.</option>
            <option value="Δ.Ε.">Δ.Ε.</option>
            <option value="ΟΚ">ΟΚ</option>
            <option value="NOT ΟΚ">NOT ΟΚ</option>
          </select>
        </td>
        <td className="table-cell">
          <select
            value={row.input3}
            onChange={(e) => handleChange(index, "input3", e.target.value)}
            className="controller  row9-select3"
            onKeyDown={(e) => handleEnterPress(e, index, true)}
          >
            <option value=""></option>
            <option value="Δ.Α.">Δ.Α.</option>
            <option value="Δ.Ε.">Δ.Ε.</option>
            <option value="ΟΚ">ΟΚ</option>
            <option value="NOT ΟΚ">NOT ΟΚ</option>
          </select>
        </td>
        <td className="table-cell">
          <select
            value={row.input4}
            onChange={(e) => handleChange(index, "input4", e.target.value)}
            className="controller  row9-select4"
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
  ) : (
    <tr key={row.id} data-row={index === 0 ? "0" : undefined}>
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
            className="controller column-inputs input1"
            onKeyDown={(e) => handleEnterPress(e, index, true)}
          />
        </td>
        <td className="table-cell">
          <input
            type="text"
            value={row.input2}
            onChange={(e) => handleChange(index, "input2", e.target.value)}
            className="controller column-inputs input2"
            onKeyDown={(e) => handleEnterPress(e, index, true)}
          />
        </td>
        <td className="table-cell">
          <input
            type="text"
            value={row.input3}
            onChange={(e) => handleChange(index, "input3", e.target.value)}
            className="controller column-inputs input3"
            onKeyDown={(e) => handleEnterPress(e, index, true)}
          />
        </td>
        <td className="table-cell">
          <input
            type="text"
            value={row.input4}
            onChange={(e) => handleChange(index, "input4", e.target.value)}
            className="controller column-inputs input4"
            onKeyDown={(e) => handleEnterPress(e, index, true)}
          />
        </td>
      </div>
    </tr>
  );
}

export default Rows5679;
